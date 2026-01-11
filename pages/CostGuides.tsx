
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GUIDES = [
  { id: '1', title: 'Painting Walls', price: 'from €10/m²', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },
  { id: '2', title: 'Tiling Bathroom', price: 'from €40/m²', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
  { id: '3', title: 'Roof Cleaning', price: 'from €15/m²', image: 'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&q=80&w=400' },
  { id: '4', title: 'Install Windows', price: 'from €300/unit', image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=400' },
  { id: '5', title: 'Tree Removal', price: 'from €400/tree', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400' },
  { id: '6', title: 'Electrical Outlet', price: 'from €60/unit', image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=400' },
];

const CostGuides: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuides = GUIDES.filter(g => g.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-hammer-blue py-12 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Price Radar</h1>
          <p className="text-lg text-blue-100 mb-8">What does a craftsman cost? Find average prices for your project.</p>
          
          <div className="max-w-lg mx-auto relative">
             <input 
              type="text" 
              placeholder="Search for a service..." 
              className="w-full pl-6 pr-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-hammer-orange"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             />
             <button className="absolute right-2 top-1.5 bg-hammer-orange text-white px-4 py-1.5 rounded font-bold text-sm">Search</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Cost Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map(guide => (
            <div 
              key={guide.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => navigate(`/directory?q=${guide.title}`)}
            >
              <div className="h-48 overflow-hidden">
                <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{guide.title}</h3>
                <p className="text-hammer-orange font-bold text-xl">{guide.price}</p>
                <p className="text-xs text-gray-500 mt-2">Average price estimation</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 mt-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Post your job now</h2>
          <p className="text-gray-600 mb-8">Ready to get started? Post your project for free and receive actual quotes from professionals near you.</p>
          <button onClick={() => navigate('/post-job')} className="btn-primary px-8 py-3 rounded text-lg">
             Post a Job for Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default CostGuides;
