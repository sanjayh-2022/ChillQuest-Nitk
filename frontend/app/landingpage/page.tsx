"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Montserrat } from "@next/font/google";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import TypingAnimation from "@/components/ui/typing-animation";
import { MagicCard } from "@/components/ui/magic-card";
import Ripple from "@/components/ui/ripple";
import TheProfessor from "@/components/ui/TheProfessor";
import { Gcomponent } from "@/components/ui/graph";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you need
  variable: "--font-montserrat", // Custom CSS variable
});

export default function Home() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      const parsedData = JSON.parse(decodeURIComponent(dataParam));
      setData(parsedData);
    }
  }, [searchParams]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-red-950 to-black animate-bgMove opacity-100 z-0">
      <div className="flex flex-col gap-6 p-10 max-w-7xl mx-auto">
        <header className="flex justify-center items-center text-center pt-8">
          <div>
            <AnimatedShinyText className="text-4xl text-extrabold text-red-900">
              Red Heist Successful!
            </AnimatedShinyText>
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <p className="text-base-content/70">
                Insights, Predictions, and Financial Metrics made more accessible to you!
              </p>
            </AnimatedShinyText>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Insights and Predictions */}
          <div className="space-y-6">
            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Expected Listing Price</TypingAnimation>
                <div className="text-3xl font-bold text-yellow-500">
                  <div>{data.Listed_Price}</div>
                </div>
              </div>
              <Ripple />
            </MagicCard>

            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Key Metrics</TypingAnimation>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-base-content/70">ROE</p>
                    <p className="text-2xl font-bold">{data.Key_Metrics_FY24.ROE}</p>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/70">Debt-to-Equity</p>
                    <p className="text-2xl font-bold">{data.Key_Metrics_FY24.Debt_to_Equity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/70">P/E Ratio</p>
                    <p className="text-2xl font-bold">{data.Key_Metrics_FY24["P/E"]}</p>
                  </div>
                </div>
              </div>
              <Ripple />
            </MagicCard>

            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Risk Assessment</TypingAnimation>
                <p>{data.Risk_Index}</p>
              </div>
              <Ripple />
            </MagicCard>
          </div>

          {/* Financial Metrics */}
          <div className="space-y-6">
            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Revenue Growth</TypingAnimation>
                <div className="grid grid-cols-1 gap-4">
                  <p>
                    2024: ₹{data.Growth.RevenueFromOperations2024.toLocaleString()}
                  </p>
                  <p>
                    2023: ₹{data.Growth.RevenueFromOperations2023.toLocaleString()}
                  </p>
                  <p>
                    2022: ₹{data.Growth.RevenueFromOperations2022.toLocaleString()}
                  </p>
                </div>
              </div>
              <Ripple />
            </MagicCard>

            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">
                  Valuation and Returns
                </TypingAnimation>
                <p>{data.Valuation_Returns}</p>
              </div>
              <Ripple />
            </MagicCard>

            <MagicCard className="card bg-base-200 shadow-md">
              <div className="card-body">
                <TypingAnimation className="card-title text-primary">Recommendation</TypingAnimation>
                <p>{data.Recommendation}</p>
              </div>
              <Ripple />
            </MagicCard>

            <TheProfessor />
          </div>
        </div>
      </div>
    </div>
  );
}
