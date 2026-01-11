
import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Craftsman } from '../types';

const MOCK_PROS: Craftsman[] = [
  {
    id: '1',
    name: 'Hans Schmidt',
    businessName: 'Schmidt & Sons Painting',
    rating: 4.9,
    reviews: 124,
    location: 'Berlin',
    specialties: ['Painting', 'Wallpapering', 'Facade'],
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=300',
    verified: true
  },
  {
    id: '2',
    name: 'Elena Weber',
    businessName: 'Elite Plumbing Solutions',
    rating: 4.8,
    reviews: 89,
    location: 'Munich',
    specialties: ['Plumbing', 'Bathroom Reno', 'Heating'],
    imageUrl: 'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&q=80&w=300',
    verified: true
  },
  {
    id: '3',
    name: 'Markus Kraus',
    businessName: 'Kraus Electrical Services',
    rating: 4.7,
    reviews: 56,
    location: 'Hamburg',
    specialties: ['Electrical', 'Smart Home', 'Repairs'],
    imageUrl: 'https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&q=80&w=300',
    verified: false
  },
  {
    id: '4',
    name: 'Sarah Fischer',
    businessName: 'Green Garden Designs',
    rating: 5.0,
    reviews: 210,
    location: 'Cologne',
    specialties: ['Gardening', 'Landscaping', 'Tree Felling'],
    imageUrl: 'https://images.unsplash.com/photo-1622383529357-37ae49f9bf8c?auto=format&fit=crop&q=80&w=300',
    verified: true
  },
];

const Directory: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q') || '';
  const l = queryParams.get('l') || 'all of Germany';

  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filteredPros = useMemo(() => {
    return MOCK_PROS.filter(pro => {
      const searchMatch = !q || pro.businessName.toLowerCase().includes(q.toLowerCase()) || pro.specialties.some(s => s.toLowerCase().includes(q.toLowerCase()));
      const ratingMatch = !filterRating || pro.rating >= filterRating;
      return searchMatch && ratingMatch;
    });
  }, [q, filterRating]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
           <h1 className="text-2xl font-bold text-gray-900">
             {q ? `${filteredPros.length} Craftsmen for "${q}"` : 'Find Craftsmen'} <span className="text-gray-500 font-normal">in {l}</span>
           </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
             <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Filter Results</h3>
                
                <div className="mb-6">
                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Category</h4>
                   <select className="w-full border border-gray-300 rounded p-2 text-sm">
                      <option>All Categories</option>
                      <option>Painting</option>
                      <option>Plumbing</option>
                   </select>
                </div>

                <div className="mb-6">
                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Minimum Rating</h4>
                   <div className="space-y-2">
                      <label className="flex items-center text-sm text-gray-600">
                         <input type="radio" name="rating" className="mr-2" onChange={() => setFilterRating(4)} /> 4 Stars & up
                      </label>
                      <label className="flex items-center text-sm text-gray-600">
                         <input type="radio" name="rating" className="mr-2" onChange={() => setFilterRating(5)} /> 5 Stars
                      </label>
                   </div>
                </div>

                <button 
                  onClick={() => setFilterRating(null)} 
                  className="text-sm text-hammer-blue hover:underline"
                >
                  Reset Filters
                </button>
             </div>
          </div>

          {/* List */}
          <div className="lg:w-3/4 space-y-4">
             {filteredPros.map(pro => (
               <div key={pro.id} className="bg-white p-6 rounded shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-gray-200 rounded overflow-hidden">
                     <img src={pro.imageUrl} alt={pro.businessName} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                     <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-hammer-blue cursor-pointer hover:underline" onClick={() => navigate(`/pro/${pro.id}`)}>
                           {pro.businessName}
                        </h3>
                        {pro.verified && (
                           <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-semibold border border-gray-300">
                              Verified
                           </span>
                        )}
                     </div>
                     <div className="flex items-center gap-1 my-1">
                        <div className="flex text-yellow-400 text-sm">
                           {[...Array(5)].map((_, i) => (
                              <i key={i} className={`fas fa-star ${i < Math.floor(pro.rating) ? '' : 'text-gray-300'}`}></i>
                           ))}
                        </div>
                        <span className="text-sm font-bold text-gray-800">{pro.rating}</span>
                        <span className="text-sm text-gray-500">({pro.reviews} reviews)</span>
                     </div>
                     <p className="text-sm text-gray-600 mb-3">{pro.specialties.join(', ')} • {pro.location}</p>
                     
                     <div className="flex gap-3 mt-4">
                        <button onClick={() => navigate(`/pro/${pro.id}`)} className="bg-hammer-orange text-white px-6 py-2 rounded font-bold hover:bg-orange-600 transition-colors text-sm">
                           Contact
                        </button>
                        <button onClick={() => navigate(`/pro/${pro.id}`)} className="text-hammer-blue font-semibold text-sm hover:underline px-4 py-2">
                           View Profile
                        </button>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
