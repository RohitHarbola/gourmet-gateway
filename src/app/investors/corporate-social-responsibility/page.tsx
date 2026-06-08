// app/corporate-social-responsibility/page.tsx
'use client';

import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import './CorporateSocialResponsibility.css';

const CorporateSocialResponsibilityPage = () => {
  return (
    <div className="csr-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px] min-h-screen flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-[var(--c-border)]">
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left">
                <div className="et_pb_text_inner">
                  <h1 className="text-3xl md:text-4xl font-serif text-[var(--c-dark)] mb-6 text-center">
                    Corporate Social Responsibility (CSR)
                  </h1>
                  <p style={{ textAlign: 'justify' }} className="text-base md:text-lg leading-relaxed text-[var(--c-muted)]">
                    As the Company is not having net worth of rupees five hundred Crores or more, 
                    or turnover of rupees one thousand Crores or more or a net profit of rupees 
                    five Crores or more during any financial year, the Company is not required 
                    to comply with the provisions of Section 135 of the Companies Act, 2013 with 
                    the regard to the formation of the CSR Committee and undertaking of Social 
                    Expenditure as required under the said Section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateSocialResponsibilityPage;