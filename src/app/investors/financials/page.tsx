// app/financials/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/layout/Navbar';
import './Financials.css';

type YearBlock = {
  year: string;
  items: { label: string; href: string }[];
};

const consolidatedData: YearBlock[] = [
  {
    year: 'Financial Results 2025-26',
    items: [
      { label: 'Q1- Unaudited Financial Statement', href: '/uploads/2025-26/Consolidate/Console.pdf' },
      { label: 'Q2- Unaudited Financial Statement', href: '/uploads/2025-26/Consolidate/ConsoleSep25.pdf' },
      { label: 'Q3- Unaudited Financial Statement', href: '/uploads/2025-26/Consolidate/ConsoleMarch.pdf' },
      { label: 'Q4- Audited Financial Statement', href: '/uploads/2025-26/Consolidate/ConsoleJune.pdf' },
    ],
  },
  {
    year: 'Financial Results 2024-25',
    items: [
      { label: 'Q1- Unaudited Financial Statement', href: '/uploads/2024-25/Consolidate/Dec2024ConsolewithAR.pdf' },
      { label: 'Q2- Unaudited Financial Statement', href: '/uploads/2024-25/Consolidate/Sept2024_ConsolewithAR.pdf' },
      { label: 'Q3- Unaudited Financial Statement', href: '/uploads/2024-25/Consolidate/ARConsole_March25.pdf' },
      { label: 'Q4- Audited Financial Statement', href: '/uploads/2024-25/Consolidate/June24Console.pdf' },
    ],
  },
  {
    year: 'Financial Results 2023-24',
    items: [
      { label: 'Q1- Unaudited Financial Statement', href: '/uploads/2023-24/consolidate/Dec2023_Console.pdf' },
      { label: 'Q2- Unaudited Financial Statement', href: '/uploads/2023-24/consolidate/Sept23Console.pdf' },
      { label: 'Q3- Unaudited Financial Statement', href: '/uploads/2023-24/consolidate/March24Console.pdf' },
      { label: 'Q4- Audited Financial Statement', href: '/uploads/2023-24/consolidate/June23Console.pdf' },
    ],
  },
];

const standaloneData: YearBlock[] = [
  {
    year: 'Financial Results 2025-26',
    items: [
      { label: 'Q1- Unaudited Financial Statement', href: '/uploads/2025-26/Standalone/Standalone.pdf' },
      { label: 'Q2- Unaudited Financial Statement', href: '/uploads/2025-26/Standalone/Standalonesept25.pdf' },
      { label: 'Q3- Unaudited Financial Statement', href: '/uploads/2025-26/Standalone/StandaloneJune25.pdf' },
      { label: 'Q4- Audited Financial Statement', href: '/uploads/2025-26/Standalone/MarchStandalone.pdf' },
    ],
  },
  {
    year: 'Financial Results 2024-25',
    items: [
      { label: 'Q1- Unaudited Financial Statement', href: '/uploads/2024-25/Standalone/Dec2024standalonewithAR.pdf' },
      { label: 'Q2- Unaudited Financial Statement', href: '/uploads/2024-25/Standalone/Sept2024_StandalonewithAR.pdf' },
      { label: 'Q3- Unaudited Financial Statement', href: '/uploads/2024-25/Standalone/June24standalone.pdf' },
      { label: 'Q4- Audited Financial Statement', href: '/uploads/2024-25/Standalone/ARStandalone_March25.pdf' },
    ],
  },
  {
    year: 'Financial Results 2023-24',
    items: [
      { label: 'Q1- Unaudited Financial Statement', href: '/uploads/2023-24/Standalone/Dec23Standalone.pdf' },
      { label: 'Q2- Unaudited Financial Statement', href: '/uploads/2023-24/Standalone/Sept23Standalone.pdf' },
      { label: 'Q3- Unaudited Financial Statement', href: '/uploads/2023-24/Standalone/June2023_StanalonewithAR.pdf' },
      { label: 'Q4- Audited Financial Statement', href: '/uploads/2023-24/Standalone/March24Stanalone.pdf' },
    ],
  },
];

// Renders every year block for a section in one shot — this whole
// group opens/closes together whenever the parent (Consolidated /
// Standalone) header is clicked.
const YearGroup = ({ data }: { data: YearBlock[] }) => (
  <>
    {data.map((block) => (
      <div key={block.year} className="et_pb_toggle_year_block">
        <h6 className="et_pb_toggle_year_title">{block.year}</h6>
        <div className="et_pb_toggle_content clearfix">
          <ul>
            {block.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </>
);

const FinancialsPage = () => {
  // Top-level toggles only — opening/closing one of these
  // opens/closes ALL of its years (2025-26, 2024-25, 2023-24) together.
  const [openConsolidated, setOpenConsolidated] = useState(true);
  const [openStandalone, setOpenStandalone] = useState(true);

  return (
    <div className="financials-page">
      <Navbar />

      <div className="pt-[88px]">
        <div className="et_pb_section et_pb_section_1 et_section_regular">
          <div className="et_pb_row et_pb_row_0">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">

              {/* QUARTERLY FINANCIAL RESULTS */}
              <div className="et_pb_text et_pb_module et_pb_bg_layout_light et_pb_text_align_left et_pb_text_0">
                <div className="et_pb_text_inner">
                  <h2>FINANCIAL RESULTS</h2>
                </div>
              </div>

              <div className="et_pb_module et_pb_accordion et_pb_accordion_0">

                {/* CONSOLIDATED */}
                <div
                  className={`et_pb_module et_pb_toggle ${
                    openConsolidated ? 'et_pb_toggle_open' : 'et_pb_toggle_close'
                  } et_pb_accordion_item_0`}
                >
                  <h5
                    className="et_pb_toggle_title"
                    onClick={() => setOpenConsolidated((prev) => !prev)}
                  >
                    CONSOLIDATED
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <YearGroup data={consolidatedData} />
                  </div>
                </div>

                {/* STANDALONE */}
                <div
                  className={`et_pb_module et_pb_toggle ${
                    openStandalone ? 'et_pb_toggle_open' : 'et_pb_toggle_close'
                  } et_pb_accordion_item_1`}
                >
                  <h5
                    className="et_pb_toggle_title"
                    onClick={() => setOpenStandalone((prev) => !prev)}
                  >
                    STANDALONE
                  </h5>
                  <div className="et_pb_toggle_content clearfix">
                    <YearGroup data={standaloneData} />
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

export default FinancialsPage;
