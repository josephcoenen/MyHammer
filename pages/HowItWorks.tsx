
import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-hammer-blue mb-6">How HammerMatch Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make it easy to find reliable craftsmen for your home improvement projects.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
         <div className="space-y-20">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-blue-50 rounded-full flex items-center justify-center">
                     <i className="fas fa-edit text-6xl text-hammer-blue"></i>
                  </div>
               </div>
               <div className="md:w-1/2">
                  <div className="text-hammer-orange font-bold text-xl mb-2">Step 1</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Create a free job post</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                     Describe your project. The more details you provide, the better. You can add photos and specify your desired completion date. Posting a job is completely free for homeowners.
                  </p>
               </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
               <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-blue-50 rounded-full flex items-center justify-center">
                     <i className="fas fa-list-ul text-6xl text-hammer-blue"></i>
                  </div>
               </div>
               <div className="md:w-1/2">
                  <div className="text-hammer-orange font-bold text-xl mb-2">Step 2</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Receive offers</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                     Qualified professionals in your area will be notified. Interested craftsmen will send you their profiles and cost estimates. You can ask questions via our chat system.
                  </p>
               </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 bg-blue-50 rounded-full flex items-center justify-center">
                     <i className="fas fa-handshake text-6xl text-hammer-blue"></i>
                  </div>
               </div>
               <div className="md:w-1/2">
                  <div className="text-hammer-orange font-bold text-xl mb-2">Step 3</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose the best pro</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                     Compare prices, check their profiles, and read verified reviews from other customers. Choose the one that fits your needs best and get the job done.
                  </p>
               </div>
            </div>
         </div>
         
         <div className="text-center mt-20">
            <Link to="/post-job" className="btn-primary px-10 py-4 text-lg rounded inline-block">
               Post a Job Now
            </Link>
         </div>
      </section>
    </div>
  );
};

export default HowItWorks;
