// app/investors-information/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './InvestorsInformation.css';

const InvestorsInformationPage = () => {
  // State for toggles
  const [openAnnualReturn, setOpenAnnualReturn] = useState(true);
  const [openScrutinizersReport, setOpenScrutinizersReport] = useState(true);
  const [openNominationForm, setOpenNominationForm] = useState(true);
  const [openLossCertificate, setOpenLossCertificate] = useState(true);
  const [openEmailUpdation, setOpenEmailUpdation] = useState(true);
  
  // State for tabs
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    'Board Meeting Notice',
    'Financial Results',
    'Notices to Shareholders',
    'Statement of Deviation'
  ];

  return (
    <div className="investors-information-page">
      <Navbar />

      {/* Hero Section */}
      <div className="et_pb_section et_pb_fullwidth_section et_pb_section_0 et_section_regular">
        <section className="et_pb_fullwidth_header et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_fullwidth_header_0">
          <div className="et_pb_fullwidth_header_container left">
            <div className="header-content-container center">
              <div className="header-content">
                <h1>Investors Information</h1>
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
                <h1>INVESTORS INFORMATION</h1>
              </div>
            </div>

            {/* Annual Return */}
            <div className={`et_pb_module et_pb_toggle ${openAnnualReturn ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_0 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => setOpenAnnualReturn(!openAnnualReturn)}>
                Annual Return
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <ul>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2026/05/Gourmet_Annual-Return_2024-25_Final.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2024-25</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/Annual%20Return-2023-24.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2023-24</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/ANNUAL%20RETURN%202022-23.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2022-23</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/ANNUAL%20RETURN%202021-22.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2021-22</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/ANNUAL%20RETURN%202020-21.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2020-21</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/ANNUAL%20RETURN%202019-20.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2019-20</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/ANNUAL%20RETURN%202018-19.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2018-19</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/ANNUAL%20RETURN%202017-18.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2017-18</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/ANNUAL%20RETURN%202016-17.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2016-17</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/02/ANNUAL%20RETURN%202015-16.pdf" target="_blank" rel="noopener noreferrer">Annual Return 2015-16</a></li>
                </ul>
              </div>
            </div>

            {/* View All Scrutinizers Report */}
            <div className={`et_pb_module et_pb_toggle ${openScrutinizersReport ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_1 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => setOpenScrutinizersReport(!openScrutinizersReport)}>
                View All Scrutinizers Report
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <ul>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2026/05/Scruitiniser-Report_AGM_30.09.2025-Final.pdf" target="_blank" rel="noopener noreferrer">Scrutinizer Report AGM 2025</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/Scrutinizer%20Report_Gourmet%20AGM_2024.pdf" target="_blank" rel="noopener noreferrer">Scrutinizer Report AGM 2024</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Scrutinizer%20Report%20AGM%202023.pdf" target="_blank" rel="noopener noreferrer">Scrutinizer Report AGM 2023</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Scrutinizers%20Report%20EGM%2027022024.pdf" target="_blank" rel="noopener noreferrer">Scrutinizer Report EGM 27/01/2024</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Scrutinizers-Report-31st-AGM.pdf" target="_blank" rel="noopener noreferrer">Scrutinizers Report 31st AGM</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Scrutinizers-Report-32nd-AGM.pdf" target="_blank" rel="noopener noreferrer">Scrutinizers Report 32nd AGM</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Scrutinizers-Report-33rd-AGM.pdf" target="_blank" rel="noopener noreferrer">Scrutinizers Report 33rd AGM</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Scrutinizers-Report-AGM-2017.pdf" target="_blank" rel="noopener noreferrer">Scrutinizers` Report 34th AGM</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Scrutinizers-Report-AGM-2018.pdf" target="_blank" rel="noopener noreferrer">Scrutinizers` Report AGM 2018</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Scrutinizers-Report-AGM-2019.pdf" target="_blank" rel="noopener noreferrer">Scrutinizers Report AGM 2019</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Scrutinizers-Report-AGM-2020.pdf" target="_blank" rel="noopener noreferrer">Scrutinizers Report AGM 2020</a></li>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/09/Form-No.-MGT-13-ICVL-2021-Final_compressed.pdf" target="_blank" rel="noopener noreferrer">Scrutinizers Report AGM 2021</a></li>
                </ul>
              </div>
            </div>

            {/* Newspaper Advertisement */}
            <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_1">
              <div className="et_pb_text_inner">
                <h3>Newspaper Advertisement</h3>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="et_pb_module et_pb_tabs et_pb_tabs_0">
              <ul className="et_pb_tabs_controls clearfix">
                {tabs.map((tab, index) => (
                  <li 
                    key={index}
                    className={activeTab === index ? 'et_pb_tab_active' : ''}
                    onClick={() => setActiveTab(index)}
                  >
                    <a href="#">{tab}</a>
                  </li>
                ))}
              </ul>
              <div className="et_pb_all_tabs">
                
                {/* Board Meeting Notice Tab */}
                <div className={`et_pb_tab clearfix ${activeTab === 0 ? 'et_pb_active_content' : ''}`}>
                  <div className="et_pb_tab_content">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2024/09/41st-AGM-NOTICE-ICVL-1.pdf" target="_blank" rel="noopener noreferrer">41th Annual Report</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-to-be-held-on-13.08.2019-1.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 13.08.2019</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-23.01.2017-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 23.01.2017 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-30.05.2017-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 30.05.2017 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-11.08.2017-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 11.08.2017 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-04.08.2016-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 04.08.2016 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-14.11.2016-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 14.11.2016 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-11.02.2016-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 11.02.2016 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-23.05.2016-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 23.05.2016 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-14-11-2017-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice-of-Board-Meeting-scheduled-on-14-11-2017-published-in-newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-to-be-held-on-13.08.2019.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 13.08.2019</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-to-be-held-on-13.02.2020.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 13.02.2020</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-12.08.2020-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 12.08.2020 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-12.11.2020-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 12.11.2020 published in newspaper</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-Board-Meeting-scheduled-on-12.02.2021-published-in-newspaper.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting scheduled on 12.02.2021 published in newspaper</a></li>
                    </ul>
                  </div>
                </div>

                {/* Financial Results Tab */}
                <div className={`et_pb_tab clearfix ${activeTab === 1 ? 'et_pb_active_content' : ''}`}>
                  <div className="et_pb_tab_content">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/11/Extract-of-UnAudited-Financial-Results-for-the-quarter-ended-30.09.2017.pdf" target="_blank" rel="noopener noreferrer">Extract of UnAudited Financial Results for the quarter ended 30.09.2017</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Audited-Financial-Results-for-the-quarter-ended-31.03.2017.pdf" target="_blank" rel="noopener noreferrer">Extract of Audited Financial Results for the quarter ended 31.03.2017</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Unaudited-Financial-Results-for-the-quarter-ended-30.06.2017.pdf" target="_blank" rel="noopener noreferrer">Extract of Unaudited Financial Results for the quarter ended 30.06.2017</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Audited-Financial-Results-for-the-quarter-ended-31.03.2016.pdf" target="_blank" rel="noopener noreferrer">Extract of Audited Financial Results for the quarter ended 31.03.2016</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Unaudited-Financial-Results-for-the-quarter-ended-30.06.2016.pdf" target="_blank" rel="noopener noreferrer">Extract of Unaudited Financial Results for the quarter ended 30.06.2016</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Unaudited-Financial-Results-for-the-quarter-ended-30.09.2016.pdf" target="_blank" rel="noopener noreferrer">Extract of Unaudited Financial Results for the quarter ended 30.09.2016</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Unaudited-Financial-Results-for-the-quarter-ended-31.12.2016.pdf" target="_blank" rel="noopener noreferrer">Extract of Unaudited Financial Results for the quarter ended 31.12.2016</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Unaudited-Financial-Results-for-the-quarter-ended-31.12.2015.pdf" target="_blank" rel="noopener noreferrer">Extract of Unaudited Financial Results for the quarter ended 31.12.2015</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-audited-Financial-Results-for-the-quarter-year-ended-31.03.2020.pdf" target="_blank" rel="noopener noreferrer">Extract of audited Financial Results for the quarter & year ended 31.03.2020</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Unaudited-Financial-Results-for-the-quarter-ended-30.06.2020.pdf" target="_blank" rel="noopener noreferrer">Extract of Unaudited Financial Results for the quarter ended 30.06.2020</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Unaudited-Financial-Results-for-the-quarter-half-year-ended-30.09.2020.pdf" target="_blank" rel="noopener noreferrer">Extract of Unaudited Financial Results for the quarter & half year ended 30.09.2020</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Extract-of-Unaudited-Financial-Results-for-the-quarter-nine-months-ended-31.12.2020.pdf" target="_blank" rel="noopener noreferrer">Extract of Unaudited Financial Results for the quarter & nine months ended 31.12.2020</a></li>
                    </ul>
                  </div>
                </div>

                {/* Notices to Shareholders Tab */}
                <div className={`et_pb_tab clearfix ${activeTab === 2 ? 'et_pb_active_content' : ''}`}>
                  <div className="et_pb_tab_content">
                    <ul>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2024/09/Final-Gourment-Annual-Report.pdf" target="_blank" rel="noopener noreferrer">Final Gourment Annual Report</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/09/40th-Annual-Report.pdf" target="_blank" rel="noopener noreferrer">40th Annual Report</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/PCS%20Certificate%20on%20Pricing_164(1).pdf" target="_blank" rel="noopener noreferrer">PCS Certificate on Pricing 164(1)</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/39th%20Annual%20Report_ICVL.pdf" target="_blank" rel="noopener noreferrer">39th Annual Report ICVL</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Valuation%20Report_BHPL_Equity_Final_Signed.pdf" target="_blank" rel="noopener noreferrer">Valuation Report BHPL Equity Final Signed</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/ICVL%20Valuation%20Report_166A.pdf" target="_blank" rel="noopener noreferrer">ICVL Valuation Report 166A</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/PCS%20Certificate%20on%20Preferancial%20Issue.pdf" target="_blank" rel="noopener noreferrer">PCS Certificate on Preferancial Issue</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-36th-Annual-General-Meeting-scheduled-on-16.09.2019.pdf" target="_blank" rel="noopener noreferrer">Notice of 36th Annual General Meeting scheduled on 16.09.2019</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-34th-Annual-General-Meeting-scheduled-on-22.09.2017.pdf" target="_blank" rel="noopener noreferrer">Notice of 34th Annual General Meeting scheduled on 22.09.2017</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Book-Closure-Notice-for-34th-Annual-General-Meeting.pdf" target="_blank" rel="noopener noreferrer">Book Closure Notice for 34th Annual General Meeting</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-33rd-Annual-General-Meeting-scheduled-on-03.09.2017-published-in-newspapers.pdf" target="_blank" rel="noopener noreferrer">Notice of 33rd Annual General Meeting scheduled on 03.09.2016 published in newspapers</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Notice-of-37th-Annual-General-Meeting-scheduled-on-25.09.2020.pdf" target="_blank" rel="noopener noreferrer">Notice of 37th Annual General Meeting scheduled on 25.09.2020</a></li>
                      <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2023/09/EGM-NOTICE-FINAL-ICVL.pdf" target="_blank" rel="noopener noreferrer">EGM Notice</a></li>
                    </ul>
                  </div>
                </div>

                {/* Statement of Deviation Tab */}
                <div className={`et_pb_tab clearfix ${activeTab === 3 ? 'et_pb_active_content' : ''}`}>
                  <div className="et_pb_tab_content">
                    <p>No content available</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Nomination Form - SH 13 */}
            <div className={`et_pb_module et_pb_toggle ${openNominationForm ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_2 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => setOpenNominationForm(!openNominationForm)}>
                Nomination Form - SH 13
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <ul>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Nomination-Form-SH-13.pdf" target="_blank" rel="noopener noreferrer">Nomination Form- SH-13</a></li>
                </ul>
              </div>
            </div>

            {/* Reporting Loss of Share Certificate Form */}
            <div className={`et_pb_module et_pb_toggle ${openLossCertificate ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_3 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => setOpenLossCertificate(!openLossCertificate)}>
                Reporting Loss of Share Certificate Form
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <ul>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/Format-for-reporting-loss-of-share-certificate.pdf" target="_blank" rel="noopener noreferrer">Format for reporting loss of share certificate</a></li>
                </ul>
              </div>
            </div>

            {/* Email Updation Form */}
            <div className={`et_pb_module et_pb_toggle ${openEmailUpdation ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_4 et_pb_toggle_item`}>
              <h5 className="et_pb_toggle_title" onClick={() => setOpenEmailUpdation(!openEmailUpdation)}>
                Email Updation Form
              </h5>
              <div className="et_pb_toggle_content clearfix">
                <ul>
                  <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/08/E-mail-updation-form.pdf" target="_blank" rel="noopener noreferrer">E-mail updation form</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsInformationPage;