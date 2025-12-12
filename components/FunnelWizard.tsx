import React, { useState } from 'react';
import { LeadData, AuditResult } from '../types';
import { generateAuditReport } from '../services/geminiService';
import { ChevronRight, CheckCircle2, AlertCircle, Loader2, DollarSign, FileSearch, Phone, Mail } from 'lucide-react';

export const FunnelWizard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  
  const [formData, setFormData] = useState<LeadData>({
    wasSold: false,
    address: '',
    county: '',
    state: '',
    estimatedValue: '',
    approxDebt: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(prev => prev + 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Loading state
    setLoading(true);
    
    // Simulate slight delay for effect + AI call
    try {
        const audit = await generateAuditReport(formData);
        setResult(audit);
        setLoading(false);
        setStep(4);
    } catch (err) {
        console.error(err);
        setLoading(false);
        setStep(4); // Show fallback even on error
    }
  };

  const Progress = () => (
    <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
      <div 
        className="bg-emerald-500 h-full transition-all duration-500 ease-in-out" 
        style={{ width: `${(step / 4) * 100}%` }}
      />
    </div>
  );

  // Step 0: Qualification
  if (step === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto border border-slate-100 animate-fade-in">
        <Progress />
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Let's check your eligibility</h2>
        <p className="text-slate-600 mb-8">Was your property recently sold at a tax deed or mortgage foreclosure auction?</p>
        
        <div className="space-y-4">
          <button 
            onClick={() => { setFormData({...formData, wasSold: true}); handleNext(); }}
            className="w-full p-4 text-left border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all flex items-center justify-between group"
          >
            <span className="font-semibold text-lg text-slate-700 group-hover:text-emerald-700">Yes, it was sold at auction</span>
            <ChevronRight className="text-slate-400 group-hover:text-emerald-600" />
          </button>
          <button 
             onClick={() => alert("We specialize in auction surplus. If you still own the home, we recommend contacting a foreclosure defense attorney.")}
             className="w-full p-4 text-left border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-between"
          >
            <span className="font-semibold text-lg text-slate-700">No, I still own it</span>
            <ChevronRight className="text-slate-400" />
          </button>
        </div>
      </div>
    );
  }

  // Step 1: Property Info
  if (step === 1) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto border border-slate-100 animate-fade-in">
        <Progress />
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Property Details</h2>
        <p className="text-slate-500 mb-6 text-sm">We use this to estimate the surplus held by the county.</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Property Address</label>
            <input 
              name="address" 
              value={formData.address} 
              onChange={handleChange}
              placeholder="123 Main St"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">State</label>
              <select 
                name="state" 
                value={formData.state} 
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select...</option>
                <option value="FL">Florida</option>
                <option value="TX">Texas</option>
                <option value="CA">California</option>
                <option value="GA">Georgia</option>
                <option value="OH">Ohio</option>
                <option value="Other">Other</option>
              </select>
            </div>
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">County</label>
              <input 
                name="county" 
                value={formData.county} 
                onChange={handleChange}
                placeholder="e.g. Miami-Dade"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Est. Value ($)</label>
              <input 
                name="estimatedValue" 
                type="number"
                value={formData.estimatedValue} 
                onChange={handleChange}
                placeholder="250000"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Approx. Debt ($)</label>
              <input 
                name="approxDebt" 
                type="number"
                value={formData.approxDebt} 
                onChange={handleChange}
                placeholder="15000"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          
          <button 
            onClick={handleNext}
            disabled={!formData.address || !formData.estimatedValue}
            className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // Step 2: Contact
  if (step === 2) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto border border-slate-100 animate-fade-in">
        <Progress />
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Where should we send the audit?</h2>
        <p className="text-slate-500 mb-6 text-sm">Enter your info to receive your Free Surplus Audit Report immediately.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              name="name" 
              required
              value={formData.name} 
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              name="email" 
              type="email"
              required
              value={formData.email} 
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
            <input 
              name="phone" 
              type="tel"
              required
              value={formData.phone} 
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2"
          >
            <FileSearch className="w-5 h-5" />
            Generate My Free Audit
          </button>
          <p className="text-xs text-slate-400 text-center mt-4">
            By clicking above, you agree to our Terms of Service and Privacy Policy. We respect your privacy.
          </p>
        </form>
      </div>
    );
  }

  // Step 3: Loading
  if (step === 3) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-xl mx-auto border border-slate-100 text-center animate-fade-in">
        <Loader2 className="w-16 h-16 text-emerald-600 animate-spin mx-auto mb-6" />
        <h3 className="text-xl font-bold text-slate-800">Analyzing County Records...</h3>
        <p className="text-slate-500 mt-2">Calculating potential surplus for {formData.address}</p>
        <div className="mt-8 space-y-2">
           <div className="flex items-center gap-3 text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm"> verifying auction status</span>
           </div>
           <div className="flex items-center gap-3 text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm"> checking debt ratios</span>
           </div>
           <div className="flex items-center gap-3 text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm"> estimating recovery amount</span>
           </div>
        </div>
      </div>
    );
  }

  // Step 4: Results
  if (step === 4 && result) {
    return (
      <div className="bg-white p-0 rounded-2xl shadow-2xl max-w-2xl mx-auto overflow-hidden animate-fade-in ring-1 ring-slate-200">
        <div className="bg-emerald-600 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Audit Complete</h2>
            <p className="text-emerald-100">Potential Surplus Found for {formData.address}</p>
        </div>
        
        <div className="p-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Est. Recoverable Range</div>
                    <div className="text-3xl font-extrabold text-emerald-600">{result.estimatedSurplusRange}</div>
                </div>
                 <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Claim Urgency</div>
                    <div className={`text-3xl font-extrabold ${result.urgencyLevel === 'High' ? 'text-red-600' : 'text-orange-500'}`}>
                        {result.urgencyLevel} Priority
                    </div>
                </div>
            </div>

            <div className="prose prose-slate max-w-none mb-8">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <FileSearch className="w-5 h-5 text-blue-500" /> 
                    Auditor's Analysis
                </h3>
                <p className="text-slate-600 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    "{result.analysis}"
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Recommended Next Steps</h3>
                <ul className="space-y-3">
                    {result.nextSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700">{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-2">Claim Your Funds Risk-Free</h3>
                <p className="text-slate-400 mb-6 text-sm">We handle all legal costs upfront. We only get paid if you get paid.</p>
                
                <button 
                  onClick={() => alert("Redirecting to booking calendar...")}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 rounded-lg shadow-lg transition-all transform hover:scale-[1.02] mb-4"
                >
                    Start Recovery Process Now
                </button>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-400 pt-4 border-t border-slate-800">
                    <a href="tel:2534862039" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone className="w-4 h-4" /> (253) 486-2039
                    </a>
                    <span className="hidden md:inline">•</span>
                    <a href="mailto:dannieegirl3@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail className="w-4 h-4" /> dannieegirl3@gmail.com
                    </a>
                </div>
            </div>
        </div>
      </div>
    );
  }

  return null;
};