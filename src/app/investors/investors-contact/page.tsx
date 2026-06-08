// app/investors-contact/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './InvestorsContact.css';

const InvestorsContactPage = () => {
  // State for toggles
  const [openComplianceOfficer, setOpenComplianceOfficer] = useState(true);
  const [openRTA, setOpenRTA] = useState(true);

  return (
    <div className="investors-contact-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h1>INVESTORS' CONTACT</h1>
                </div>
              </div>

              {/* Company Secretary and Compliance Officer */}
              <div className={`et_pb_module et_pb_toggle ${openComplianceOfficer ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_0 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => setOpenComplianceOfficer(!openComplianceOfficer)}>
                  Company Secretary and Compliance Officer
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p style={{ textAlign: 'justify' }}>
                    <strong>Mr. Narender Kumar</strong><br />
                    Contact: +91 87501 31314<br />
                    E-mail ID: amfinecompliance@gmail.com
                  </p>
                </div>
              </div>

              {/* Details of Registrar and Share Transfer Agents (RTA) */}
              <div className={`et_pb_module et_pb_toggle ${openRTA ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_1 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => setOpenRTA(!openRTA)}>
                  Details of Registrar and Share Transfer Agents (RTA)
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    <strong>PURVA SHAREGISTRY (INDIA) PRIVATE LIMITED</strong><br />
                    9, SHIV SHAKTI INDUSTRIAL ESTATE,<br />
                    J.R. BORICHA MARG LOWER PAREL (EAST)<br />
                    MUMBAI- 400011<br />
                    022-23012518 / 23016761<br />
                    purvashr@gmail.com
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

export default InvestorsContactPage;