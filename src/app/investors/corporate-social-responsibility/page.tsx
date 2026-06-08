// app/corporate-social-responsibility/page.tsx
'use client';

import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import './CorporateSocialResponsibility.css';

const CorporateSocialResponsibilityPage = () => {
  return (
    <div className="csr-page">
      <Navbar />

      {/* Hero Section */}
      <div className="et_pb_section et_pb_fullwidth_section et_pb_section_0 et_section_regular">
        <section className="et_pb_fullwidth_header et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_fullwidth_header_0">
          <div className="et_pb_fullwidth_header_container left">
            <div className="header-content-container center">
              <div className="header-content">
                <h1>Corporate Social Responsibility (CSR)</h1>
              </div>
            </div>
          </div>
          <div className="et_pb_fullwidth_header_overlay"></div>
          <div className="et_pb_fullwidth_header_scroll"></div>
        </section>
      </div>

      {/* Main Content Section */}
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
            
            <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
              <div className="et_pb_text_inner">
                <p style={{ textAlign: 'justify' }}>
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
  );
};

export default CorporateSocialResponsibilityPage;