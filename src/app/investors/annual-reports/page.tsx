// app/annual-reports/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './AnnualReports.css';

const AnnualReportsPage = () => {
  // State for Annual Reports toggle
  const [openAnnualReports, setOpenAnnualReports] = useState(true);

  return (
    <div className="annual-reports-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              
              {/* ANNUAL REPORTS Header */}
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h2>ANNUAL REPORTS</h2>
                </div>
              </div>

              <div className="et_pb_module et_pb_space et_pb_divider et_pb_divider_0 et_pb_divider_position_top et-hide-mobile">
                <div className="et_pb_divider_internal"></div>
              </div>

              {/* Annual Reports Accordion */}
              <div className={`et_pb_module et_pb_toggle ${openAnnualReports ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_toggle_0 et_pb_toggle_item`}>
                <h5 className="et_pb_toggle_title" onClick={() => setOpenAnnualReports(!openAnnualReports)}>
                  Annual Reports
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/09/Annual-Return_2024-25.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2024-25</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/01/41st-Annual-Report-2023-24.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2023-24</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/01/40th-Annual-Report.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2023</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2022/06/39TH-ICVL-ANNUAL-REPORT-2022.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2022</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2021/09/Annual-Report-ICVL-2020-21.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2021</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2020.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2020</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2019.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2019</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2018.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2018</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2017.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2017</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2016.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2016</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2015.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2015</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2014.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2014</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2013.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2013</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2012.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2012</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Annual-Report-2011.pdf" target="_blank" rel="noopener noreferrer">Annual Report 2011</a></li>
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

export default AnnualReportsPage;