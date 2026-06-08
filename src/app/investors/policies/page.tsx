// app/policies/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './Policies.css';

const PoliciesPage = () => {
  // State for Policies accordion
  const [openPolicies, setOpenPolicies] = useState(true);

  return (
    <div className="policies-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h1>Policies</h1>
                </div>
              </div>

              <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
                
                {/* Policies Accordion */}
                <div className={`et_pb_module et_pb_toggle ${openPolicies ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                  <h5 className="et_pb_toggle_title" onClick={() => setOpenPolicies(!openPolicies)}>
                    Company Policies
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2026/06/TCWG-Policy.pdf" target="_blank" rel="noopener noreferrer">
                          TCWG Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2026/05/POLICY-FOR-PERFORMANCE-EVALUATION-OF-BOARD-OF-DIRECTORS.pdf" target="_blank" rel="noopener noreferrer">
                          Policy for performance of Board of Directors
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2026/05/related-party-policy29.5.25.pdf" target="_blank" rel="noopener noreferrer">
                          Related Party Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2026/05/Vigil-Policy.pdf" target="_blank" rel="noopener noreferrer">
                          Vigil Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/05/Code-of-Conduct.pdf" target="_blank" rel="noopener noreferrer">
                          Code of Conduct
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/05/policy-on-material-subsidiary.pdf" target="_blank" rel="noopener noreferrer">
                          Policy On Material Subsidiary
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/05/policy-on-materiality.pdf" target="_blank" rel="noopener noreferrer">
                          Policy On Materiality
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/05/NominationRemunerationPolicy.pdf" target="_blank" rel="noopener noreferrer">
                          Nomination Remuneration Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/05/criteria-of-making-payments-to-non-executive-directors-ICVL.pdf" target="_blank" rel="noopener noreferrer">
                          Criteria of Making Payments to Non Executive Directors ICVL
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/05/code-conduct-prohibition-insider-trading.pdf" target="_blank" rel="noopener noreferrer">
                          Code Conduct Prohibition Insider Trading
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/05/Terms_and_Conditions_Independent_Director.pdf" target="_blank" rel="noopener noreferrer">
                          Terms and Conditions Independent Director
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2026/05/Whistleblower-Policy.pdf" target="_blank" rel="noopener noreferrer">
                          Whistleblower Policy
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
    </div>
  );
};

export default PoliciesPage;