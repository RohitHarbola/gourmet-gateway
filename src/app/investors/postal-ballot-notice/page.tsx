// app/postal-ballot-notice/page.tsx
'use client';

import React, { useState } from 'react';
import './PostalBallotNotice.css';

const PostalBallotNoticePage = () => {
  // State for Postal Ballot Notice toggle
  const [openPostalBallot, setOpenPostalBallot] = useState(true);

  return (
    <div className="postal-ballot-notice-page">
     

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container-custom">
          <span className="eyebrow text-[var(--c-gold)]">
            ABOUT GOURMET GATEWAY
          </span>

          <h1 className="display-xl text-white mt-6 max-w-5xl">
            Bringing Exceptional
            <br />
            Dining Experiences
            <br />
            Across Markets
          </h1>

          <p className="text-white/80 text-xl max-w-3xl mt-10 leading-9">
            Leading food and beverage brands across
            India, Sri Lanka and Maldives,
            delivering premium culinary experiences
            through innovation, quality and service excellence.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
            <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
              
              {/* Postal Ballot Notice */}
              <div className={`et_pb_module et_pb_toggle ${openPostalBallot ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                <h5 className="et_pb_toggle_title" onClick={() => setOpenPostalBallot(!openPostalBallot)}>
                  Postal Ballot Notice
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li>
                      <a 
                        href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/08/Notice-of-Postal-Ballot-19th-August-2025.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Notice of Postal Ballot 19th August 2025
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostalBallotNoticePage;