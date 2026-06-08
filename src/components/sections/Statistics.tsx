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
    <section className="bg-[#111009] py-28 reveal">
      <div className="container-custom">

        <div className="stat-card border-r border-b lg:border-b-0 border-white/10 p-10 lg:p-14 text-center">
          <span className="eyebrow">
            COMPANY OVERVIEW
          </span>

          <h2 className="display-md mt-6 text-white">
            Numbers That Reflect
            <br />
            Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10">

          {/* Years */}

          <div className="stat-card border-r border-b lg:border-b-0 border-white/10 p-10 lg:p-14 text-center">
            <h3 className="font-serif text-6xl lg:text-7xl text-[#B8965A]">
              <Counter end={24} suffix="+" />
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-sm text-white/60">
              Years
            </p>
          </div>

          {/* Outlets */}

          <div className="stat-card border-r border-b lg:border-b-0 border-white/10 p-10 lg:p-14 text-center">
            <h3 className="font-serif text-6xl lg:text-7xl text-[#B8965A]">
              <Counter end={200} suffix="+" />
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-sm text-white/60">
              Outlets
            </p>
          </div>

          {/* Brands */}

          <div className="stat-card border-r border-b lg:border-b-0 border-white/10 p-10 lg:p-14 text-center">
            <h3 className="font-serif text-6xl lg:text-7xl text-[#B8965A]">
              <Counter end={4} suffix="+" />
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-sm text-white/60">
              Brands
            </p>
          </div>

          {/* Countries */}

          <div className="stat-card border-r border-b lg:border-b-0 border-white/10 p-10 lg:p-14 text-center">
            <h3 className="font-serif text-6xl lg:text-7xl text-[#B8965A]">
              <Counter end={3} />
            </h3>

            <p className="mt-4 uppercase tracking-[0.2em] text-sm text-white/60">
              Countries
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}