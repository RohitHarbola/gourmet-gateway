export default function AnnualReportsPage() {
  const reports = [
    "Annual Report 2024-25",
    "Annual Report 2023-24",
    "Annual Report 2022-23",
    "Annual Report 2021-22",
  ];

  return (
    <section className="section-padding bg-[var(--c-cream)] min-h-screen">
      <div className="container-custom">

        <span className="eyebrow">
          INVESTOR RELATIONS
        </span>

        <h1 className="display-lg mt-6">
          Annual Reports
        </h1>

        <div className="mt-16 space-y-6">

          {reports.map((report) => (
            <div
              key={report}
              className="bg-white border border-[var(--c-border)] p-8 flex justify-between items-center"
            >
              <h3 className="text-2xl font-serif">
                {report}
              </h3>

              <button className="bg-[var(--c-gold)] text-white px-6 py-3">
                Download PDF
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}