// app/business-overview/page.tsx (updated)
import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import './BusinessOverview.css';

const BusinessOverviewPage = () => {
  return (
    <div className="business-overview-page">
      <Navbar />
      {/* Main Content Section */}
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        {/* Rest of your content remains the same */}
        <div className="et_pb_row et_pb_row_0">
          <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
            <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
              <div className="et_pb_text_inner">
                <h1>BUSINESS OVERVIEW</h1>
              </div>
            </div>
            <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_1">
              <div className="et_pb_text_inner">
                <h3>Our Values-</h3>
                <ul>
                  <li>
                    <strong>Quality :</strong> We never compromise on the quality of our ingredients,
                    preparation, or service.
                  </li>
                  <li>
                    <strong>Innovation :</strong> We constantly strive to innovate and elevate our
                    offerings to meet and exceed customer expectations.
                  </li>
                  <li>
                    <strong>Customer-Centric :</strong> Our guests are at the heart of everything we
                    do. We are dedicated to delivering exceptional experiences with every
                    interaction.
                  </li>
                  <li>
                    <strong>Integrity :</strong> We operate with transparency and integrity, building
                    trust with our customers, partners, and employees.
                  </li>
                </ul>
                <h3></h3>
                <h3>Our Brands-</h3>
                <p>
                  <strong>Barista Coffee</strong>
                  <br />
                  Established in the year 2000, Barista Coffee Company is the pioneer of coffee
                  culture in India. The Barista Café chain delivers a true coffee experience in a
                  warm, friendly, and relaxed environment. It provides a comfortable place for
                  people to unwind over interesting conversations and a hot cup of coffee. Besides
                  India, cafés are located across the islands of Sri Lanka and Maldives. Our mission
                  is to provide a delightful coffee experience that brings people together, making
                  every visit a memorable one.
                  <br />
                  <strong>Visit Website –</strong>{' '}
                  <a href="https://www.barista.co.in/" target="_blank" rel="noopener noreferrer">
                    https://www.barista.co.in/
                  </a>
                </p>
                <p>
                  <strong>Kylin</strong>
                  <br />
                  Kylin offers an exquisite journey through the flavors of Asia. With a focus on
                  authentic and innovative dishes, our menu is crafted to deliver a gastronomic
                  experience that delights the senses. From sushi to stir-fries, Kylin brings the
                  best of Asian cuisine to your table.
                  <br />
                  <strong>Visit Website –</strong>{' '}
                  <a href="https://kylinexperience.com/" target="_blank" rel="noopener noreferrer">
                    https://kylinexperience.com/
                  </a>
                </p>
                <p>
                  <strong>Wanchai</strong>
                  <br />
                  Wanchai brings the heart of Quick service Pan Asian cuisine to India. Our chefs
                  combine traditional recipes with modern techniques to create dishes that are both
                  comforting and adventurous. Whether you’re craving dim sum or a hearty bowl of
                  noodles, Wanchai promises a dining experience that captures the essence of Asia.
                </p>
                <p>
                  <strong>Drizzle &amp; Dust</strong>
                  <br />
                  Indulge your sweet tooth with Drizzle &amp; Dust, our dessert brand that transforms
                  everyday treats into extraordinary delights. From decadent cakes to artisanal
                  pastries, each creation is crafted with precision and passion. Drizzle &amp; Dust
                  is where dessert dreams come true.
                  <br />
                  <strong>Visit Website –</strong>{' '}
                  <a href="https://drizzleanddust.in/" target="_blank" rel="noopener noreferrer">
                    https://drizzleanddust.in/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOverviewPage;