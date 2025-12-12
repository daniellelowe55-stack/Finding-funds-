import React from 'react';
import { ShieldCheck, Banknote, Clock, Gavel, Menu, X, Phone, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
                <Banknote className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Surplus<span className="text-emerald-600">Recovery</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">How It Works</a>
            <a href="#faq" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">FAQ</a>
            <a href="#contact" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Contact</a>
            <a href="tel:2534862039" className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> (253) 486-2039
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4">
             <a href="#process" className="block text-slate-600 font-medium">How It Works</a>
             <a href="#faq" className="block text-slate-600 font-medium">FAQ</a>
             <a href="tel:2534862039" className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold block text-center">Call (253) 486-2039</a>
        </div>
      )}
    </header>
  );
};

export const TrustBadges = () => (
  <div className="py-12 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted Compliance & Security</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
         <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="w-10 h-10 text-emerald-600" />
            <span className="font-bold text-slate-700">Bank Level Security</span>
         </div>
         <div className="flex flex-col items-center gap-2">
            <Gavel className="w-10 h-10 text-slate-700" />
            <span className="font-bold text-slate-700">Licensed Experts</span>
         </div>
         <div className="flex flex-col items-center gap-2">
            <Clock className="w-10 h-10 text-blue-600" />
            <span className="font-bold text-slate-700">Fast Processing</span>
         </div>
         <div className="flex flex-col items-center gap-2">
            <Banknote className="w-10 h-10 text-green-600" />
            <span className="font-bold text-slate-700">No Upfront Fees</span>
         </div>
      </div>
    </div>
  </div>
);

export interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, testimonial, testimonialAuthor }: FeatureCardProps) => (
  <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full">
    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-emerald-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{description}</p>
    {testimonial && (
        <div className="mt-auto pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500 italic mb-2">"{testimonial}"</p>
            <div className="text-xs font-bold text-slate-900">— {testimonialAuthor}</div>
        </div>
    )}
  </div>
);

export const Footer = () => (
  <footer id="contact" className="bg-slate-900 text-slate-400 py-16">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center gap-2 mb-6">
             <div className="bg-emerald-600 p-1.5 rounded">
                <Banknote className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">SurplusRecovery</span>
        </div>
        <p className="mb-6">We specialize in recovering lost equity for former homeowners. Our mission is to ensure the government doesn't keep the money that rightfully belongs to you.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Quick Links</h4>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Get In Touch</h4>
        <div className="flex items-center gap-3 mb-4">
            <Phone className="w-5 h-5" />
            <a href="tel:2534862039" className="hover:text-white transition-colors">(253) 486-2039</a>
        </div>
        <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5" />
            <a href="mailto:dannieegirl3@gmail.com" className="hover:text-white transition-colors">dannieegirl3@gmail.com</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm">
        © {new Date().getFullYear()} SurplusRecovery Pro. All rights reserved. Disclaimer: We are a private recovery firm, not a government agency.
    </div>
  </footer>
);