// app/management-team/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './ManagementTeam.css';

const ManagementTeamPage = () => {
  // State to track which toggles are open
  const [openToggles, setOpenToggles] = useState<Record<string, boolean>>({
    toggle0: true,
    toggle1: true,
    toggle2: true,
    toggle3: true,
    toggle4: true,
    toggle5: true,
    toggle6: true,
    toggle7: true
  });

  const toggleItem = (toggleName: string) => {
    setOpenToggles(prev => ({
      ...prev,
      [toggleName]: !prev[toggleName]
    }));
  };

  return (
    <div className="management-team-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px] md:pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h1>BRIEF PROFILE OF THE BOARD OF DIRECTORS OF THE COMPANY</h1>
                </div>
              </div>

              {/* Mr. Anubhav Dham - Managing Director and Chairperson */}
              <div className={`et_pb_module et_pb_toggle ${openToggles.toggle0 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_0 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle0')}>
                  Mr. Anubhav Dham - Managing Director and Chairperson
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    Mr. Anubhav Dham is the Managing Director of the Company and a seasoned business leader with over nine years of experience in corporate strategy, business transformation, and investments. He holds a Bachelor's degree from the University of Southern California and earned his Master of Business Administration (MBA) from IESE Business School, Spain, in 2012.
                    <br /><br />
                    Over the course of his career, Mr. Dham has played a pivotal role in formulating and executing business and financial strategies across diverse industries, including packaging, heavy engineering, automotive, and manufacturing. His expertise spans strategic planning, operational restructuring, capital allocation, mergers and acquisitions, and driving sustainable business growth.
                    <br /><br />
                    In recent years, he has expanded his focus to the food and beverage industry, where he has been instrumental in strengthening business operations, enhancing brand value, and driving growth initiatives. Under his leadership, the Company continues to focus on operational excellence, customer-centric innovation, and long-term value creation while pursuing strategic expansion opportunities.
                    <br /><br />
                    The details of the positions held in other entities are as under:
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <th><strong>SN</strong></th>
                          <th><strong>NAME OF BODY CORPORATE</strong></th>
                          <th><strong>DESIGNATION</strong></th>
                        </tr>
                        <tr><td>1.</td><td>ADHBHUT INFRASTRUCTURE LIMITED</td><td>Managing Director</td></tr>
                        <tr><td></td><td>Barista Coffee Company Limited</td><td>Managing Director</td></tr>
                        <tr><td>2.</td><td>MARTINA DEVELOPERS &amp; FINCON PVT LTD</td><td>Director</td></tr>
                        <tr><td>3.</td><td>SO INDULGENT INDIA PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>4.</td><td>ADRITAH AUTOPARTS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>5.</td><td>AMZEN REALTORS AND DEVELOPERS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>6.</td><td>MARISSA VILLA AND RESORT PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>7.</td><td>AMFINE CAPITAL MANAGEMENT PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>8.</td><td>AMZEN GLOBAL CORPORATION PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>9.</td><td>FUTUREVISION CONSULTANTS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>10.</td><td>FAITH ADVISORY SERVICES PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>11.</td><td>AMERTEC SYSTEMS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>12.</td><td>HUNGRY N THIRSTY FOODS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>13.</td><td>AERTHAA ESCAPES LLP</td><td>Designated Partner</td></tr>
                        <tr><td>14.</td><td>ADRITAH AUTOMOTIVE LLP</td><td>Designated Partner</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Ms. Anamika Dham - Executive Director */}
              <div className={`et_pb_module et_pb_toggle ${openToggles.toggle1 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_1 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle1')}>
                  Ms. Anamika Dham - Executive Director
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    Ms. Anamika Dham is an Executive Director of the Company. She holds a Bachelor of Business Administration (BBA) from the Indian Institute of Planning and Management (IIPM), completed in 2009. She has over four years of professional experience in product development, brand management, and marketing across diverse sectors, including fashion and the food &amp; beverage industry.
                    <br /><br />
                    Throughout her career, Ms. Dham has been actively involved in conceptualizing and developing consumer-focused products, formulating brand positioning strategies, and driving marketing initiatives aimed at enhancing customer engagement and business growth. Her expertise encompasses product innovation, market analysis, merchandising, brand communication, and the execution of strategic marketing campaigns.
                    <br /><br />
                    In the food and beverage sector, she has contributed to the development of customer-centric offerings and brand-building initiatives while supporting business expansion and operational excellence. As an Executive Director, Ms. Dham continues to provide strategic guidance in product development, marketing, and brand management, contributing to the Company's long-term growth and value creation.
                    <br /><br />
                    The details of the positions held in other entities are as under:
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <th><strong>SN</strong></th>
                          <th><strong>NAME OF BODY CORPORATE</strong></th>
                          <th><strong>DESIGNATION</strong></th>
                        </tr>
                        <tr><td>1.</td><td>AMFINE CAPITAL MANAGEMENT PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>2.</td><td>SO INDULGENT INDIA PRIVATE LIMITED</td><td>Additional Director</td></tr>
                        <tr><td>3.</td><td>ADRITAH AUTOPARTS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>4.</td><td>AMZEN GLOBAL CORPORATION PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>5.</td><td>V3 ADVISORS LLP</td><td>Designated Partner</td></tr>
                        <tr><td>6.</td><td>AERTHAA ESCAPES LLP</td><td>Designated Partner</td></tr>
                        <tr><td>7.</td><td>ADRITAH AUTOMOTIVE LLP</td><td>Designated Partner</td></tr>
                        <tr><td>8.</td><td>FINOCIAL INFORMATION SYSTEMS LLP</td><td>Designated Partner</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Ms. Aarti Jain - Managing Director */}
              <div className={`et_pb_module et_pb_toggle ${openToggles.toggle2 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_2 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle2')}>
                  Ms. Aarti Jain - Managing Director
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    Ms. Aarti Jain is the Managing Director of the Company and a seasoned business leader with over 26 years of extensive experience in corporate finance, strategic management, marketing, and business development. She holds an MBA (Marketing) from Manchester Business School and a Post Graduate Diploma in Garment Manufacturing Technology from the National Institute of Fashion Technology (NIFT).
                    <br /><br />
                    Throughout her distinguished career, Ms. Jain has successfully led business transformation initiatives across diverse industries, including packaging, manufacturing, hospitality, retail, and food &amp; beverage. She possesses extensive expertise in corporate finance, strategic planning, brand development, marketing, business expansion, and operational excellence. Her leadership has been instrumental in driving sustainable growth, strengthening corporate governance, and creating long-term value for stakeholders.
                    <br /><br />
                    As Managing Director, Ms. Jain provides strategic direction to the Company's growth initiatives, with a strong focus on business innovation, financial discipline, customer-centric strategies, and organizational excellence. She also serves on the boards of several companies across diverse sectors, reflecting her broad business acumen and leadership experience.
                    <br /><br />
                    The details of the positions held in other entities are as under:
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <th><strong>SN</strong></th>
                          <th><strong>NAME OF BODY CORPORATE</strong></th>
                          <th><strong>DESIGNATION</strong></th>
                        </tr>
                        <tr><td>1.</td><td>ROLLATAINERS LIMITED</td><td>Director</td></tr>
                        <tr><td>2.</td><td>GANPATI REALTY PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>3.</td><td>CROSS CONNECTION IMPEX PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>4.</td><td>LTPL TRAVELS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>5.</td><td>DEXTEROUS DEVELOPERS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>6.</td><td>GARIMA BUILDPROP PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>7.</td><td>KAIZEN RESTAURANTS PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>8.</td><td>VIAAN TECHNOLOGIES PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>9.</td><td>KAMAKSHI SILK MILLS PVT LTD</td><td>Director</td></tr>
                        <tr><td>10.</td><td>SOPHISTICATED REALTORS PRIVATE LIMITED</td><td>Director</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Mr. Sudhanshu Singhal - Independent Director */}
              <div className={`et_pb_module et_pb_toggle ${openToggles.toggle3 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_3 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle3')}>
                  Mr. Sudhanshu Singhal - Independent Director
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    CS Sudhanshu Singhal is a distinguished Company Secretary and corporate governance professional with extensive experience in corporate laws, securities laws, and regulatory compliance. He is a Fellow Member of the Institute of Company Secretaries of India (ICSI) and has established himself as a trusted advisor in the areas of corporate restructuring, governance, secretarial audits, due diligence, and regulatory advisory.
                    <br /><br />
                    Over the course of his professional career, Mr. Singhal has advised a wide spectrum of listed and unlisted companies on matters relating to the Companies Act, 2013, SEBI Regulations, FEMA compliances, corporate restructuring, mergers and acquisitions, XBRL reporting, and corporate governance frameworks. His expertise extends to Board and shareholder advisory, secretarial compliance, regulatory approvals, and implementation of best governance practices.
                    <br /><br />
                    In addition to his professional practice, Mr. Singhal is a regular speaker at seminars and professional development programmes organized by various chapters of ICSI, where he shares practical insights on evolving corporate and regulatory developments. He is widely recognized for his thought leadership and commitment to strengthening corporate governance standards and promoting ethical business practices.
                    <br /><br />
                    The details of the positions held in other entities are as under:
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <th><strong>SN</strong></th>
                          <th><strong>NAME OF BODY CORPORATE</strong></th>
                          <th><strong>DESIGNATION</strong></th>
                        </tr>
                        <tr><td>1.</td><td>PROFBRILL CORP ADVISORY LLP</td><td>Designated Partner</td></tr>
                        <tr><td>2.</td><td>PARASRAMPURIA SYNTHETICS LIMITED</td><td>Director</td></tr>
                        <tr><td>3.</td><td>ASPIRE &amp; INNOVATIVE ADVERTISING LIMITED</td><td>Director</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Mr. Ritesh Kalra - Independent Director */}
              <div className={`et_pb_module et_pb_toggle ${openToggles.toggle4 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_4 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle4')}>
                  Mr. Ritesh Kalra - Independent Director
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    Mr. Ritesh Kalra is a qualified Company Secretary and a corporate governance professional with extensive experience in corporate laws, securities laws, and regulatory compliance. He possesses significant expertise in the Companies Act, 2013, SEBI Regulations, listing compliances, secretarial audits, Board and shareholder advisory, corporate restructuring, FEMA compliances, and regulatory matters.
                    <br /><br />
                    Throughout his professional career, he has advised and supported listed and unlisted companies in strengthening governance frameworks, ensuring statutory compliance, and implementing best corporate governance practices. His strong understanding of corporate legal and secretarial matters enables him to provide strategic guidance on governance, compliance, and regulatory affairs, contributing to sustainable business growth and stakeholder value.
                    <br /><br />
                    The details of the positions held in other entities are as under:
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <th><strong>SN</strong></th>
                          <th><strong>NAME OF BODY CORPORATE</strong></th>
                          <th><strong>DESIGNATION</strong></th>
                        </tr>
                        <tr><td>1.</td><td>MUDRA CAPITAL VENTURES PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>2.</td><td>MUDRA RTA VENTURES PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>3.</td><td>EVEH REALTY PRIVATE LIMITED</td><td>Company Secretary</td></tr>
                        <tr><td>4.</td><td>Barista Coffee Company Limited</td><td>Director</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Mr. Neeraj Jain - Independent Director */}
              <div className={`et_pb_module et_pb_toggle ${openToggles.toggle5 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_5 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle5')}>
                  Mr. Neeraj Jain - Independent Director
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    FCS Neeraj Jain is a Fellow Member of the Institute of Company Secretaries of India (ICSI) and a distinguished corporate advisory professional with extensive expertise in capital markets, corporate finance, and regulatory compliance. He is a qualified Insolvency Professional registered with the Insolvency and Bankruptcy Board of India (IBBI) and possesses significant experience in SME IPOs, investment banking, business valuation, fund raising, and corporate restructuring.
                    <br /><br />
                    Over the course of his professional career, Mr. Jain has advised numerous companies on equity capital raising, SME listings, valuation assignments, mergers and acquisitions, insolvency and resolution processes, and strategic financial transactions. His expertise encompasses corporate governance, securities laws, due diligence, regulatory approvals, transaction structuring, and implementation of robust compliance frameworks, enabling businesses to achieve sustainable growth while adhering to the highest standards of governance.
                    <br /><br />
                    In addition to his corporate advisory practice, Mr. Jain is actively engaged in promoting responsible and sustainable business practices as a Certified Social Auditor. His multidisciplinary experience across corporate law, finance, valuation, and capital markets enables him to provide comprehensive strategic guidance to businesses throughout their growth lifecycle.
                    <br /><br />
                    The details of the positions held in other entities are as under:
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <th><strong>SN</strong></th>
                          <th><strong>NAME OF BODY CORPORATE</strong></th>
                          <th><strong>DESIGNATION</strong></th>
                        </tr>
                        <tr><td>1.</td><td>A1 AGRI GLOBAL LIMITED</td><td>Director</td></tr>
                        <tr><td>2.</td><td>JMG CORPORATION LIMITED</td><td>Director</td></tr>
                        <tr><td>3.</td><td>EEZ VALUATION SERVICES PRIVATE LIMITED</td><td>Director</td></tr>
                        <tr><td>4.</td><td>C &amp; C TOWERS LIMITED</td><td>Director</td></tr>
                        <tr><td>5.</td><td>GEOSYS INDIA INFRASTRUCTURES LIMITED</td><td>Director</td></tr>
                        <tr><td>6.</td><td>Barista Coffee Company Limited</td><td>Director</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Mr. Manish Makhija - Group CFO */}
              <div className={`et_pb_module et_pb_toggle ${openToggles.toggle6 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_6 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle6')}>
                  Mr. Manish Makhija - Group CFO
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    Mr. Manish Makhija is a seasoned finance professional with over 21 years of extensive experience in finance, accounts, strategic planning, financial controls, treasury management, and business finance. He has demonstrated expertise in driving financial strategy, strengthening internal controls, optimizing working capital, and supporting sustainable business growth across diverse business environments.
                    <br /><br />
                    Throughout his career, Mr. Makhija has been actively involved in financial planning and analysis, budgeting, financial reporting, fund management, cash flow optimization, statutory and regulatory compliance, taxation, audit coordination, and implementation of robust financial control systems. He possesses strong commercial acumen and has successfully partnered with business leadership in formulating and executing strategic initiatives to enhance operational efficiency and profitability.
                    <br /><br />
                    Mr. Makhija is currently also serves as VP – Finance &amp; Accounts at Barista Coffee Company Limited, where he plays a key role in overseeing the Company's finance and accounting functions, financial governance, treasury operations, and business planning. His leadership and extensive experience continue to contribute significantly to the Company's financial discipline, operational excellence, and long-term value creation for stakeholders.
                  </p>
                </div>
              </div>

              {/* Mr. Narender Kumar Sharma - CS */}
              <div className={`et_pb_module et_pb_toggle ${openToggles.toggle7 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_7 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle7')}>
                  Mr. Narender Kumar Sharma - Group Head - Company Secretary
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <p>
                    CS Narender Kumar is the Group Head – Company Secretary and a seasoned corporate governance and compliance professional with extensive experience in corporate laws, secretarial practice, and regulatory advisory. As a qualified Company Secretary, he possesses in-depth expertise in the Companies Act, 2013, SEBI Regulations, FEMA compliances, corporate governance, Board and committee advisory, secretarial audits, due diligence, and statutory compliance.
                    <br /><br />
                    Throughout his professional career, Mr. Kumar has advised and assisted listed and unlisted companies on a wide range of corporate and regulatory matters, including Board processes, corporate restructuring, capital market transactions, governance frameworks, and compliance management. He has played a significant role in strengthening corporate governance practices, ensuring regulatory compliance, and facilitating effective stakeholder engagement.
                    <br /><br />
                    With his sound understanding of corporate and securities laws and a solution-oriented approach, Mr. Kumar continues to provide strategic guidance on governance, risk management, and compliance, contributing to sustainable business growth and long-term value creation for stakeholders.
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

export default ManagementTeamPage;