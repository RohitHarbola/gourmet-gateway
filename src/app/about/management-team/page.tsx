// app/management-team/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
    toggle7: true,
    toggle8: true,
    toggle9: true
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
        <div className="management-section">
          <div className="row">
            <div className="column">
              <div className="page-heading">
                <h1>BRIEF PROFILE OF THE BOARD OF DIRECTORS and KMP</h1>
              </div>

              <div className="team-grid">

              {/* Mr. Anubhav Dham - Managing Director and Chairperson */}
              <div className={`team-member ${openToggles.toggle0 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Mr. Anubhav Dham - Managing Director and Chairperson
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/blank.png"
                      alt="Mr. Anubhav Dham"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    Mr. Anubhav Dham is the Managing Director of the Company and a seasoned business leader with over nine years of experience in corporate strategy, business transformation, and investments. He holds a Bachelor's degree from the University of Southern California and earned his Master of Business Administration (MBA) from IESE Business School, Spain, in 2012.
                    <br /><br />
                    Over the course of his career, Mr. Dham has played a pivotal role in formulating and executing business and financial strategies across diverse industries, including packaging, heavy engineering, automotive, and manufacturing. His expertise spans strategic planning, operational restructuring, capital allocation, mergers and acquisitions, and driving sustainable business growth.
                    <br /><br />
                    In recent years, he has expanded his focus to the food and beverage industry, where he has been instrumental in strengthening business operations, enhancing brand value, and driving growth initiatives. Under his leadership, the Company continues to focus on operational excellence, customer-centric innovation, and long-term value creation while pursuing strategic expansion opportunities.
                    <br /><br />
                  </p>
                </div>
              </div>

              {/* Ms. Anamika Dham - Executive Director */}
              <div className={`team-member ${openToggles.toggle1 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title">
                  Ms. Anamika Dham - Executive Director
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/Anamika.png"
                      alt="Ms. Anamika Dham"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    Ms. Anamika Dham is an Executive Director of the Company. She holds a Bachelor of Business Administration (BBA) from the Indian Institute of Planning and Management (IIPM), completed in 2009. She has over four years of professional experience in product development, brand management, and marketing across diverse sectors, including fashion and the food &amp; beverage industry.
                    <br /><br />
                    Throughout her career, Ms. Dham has been actively involved in conceptualizing and developing consumer-focused products, formulating brand positioning strategies, and driving marketing initiatives aimed at enhancing customer engagement and business growth. Her expertise encompasses product innovation, market analysis, merchandising, brand communication, and the execution of strategic marketing campaigns.
                    <br /><br />
                    In the food and beverage sector, she has contributed to the development of customer-centric offerings and brand-building initiatives while supporting business expansion and operational excellence. As an Executive Director, Ms. Dham continues to provide strategic guidance in product development, marketing, and brand management, contributing to the Company's long-term growth and value creation.
                    <br /><br />
                  </p>
                </div>
              </div>

              {/* Ms. Aarti Jain - Managing Director */}
              <div className={`team-member ${openToggles.toggle2 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Ms. Aarti Jain - Managing Director
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/Aarti.png"
                      alt="Ms. Aarti Jain"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    Ms. Aarti Jain is the Managing Director of the Company and a seasoned business leader with over 26 years of extensive experience in corporate finance, strategic management, marketing, and business development. She holds an MBA (Marketing) from Manchester Business School and a Post Graduate Diploma in Garment Manufacturing Technology from the National Institute of Fashion Technology (NIFT).
                    <br /><br />
                    Throughout her distinguished career, Ms. Jain has successfully led business transformation initiatives across diverse industries, including packaging, manufacturing, hospitality, retail, and food &amp; beverage. She possesses extensive expertise in corporate finance, strategic planning, brand development, marketing, business expansion, and operational excellence. Her leadership has been instrumental in driving sustainable growth, strengthening corporate governance, and creating long-term value for stakeholders.
                    <br /><br />
                    As Managing Director, Ms. Jain provides strategic direction to the Company's growth initiatives, with a strong focus on business innovation, financial discipline, customer-centric strategies, and organizational excellence. She also serves on the boards of several companies across diverse sectors, reflecting her broad business acumen and leadership experience.
                    <br /><br />
                  </p>
                </div>
              </div>

              {/* Mr. Sudhanshu Singhal - Independent Director */}
              <div className={`team-member ${openToggles.toggle3 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Mr. Sudhanshu Singhal - Independent Director
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/SudhanshuSinghal.png"
                      alt="Mr. Sudhanshu Singhal"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    CS Sudhanshu Singhal is a distinguished Company Secretary and corporate governance professional with extensive experience in corporate laws, securities laws, and regulatory compliance. He is a Fellow Member of the Institute of Company Secretaries of India (ICSI) and has established himself as a trusted advisor in the areas of corporate restructuring, governance, secretarial audits, due diligence, and regulatory advisory.
                    <br /><br />
                    Over the course of his professional career, Mr. Singhal has advised a wide spectrum of listed and unlisted companies on matters relating to the Companies Act, 2013, SEBI Regulations, FEMA compliances, corporate restructuring, mergers and acquisitions, XBRL reporting, and corporate governance frameworks. His expertise extends to Board and shareholder advisory, secretarial compliance, regulatory approvals, and implementation of best governance practices.
                    <br /><br />
                    In addition to his professional practice, Mr. Singhal is a regular speaker at seminars and professional development programmes organized by various chapters of ICSI, where he shares practical insights on evolving corporate and regulatory developments. He is widely recognized for his thought leadership and commitment to strengthening corporate governance standards and promoting ethical business practices.
                    <br /><br />
                  </p>
                </div>
              </div>

              {/* Mr. Ritesh Kalra - Independent Director */}
              <div className={`team-member ${openToggles.toggle4 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Mr. Ritesh Kalra - Independent Director
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/blank.png"
                      alt="Mr. Ritesh Kalra"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    Mr. Ritesh Kalra is a qualified Company Secretary and a corporate governance professional with extensive experience in corporate laws, securities laws, and regulatory compliance. He possesses significant expertise in the Companies Act, 2013, SEBI Regulations, listing compliances, secretarial audits, Board and shareholder advisory, corporate restructuring, FEMA compliances, and regulatory matters.
                    <br /><br />
                    Throughout his professional career, he has advised and supported listed and unlisted companies in strengthening governance frameworks, ensuring statutory compliance, and implementing best corporate governance practices. His strong understanding of corporate legal and secretarial matters enables him to provide strategic guidance on governance, compliance, and regulatory affairs, contributing to sustainable business growth and stakeholder value.
                    <br /><br />
                  </p>
                </div>
              </div>

              {/* Mr. Neeraj Jain - Independent Director */}
              <div className={`team-member ${openToggles.toggle5 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Mr. Neeraj Jain - Independent Director
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/NeerajJain.png"
                      alt="Mr. Neeraj Jain"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    FCS Neeraj Jain is a Fellow Member of the Institute of Company Secretaries of India (ICSI) and a distinguished corporate advisory professional with extensive expertise in capital markets, corporate finance, and regulatory compliance. He is a qualified Insolvency Professional registered with the Insolvency and Bankruptcy Board of India (IBBI) and possesses significant experience in SME IPOs, investment banking, business valuation, fund raising, and corporate restructuring.
                    <br /><br />
                    Over the course of his professional career, Mr. Jain has advised numerous companies on equity capital raising, SME listings, valuation assignments, mergers and acquisitions, insolvency and resolution processes, and strategic financial transactions. His expertise encompasses corporate governance, securities laws, due diligence, regulatory approvals, transaction structuring, and implementation of robust compliance frameworks, enabling businesses to achieve sustainable growth while adhering to the highest standards of governance.
                    <br /><br />
                    In addition to his corporate advisory practice, Mr. Jain is actively engaged in promoting responsible and sustainable business practices as a Certified Social Auditor. His multidisciplinary experience across corporate law, finance, valuation, and capital markets enables him to provide comprehensive strategic guidance to businesses throughout their growth lifecycle.
                    <br /><br />
                  </p>
                </div>
              </div>

                          {/* Mr. Rajat Agrawal - Chief Executive Officer */}
              <div className={`team-member ${openToggles.toggle7 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Mr. Rajat Agrawal - Chief Executive Officer
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/RajatAgrawal.png"
                      alt="Mr. Rajat Agrawal"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    Mr. Rajat Agrawal is the Chief Executive Officer of Barista Coffee Company, one of India's pioneering café chains. With over 20 years of experience in finance, strategy, and business leadership, he is spearheading Barista's growth by driving innovation, enhancing guest experiences, and expanding the brand's footprint across India. A Chartered Accountant by profession, Rajat has previously held leadership roles at EY, Grant Thornton, and Deloitte, advising organizations across diverse industries. Passionate about building high-performing teams and fostering a culture of ownership, he is committed to strengthening Barista's legacy while shaping its next phase of sustainable growth and market leadership.
                  </p>
                </div>
              </div>

              
              {/* Mr. Manish Makhija - Group CFO */}
              <div className={`team-member ${openToggles.toggle8 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Mr. Manish Makhija - Group CFO
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/Manish.png"
                      alt="Mr. Manish Makhija"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    Mr. Manish Makhija is a seasoned finance professional with over 21 years of extensive experience in finance, accounts, strategic planning, financial controls, treasury management, and business finance. He has demonstrated expertise in driving financial strategy, strengthening internal controls, optimizing working capital, and supporting sustainable business growth across diverse business environments.
                    <br /><br />
                    Throughout his career, Mr. Makhija has been actively involved in financial planning and analysis, budgeting, financial reporting, fund management, cash flow optimization, statutory and regulatory compliance, taxation, audit coordination, and implementation of robust financial control systems. He possesses strong commercial acumen and has successfully partnered with business leadership in formulating and executing strategic initiatives to enhance operational efficiency and profitability.
                    <br /><br />
                    Mr. Makhija is currently also serves as VP – Finance &amp; Accounts at Barista Coffee Company Limited, where he plays a key role in overseeing the Company's finance and accounting functions, financial governance, treasury operations, and business planning. His leadership and extensive experience continue to contribute significantly to the Company's financial discipline, operational excellence, and long-term value creation for stakeholders.
                  </p>
                </div>
              </div>

              {/* Mr. Sanjeev Khanna - Senior Vice President – Supply Chain Management */}
              <div className={`team-member ${openToggles.toggle6 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Mr. Sanjeev Khanna - Senior Vice President – Supply Chain Management
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/Sanjeev.png"
                      alt="Mr. Sanjeev Khanna"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
                  <p>
                    Mr. Sanjeev Khanna is the Senior Vice President – Supply Chain Management, New Product Development (NPD) & Alliances at Barista Coffee Company. With over 25 years of experience in strategy and growth across the food & beverage industry, he leads key functions including supply chain, product innovation, strategic partnerships, and the expansion of Barista's business verticals. He has been instrumental in building Barista's vending business from the ground up, establishing it as a fast-growing channel for the brand. An MBA by qualification, Sanjeev has held leadership positions with renowned brands including Nirula's, Starbucks, Costa Coffee, and Park Plaza Hotels. Passionate about innovation, operational excellence, and building high-performing teams, he continues to drive sustainable growth while enhancing guest experiences and strengthening Barista's market leadership.
                  </p>
                </div>
              </div>

              {/* Mr. Narender Kumar Sharma - CS */}
              <div className={`team-member ${openToggles.toggle9 ? 'team-member--open' : 'team-member--closed'}`}>
                <h5 className="toggle-title" >
                  Mr. Narender Kumar Sharma - Company Secretary
                </h5>
                <div className="toggle-content clearfix">
                  <div className="team-member-photo-wrap">
                    <Image
                      src="/assets/team/blank.png"
                      alt="Mr. Narender Kumar Sharma"
                      width={220}
                      height={220}
                      className="team-member-photo"
                    />
                  </div>
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

    </div>
  );
};

export default ManagementTeamPage;
