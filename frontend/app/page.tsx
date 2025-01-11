"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from "react";
import TheProfessor from '@/components/ui/TheProfessor';
import { Montserrat } from "@next/font/google";
import { Gcomponent } from '@/components/ui/graph';
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import TypingAnimation from '@/components/ui/typing-animation';
import { MagicCard } from '@/components/ui/magic-card';
import Ripple from '@/components/ui/ripple';
 



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you need
  variable: "--font-montserrat", // Custom CSS variable
});




const performanceData = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 1200 },
  { month: 'Mar', value: 1100 },
  { month: 'Apr', value: 1400 },
  { month: 'May', value: 1300 },
  { month: 'Jun', value: 1600 }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="flex flex-col gap-6 p-8 max-w-7xl mx-auto">
      <header className="flex justify-center items-center text-center pt-8">
        
  <div>
  
    <AnimatedShinyText className="text-5xl text-bold text-secondary">Red Heist Successful!</AnimatedShinyText>
    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
    <p className="text-base-content/70">Insights, Predictions, and Financial Metrics made more accessible to you!</p>
    </AnimatedShinyText>
    </div>
</header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Insights and Predictions */}
          <div className="space-y-6">
          
            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Expected Listing Price </TypingAnimation>
                <div className="text-3xl font-bold text-yellow-500"><div>$245,000</div></div>
                <div className="flex items-center gap-2 text-success">
                  <span className="text-success">+2.5% from last month</span>
                </div>
              </div>
              <Ripple/>
            </MagicCard>
            

            
            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Short-Term Returns</TypingAnimation>
                <select className="select select-bordered w-fit">
                  <option value="1m">1 Month</option>
                  <option value="3m">3 Months</option>
                  <option value="6m">6 Months</option>
                </select>
                <div>
                  <Gcomponent />
                </div>
                
              </div>
              <Ripple/>
            </MagicCard>
            

            
            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Risk Assessment</TypingAnimation>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Overall Risk Index</h3>
                    <progress className="progress progress-primary w-full" value="35" max="100"></progress>
                    <div className="flex justify-between text-sm text-base-content/70">
                      <span>Low Risk</span>
                      <span>Moderate</span>
                      <span>High Risk</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-success">✔️</span>
                      <div>
                        <p className="font-medium">Market Risk: Low</p>
                        <p className="text-sm text-base-content/70">Stable market conditions with low volatility</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-warning">⚠️</span>
                      <div>
                        <p className="font-medium">Liquidity Risk: Moderate</p>
                        <p className="text-sm text-base-content/70">Average trading volume with moderate spread</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-error">❌</span>
                      <div>
                        <p className="font-medium">Credit Risk: Low</p>
                        <p className="text-sm text-base-content/70">Strong balance sheet and stable cash flows</p>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             <Ripple/>
            </MagicCard>
            
          </div>

          {/* Financial Metrics */}
          <div className="space-y-6">
          
            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Key Metrics</TypingAnimation>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-base-content/70">ROE</p>
                    <p className="text-2xl font-bold">18.2%</p>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/70">Debt-to-Equity</p>
                    <p className="text-2xl font-bold">0.85</p>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/70">P/E Ratio</p>
                    <p className="text-2xl font-bold">22.5</p>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/70">Price Volatility</p>
                    <p className="text-2xl font-bold">Low</p>
                  </div>
                </div>
              </div>
              <Ripple/>
            </MagicCard>
           

            <div className="card bg-base-200 shadow-md">
            
            <MagicCard className="card-body">
                <TypingAnimation className="card-title text-primary">Financial Health Summary</TypingAnimation>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-success">📈</span>
                    <div>
                      <p className="font-medium">Strong Revenue Growth</p>
                      <p className="text-sm text-base-content/70">15% YoY increase in revenue</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-warning">💵</span>
                    <div>
                      <p className="font-medium">Stable Cash Flow</p>
                      <p className="text-sm text-base-content/70">Positive operating cash flow for 8 consecutive quarters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-error">📉</span>
                    <div>
                      <p className="font-medium">Market Volatility</p>
                      <p className="text-sm text-base-content/70">Below average market volatility in the past 30 days</p>
                    </div>
                  </div>
                </div>
                <Ripple/>
              </MagicCard>
             
            </div>
            
            <TheProfessor />
            
          </div>
        </div>
      </div>
    </div>
  );
}
