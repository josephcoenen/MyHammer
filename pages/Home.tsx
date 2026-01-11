
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  { id: '1', name: 'Painting', icon: 'fa-paint-roller' },
  { id: '2', name: 'Moving', icon: 'fa-truck' },
  { id: '3', name: 'Cleaning', icon: 'fa-broom' },
  { id: '4', name: 'Gardening', icon: 'fa-leaf' },
  { id: '5', name: 'Flooring', icon: 'fa-layer-group' },
  { id: '6', name: 'Plumbing', icon: 'fa-faucet' },
  { id: '7', name: 'Electrical', icon: 'fa-bolt' },
  { id: '8', name: 'Roofing', icon: 'fa-home' },
];

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/directory?q=${encodeURIComponent(search)}&l=${encodeURIComponent(location)}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Renovation background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 shadow-sm tracking-tight">
            Find the right craftsman <br/> for your project.
          </h1>
          
          <div className="max-w-4xl mx-auto bg-white p-2 rounded-lg shadow-2xl">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input 
                  type="text" 
                  placeholder="What do you need help with?" 
                  className="w-full pl-10 pr-4 py-4 rounded bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-hammer-blue focus:outline-none font-semibold text-gray-800"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="w-full md:w-72 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-map-marker-alt text-gray-400"></i>
                </div>
                <input 
                  type="text" 
                  placeholder="Postal Code or City" 
                  className="w-full pl-10 pr-4 py-4 rounded bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-hammer-blue focus:outline-none font-semibold text-gray-800"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-hammer-orange text-white px-10 py-4 rounded font-bold hover:bg-orange-600 transition-colors uppercase tracking-wide text-sm">
                Search
              </button>
            </form>
          </div>
          
          <div className="mt-8 flex justify-center flex-wrap gap-4">
             <span className="text-white font-semibold shadow-black drop-shadow-md">Popular:</span>
             <button onClick={() => navigate('/directory?q=Painters')} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold transition-all">Painters</button>
             <button onClick={() => navigate('/directory?q=Movers')} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold transition-all">Movers</button>
             <button onClick={() => navigate('/directory?q=Electricians')} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold transition-all">Electricians</button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-16">How HammerMatch works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-hammer-blue">
                   <i className="fas fa-pencil-alt text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">1. Describe your project</h3>
                <p className="text-gray-600 max-w-xs">Tell us what needs to be done. It's free and takes only a few minutes.</p>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-hammer-blue">
                   <i className="fas fa-envelope-open-text text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">2. Get quotes</h3>
                <p className="text-gray-600 max-w-xs">Receive offers from interested and qualified professionals in your area.</p>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-hammer-blue">
                   <i className="fas fa-check-circle text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">3. Choose the best</h3>
                <p className="text-gray-600 max-w-xs">Compare profiles and reviews to find the perfect match for your job.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-hammer-gray">
        <div className="container mx-auto px-4">
           <h2 className="text-2xl font-bold text-gray-900 mb-10">Popular Categories</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CATEGORIES.map(cat => (
                <div 
                  key={cat.id}
                  onClick={() => navigate(`/directory?q=${cat.name}`)}
                  className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center h-40 group"
                >
                   <i className={`fas ${cat.icon} text-3xl text-gray-400 group-hover:text-hammer-orange mb-4 transition-colors`}></i>
                   <span className="font-bold text-gray-700">{cat.name}</span>
                </div>
              ))}
           </div>
           <div className="text-center mt-10">
              <button onClick={() => navigate('/directory')} className="text-hammer-blue font-bold hover:underline">Show all categories</button>
           </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                 <img src="https://images.unsplash.com/photo-1590845947376-2638caa89309?auto=format&fit=crop&q=80&w=800" alt="Happy family" className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Your satisfaction is our priority</h2>
                 <ul className="space-y-6">
                    <li className="flex gap-4">
                       <i className="fas fa-star text-yellow-400 text-xl mt-1"></i>
                       <div>
                          <h4 className="font-bold text-lg">Verified Reviews</h4>
                          <p className="text-gray-600">See what others say before you hire. Transparency is key.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <i className="fas fa-shield-alt text-hammer-blue text-xl mt-1"></i>
                       <div>
                          <h4 className="font-bold text-lg">Safe Environment</h4>
                          <p className="text-gray-600">We check business registrations to ensure you're dealing with pros.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <i className="fas fa-coins text-gray-500 text-xl mt-1"></i>
                       <div>
                          <h4 className="font-bold text-lg">Free for you</h4>
                          <p className="text-gray-600">Posting a job is 100% free and without obligation.</p>
                       </div>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>
      
      {/* AI Promo Banner */}
      <section className="bg-hammer-blue py-16 text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Not sure how to describe your problem?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Use our new AI assistant. Simply upload a photo of the damage or area, and we'll generate the perfect job description for you.</p>
            <button 
              onClick={() => navigate('/post-job')}
              className="bg-white text-hammer-blue px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
            >
               Try AI Job Post
            </button>
         </div>
      </section>
    </div>
  );
};

export default Home;
