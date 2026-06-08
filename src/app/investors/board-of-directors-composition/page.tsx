// app/board-of-directors-composition/page.tsx
'use client';

import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import './BoardOfDirectorsComposition.css';

const BoardOfDirectorsCompositionPage = () => {
  return (
    <div className="board-composition-page">
      {/* Hero Section */}
      <div className="et_pb_section et_pb_fullwidth_section et_pb_section_0 et_section_regular">
        <section className="et_pb_fullwidth_header et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_fullwidth_header_0">
          <div className="et_pb_fullwidth_header_container left">
            <div className="header-content-container center">
              <div className="header-content">
                <h1>Board of Directors Composition</h1>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Main Content Section */}
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
            
            <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
              <div className="et_pb_text_inner">
                <h1>Board of Directors Composition</h1>
              </div>
            </div>

            <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_1">
              <div className="et_pb_text_inner">
                
                {/* Board of Directors/KMP Table */}
                <h4>Board of Directors/KMP</h4>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td width="4%"><strong>S.No.</strong></td>
                        <td width="43%"><strong>Name</strong></td>
                        <td width="19%"><strong>Designation</strong></td>
                        <td width="34%"><strong>Category</strong></td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Mr. Anubhav Dham</td>
                        <td>Director</td>
                        <td>Executive Director</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Ms. Anamika Dham</td>
                        <td>Director</td>
                        <td>Executive Director</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Ms. Aarti Jain</td>
                        <td>Managing Director</td>
                        <td>Executive Director</td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Mr. Ritesh Kalra</td>
                        <td>Director</td>
                        <td>Non-Executive Independent Director</td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>Mr. Neeraj Jain</td>
                        <td>Director</td>
                        <td>Non-Executive Independent Director</td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>Mr. Sudhanshu Singhal</td>
                        <td>Director</td>
                        <td>Non-Executive Independent Director</td>
                      </tr>
                      <tr>
                        <td>7.</td>
                        <td>Mr. Manish Makhija</td>
                        <td>CFO</td>
                        <td>NA</td>
                      </tr>
                      <tr>
                        <td>8.</td>
                        <td>Mr. Narender Kumar</td>
                        <td>Company Secretary</td>
                        <td>NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>&nbsp;</p>

                {/* Audit Committee Table */}
                <h4>Audit Committee</h4>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td width="4%"><strong>S.No.</strong></td>
                        <td width="43%"><strong>Name</strong></td>
                        <td width="19%"><strong>Designation</strong></td>
                        <td width="34%"><strong>Category</strong></td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Mr. Ritesh Kalra</td>
                        <td>Chairperson</td>
                        <td>Non-Executive &amp; Independent Director</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Mr. Anubhav Dham</td>
                        <td>Member</td>
                        <td>Non-Executive – Non Independent Director</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Mr. Neeraj Jain</td>
                        <td>Member</td>
                        <td>Non-Executive &amp; Independent Director</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>&nbsp;</p>

                {/* Nomination & Remuneration Committee Table */}
                <h4>Nomination &amp; Remuneration Committee</h4>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td width="4%"><strong>S.No.</strong></td>
                        <td width="43%"><strong>Name</strong></td>
                        <td width="19%"><strong>Designation</strong></td>
                        <td width="34%"><strong>Category</strong></td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Mr. Ritesh Kalra</td>
                        <td>Chairperson</td>
                        <td>Non-Executive &amp; Independent Director</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Mr. Anubhav Dham</td>
                        <td>Member</td>
                        <td>Non-Executive – Non Independent Director</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Mr. Neeraj Jain</td>
                        <td>Member</td>
                        <td>Non-Executive &amp; Independent Director</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>&nbsp;</p>

                {/* Stakeholder's Relationship Committee Table */}
                <h4>Stakeholder's Relationship Committee</h4>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover table-striped" border={0} width="100%" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td width="4%"><strong>S.No.</strong></td>
                        <td width="43%"><strong>Name</strong></td>
                        <td width="19%"><strong>Designation</strong></td>
                        <td width="34%"><strong>Category</strong></td>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Mr. Ritesh Kalra</td>
                        <td>Chairperson</td>
                        <td>Non-Executive &amp; Independent Director</td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Mr. Anubhav Dham</td>
                        <td>Member</td>
                        <td>Non-Executive – Non Independent Director</td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Mr. Neeraj Jain</td>
                        <td>Member</td>
                        <td>Non-Executive &amp; Independent Director</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectorsCompositionPage;