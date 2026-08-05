// app/financials-consolidated/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './FinancialsConsolidated.css';

const FinancialsConsolidatedPage = () => {
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

  // State for Consolidated Financials toggle
  const [openConsolidated, setOpenConsolidated] = useState(true);

  const toggleQuarterly = (key: keyof typeof openQuarterly) => {
    setOpenQuarterly(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="financials-consolidated-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              
              {/* QUARTERLY FINANCIAL RESULT */}
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h2>QUARTERLY FINANCIAL CONSOLIDATED RESULT</h2>
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
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2025-26/Consolidate/Console.pdf" target="_blank" rel="noopener noreferrer">
                          Q1- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2025-26/Consolidate/ConsoleSep25.pdf" target="_blank" rel="noopener noreferrer">
                          Q2- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2025-26/Consolidate/ConsoleMarch.pdf" target="_blank" rel="noopener noreferrer">
                          Q3- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2025-26/Consolidate/ConsoleJune.pdf" target="_blank" rel="noopener noreferrer">
                          Q4- Audited Financial Statement
                        </a>
                      </li>
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
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2024-25/Consolidate/Dec2024ConsolewithAR.pdf" target="_blank" rel="noopener noreferrer">
                          Q1- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2024-25/Consolidate/Sept2024_ConsolewithAR.pdf" target="_blank" rel="noopener noreferrer">
                          Q2- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2024-25/Consolidate/ARConsole_March25.pdf" target="_blank" rel="noopener noreferrer">
                          Q3- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2024-25/Consolidate/June24Console.pdf" target="_blank" rel="noopener noreferrer">
                          Q4- Audited Financial Statement
                        </a>
                      </li>
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
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2023-24/consolidate/Dec2023_Console.pdf" target="_blank" rel="noopener noreferrer">
                          Q1- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2023-24/consolidate/Sept23Console.pdf" target="_blank" rel="noopener noreferrer">
                          Q2- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2023-24/consolidate/March24Console.pdf" target="_blank" rel="noopener noreferrer">
                          Q3- Unaudited Financial Statement
                        </a>
                      </li>
                      <li>
                        <a href="/assets/wp-content/uploads/pdfs/2023-24/consolidate/June23Console.pdf" target="_blank" rel="noopener noreferrer">
                          Q4- Audited Financial Statement
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Financial Results 2022-23 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2022_23 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_3`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2022_23')}>
                    Financial Results 2022-23
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/12/Q1- Unaudited Financials 2022.pdf" target="_blank" rel="noopener noreferrer">Q1- Unaudited Financial Statement</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/Q2-UNAUDITED-FINANCIAL-RESULTS.pdf" target="_blank" rel="noopener noreferrer">Q2- Unaudited Financial Statement</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/Q3 UNAUDITED FINANCIAL RESULTS.pdf" target="_blank" rel="noopener noreferrer">Q3- Unaudited Financial Statement</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/09/bm_Outcome_Reg 33.pdf" target="_blank" rel="noopener noreferrer">Q4- Audited Financial Statement</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Results 2021-2022 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2021_22 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_4`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2021_22')}>
                    Financial Results 2021-2022
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/12/Q-1-Un-Audited-Result.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/12/Q-2-Un-Audited-Result.pdf" target="_blank" rel="noopener noreferrer">Q-2 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/12/Q3- Unaudited Financials 2021.pdf" target="_blank" rel="noopener noreferrer">Q-3 Unaudited Financial Statement</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/12/Q4- Audited Financials 2021.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Financial Statement</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Results 2020-2021 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2020_21 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_5`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2020_21')}>
                    Financial Results 2020-2021
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Un-Audited-Result-5.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Un-Audited-Result-5.pdf" target="_blank" rel="noopener noreferrer">Q-2 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Un-Audited-Result-5.pdf" target="_blank" rel="noopener noreferrer">Q-3 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Outcome-22.06.2021.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Result</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Result 2019-2020 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2019_20 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_6`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2019_20')}>
                    Financial Result 2019-2020
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Un-Audited-Result-4.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Un-Audited-Result-4.pdf" target="_blank" rel="noopener noreferrer">Q-2 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Un-Audited-Result-4.pdf" target="_blank" rel="noopener noreferrer">Q-3 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-4-Audited-Result-3.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Result</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Result 2018-2019 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2018_19 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_7`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2018_19')}>
                    Financial Result 2018-2019
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q1-unaudited-financial-results.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q3-unaudited-financial-results.pdf" target="_blank" rel="noopener noreferrer">Q-3 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q4-audited-financial-results.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Result</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Result 2017-2018 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2017_18 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_8`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2017_18')}>
                    Financial Result 2017-2018
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Un-Audited-Result.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q2-unaudited-financia-results.pdf" target="_blank" rel="noopener noreferrer">Q-2 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q3-unaudited-financia-results.pdf" target="_blank" rel="noopener noreferrer">Q-3 Un-audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q4-audited-financia-results.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Result</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Result 2016-2017 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2016_17 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_9`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2016_17')}>
                    Financial Result 2016-2017
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Un-Audited-Result-3.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Un-Audited-Result-3.pdf" target="_blank" rel="noopener noreferrer">Q-2 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Un-Audited-Result-3.pdf" target="_blank" rel="noopener noreferrer">Q-3 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-4-Audited-Result-2.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Result</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Result 2015-2016 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2015_16 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_10`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2015_16')}>
                    Financial Result 2015-2016
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Un-Audited-Result-2.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Un-Audited-Result-2.pdf" target="_blank" rel="noopener noreferrer">Q-2 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Un-Audited-Result-2.pdf" target="_blank" rel="noopener noreferrer">Q-3 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-4-Audited-Result-1.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Result</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Result 2014-2015 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2014_15 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_11`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2014_15')}>
                    Financial Result 2014-2015
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Un-Audited-Result-1.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Un-Audited-Result-1.pdf" target="_blank" rel="noopener noreferrer">Q-2 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Un-Audited-Result-1.pdf" target="_blank" rel="noopener noreferrer">Q-3 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-4-Un-Audited-Result.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Result</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Result 2013-2014 */}
                <div className={`et_pb_module et_pb_toggle ${openQuarterly.q2013_14 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_12`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleQuarterly('q2013_14')}>
                    Financial Result 2013-2014
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/-Q-1-Un-Audited-Result.pdf" target="_blank" rel="noopener noreferrer">Q-1 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Un-Audited-Result.pdf" target="_blank" rel="noopener noreferrer">Q-2 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Un-Audited-Result.pdf" target="_blank" rel="noopener noreferrer">Q-3 Un-Audited Result</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Q-4-Audited-Result.pdf" target="_blank" rel="noopener noreferrer">Q-4 Audited Result</a></li>
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

export default FinancialsConsolidatedPage;