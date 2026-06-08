// app/audited-subsidiaries-financial/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './AuditedSubsidiariesFinancial.css';

const AuditedSubsidiariesFinancialPage = () => {
  // State for Audited Subsidiaries Financial accordion
  const [openFinancials, setOpenFinancials] = useState(true);

  return (
    <div className="audited-subsidiaries-page">
      <Navbar />

      {/* Hero Section */}
      <div className="et_pb_section et_pb_fullwidth_section et_pb_section_0 et_section_regular">
        <section className="et_pb_fullwidth_header et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_fullwidth_header_0">
          <div className="et_pb_fullwidth_header_container left">
            <div className="header-content-container center">
              <div className="header-content">
                <h1>Audited Subsidiaries Financial</h1>
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
                <h1>Audited Subsidiaries Financial</h1>
              </div>
            </div>

            <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
              
              {/* Audited Subsidiaries Financial Accordion */}
              <div className={`et_pb_module et_pb_toggle ${openFinancials ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                <h5 className="et_pb_toggle_title" onClick={() => setOpenFinancials(!openFinancials)}>
                  Subsidiary Financial Statements
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li>
                      <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/04/BALANCE-SHEET-OF-BOUTONNIERE.pdf" target="_blank" rel="noopener noreferrer">
                        Balance Sheet Of Boutonniere
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

export default AuditedSubsidiariesFinancialPage;