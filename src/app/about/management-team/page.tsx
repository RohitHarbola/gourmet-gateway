// app/management-team/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './ManagementTeam.css';

const ManagementTeamPage = () => {
  // State to track which toggles are open
  const [openToggles, setOpenToggles] = useState({
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

      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container-custom">
          <span className="eyebrow text-[var(--c-gold)]">
            ABOUT GOURMET GATEWAY
          </span>

          <h1 className="display-xl text-white mt-6 max-w-5xl">
            Bringing Exceptional
            <br />
            Dining Experiences
            <br />
            Across Markets
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
            <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
              <div className="et_pb_text_inner">
                <h1>BRIEF PROFILE OF THE BOARD OF DIRECTORS OF THE COMPANY</h1>
              </div>
            </div>

            {/* Mr. Anubhav Dham - Executive Director */}
            <div className={`et_pb_module et_pb_toggle ${openToggles.toggle0 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_0 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle0')}>
                Mr. Anubhav Dham - Executive Director
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <p>
                  He completed his master's degree in MBA from IESE Business School in 2012. He has 9 years of experience and he primarily worked on business &amp; financial strategies for different sectors such as packaging, heavy engineering, automobiles etc. He also forayed into the F &amp; B segment.
                  <br />
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
                      <tr><td>2.</td><td>MARTINA DEVELOPERS &amp; FINCON PVT LTD</td><td>Director</td></tr>
                      <tr><td>3.</td><td>SO INDULGENT INDIA PRIVATE LIMITED</td><td>Additional Director</td></tr>
                      <tr><td>4.</td><td>ADRITAH AUTOPARTS PRIVATE LIMITED</td><td>Director</td></tr>
                      <tr><td>5.</td><td>AMZEN REALTORS AND DEVELOPERS PRIVATE LIMITED</td><td>Director</td></tr>
                      <tr><td>6.</td><td>MARISSA VILLA AND RESORT PRIVATE LIMITED</td><td>Director</td></tr>
                      <tr><td>7.</td><td>AMFINE CAPITAL MANAGEMENT PRIVATE LIMITED</td><td>Director</td></tr>
                      <tr><td>8.</td><td>AMZEN GLOBAL CORPORATION PRIVATE LIMITED</td><td>Director</td></tr>
                      <tr><td>9.</td><td>FUTUREVISION CONSULTANTS PRIVATE LIMITED</td><td>Director</td></tr>
                      <tr><td>10.</td><td>FAITH ADVISORY SERVICES PRIVATE LIMITED</td><td>Additional Director</td></tr>
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
                  She completed her Bachelors of Business Administration in 2009 from Indian Institute of Planning Management and She has 4 years of experience in the field of Product Development and marketing for different sectors such as fashion marketing, F&amp;B segment etc.
                  <br />
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
                      <tr><td>7.</td><td>V3 ADVISORS LLP</td><td>Designated Partner</td></tr>
                      <tr><td>8.</td><td>AERTHAA ESCAPES LLP</td><td>Designated Partner</td></tr>
                      <tr><td>9.</td><td>ADRITAH AUTOMOTIVE LLP</td><td>Designated Partner</td></tr>
                      <tr><td>10.</td><td>FINOCIAL INFORMATION SYSTEMS LLP</td><td>Designated Partner</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Ms. Aarti Jain - Non - Executive Director */}
            <div className={`et_pb_module et_pb_toggle ${openToggles.toggle2 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_2 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle2')}>
                Ms. Aarti Jain- Non - Executive Director
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <p>
                  She completed her MBA (Marketing) from Manchester Business School and Post Graduate Diploma in Garment Manufacturing Technology from NIFT. She has 26 years of Experience in Finance and Marketing.
                  <br />
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

            {/* Mr. Neeraj Jain - Non-Executive Independent Director */}
            <div className={`et_pb_module et_pb_toggle ${openToggles.toggle3 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_3 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle3')}>
                Mr. Neeraj Jain - Non- Executive Independent Director
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <p>The details of the positions held in other entities are as under:</p>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mr. Ritesh Kalra - Non-Executive Independent Director */}
            <div className={`et_pb_module et_pb_toggle ${openToggles.toggle4 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_4 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle4')}>
                Mr. Ritesh Kalra - Non- Executive Independent Director
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <p>The details of the positions held in other entities are as under:</p>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mr. Sudhanshu Singhal - Non-Executive Independent Director */}
            <div className={`et_pb_module et_pb_toggle ${openToggles.toggle5 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_5 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle5')}>
                Mr. Sudhanshu Singhal - Non- Executive Independent Director
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <p>The details of the positions held in other entities are as under:</p>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Mr. Manish Makhija - CFO */}
            <div className={`et_pb_module et_pb_toggle ${openToggles.toggle6 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_6 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle6')}>
                Mr. Manish Makhija - CFO
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <p>He is Chartered Accountant. Manish has over 25 years of experience in Finance &amp; Accounts, Statutory &amp; legal Compliances &amp; general management and has been associated in past with companies such as Suri Group, Future Group, DLF and CavinKare.</p>
              </div>
            </div>

            {/* Mr. Narender Kumar- Company Secretary */}
            <div className={`et_pb_module et_pb_toggle ${openToggles.toggle7 ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_7 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => toggleItem('toggle7')}>
                Mr. Narender Kumar- Company Secretary
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementTeamPage;