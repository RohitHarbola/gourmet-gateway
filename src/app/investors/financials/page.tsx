// app/financials/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './Financials.css';

const FinancialsPage = () => {
  // State for Quarterly Financial Results accordion
  const [openQuarterly, setOpenQuarterly] = useState({
    q2025_26: true,  // Open by default
    q2024_25: false,
    q2023_24: false,
    q2022_23: false,
    q2021_22: false,
    q2020_21: false,
    q2019_20: false,
    q2018_19: false,
    q2017_18: false,
    q2016_17: false,
    q2015_16: false,
    q2014_15: false,
    q2013_14: false
  });

  // State for Annual Reports toggle
  const [openAnnualReports, setOpenAnnualReports] = useState(true);
  
  // State for Subsidiary Financials toggle
  const [openSubsidiary, setOpenSubsidiary] = useState(true);

  const toggleQuarterly = (key: keyof typeof openQuarterly) => {
    setOpenQuarterly(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="financials-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              
              {/* QUARTERLY FINANCIAL RESULT */}
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h2>QUARTERLY FINANCIAL RESULTS-STANDALONE</h2>
                </div>
              </div>

              <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
                
                {/* Financial Results 2025-26 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2025_26 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2025_26')}>
                    Financial Results 2025-26
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="/assets/wp-content/uploads/pdfs/2025-26/Standalone/Standalone.pdf" target="_blank" rel="noopener noreferrer">Q1- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2025-26/Standalone/Standalonesept25.pdf" target="_blank" rel="noopener noreferrer">Q2- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2025-26/Standalone/StandaloneJune25.pdf" target="_blank" rel="noopener noreferrer">Q3- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2025-26/Standalone/MarchStandalone.pdf" target="_blank" rel="noopener noreferrer">Q4- Audited Financial Statement</a></li>
                    </ul>
                  </div> 
                 </div>

                {/* Financial Results 2024-25 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2024_25 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_1`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2024_25')}>
                    Financial Results 2024-25
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="/assets/wp-content/uploads/pdfs/2024-25/Standalone/Dec2024standalonewithAR.pdf" target="_blank" rel="noopener noreferrer">Q1- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2024-25/Standalone/Sept2024_StandalonewithAR.pdf" target="_blank" rel="noopener noreferrer">Q2- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2024-25/Standalone/June24standalone.pdf" target="_blank" rel="noopener noreferrer">Q3- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2024-25/Standalone/ARStandalone_March25.pdf" target="_blank" rel="noopener noreferrer">Q4- Audited Financial Statement</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Results 2023-24 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2023_24 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_2`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2023_24')}>
                    Financial Results 2023-24
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="/assets/wp-content/uploads/pdfs/2023-24/Standalone/Dec23Standalone.pdf" target="_blank" rel="noopener noreferrer">Q1- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2023-24/Standalone/Sept23Standalone.pdf" target="_blank" rel="noopener noreferrer">Q2- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2023-24/Standalone/June2023_StanalonewithAR.pdf" target="_blank" rel="noopener noreferrer">Q3- Unaudited Financial Statement</a></li>
                      <li><a href="/assets/wp-content/uploads/pdfs/2023-24/Standalone/March24Stanalone.pdf" target="_blank" rel="noopener noreferrer">Q4- Audited Financial Statement</a></li>
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


export default FinancialsPage;