"use client";

import { useEffect, useState } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
};

function Counter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Statistics() {
  return (
    <section className="bg-[#111009] py-16 reveal">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="eyebrow text-xs">
            COMPANY OVERVIEW
          </span>
          <h2 className="text-3xl lg:text-4xl font-light text-white mt-3 font-serif">
            Numbers That Reflect
            <br />
            Our Journey
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 border border-white/10">
          {/* Years */}
          <div className="border-r border-b lg:border-b-0 border-white/10 p-6 lg:p-8 text-center">
            <h3 className="font-serif text-4xl lg:text-5xl text-[#B8965A] font-semibold">
              <Counter end={26} suffix="+" />
            </h3>
            <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
              Years (Since 2000)
            </p>
          </div>

          {/* Cities */}
          <div className="border-r border-b lg:border-b-0 border-white/10 p-6 lg:p-8 text-center">
            <h3 className="font-serif text-4xl lg:text-5xl text-[#B8965A] font-semibold">
              <Counter end={170} suffix="+" />
            </h3>
            <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
              Cities
            </p>
          </div>

          {/* Outlets */}
          <div className="border-r border-b lg:border-b-0 border-white/10 p-6 lg:p-8 text-center">
            <h3 className="font-serif text-4xl lg:text-5xl text-[#B8965A] font-semibold">
              <Counter end={560} suffix="+" />
            </h3>
            <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
              Outlets
            </p>
          </div>

          {/* Brands */}
          <div className="border-r border-b lg:border-b-0 border-white/10 p-6 lg:p-8 text-center">
            <h3 className="font-serif text-4xl lg:text-5xl text-[#B8965A] font-semibold">
              <Counter end={5} suffix="+" />
            </h3>
            <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
              Iconic Brands
            </p>
          </div>

          {/* Countries */}
          <div className="p-6 lg:p-8 text-center">
            <h3 className="font-serif text-4xl lg:text-5xl text-[#B8965A] font-semibold">
              <Counter end={3} />
            </h3>
            <p className="mt-2 uppercase tracking-[0.2em] text-[10px] text-white/50 font-light">
              Countries
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}