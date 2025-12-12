import React from 'react';
import { Header, TrustBadges, FeatureCard, Footer } from './components/AppComponents';
import { FunnelWizard } from './components/FunnelWizard';
import { Search, Scale, BadgeDollarSign, ArrowRight, ShieldAlert, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Millions in Surplus Funds Expire Every Year
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                The County May Be Holding <span className="text-emerald-600">Your Money</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                If your property was sold at auction for more than the taxes owed, that extra money belongs to <strong>YOU</strong>—not the government. We specialize in cutting through the red tape to recover your lost equity before it expires forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                 <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <div className="flex -space-x-2">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/32/32?random=1" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/32/32?random=2" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/32/32?random=3" alt=""/>
                    </div>
                    <span>Trusted by homeowners like you</span>
                 </div>
              </div>
            </div>

            {/* Right Content - The Funnel */}
            <div className="relative z-10">
               <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 transform rotate-3 rounded-3xl"></div>
               <FunnelWizard />
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Value Proposition */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">We Do The Hard Work, You Get The Check</h2>
                <p className="text-lg text-slate-600">The government makes it difficult to claim these funds on purpose. We level the playing field with our expertise and "No Win, No Fee" guarantee.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={Search}
                    title="1. Free Surplus Audit"
                    description="Our forensic auditors dig deep into county records to identify exactly how much money is sitting in the county treasury with your name on it. We confirm the amount at no cost to you."
                    testimonial="I didn't believe I had money waiting until they showed me the proof. The audit was free and fast."
                    testimonialAuthor="James L."
                />
                 <FeatureCard 
                    icon={Scale}
                    title="2. Complex Legal Filing"
                    description="We handle the mountains of paperwork, court petitions, and bureaucratic hurdles. Our team deals with the county attorneys so you never have to step foot in a courtroom."
                    testimonial="I was overwhelmed by the legal notices. They handled everything while I just waited for the check."
                    testimonialAuthor="Maria G."
                />
                 <FeatureCard 
                    icon={BadgeDollarSign}
                    title="3. Zero-Risk Recovery"
                    description="We pay all upfront costs. We offer a strict no money upfront guarantee unless money is recovered. We only get paid when you successfully receive your funds."
                    testimonial="The best part was zero risk. They didn't charge me a dime until I had the check in my hand."
                    testimonialAuthor="Robert K."
                />
            </div>
        </div>
      </section>

      {/* Addressing Skepticism / Social Proof */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
               <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs uppercase tracking-wide mb-4">
                    <ShieldAlert className="w-4 h-4" /> Why Trust Us?
                 </div>
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">"Is this too good to be true?"</h2>
                 <p className="text-lg text-slate-600 mb-6">
                   We hear this all the time. You lost your home, and now someone says you have money waiting? It sounds unbelievable.
                 </p>
                 <p className="text-lg text-slate-600 mb-6">
                   But it is the law. The county cannot keep the surplus from an auction just because you didn't know to ask for it. However, they don't make it easy to find.
                 </p>
                 <p className="text-lg font-medium text-slate-800">
                   We built this business on transparency and results. We never ask for a credit card, and we never charge upfront fees. Our success is tied 100% to yours.
                 </p>
               </div>
               <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-2xl transform rotate-2 shadow-sm border border-slate-100"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <div className="flex gap-1 text-yellow-400 mb-4">★★★★★</div>
                    <p className="text-slate-700 text-lg mb-6 italic">"I was skeptical when I first got the letter. I thought my money was gone when the house sold. They explained everything clearly, handled the lawyers, and 4 months later I got a check for over $40,000. It gave me a fresh start."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">SJ</div>
                        <div>
                            <div className="font-bold text-slate-900">Sarah Jenkins</div>
                            <div className="text-slate-500 text-sm">Recovered $42,500</div>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Meet the Founder Section */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 max-w-4xl mx-auto my-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="shrink-0 relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-slate-100 shadow-lg">
                            {/* Placeholder for Dannie's photo - User should replace the src with their own image */}
                            <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300" 
                                alt="Dannie - Founder" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-3 -right-3 bg-emerald-600 text-white p-2 rounded-full border-4 border-white">
                            <Quote className="w-5 h-5" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">A Personal Note from Dannie</h3>
                        <p className="text-slate-600 italic text-lg leading-relaxed mb-4">
                            "I started this agency to help real people fight back against a confusing system. The county has your money, and they're counting on you giving up. I'm here to ensure you get every penny you're owed. Call me directly—I'm ready to help."
                        </p>
                        <div className="font-bold text-emerald-700">— Dannie, Founder & Recovery Specialist</div>
                    </div>
                </div>
            </div>

            <div className="text-center pt-8">
                 <h3 className="text-2xl font-bold text-slate-900 mb-12">More Success Stories</h3>
                 <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex gap-1 text-yellow-400 mb-3">★★★★★</div>
                        <p className="text-slate-600 mb-4">"Professional, fast, and honest. I tried to do it myself and got lost in paperwork. Their team handled it all. Highly recommend if you want it done right."</p>
                        <div className="font-bold text-slate-900">- Michael R., Texas</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <div className="flex gap-1 text-yellow-400 mb-3">★★★★★</div>
                        <p className="text-slate-600 mb-4">"They answered every phone call and email. I never felt left in the dark. Getting that check felt like a miracle after a tough year."</p>
                        <div className="font-bold text-slate-900">- Brenda T., Florida</div>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Don't Let Your Money Expire</h2>
            <p className="text-xl text-slate-300 mb-10">
                Surplus funds have a strict statute of limitations. Once the deadline passes, the county keeps every penny. <br/>Check your eligibility in 60 seconds completely risk-free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-emerald-900/50 transition-all transform hover:-translate-y-1 flex items-center gap-3 animate-pulse">
                    Start Your Free Claim Audit <ArrowRight />
                </button>
                <div className="text-slate-400">
                    <div className="text-sm mb-1">Prefer to talk to a human?</div>
                    <a href="tel:2534862039" className="text-white font-bold hover:text-emerald-400 text-lg">(253) 486-2039</a>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;