// app/management-team/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import './ManagementTeam.css';

const ManagementTeamPage = () => {
  return (
    <div className="management-team-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px] md:pt-[88px]">
        <div className="management-section">
          <div className="row">
            <div className="column">
              <div className="page-heading">
                <h1>BRIEF PROFILE OF THE BOARD OF DIRECTORS AND KMP</h1>
              </div>

              <div className="team-grid">

              {/* Mr. Anubhav Dham - Managing Director and Chairperson */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Mr. Anubhav Dham – Managing Director and Chairperson
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
                  <div className="bio-content">
                    <p>
                      Mr. Anubhav Dham is the Managing Director of the Company with extensive experience in corporate strategy, business transformation, and investments.
                    </p>
                    <p>
                      He holds a Bachelor's degree from the University of Southern California and an MBA from IESE Business School, Spain.
                    </p>
                    <p>
                      He has led strategic growth initiatives across multiple industries,
                      including 
                      manufacturing and food & beverage, with a strong focus on operational excellence, innovation, and sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ms. Anamika Dham - Executive Director */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Ms. Anamika Dham – Executive Director
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
                  <div className="bio-content">
                    <p>
                      Ms. Anamika Dham is an Executive Director of the Company with experience in product development, brand management, and marketing.
                    </p>
                    <p>
                      She holds a Bachelor of Business Administration (BBA) from the Indian Institute of Planning & Management (IIPM).
                    </p>
                    <p>
                      She has contributed to product innovation, brand strategy, and customer engagement across the fashion, food and beverage industries, with a focus on business growth, brand excellence, and customer-centric initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ms. Aarti Jain - Managing Director */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Ms. Aarti Jain – Managing Director
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
                  <div className="bio-content">
                    <p>
                      Ms. Aarti Jain is the Managing Director of the Company with over 26 years of experience in corporate finance, strategic management, marketing, and business development.
                    </p>
                    <p>
                      She holds an MBA in Marketing from Manchester Business School and a Post Graduate Diploma in Garment Manufacturing Technology from NIFT.
                    </p>
                    <p>
                      She has led strategic growth and business transformation across the manufacturing, hospitality, retail, and food & beverage sectors, with a strong focus on innovation, operational excellence, and sustainable value creation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mr. Sudhanshu Singhal - Independent Director */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Mr. Sudhanshu Singhal – Independent Director
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
                  <div className="bio-content">
                    <p>
                      CS Sudhanshu Singhal is a Fellow Member of the Institute of Company Secretaries of India (ICSI) with extensive experience in corporate laws, securities regulations, and corporate governance.
                    </p>
                    <p>
                      He specializes in regulatory compliance, secretarial audits, corporate restructuring, mergers & acquisitions, and Board advisory.
                    </p>
                    <p>
                      He regularly advises listed and unlisted companies on governance and compliance matters and is a recognized speaker on corporate and regulatory developments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mr. Ritesh Kalra - Independent Director */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Mr. Ritesh Kalra – Independent Director
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
                  <div className="bio-content">
                    <p>
                      Mr. Ritesh Kalra is a qualified Company Secretary with extensive experience in corporate laws, securities regulations, and regulatory compliance.
                    </p>
                    <p>
                      He specializes in the Companies Act, 2013, SEBI Regulations, listing compliances, secretarial audits, corporate restructuring, and Board advisory.
                    </p>
                    <p>
                      He has advised listed and unlisted companies on governance, compliance, and regulatory matters, contributing to strong corporate governance and sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mr. Neeraj Jain - Independent Director */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Mr. Neeraj Jain – Independent Director
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
                  <div className="bio-content">
                    <p>
                      FCS Neeraj Jain is a Fellow Member of the Institute of Company Secretaries of India (ICSI), a registered Insolvency Professional with the IBBI, and a Certified Social Auditor.
                    </p>
                    <p>
                      He has extensive experience in capital markets, corporate finance, SME IPOs, investment banking, business valuation, fund raising, corporate restructuring, and regulatory compliance.
                    </p>
                    <p>
                      He has advised numerous companies on capital raising, mergers & acquisitions, insolvency, and corporate governance, helping businesses achieve sustainable growth and strong governance standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mr. Rajat Agrawal - Chief Executive Officer */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Mr. Rajat Agrawal – Chief Executive Officer
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
                  <div className="bio-content">
                    <p>
                      Mr. Rajat Agrawal is the Chief Executive Officer of Barista Coffee Company with over 20 years of experience in finance, strategy, and business leadership.
                    </p>
                    <p>
                      A Chartered Accountant by profession, he has held leadership roles at EY, Grant Thornton, and Deloitte.
                    </p>
                    <p>
                      He is driving Barista's growth through innovation, customer-centric strategies, operational excellence, and expansion while fostering a culture of high performance and sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mr. Manish Makhija - Group CFO */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Mr. Manish Makhija – Group CFO
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
                  <div className="bio-content">
                    <p>
                      Mr. Manish Makhija is a seasoned finance professional with over 21 years of experience in finance, accounts, strategic planning, treasury management, and financial controls.
                    </p>
                    <p>
                      He currently serves as VP – Finance & Accounts at Barista Coffee Company Limited, where he oversees finance, accounting, treasury, financial governance, and business planning.
                    </p>
                    <p>
                      He has extensive expertise in financial strategy, budgeting, compliance, taxation, audit, and business partnering, contributing to operational excellence and sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mr. Sanjeev Khanna - Senior Vice President – Supply Chain Management */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Mr. Sanjeev Khanna – Senior Vice President – Supply Chain Management
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
                  <div className="bio-content">
                    <p>
                      Mr. Sanjeev Khanna is the Senior Vice President – Supply Chain Management, New Product Development (NPD) & Alliances at Barista Coffee Company, with over 25 years of experience in the food & beverage industry.
                    </p>
                    <p>
                      He leads supply chain, product innovation, strategic partnerships, and business expansion initiatives.
                    </p>
                    <p>
                      An MBA by qualification, he has held leadership roles at Nirula's, Starbucks, Costa Coffee, and Park Plaza Hotels, and has been instrumental in building Barista's vending business while driving innovation, operational excellence, and sustainable growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mr. Narender Kumar Sharma - CS */}
              <div className="team-member team-member--open">
                <h5 className="toggle-title toggle-title--centered">
                  Mr. Narender Kumar Sharma – Company Secretary
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
                  <div className="bio-content">
                    <p>
                      CS Narender Kumar is the Group Head – Company Secretary with extensive experience in corporate governance, corporate laws, and regulatory compliance.
                    </p>
                    <p>
                      As a qualified Company Secretary, he specializes in the Companies Act, 2013, SEBI Regulations, FEMA compliances, Board advisory, secretarial audits, and corporate governance.
                    </p>
                    <p>
                      He has advised listed and unlisted companies on governance, compliance, corporate restructuring, and regulatory matters, contributing to strong governance practices, effective compliance management, and sustainable business growth.
                    </p>
                  </div>
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
