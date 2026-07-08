// app/newspaper-add/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './NewspaperAdd.css';

const NewspaperAddPage = () => {
  // State for Newspaper Add accordion
  const [openNewspaperAdd, setOpenNewspaperAdd] = useState(true);

  return (
    <div className="newspaper-add-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
              
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h1>Newspaper Advertisement</h1>
                </div>
              </div>

              <div className="et_pb_module et_pb_accordion et_pb_accordion_0">
                
                {/* Newspaper Add Accordion */}
                <div className={`et_pb_module et_pb_toggle ${openNewspaperAdd ? 'et_pb_toggle_open' : 'et_pb_toggle_close'} et_pb_accordion_item_0`}>
                  <h5 className="et_pb_toggle_title" onClick={() => setOpenNewspaperAdd(!openNewspaperAdd)}>
                    Newspaper Advertisements
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <ul>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/04/Q1-24-25.pdf" target="_blank" rel="noopener noreferrer">
                          Q1 2024-2025
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/04/Q2-24-25.pdf" target="_blank" rel="noopener noreferrer">
                          Q2 2024-2025
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gourmetgateway.co.in/wp-content/uploads/2025/04/Q3-24-25.pdf" target="_blank" rel="noopener noreferrer">
                          Q3 2024-2025
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

export default NewspaperAddPage;