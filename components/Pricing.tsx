import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-24 bg-white text-black min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Pricing</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Choose the plan that best fits your needs and enjoy <span className="text-black font-bold">exclusive features.</span>
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!yearly ? 'text-black' : 'text-gray-400'}`}>Billed monthly</span>
            <button 
              onClick={() => setYearly(!yearly)}
              className="w-14 h-8 bg-black rounded-full p-1 transition-colors relative"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${yearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${yearly ? 'text-black' : 'text-gray-400'}`}>Billed yearly</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 flex flex-col h-full border ${
                plan.highlight 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-2xl scale-105 z-10' 
                  : plan.name === 'Enterprise' 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-gray-200'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-lg font-bold mb-4 ${plan.highlight || plan.name === 'Enterprise' ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight || plan.name === 'Enterprise' ? 'text-gray-300' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-6 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${plan.highlight || plan.name === 'Enterprise' ? 'text-blue-300' : 'text-black'}`} />
                      <span className={`text-sm leading-relaxed ${plan.highlight || plan.name === 'Enterprise' ? 'text-gray-200' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                {plan.description && (
                   <p className={`text-xs mb-6 leading-relaxed ${plan.highlight || plan.name === 'Enterprise' ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.description}
                   </p>
                )}
                <button className={`w-full py-3 px-6 rounded-full font-bold text-sm transition-all ${
                  plan.highlight 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : plan.name === 'Enterprise'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}