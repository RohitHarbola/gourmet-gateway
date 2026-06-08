// app/archives/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './Archives.css';

const ArchivesPage = () => {
  // State for Annual General Meetings accordion
  const [openAGM, setOpenAGM] = useState(true);
  
  type BoardMeetingYear =
    | '2017-2018'
    | '2016-2017'
    | '2015-2016'
    | '2014-2015'
    | '2013-2014';

  // State for Board Meetings accordions
  const [openBoardMeetings, setOpenBoardMeetings] = useState<Record<BoardMeetingYear, boolean>>({
    '2017-2018': true,
    '2016-2017': false,
    '2015-2016': false,
    '2014-2015': false,
    '2013-2014': false
  });

  const toggleBoardMeeting = (year: BoardMeetingYear) => {
    setOpenBoardMeetings(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <div className="archives-page">
      <Navbar />

      {/* Hero Section */}
      <div className="et_pb_section et_pb_fullwidth_section et_pb_section_0 et_section_regular">
        <section className="et_pb_fullwidth_header et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_fullwidth_header_0">
          <div className="et_pb_fullwidth_header_container left">
            <div className="header-content-container center">
              <div className="header-content">
                <h1>Archives</h1>
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
                <div className="et_pb_fullwidth_header_container left">
                  <div className="header-content-container center">
                    <div className="header-content">
                      <h1>ARCHIVES</h1>
                    </div>
                  </div>
                </div>
                <p>
                  <strong>|BSE Limited, Scrip Code- 506134 Symbol- INTELLCAP</strong><br />
                  (Exchange(s) where company is listed along with Scrip Code/Name or Symbol)
                </p>
              </div>
            </div>

            {/* Annual General Meetings Accordion */}
            <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
              <div className={`et_pb_module et_pb_toggle ${openAGM ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                <h5 className="et_pb_toggle_title" onClick={() => setOpenAGM(!openAGM)}>
                  Annual General Meetings
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/AGM-Notice-2011.pdf" target="_blank" rel="noopener noreferrer">AGM Notice 2011</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/AGM-Notice-2012.pdf" target="_blank" rel="noopener noreferrer">AGM Notice 2012</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/AGM-Notice-2013.pdf" target="_blank" rel="noopener noreferrer">AGM Notice 2013</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/AGM-Notice-2014.pdf" target="_blank" rel="noopener noreferrer">AGM Notice 2014</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/AGM-Notice-2015.pdf" target="_blank" rel="noopener noreferrer">AGM Notice 2015</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/AGM-Notice-2016.pdf" target="_blank" rel="noopener noreferrer">AGM Notice 2016</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="et_pb_module et_pb_space et_pb_divider et_pb_divider_0 et_pb_divider_position_top et-hide-mobile">
              <div className="et_pb_divider_internal"></div>
            </div>

            {/* BOARD MEETINGS Section */}
            <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_1">
              <div className="et_pb_text_inner">
                <h2>BOARD MEETINGS</h2>
              </div>
            </div>

            <div className="et_pb_module et_pb_accordion et_pb_accordion_1">
              
              {/* Board Meetings – 2017-2018 */}
              <div className={`et_pb_module et_pb_toggle ${openBoardMeetings['2017-2018'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_1`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleBoardMeeting('2017-2018')}>
                  Board Meetings – 2017-2018
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-30.05.2017.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 30.05.2017</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-11.08.2017.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 11.08.2017</a></li>
                  </ul>
                </div>
              </div>

              {/* Board Meetings – 2016-2017 */}
              <div className={`et_pb_module et_pb_toggle ${openBoardMeetings['2016-2017'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_2`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleBoardMeeting('2016-2017')}>
                  Board Meetings – 2016-2017
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-30.06.2016.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 30.06.2016</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-14.11.2016.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 14.11.2016</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-23.01.2017.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 23.01.2017</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-23.05.2016.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 23.05.2016</a></li>
                  </ul>
                </div>
              </div>

              {/* Board Meetings – 2015-2016 */}
              <div className={`et_pb_module et_pb_toggle ${openBoardMeetings['2015-2016'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_3`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleBoardMeeting('2015-2016')}>
                  Board Meetings – 2015-2016
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-30.05.2015.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 30.05.2015</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-12.08.2015.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 12.08.2015</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-07.11.2015.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 07.11.2015</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-11.02.2016.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 11.02.2016</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-11.03.2016.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 11.03.2016</a></li>
                  </ul>
                </div>
              </div>

              {/* Board Meetings – 2014-2015 */}
              <div className={`et_pb_module et_pb_toggle ${openBoardMeetings['2014-2015'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_4`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleBoardMeeting('2014-2015')}>
                  Board Meetings – 2014-2015
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-30.05.2014-1.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 30.05.2014</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-13.08.2014.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 13.08.2014</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-14.11.2014.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 14.11.2014</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-13.02.2015.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 13.02.2015</a></li>
                  </ul>
                </div>
              </div>

              {/* Board Meetings – 2013-2014 */}
              <div className={`et_pb_module et_pb_toggle ${openBoardMeetings['2013-2014'] ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_5`}>
                <h5 className="et_pb_toggle_title" onClick={() => toggleBoardMeeting('2013-2014')}>
                  Board Meetings – 2013-2014
                </h5>
                <div className="et_pb_toggle_content clearfix">
                  <ul>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-02.08.2013.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 02.08.2013</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-24.05.2013.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 24.05.2013</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-09.11.2013.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 09.11.2013</a></li>
                    <li><a href="https://www.gourmetgateway.co.in/wp-content/uploads/2017/07/Notice-of-Board-Meeting-to-be-held-on-14.02.2014.pdf" target="_blank" rel="noopener noreferrer">Notice of Board Meeting to be held on 14.02.2014</a></li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="et_pb_module et_pb_space et_pb_divider et_pb_divider_1 et_pb_divider_position_top et-hide-mobile">
              <div className="et_pb_divider_internal"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivesPage;