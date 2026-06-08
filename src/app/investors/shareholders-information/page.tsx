// app/shareholders-information/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './ShareholdersInformation.css';

const ShareholdersInformationPage = () => {
  type ShareholdingYear =
    | '2025-2026'
    | '2024-2025'
    | '2023-2024'
    | '2022-2023'
    | '2021-2022'
    | '2020-2021'
    | '2019-2020'
    | '2018-2019'
    | '2017-2018'
    | '2016-2017'
    | '2015-2016'
    | '2014-2015'
    | '2013-2014';

  type GovernanceSection =
    | 'composition'
    | 'directorsKMP'
    | 'gov2024_25'
    | 'gov2023_24';

  // State for Shareholding Pattern accordions
  const [openShareholding, setOpenShareholding] = useState<Record<ShareholdingYear, boolean>>({
    '2025-2026': true,
    '2024-2025': false,
    '2023-2024': false,
    '2022-2023': false,
    '2021-2022': false,
    '2020-2021': false,
    '2019-2020': false,
    '2018-2019': false,
    '2017-2018': false,
    '2016-2017': false,
    '2015-2016': false,
    '2014-2015': false,
    '2013-2014': false
  });

  // State for Corporate Governance accordions
  const [openGovernance, setOpenGovernance] = useState<Record<GovernanceSection, boolean>>({
    composition: true,
    directorsKMP: false,
    gov2024_25: false,
    gov2023_24: false
  });

  const toggleShareholding = (year: ShareholdingYear) => {
    setOpenShareholding(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const toggleGovernance = (section: GovernanceSection) => {
    setOpenGovernance(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="shareholders-info-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_0 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h1>Shareholder's Information</h1>
                </div>
              </div>

              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_1">
                <div className="et_pb_text_inner">
                  <h3>Shareholding Pattern</h3>
                </div>
              </div>

              {/* Shareholding Pattern Accordions */}
              <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
                
                {/* Shareholding Pattern 2025-2026 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2025-2026'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2025-2026')}>
                    Shareholding Pattern 2025-2026
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/09/Shareholding%20Pattern.xlsm" target="_blank" rel="noopener noreferrer">Q1- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/09/Final-SHP_Q2.XLSM" target="_blank" rel="noopener noreferrer">Q2- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/09/ASCR_2025_GGIL_Final.pdf" target="_blank" rel="noopener noreferrer">Q3- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/09/AMFINE-506134%20(15).XLSM" target="_blank" rel="noopener noreferrer">Q4- shareholding pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2024-2025 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2024-2025'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_1`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2024-2025')}>
                    Shareholding Pattern 2024-2025
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/SHP-Q1-2024-25.XLSM" target="_blank" rel="noopener noreferrer">Q1- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/SHP_Q-2-2024-25.XLSM" target="_blank" rel="noopener noreferrer">Q2- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/02/SHP-Q3.XLSM" target="_blank" rel="noopener noreferrer">Q3- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/09/SHP_Final.xlsm" target="_blank" rel="noopener noreferrer">Q4- shareholding pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2023-2024 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2023-2024'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_2`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2023-2024')}>
                    Shareholding Pattern 2023-2024
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/09/506134_June%2023.XLSM" target="_blank" rel="noopener noreferrer">Q1- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/09/SHP%20FINAL%20ICVL%20SEP%202023.XLSM" target="_blank" rel="noopener noreferrer">Q2- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/09/SHP%20ICVL%20DEC%202023.XLSM" target="_blank" rel="noopener noreferrer">Q3- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/SHP_ICVL_-Q4.XLSM" target="_blank" rel="noopener noreferrer">Q4- shareholding pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2022-2023 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2022-2023'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_3`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2022-2023')}>
                    Shareholding Pattern 2022-2023
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/Shareholding-pattern-Q1-2022-23.pdf" target="_blank" rel="noopener noreferrer">Q1- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/Shareholding-pattern-Q2-2022-23.pdf" target="_blank" rel="noopener noreferrer">Q2- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/Shareholding-pattern-Q3-2022-23.pdf" target="_blank" rel="noopener noreferrer">Q3- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/09/506134_Mar%2023.XLSM" target="_blank" rel="noopener noreferrer">Q4- shareholding pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2021-2022 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2021-2022'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_4`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2021-2022')}>
                    Shareholding Pattern 2021-2022
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/12/Q1-shareholding-pattern.pdf" target="_blank" rel="noopener noreferrer">Q1- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/12/Q2-shareholding-pattern.pdf" target="_blank" rel="noopener noreferrer">Q2- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/shareholding-pattern-Q3-2021-22.pdf" target="_blank" rel="noopener noreferrer">Q3- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/Shareholding-Pattern-Q4-2021-22.pdf" target="_blank" rel="noopener noreferrer">Q4- shareholding pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2020-2021 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2020-2021'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_5`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2020-2021')}>
                    Shareholding Pattern 2020-2021
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q1-shareholding-pattern-2.pdf" target="_blank" rel="noopener noreferrer">Q1- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q2-shareholding-pattern-1.pdf" target="_blank" rel="noopener noreferrer">Q2- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q3-shareholding-pattern-1.pdf" target="_blank" rel="noopener noreferrer">Q3- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q4-shareholding-pattern-1.pdf" target="_blank" rel="noopener noreferrer">Q4- shareholding pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2019-2020 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2019-2020'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_6`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2019-2020')}>
                    Shareholding Pattern 2019-2020
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q1-shareholding-pattern-1.pdf" target="_blank" rel="noopener noreferrer">Q1- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q2-shareholding-pattern.pdf" target="_blank" rel="noopener noreferrer">Q2- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q3-shareholding-pattern.pdf" target="_blank" rel="noopener noreferrer">Q3- shareholding pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q4-shareholding-pattern.pdf" target="_blank" rel="noopener noreferrer">Q4- shareholding pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2018-2019 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2018-2019'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_7`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2018-2019')}>
                    Shareholding Pattern 2018-2019
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Q-1-Shareholding-Pattern.pdf" target="_blank" rel="noopener noreferrer">ICVL Q-1 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Q-2-Shareholding-Pattern-1.pdf" target="_blank" rel="noopener noreferrer">ICVL Q-2 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Q-3-Shareholding-Pattern-1.pdf" target="_blank" rel="noopener noreferrer">ICVL Q-3 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Q-4-Shareholding-Pattern-1.pdf" target="_blank" rel="noopener noreferrer">ICVL Q-4 Shareholding Pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2017-2018 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2017-2018'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_8`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2017-2018')}>
                    Shareholding Pattern 2017-2018
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Shareholding-Pattern.pdf" target="_blank" rel="noopener noreferrer">Q-1 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Q-2-Shareholding-Pattern.pdf" target="_blank" rel="noopener noreferrer">ICVL Q-2 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Q-3-Shareholding-Pattern.pdf" target="_blank" rel="noopener noreferrer">ICVL Q-3 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ICVL-Q-4-Shareholding-Pattern.pdf" target="_blank" rel="noopener noreferrer">ICVL Q-4 Shareholding Pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2016-2017 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2016-2017'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_9`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2016-2017')}>
                    Shareholding Pattern 2016-2017
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Shareholding-Pattern-1.pdf" target="_blank" rel="noopener noreferrer">Q-1 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Shareholding-Pattern.pdf" target="_blank" rel="noopener noreferrer">Q-2 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Shareholding-Pattern.pdf" target="_blank" rel="noopener noreferrer">Q-3 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-4-Shareholding-Pattern.pdf" target="_blank" rel="noopener noreferrer">Q-4 Shareholding Pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2015-2016 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2015-2016'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_10`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2015-2016')}>
                    Shareholding Pattern 2015-2016
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Shareholding-Pattern-2.pdf" target="_blank" rel="noopener noreferrer">Q-1 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Shareholding-Pattern-1.pdf" target="_blank" rel="noopener noreferrer">Q-2 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Shareholding-Pattern-1.pdf" target="_blank" rel="noopener noreferrer">Q-3 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-4-Shareholding-Pattern-1.pdf" target="_blank" rel="noopener noreferrer">Q-4 Shareholding Pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2014-2015 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2014-2015'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_11`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2014-2015')}>
                    Shareholding Pattern 2014-2015
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Shareholding-Pattern-3.pdf" target="_blank" rel="noopener noreferrer">Q-1 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Shareholding-Pattern-2.pdf" target="_blank" rel="noopener noreferrer">Q-2 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Shareholding-Pattern-2.pdf" target="_blank" rel="noopener noreferrer">Q-3 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-4-Shareholding-Pattern-2.pdf" target="_blank" rel="noopener noreferrer">Q-4 Shareholding Pattern</a></li>
                    </ul>
                  </div>
                </div>

                {/* Shareholding Pattern 2013-2014 */}
                <div className={`et_pb_module et_pb_toggle ${openShareholding['2013-2014'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_12`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleShareholding('2013-2014')}>
                    Shareholding Pattern 2013-2014
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-1-Shareholding-Pattern-4.pdf" target="_blank" rel="noopener noreferrer">Q-1 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-2-Shareholding-Pattern-3.pdf" target="_blank" rel="noopener noreferrer">Q-2 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-3-Shareholding-Pattern-3.pdf" target="_blank" rel="noopener noreferrer">Q-3 Shareholding Pattern</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Q-4-Shareholding-Pattern-3.pdf" target="_blank" rel="noopener noreferrer">Q-4 Shareholding Pattern</a></li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className="et_pb_module et_pb_space et_pb_divider et_pb_divider_0 et_pb_divider_position_top et-hide-mobile">
                <div className="et_pb_divider_internal"></div>
              </div>

              {/* Corporate Governance Section */}
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_2">
                <div className="et_pb_text_inner">
                  <h3>Corporate Governance</h3>
                </div>
              </div>

              <div className="et_pb_module et_pb_accordion et_pb_accordion_1">
                
                {/* COMPOSITION OF COMMITTEES */}
                <div className={`et_pb_module et_pb_toggle ${openGovernance.composition ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_13`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleGovernance('composition')}>
                    COMPOSITION OF COMMITTEES
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                        <thead>
                          <tr>
                            <th style={{ width: "4%" }}>Sr. No.</th>
                            <th style={{ width: "18%" }}>Name of Committee</th>
                            <th style={{ width: "22%" }}>Name of Committee Members</th>
                            <th style={{ width: "15%" }}>Designation</th>
                            <th style={{ width: "41%" }}>Category</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Audit Committee</td>
                            <td>Mr. Ritesh Kalra<br />Mr. Anubhav Dham<br />Mr. Neeraj Jain</td>
                            <td>Chairperson<br />Member<br />Member</td>
                            <td>Non-Executive &amp; Independent Director<br />Non-Executive – Non Independent Director<br />Non-Executive &amp; Independent Director</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Nomination &amp; Remuneration Committee</td>
                            <td>Mr. Ritesh Kalra<br />Mr. Anubhav Dham<br />Mr. Neeraj Jain</td>
                            <td>Chairperson<br />Member<br />Member</td>
                            <td>Non-Executive &amp; Independent Director<br />Non-Executive – Non Independent Director<br />Non-Executive &amp; Independent Director</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Stakeholders Relationship Committee</td>
                            <td>Mr. Ritesh Kalra<br />Mr. Anubhav Dham<br />Mr. Neeraj Jain</td>
                            <td>Chairman<br />Member<br />Member</td>
                            <td>Non-Executive &amp; Independent Director<br />Non-Executive – Non Independent Director<br />Non-Executive &amp; Independent Director</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Directors & KMP */}
                <div className={`et_pb_module et_pb_toggle ${openGovernance.directorsKMP ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_14`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleGovernance('directorsKMP')}>
                    Directors &amp; KMP
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                        <tbody>
                          <tr>
                            <td width="4%"><strong>S.No.</strong></td>
                            <td width="43%"><strong>Name</strong></td>
                            <td width="19%"><strong>Designation</strong></td>
                            <td width="34%"><strong>Category</strong></td>
                          </tr>
                          <tr><td>1.</td><td>Mr. Anubhav Dham</td><td>Director</td><td>Executive Director</td></tr>
                          <tr><td>2.</td><td>Ms. Anamika Dham</td><td>Director</td><td>Executive Director</td></tr>
                          <tr><td>3.</td><td>Ms. Aarti Jain</td><td>Managing Director</td><td>Executive Director</td></tr>
                          <tr><td>4.</td><td>Mr. Ritesh Kalra</td><td>Director</td><td>Non-Executive Independent Director</td></tr>
                          <tr><td>5.</td><td>Mr. Neeraj Jain</td><td>Director</td><td>Non-Executive Independent Director</td></tr>
                          <tr><td>6.</td><td>Mr. Sudhanshu Singhal</td><td>Director</td><td>Non-Executive Independent Director</td></tr>
                          <tr><td>7.</td><td>Mr. Manish Makhija</td><td>CFO</td><td>NA</td></tr>
                          <tr><td>8.</td><td>Mr. Narender Kumar</td><td>Company Secretary</td><td>NA</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Corporate Governance 2024-25 */}
                <div className={`et_pb_module et_pb_toggle ${openGovernance.gov2024_25 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_15`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleGovernance('gov2024_25')}>
                    Corporate Governance 2024-25
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/Corporate%20Governance_Q1-2024-25.xlsm" target="_blank" rel="noopener noreferrer">Q1- Corporate Governance Report</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/Corporate%20Governance-Q-2-2024-25.xlsm" target="_blank" rel="noopener noreferrer">Q2- Corporate Governance Report</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/02/Corporate%20Governance.xlsm" target="_blank" rel="noopener noreferrer">Q3- Corporate Governance Report</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/09/Integrated%20Governance%20GGIL%20Quarter%20first.xlsm" target="_blank" rel="noopener noreferrer">Q4- Corporate Governance Report</a></li>
                    </ul>
                  </div>
                </div>

                {/* Corporate Governance 2023-24 */}
                <div className={`et_pb_module et_pb_toggle ${openGovernance.gov2023_24 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_16`}>
                  <h5 className="et_pb_toggle_title" onClick={() => toggleGovernance('gov2023_24')}>
                    Corporate Governance 2023-24
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/09/Corporate%20Governance%20ICVL%20DEC%202023.xlsm" target="_blank" rel="noopener noreferrer">Q3- Corporate Governance Report</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/Corporate%20Governance-Q-4-2023-24.xlsm" target="_blank" rel="noopener noreferrer">Q4- Corporate Governance Report</a></li>
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

export default ShareholdersInformationPage;