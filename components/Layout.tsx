
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  const navClass = (path: string) => `text-sm font-semibold hover:text-hammer-orange transition-colors ${isActive(path) ? 'text-hammer-orange' : 'text-gray-700'}`;

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-hammer-blue">
            <i className="fas fa-hammer text-hammer-orange text-xl rotate-12"></i>
            <span>Hammer<span className="text-gray-800">Match</span></span>
          </Link>
          
          {/* Desktop Nav - Centered/Right */}
          <div className="hidden lg:flex items-center gap-8 ml-auto mr-8">
            <Link to="/post-job" className={navClass('/post-job')}>Post a Job</Link>
            <Link to="/directory" className={navClass('/directory')}>Find Craftsmen</Link>
            <Link to="/cost-guides" className={navClass('/cost-guides')}>Cost Guides</Link>
            <Link to="/how-it-works" className={navClass('/how-it-works')}>How it works</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-hammer-orange">Log In</Link>
            <Link to="/pro" className="bg-gray-100 text-hammer-blue px-4 py-2 rounded text-sm font-bold hover:bg-gray-200 transition-colors">
              For Professionals
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-600 text-2xl">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 shadow-xl absolute w-full left-0 flex flex-col gap-4">
            <Link onClick={() => setIsMenuOpen(false)} to="/post-job" className="block text-lg font-semibold text-gray-800">Post a Job</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/directory" className="block text-lg font-semibold text-gray-800">Find Craftsmen</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/cost-guides" className="block text-lg font-semibold text-gray-800">Cost Guides</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/how-it-works" className="block text-lg font-semibold text-gray-800">How it works</Link>
            <hr />
            <Link onClick={() => setIsMenuOpen(false)} to="/pro" className="block text-lg font-bold text-hammer-blue">For Professionals</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/login" className="block text-lg text-gray-600">Log In</Link>
          </div>
        )}
      </nav>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-16 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-6">HammerMatch</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/press" className="hover:underline">Press</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Customers</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/post-job" className="hover:underline">Post a Job</Link></li>
              <li><Link to="/directory" className="hover:underline">Find Craftsmen</Link></li>
              <li><Link to="/cost-guides" className="hover:underline">Price Radar</Link></li>
              <li><Link to="/how-it-works" className="hover:underline">Help & FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Professionals</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/pro" className="hover:underline">Sign up as Pro</Link></li>
              <li><Link to="/pro" className="hover:underline">Success Stories</Link></li>
              <li><Link to="/pro" className="hover:underline">Pro Center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-hammer-blue"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-hammer-blue"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-hammer-blue"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 HammerMatch GmbH. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
