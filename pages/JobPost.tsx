
import React, { useState } from 'react';
import { JobStep } from '../types';
import { analyzeJobImage } from '../services/geminiService';

const JobPost: React.FC = () => {
  const [step, setStep] = useState<JobStep>(JobStep.DESCRIPTION);
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1];
      setImagePreview(base64String);
      
      setAnalyzing(true);
      try {
        const result = await analyzeJobImage(base64Data, file.type);
        setAnalysisResult(result);
        if (!description) setDescription(result);
      } catch (err) {
        console.error("Analysis failed", err);
      } finally {
        setAnalyzing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const nextStep = () => {
    if (step === JobStep.DESCRIPTION) setStep(JobStep.IMAGE_ANALYSIS);
    else if (step === JobStep.IMAGE_ANALYSIS) setStep(JobStep.LOCATION);
    else if (step === JobStep.LOCATION) setStep(JobStep.REVIEW);
  };

  const prevStep = () => {
    if (step === JobStep.IMAGE_ANALYSIS) setStep(JobStep.DESCRIPTION);
    else if (step === JobStep.LOCATION) setStep(JobStep.IMAGE_ANALYSIS);
    else if (step === JobStep.REVIEW) setStep(JobStep.LOCATION);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Post a Job</h1>
          <div className="flex gap-2">
            {[JobStep.DESCRIPTION, JobStep.IMAGE_ANALYSIS, JobStep.LOCATION, JobStep.REVIEW].map((s, idx) => (
              <div 
                key={s} 
                className={`w-3 h-3 rounded-full ${idx <= [JobStep.DESCRIPTION, JobStep.IMAGE_ANALYSIS, JobStep.LOCATION, JobStep.REVIEW].indexOf(step) ? 'bg-hammer-orange' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {step === JobStep.DESCRIPTION && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Step 1: What do you need help with?</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                <input 
                  type="text" 
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Paint exterior of 2-story house" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-hammer-blue focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Describe the work</label>
                <textarea 
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us more about the job details, dimensions, materials, etc." 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-hammer-blue focus:outline-none"
                />
              </div>
              <button 
                onClick={nextStep}
                disabled={!jobTitle || !description}
                className="w-full bg-hammer-blue text-white py-4 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          )}

          {step === JobStep.IMAGE_ANALYSIS && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Step 2: Add Photos (AI Assistant)</h2>
              <p className="text-sm text-gray-600">Upload a photo and our AI will help identify exactly what work is needed.</p>
              
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-10 bg-gray-50 hover:bg-white transition-colors">
                {imagePreview ? (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      onClick={() => {setImagePreview(null); setAnalysisResult('');}}
                      className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ) : (
                  <>
                    <i className="fas fa-camera text-4xl text-gray-400 mb-4"></i>
                    <label className="cursor-pointer bg-hammer-blue text-white px-6 py-2 rounded-full font-bold">
                      Upload Photo
                      <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                    </label>
                  </>
                )}
              </div>

              {analyzing && (
                <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-4 text-blue-700">
                  <i className="fas fa-sparkles fa-spin"></i>
                  <span>AI is analyzing your photo to refine your job description...</span>
                </div>
              )}

              {analysisResult && (
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    <i className="fas fa-robot"></i> AI Analysis
                  </h3>
                  <p className="text-sm text-gray-800 leading-relaxed italic">"{analysisResult}"</p>
                  <p className="text-xs text-gray-500 mt-4">We've updated your job description with these details.</p>
                </div>
              )}

              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-grow border border-gray-300 py-4 rounded-lg font-bold text-gray-600">Back</button>
                <button onClick={nextStep} className="flex-[2] bg-hammer-blue text-white py-4 rounded-lg font-bold hover:opacity-90">Continue</button>
              </div>
            </div>
          )}

          {step === JobStep.LOCATION && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Step 3: Where is the job located?</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code or City</label>
                <div className="relative">
                  <i className="fas fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input 
                    type="text" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city or zip" 
                    className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-hammer-blue focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-grow border border-gray-300 py-4 rounded-lg font-bold text-gray-600">Back</button>
                <button 
                  onClick={nextStep} 
                  disabled={!location}
                  className="flex-[2] bg-hammer-blue text-white py-4 rounded-lg font-bold hover:opacity-90 disabled:opacity-50"
                >
                  Review
                </button>
              </div>
            </div>
          )}

          {step === JobStep.REVIEW && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Last Step: Confirm Details</h2>
              <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Title</h4>
                  <p className="font-medium">{jobTitle}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Description</h4>
                  <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Location</h4>
                  <p className="font-medium">{location}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-grow border border-gray-300 py-4 rounded-lg font-bold text-gray-600">Back</button>
                <button 
                  onClick={() => alert("Job Posted Successfully! Professionals will contact you soon.")}
                  className="flex-[2] bg-hammer-orange text-white py-4 rounded-lg font-bold hover-hammer-orange shadow-lg"
                >
                  Submit Project
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPost;
