export interface InvestorCategory {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  documents: {
    title: string;
    year?: string;
    fileUrl: string;
  }[];
}

export const investorCategories: InvestorCategory[] = [
  {
    slug: "annual-reports",
    title: "Annual Reports",
    subtitle: "Investor Relations",
    description:
      "Access annual reports, management discussions and corporate performance updates.",

    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000",

    documents: [
      {
        title: "Annual Report 2024-25",
        year: "2025",
        fileUrl: "#",
      },
      {
        title: "Annual Report 2023-24",
        year: "2024",
        fileUrl: "#",
      },
      {
        title: "Annual Report 2022-23",
        year: "2023",
        fileUrl: "#",
      },
    ],
  },

  {
    slug: "financials",
    title: "Financial Statements",
    subtitle: "Financial Information",
    description:
      "Quarterly and annual financial statements, earnings releases and disclosures.",

    heroImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000",

    documents: [
      {
        title: "Q4 Financial Results",
        year: "2025",
        fileUrl: "#",
      },
      {
        title: "Q3 Financial Results",
        year: "2025",
        fileUrl: "#",
      },
      {
        title: "Annual Financial Statement",
        year: "2025",
        fileUrl: "#",
      },
    ],
  },

  {
    slug: "governance",
    title: "Corporate Governance",
    subtitle: "Governance Framework",
    description:
      "Governance practices, board committees and compliance information.",

    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000",

    documents: [
      {
        title: "Board Committee Charter",
        fileUrl: "#",
      },
      {
        title: "Governance Framework",
        fileUrl: "#",
      },
    ],
  },

  {
    slug: "policies",
    title: "Corporate Policies",
    subtitle: "Policies & Compliance",
    description:
      "Corporate policies, codes of conduct and compliance disclosures.",

    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000",

    documents: [
      {
        title: "Code of Conduct",
        fileUrl: "#",
      },
      {
        title: "Whistleblower Policy",
        fileUrl: "#",
      },
      {
        title: "CSR Policy",
        fileUrl: "#",
      },
    ],
  },

  {
    slug: "shareholders",
    title: "Shareholder Information",
    subtitle: "Investor Services",
    description:
      "Important information and updates for shareholders and investors.",

    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000",

    documents: [
      {
        title: "Shareholding Pattern",
        fileUrl: "#",
      },
      {
        title: "Investor Communication",
        fileUrl: "#",
      },
    ],
  },

  {
    slug: "csr",
    title: "CSR Documents",
    subtitle: "CSR & Sustainability",
    description:
      "Community initiatives, sustainability programs and CSR reports.",

    heroImage:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000",

    documents: [
      {
        title: "CSR Annual Report",
        year: "2025",
        fileUrl: "#",
      },
      {
        title: "Sustainability Report",
        year: "2025",
        fileUrl: "#",
      },
    ],
  },
];

export const getInvestorCategory = (slug: string) =>
  investorCategories.find((item) => item.slug === slug);