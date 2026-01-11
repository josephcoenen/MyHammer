
import React from 'react';
import { Link } from 'react-router-dom';

const ForProfessionals: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pb-16 pt-8 lg:pt-16">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-hammer-blue mb-6 leading-tight">
              Fill your schedule with HammerMatch.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find new customers in your area and grow your business. You decide which jobs you want to take.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-primary px-8 py-3 text-center text-lg rounded">
                Register as Professional
              </Link>
              <button className="px-8 py-3 border border-gray-300 rounded text-gray-700 font-bold hover:bg-gray-50">
                How it works
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1603796376510-7459eb7779d7?auto=format&fit=crop&q=80&w=800" 
               className="rounded-lg shadow-xl"
               alt="Craftsman smiling"
             />
          </div>
        </div>
      </section>

      {/* Value Props - Gray Background */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why professionals choose us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded shadow-sm">
              <i className="fas fa-map-marked-alt text-hammer-orange text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Local Jobs</h3>
              <p className="text-gray-600">Set your radius and only see jobs that are relevant to your location.</p>
            </div>
            <div className="bg-white p-8 rounded shadow-sm">
              <i className="fas fa-mobile-alt text-hammer-orange text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Easy Management</h3>
              <p className="text-gray-600">Manage quotes, messages, and appointments all in one app.</p>
            </div>
            <div className="bg-white p-8 rounded shadow-sm">
              <i className="fas fa-trophy text-hammer-orange text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-3">Online Reputation</h3>
              <p className="text-gray-600">Collect reviews and show off your profile to win more customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-hammer-blue py-16 text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to grow?</h2>
            <Link to="/register" className="bg-hammer-orange text-white px-10 py-4 rounded font-bold text-lg hover:bg-orange-600 transition-colors inline-block">
               Sign up for free now
            </Link>
            <p className="mt-4 text-sm opacity-80">No monthly fee options available.</p>
         </div>
      </section>
    </div>
  );
};

export default ForProfessionals;
