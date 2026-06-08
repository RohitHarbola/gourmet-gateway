// app/secretarial-compliance-report/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './SecretarialComplianceReport.css';

const SecretarialComplianceReportPage = () => {
  // State for Secretarial Compliance Report accordion
  const [openReports, setOpenReports] = useState(true);

  return (
    <div className="secretarial-compliance-page">
      <Navbar />

      {/* Hero Section */}
      <div className="et_pb_section et_pb_fullwidth_section et_pb_section_0 et_section_regular">
        <section className="et_pb_fullwidth_header et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_fullwidth_header_0">
          <div className="et_pb_fullwidth_header_container left">
            <div className="header-content-container center">
              <div className="header-content">
                <h1>Secretarial compliance Report</h1>
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
                <h1>Secretarial compliance Report</h1>
              </div>
            </div>

            <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
              
              {/* Secretarial Compliance Reports Accordion */}
              <div className={`et_pb_module et_pb_toggle ${openReports ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                <h5 className="et_pb_toggle_title" onClick={() => setOpenReports(!openReports)}>
                  Secretarial Compliance Reports
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li>
                      <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/09/ASCR_2025_GGIL_Final.pdf" target="_blank" rel="noopener noreferrer">
                        2024-25 Secretarial Compliance Report
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/04/23-24-Secretarial-complaince-report.pdf" target="_blank" rel="noopener noreferrer">
                        2023-24 Secretarial Compliance Report
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

export default SecretarialComplianceReportPage;