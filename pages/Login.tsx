
import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-2xl font-black italic tracking-tighter text-hammer-blue mb-4">
            <div className="w-10 h-10 bg-hammer-orange rounded-xl flex items-center justify-center">
               <i className="fas fa-hammer text-hammer-blue text-xl"></i>
            </div>
            <span>HAMMER<span className="text-hammer-orange">MATCH</span></span>
          </div>
          <h2 className="mt-6 text-3xl font-black text-gray-900 tracking-tight">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-500 font-bold">
            Don't have an account?{' '}
            <Link to="/register" className="text-hammer-blue hover:underline">
              Register here
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Email Address</label>
              <input
                type="email"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-4 border border-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-hammer-blue focus:border-hammer-blue sm:text-sm font-bold"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1 ml-1">Password</label>
              <input
                type="password"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-4 border border-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-hammer-blue focus:border-hammer-blue sm:text-sm font-bold"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-hammer-blue focus:ring-hammer-blue border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-bold">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-bold text-hammer-blue hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn-primary group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-black rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform"
            >
              Sign in to HammerMatch
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 uppercase font-black text-[10px] tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-3 px-4 border-2 border-gray-100 rounded-xl bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-sm">
               <i className="fab fa-google mr-2 text-red-500"></i> Google
            </button>
            <button className="w-full inline-flex justify-center py-3 px-4 border-2 border-gray-100 rounded-xl bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-sm">
               <i className="fab fa-facebook mr-2 text-blue-600"></i> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
