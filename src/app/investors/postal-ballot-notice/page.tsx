// app/postal-ballot-notice/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './PostalBallotNotice.css';

const PostalBallotNoticePage = () => {
  // State for Postal Ballot Notice toggle
  const [openPostalBallot, setOpenPostalBallot] = useState(true);

  return (
    <div className="postal-ballot-notice-page">
      <Navbar />

      {/* Main Content Section */}
      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
                
                {/* Postal Ballot Notice */}
                <div className={`et_pb_module et_pb_toggle ${openPostalBallot ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                  <h5 className="et_pb_toggle_title" onClick={() => setOpenPostalBallot(!openPostalBallot)}>
                    Postal Ballot Notice
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li>
                        <a 
                          href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/08/Notice-of-Postal-Ballot-19th-August-2025.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Notice of Postal Ballot 19th August 2025
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

export default PostalBallotNoticePage;