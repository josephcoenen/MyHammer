
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [role, setRole] = useState<'customer' | 'pro'>('customer');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: Info */}
        <div className="bg-hammer-blue rounded-[2.5rem] p-12 text-white flex flex-col justify-between overflow-hidden relative">
           <div className="relative z-10">
              <div className="inline-flex items-center gap-3 text-2xl font-black italic tracking-tighter mb-12">
                <div className="w-10 h-10 bg-hammer-orange rounded-xl flex items-center justify-center">
                   <i className="fas fa-hammer text-hammer-blue text-xl"></i>
                </div>
                <span>HAMMER<span className="text-hammer-orange">MATCH</span></span>
              </div>
              <h2 className="text-4xl font-black mb-6 leading-tight">Start your project today.</h2>
              <p className="text-blue-100 text-lg mb-8">Join the community where quality craftsmanship meets verified homeowners.</p>
              
              <ul className="space-y-6">
                 <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-hammer-orange flex items-center justify-center shrink-0">
                       <i className="fas fa-check text-hammer-blue text-[10px] font-black"></i>
                    </div>
                    <div>
                       <h4 className="font-bold">100% Free for Customers</h4>
                       <p className="text-xs text-blue-200">Only professionals pay a small fee for leads.</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-hammer-orange flex items-center justify-center shrink-0">
                       <i className="fas fa-check text-hammer-blue text-[10px] font-black"></i>
                    </div>
                    <div>
                       <h4 className="font-bold">Verified Trust Network</h4>
                       <p className="text-xs text-blue-200">Secure payments and real reviews.</p>
                    </div>
                 </li>
              </ul>
           </div>
           <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4">
              <i className="fas fa-helmet-safety text-[300px]"></i>
           </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100">
           <div className="flex gap-2 p-1 bg-gray-100 rounded-2xl mb-10">
              <button 
                onClick={() => setRole('customer')}
                className={`flex-grow py-3 rounded-xl text-sm font-black transition-all ${role === 'customer' ? 'bg-white shadow-lg text-hammer-blue' : 'text-gray-400 hover:text-gray-600'}`}
              >
                I'm a Customer
              </button>
              <button 
                onClick={() => setRole('pro')}
                className={`flex-grow py-3 rounded-xl text-sm font-black transition-all ${role === 'pro' ? 'bg-white shadow-lg text-hammer-blue' : 'text-gray-400 hover:text-gray-600'}`}
              >
                I'm a Professional
              </button>
           </div>

           <h3 className="text-2xl font-black text-gray-900 mb-6">Create Account</h3>
           
           <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-hammer-blue" placeholder="John" />
                 </div>
                 <div>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-hammer-blue" placeholder="Doe" />
                 </div>
              </div>
              
              <div>
                 <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email</label>
                 <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-hammer-blue" placeholder="john@example.com" />
              </div>

              {role === 'pro' && (
                <div>
                   <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Business Name</label>
                   <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-hammer-blue" placeholder="Doe & Co Crafts" />
                </div>
              )}

              <div>
                 <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Password</label>
                 <input type="password" className="w-full px-4 py-3 border border-gray-200 rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-hammer-blue" placeholder="••••••••" />
              </div>

              <div className="flex items-start gap-3 py-2">
                 <input type="checkbox" className="mt-1 h-4 w-4 rounded text-hammer-blue border-gray-300" required />
                 <p className="text-xs text-gray-500 leading-relaxed font-medium">I agree to the <a href="#" className="text-hammer-blue underline">Terms of Service</a> and <a href="#" className="text-hammer-blue underline">Privacy Policy</a>.</p>
              </div>

              <button className="btn-primary w-full py-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform text-sm font-black">
                 Register as {role === 'customer' ? 'Customer' : 'Professional'}
              </button>
           </form>

           <p className="mt-8 text-center text-sm text-gray-400 font-bold">
              Already have an account? <Link to="/login" className="text-hammer-blue hover:underline">Log in here</Link>
           </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
