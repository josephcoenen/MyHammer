
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock fetching pro data based on ID
  const pro = {
    name: 'Hans Schmidt',
    businessName: 'Schmidt & Sons Painting',
    rating: 4.9,
    reviews: 124,
    location: 'Berlin-Charlottenburg',
    verified: true,
    memberSince: '2019',
    bio: 'Professional master painter with over 20 years of experience in interior and exterior renovations. We specialize in high-quality eco-friendly paints and heritage building restoration.',
    skills: ['Interior Painting', 'Wall Repair', 'Ceiling Painting', 'Eco-Paints', 'Wallpapering'],
    gallery: [
      'https://images.unsplash.com/photo-1562663474-6cbb3fee1c77?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=400'
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-hammer-blue pt-12 pb-32">
        <div className="container mx-auto px-4">
           <button onClick={() => navigate(-1)} className="text-blue-200 hover:text-white flex items-center gap-2 font-bold text-sm mb-8 transition-colors">
             <i className="fas fa-arrow-left"></i> Back to search
           </button>
           <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl shrink-0 bg-white">
               <img src={`https://picsum.photos/seed/${id}/200/200`} alt={pro.name} className="w-full h-full object-cover" />
             </div>
             <div className="text-white">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-4xl font-black">{pro.businessName}</h1>
                  {pro.verified && (
                    <span className="bg-hammer-orange text-hammer-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Verified Pro</span>
                  )}
                </div>
                <p className="text-xl text-blue-100 font-medium mb-4 flex items-center gap-2">
                   <i className="fas fa-map-marker-alt text-hammer-orange"></i> {pro.location}
                </p>
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                      <i className="fas fa-star text-yellow-400"></i>
                      <span className="font-black text-lg">{pro.rating}</span>
                      <span className="text-blue-200 text-sm">({pro.reviews} reviews)</span>
                   </div>
                   <div className="text-blue-200 text-sm font-bold uppercase tracking-widest">
                      Member since {pro.memberSince}
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
               <h2 className="text-2xl font-black text-gray-900 mb-6">About the Professional</h2>
               <p className="text-gray-600 leading-relaxed text-lg mb-8">{pro.bio}</p>
               
               <h3 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-4">Core Competencies</h3>
               <div className="flex flex-wrap gap-2">
                 {pro.skills.map(skill => (
                   <span key={skill} className="bg-gray-50 text-gray-700 font-bold px-4 py-2 rounded-xl border border-gray-100">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
               <h2 className="text-2xl font-black text-gray-900 mb-6">Portfolio Gallery</h2>
               <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                 {pro.gallery.map((img, i) => (
                   <div key={i} className="aspect-video rounded-2xl overflow-hidden shadow-sm group cursor-zoom-in">
                     <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   </div>
                 ))}
               </div>
               <button className="w-full mt-8 py-4 border-2 border-gray-100 rounded-2xl font-black text-gray-400 hover:bg-gray-50 hover:text-hammer-blue transition-all">
                 View all 24 project photos
               </button>
            </div>
          </div>

          {/* Contact Sticky Sidebar */}
          <div className="lg:col-span-1">
             <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 sticky top-24">
                <h3 className="text-xl font-black text-gray-900 mb-6">Request a Quote</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">Hans usually responds within 4 hours. No commitment required at this stage.</p>
                
                <div className="space-y-4 mb-8">
                   <div className="flex items-center gap-4 text-sm font-bold text-gray-700">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                       <i className="fas fa-calendar-check"></i>
                     </div>
                     Available next week
                   </div>
                   <div className="flex items-center gap-4 text-sm font-bold text-gray-700">
                     <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                       <i className="fas fa-euro-sign"></i>
                     </div>
                     Offers free site visit
                   </div>
                </div>

                <button className="btn-primary w-full py-5 rounded-2xl text-lg shadow-xl mb-4 transform hover:scale-[1.02] transition-transform">
                   Contact Hans Schmidt
                </button>
                <button className="w-full py-4 border-2 border-hammer-blue text-hammer-blue font-black rounded-2xl hover:bg-blue-50 transition-colors">
                   Save to Shortlist
                </button>
                
                <p className="mt-8 text-[10px] text-center text-gray-400 font-bold uppercase tracking-tighter">
                  <i className="fas fa-shield-check mr-1"></i> Data protected by HammerMatch Secure
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProProfile;
