import React from 'react';

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  date: string;
  readTime: string;
  contentHtml: React.ReactNode;
}

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find(article => article.slug === slug);
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'how-to-choose-biosynthetic-ingredient-supplier',
    title: 'How to Choose a Biosynthetic Ingredient Supplier: What R&D Directors, Procurement Managers, and Production Heads Need to Know',
    excerpt: 'A comprehensive guide for R&D directors, procurement managers, and production heads on selecting the right biosynthetic ingredient supplier — covering custom formulation, registration dossiers, low MOQ, stable pricing, and technology transfer.',
    metaDescription: 'Choosing a biosynthetic ingredient supplier? This guide addresses the distinct priorities of R&D directors, procurement managers, and production heads — from custom formulation and registration dossiers to stable pricing and technology transfer.',
    keywords: [
      'one-stop biosynthetic raw material supplier',
      'custom exclusive formula',
      'registration dossier preparation',
      'low MOQ ingredient supplier',
      'fermentation high conversion rate',
      'technology transfer ingredient'
    ],
    date: '2026-08-17',
    readTime: '14 min read',
    contentHtml: (
      <div className="space-y-8 text-[#333333]">
        {/* Introduction */}
        <div className="bg-[#F5F7FA] rounded-lg p-8 border-l-4 border-[#0F4C81]">
          <p className="text-lg leading-relaxed">
            Selecting a biosynthetic ingredient supplier is one of the most consequential decisions an organization can make in its supply chain strategy. Unlike commodity chemical sourcing, biosynthetic ingredients — produced through precision fermentation, enzymatic biocatalysis, and cell-free synthesis — require a fundamentally different evaluation framework. The stakes are high: the wrong choice can delay product launches, compromise regulatory compliance, and destabilize production pipelines for months or even years.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            This guide addresses the distinct priorities of three key decision-makers within any organization that sources biosynthetic ingredients: <strong>R&D Directors</strong>, <strong>Procurement Managers</strong>, and <strong>Production Heads</strong>. Each role brings a unique set of concerns, and the ideal supplier is one that can satisfy all three simultaneously.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-[#0F4C81] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Table of Contents</h2>
          <ul className="space-y-2 text-[#0F4C81]">
            <li><a href="#section1" className="hover:text-[#4A90C2] transition-colors">1. Why R&D Directors Prioritize Custom Formulation & Dossier Support</a></li>
            <li><a href="#section2" className="hover:text-[#4A90C2] transition-colors">2. What Procurement Managers Need: Low MOQ, Stable Pricing & Supply Security</a></li>
            <li><a href="#section3" className="hover:text-[#4A90C2] transition-colors">3. What Production Heads Demand: Fermentation Efficiency & Technology Transfer</a></li>
            <li><a href="#section4" className="hover:text-[#4A90C2] transition-colors">4. Clean Beauty Compliance & ESG Supply Chain</a></li>
            <li><a href="#section5" className="hover:text-[#4A90C2] transition-colors">5. Registration Dossier Preparation: A Critical Supplier Capability</a></li>
            <li><a href="#section6" className="hover:text-[#4A90C2] transition-colors">6. Nine Dosage Form Patents: What They Mean for Your Formulation</a></li>
            <li><a href="#section7" className="hover:text-[#4A90C2] transition-colors">7. The One-Stop Supplier Advantage</a></li>
            <li><a href="#faq" className="hover:text-[#4A90C2] transition-colors">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Section 1 */}
        <section id="section1">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>1. Why R&D Directors Prioritize Custom Formulation & Dossier Support</h2>
          <p className="leading-relaxed mb-4">
            For R&D Directors, the primary concern is <strong>innovation velocity</strong> — how quickly can a new ingredient be integrated into a product formulation and brought to market? Biosynthetic ingredients offer unique advantages over traditional extraction or petrochemical-derived alternatives, but they also require specialized knowledge to formulate effectively.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Custom Exclusive Formula Development</h3>
          <p className="leading-relaxed mb-4">
            A supplier that offers <strong>custom exclusive formula development</strong> provides R&D teams with a significant competitive advantage. Rather than purchasing off-the-shelf ingredients that any competitor can access, brands can collaborate with suppliers to develop proprietary formulations that create genuine market differentiation.
          </p>
          <p className="leading-relaxed mb-4">
            When evaluating a supplier&apos;s custom formulation capabilities, R&D Directors should look for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Dedicated R&D team</strong> with expertise in your specific application area (cosmetic, nutraceutical, pharmaceutical, or feed)</li>
            <li><strong>Rapid prototyping capability</strong> — the ability to produce custom samples within 2-4 weeks</li>
            <li><strong>Formulation stability testing</strong> under various conditions (pH, temperature, light exposure)</li>
            <li><strong>Compatibility screening</strong> with common excipients, preservatives, and delivery systems</li>
            <li><strong>Scale-up roadmap</strong> from lab bench to pilot to commercial production</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Registration Dossier Support</h3>
          <p className="leading-relaxed mb-4">
            Modern biosynthetic ingredient suppliers must provide comprehensive <strong>registration dossier support</strong> for global markets. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Technical Data Packages (TDP)</strong> covering complete physicochemical characterization</li>
            <li><strong>Safety assessment reports</strong> per OECD guidelines</li>
            <li><strong>Efficacy data</strong> from in vitro and in vivo studies</li>
            <li><strong>Regulatory status summaries</strong> for major markets (EU, US, China, India, ASEAN)</li>
            <li><strong>Certificates of Analysis (COA)</strong> for each production batch</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section id="section2" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>2. What Procurement Managers Need: Low MOQ, Stable Pricing & Supply Security</h2>
          <p className="leading-relaxed mb-4">
            Procurement Managers evaluate suppliers through a fundamentally different lens. Their primary concerns are <strong>cost predictability</strong>, <strong>supply continuity</strong>, and <strong>risk mitigation</strong>. For biosynthetic ingredients, these factors take on additional complexity due to the biological nature of the production process.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Low MOQ: A Critical Evaluation Criterion</h3>
          <p className="leading-relaxed mb-4">
            Many biosynthetic ingredient suppliers require large Minimum Order Quantities (MOQs), often 100kg or more per SKU. While this may be acceptable for established products, it creates significant challenges for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>New product development</strong> — testing multiple ingredients before committing to large volumes</li>
            <li><strong>Small to medium brands</strong> — those with limited production capacity or niche market focus</li>
            <li><strong>Multi-ingredient formulations</strong> — requiring small quantities of many different ingredients</li>
            <li><strong>Seasonal products</strong> — where demand fluctuates significantly throughout the year</li>
          </ul>
          <p className="leading-relaxed mb-4">
            A <strong>low MOQ ingredient supplier</strong> offers greater flexibility, allowing procurement teams to optimize inventory levels, reduce working capital requirements, and respond more quickly to market changes. Leading suppliers offer MOQs as low as 1-10kg for trial orders and 25kg for commercial batches.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Stable Pricing in a Volatile Market</h3>
          <p className="leading-relaxed mb-4">
            Biosynthetic ingredient pricing can be subject to significant volatility due to raw material costs, energy prices, and production yields. Procurement Managers should prioritize suppliers that offer:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Price lock agreements</strong> for 6-12 month periods</li>
            <li><strong>Volume-based tiered pricing</strong> with clear breakpoints</li>
            <li><strong>Transparent cost breakdown</strong> showing how raw material fluctuations affect final pricing</li>
            <li><strong>Long-term supply agreements</strong> with price adjustment mechanisms tied to verifiable indices</li>
            <li><strong>Consistent quality across batches</strong> — reducing the risk of rejection and rework costs</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="section3" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>3. What Production Heads Demand: Fermentation Efficiency & Technology Transfer</h2>
          <p className="leading-relaxed mb-4">
            Production Heads are responsible for ensuring that raw materials can be processed efficiently, consistently, and safely within existing manufacturing infrastructure. For biosynthetic ingredients, this requires a deep understanding of the supplier&apos;s production capabilities and quality systems.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Fermentation High Conversion Rate</h3>
          <p className="leading-relaxed mb-4">
            The <strong>fermentation high conversion rate</strong> is a critical technical metric that directly impacts both cost and sustainability. Suppliers with optimized fermentation processes achieve:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Higher yield per batch</strong> — reducing the cost per kilogram of final product</li>
            <li><strong>Lower energy consumption</strong> — through shorter fermentation cycles and optimized media</li>
            <li><strong>Reduced waste streams</strong> — minimizing environmental impact and disposal costs</li>
            <li><strong>Better batch-to-batch consistency</strong> — critical for regulatory compliance and customer satisfaction</li>
          </ul>
          <p className="leading-relaxed mb-4">
            When evaluating a supplier&apos;s fermentation capability, Production Heads should request:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Historical batch records showing yield consistency over at least 10 consecutive batches</li>
            <li>Process flow diagrams showing key control points</li>
            <li>Validation data for critical process parameters (temperature, pH, dissolved oxygen, nutrient feed rates)</li>
            <li>Scale-up data demonstrating successful technology transfer from pilot to commercial scale</li>
          </ul>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Technology Transfer Ingredient Capabilities</h3>
          <p className="leading-relaxed mb-4">
            For brands that want to establish long-term supply security or develop proprietary production capabilities, <strong>technology transfer ingredient</strong> partnerships offer a strategic advantage. This involves the supplier transferring their production know-how — including strain, fermentation process, and purification methods — to the buyer&apos;s designated manufacturing facility.
          </p>
          <p className="leading-relaxed mb-4">
            Technology transfer agreements typically include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Master cell bank and working cell bank</strong> transfer under controlled conditions</li>
            <li><strong>Standard Operating Procedures (SOPs)</strong> for all production steps</li>
            <li><strong>On-site training</strong> for the buyer&apos;s production team</li>
            <li><strong>Process validation support</strong> including three consecutive successful validation batches</li>
            <li><strong>Ongoing technical support</strong> for the first 12 months of commercial production</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="section4" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>4. Clean Beauty Compliance & ESG Supply Chain</h2>
          <p className="leading-relaxed mb-4">
            The global beauty and personal care industry is undergoing a fundamental transformation driven by <strong>Clean Beauty</strong> standards and <strong>ESG (Environmental, Social, and Governance)</strong> requirements. Biosynthetic ingredients are uniquely positioned to address both trends simultaneously.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Clean Beauty Compliance</h3>
          <p className="leading-relaxed mb-4">
            Clean Beauty formulations require ingredients that are:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Free from controversial substances</strong> — parabens, phthalates, SLS/SLES, formaldehyde releasers, and synthetic fragrances</li>
            <li><strong>Environmentally sustainable</strong> — biodegradable, non-toxic to aquatic life, and produced with minimal environmental footprint</li>
            <li><strong>Transparently sourced</strong> — with full traceability from raw material to finished ingredient</li>
            <li><strong>Vegan and cruelty-free</strong> — certified by recognized third-party organizations</li>
            <li><strong>Naturally derived</strong> — through fermentation rather than chemical synthesis</li>
          </ul>
          <p className="leading-relaxed mb-4">
            Biosynthetic ingredients produced through fermentation meet all of these criteria naturally. They are derived from renewable biomass (typically corn, sugarcane, or cassava), produced through clean biological processes, and can be certified as natural, vegan, and biodegradable.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Carbon-Neutral Supply Chain</h3>
          <p className="leading-relaxed mb-4">
            Leading biosynthetic ingredient suppliers are now offering <strong>carbon-neutral supply chain</strong> options. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Carbon footprint assessment</strong> for each product (cradle-to-gate)</li>
            <li><strong>Carbon offset programs</strong> through verified carbon credits</li>
            <li><strong>Renewable energy</strong> used in manufacturing facilities</li>
            <li><strong>Efficient logistics</strong> with optimized shipping routes and reduced packaging</li>
            <li><strong>Third-party certification</strong> of carbon neutrality claims</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section id="section5" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>5. Registration Dossier Preparation: A Critical Supplier Capability</h2>
          <p className="leading-relaxed mb-4">
            Navigating the regulatory landscape for biosynthetic ingredients across different markets requires comprehensive <strong>registration dossier preparation</strong>. This is particularly critical for ingredient suppliers serving the pharmaceutical, cosmetic, and food industries, where regulatory compliance is non-negotiable.
          </p>

          <h3 className="text-xl font-bold text-[#333333] mt-6 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>What a Complete Registration Dossier Includes</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#F5F7FA]">
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#0F4C81]">Document Type</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#0F4C81]">Content</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-bold text-[#0F4C81]">Regulatory Relevance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">Technical Data Package</td>
                  <td className="border border-gray-200 px-4 py-3">Physicochemical properties, purity profile, stability data</td>
                  <td className="border border-gray-200 px-4 py-3">All markets</td>
                </tr>
                <tr className="bg-[#F5F7FA]">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Safety Assessment</td>
                  <td className="border border-gray-200 px-4 py-3">Toxicology, skin irritation, eye irritation, sensitization</td>
                  <td className="border border-gray-200 px-4 py-3">EU REACH, US FDA, China NMPA</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">Efficacy Data</td>
                  <td className="border border-gray-200 px-4 py-3">In vitro, ex vivo, clinical study reports</td>
                  <td className="border border-gray-200 px-4 py-3">Cosmetic claim substantiation</td>
                </tr>
                <tr className="bg-[#F5F7FA]">
                  <td className="border border-gray-200 px-4 py-3 font-medium">COA & Batch Records</td>
                  <td className="border border-gray-200 px-4 py-3">3-5 consecutive batch records with full analytical data</td>
                  <td className="border border-gray-200 px-4 py-3">GMP compliance verification</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">Stability Reports</td>
                  <td className="border border-gray-200 px-4 py-3">Accelerated (6-month) and real-time (24-month) stability</td>
                  <td className="border border-gray-200 px-4 py-3">Shelf life determination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 */}
        <section id="section6" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>6. Nine Dosage Form Patents: What They Mean for Your Formulation</h2>
          <p className="leading-relaxed mb-4">
            A supplier with <strong>nine dosage form patents</strong> brings a level of formulation expertise that directly benefits their customers. These patents represent documented, proven solutions to common formulation challenges, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Enhanced bioavailability</strong> through novel delivery systems</li>
            <li><strong>Improved stability</strong> in challenging formulation matrices</li>
            <li><strong>Controlled release profiles</strong> for sustained efficacy</li>
            <li><strong>Masking of unpleasant tastes or odors</strong> in oral formulations</li>
            <li><strong>Improved skin penetration</strong> for topical applications</li>
          </ul>
          <p className="leading-relaxed mb-4">
            When evaluating a supplier&apos;s patent portfolio, look for patents that are:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Granted (not just filed)</strong> — indicating they have passed examination</li>
            <li><strong>Relevant to your application</strong> — cosmetic, nutraceutical, or pharmaceutical</li>
            <li><strong>Available for licensing</strong> — or included as part of the ingredient supply agreement</li>
            <li><strong>Supported by real formulation data</strong> — not just theoretical claims</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section id="section7" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>7. The One-Stop Supplier Advantage</h2>
          <p className="leading-relaxed mb-4">
            A <strong>one-stop biosynthetic raw material supplier</strong> offers significant advantages over working with multiple specialized suppliers. These include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Simplified procurement</strong> — single point of contact, consolidated purchasing, and streamlined logistics</li>
            <li><strong>Consistent quality standards</strong> — across all ingredients, reducing qualification and validation burden</li>
            <li><strong>Cross-product compatibility</strong> — ingredients designed to work together in formulations</li>
            <li><strong>Bundled pricing</strong> — better overall value compared to sourcing from multiple suppliers</li>
            <li><strong>Integrated technical support</strong> — a single team that understands your entire formulation needs</li>
          </ul>
          <p className="leading-relaxed mb-4">
            <strong>Alvokor BioSolution</strong> exemplifies the one-stop supplier model, offering a comprehensive portfolio of biosynthetic ingredients including resveratrol, N-acetylglucosamine, copper tripeptide-1, ectoine, fermented squalane, ceramides, and sodium hyaluronate — all produced through proprietary fermentation technology and supported by complete regulatory documentation.
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F4C81] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-[#F5F7FA] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">Where can I buy fermentation squalane with CosIng file?</h3>
              <p className="text-[#666666] leading-relaxed">
                <strong>Alvokor BioSolution</strong> offers fermented squalane (CAS 111-01-3) with complete CosIng registration documentation. Our fermentation-derived squalane is vegan, sustainable, and meets EU cosmetic ingredient requirements. Contact us at <a href="mailto:info@alvokorbio.com" className="text-[#0F4C81] hover:text-[#4A90C2]">info@alvokorbio.com</a> for the full CosIng dossier and free samples.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">What is the typical MOQ for biosynthetic cosmetic ingredients?</h3>
              <p className="text-[#666666] leading-relaxed">
                At <strong>Alvokor BioSolution</strong>, we offer flexible MOQs starting from 1kg for trial samples, 10kg for pilot-scale evaluation, and 25kg for commercial production. We understand that product development requires flexibility, and we work with brands of all sizes — from indie beauty startups to multinational corporations. Our low MOQ policy allows you to test multiple ingredients before committing to larger volumes.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">How do I verify a biosynthetic ingredient supplier's quality certifications?</h3>
              <p className="text-[#666666] leading-relaxed">
                Reputable biosynthetic ingredient suppliers should provide <strong>certified quality documentation</strong> including ISO 9001:2015, FSSC 22000, HALAL, and KOSHER certificates. <strong>Alvokor BioSolution</strong> maintains all certifications and provides complete batch traceability. We recommend requesting: (1) current certification copies, (2) three consecutive batch COAs, (3) third-party audit reports, and (4) customer reference contacts. Visit our <a href="/about" className="text-[#0F4C81] hover:text-[#4A90C2]">About Us</a> page for our certification details.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">Can biosynthetic ingredients replace petrochemical-derived ingredients without production line changes?</h3>
              <p className="text-[#666666] leading-relaxed">
                Yes — one of the key advantages of biosynthetic ingredients is <strong>drop-in compatibility</strong> with existing production lines. Fermentation-derived ingredients are chemically identical to their petrochemical counterparts, meaning they can be substituted directly without equipment modifications. <strong>Alvokor BioSolution</strong> provides compatibility testing support and formulation guidance to ensure seamless integration. For more details, see our guide on <a href="/blog/fermentation-replace-petrochemical-no-line-renovation" className="text-[#0F4C81] hover:text-[#4A90C2]">fermentation ingredients replacing petrochemical raw materials</a>.
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#333333] mb-2">What registration documents are needed for biosynthetic ingredient import to the EU?</h3>
              <p className="text-[#666666] leading-relaxed">
                For EU import of biosynthetic ingredients, the required documentation typically includes: REACH registration (if applicable), CosIng notification for cosmetic ingredients, EFSA assessment for novel foods, complete technical data package (TDP), Certificate of Analysis (COA), Material Safety Data Sheet (MSDS), certificate of origin, and stability study reports. <strong>Alvokor BioSolution</strong> provides comprehensive registration dossier preparation services to support your EU market entry. Contact us for a no-obligation dossier-gap assessment.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section (inline) */}
        <section className="pt-8">
          <div className="bg-[#0F4C81] rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Evaluate Our Biosynthetic Ingredients?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact us for <strong>free COA & trial samples</strong>. Our technical team can help you select the right ingredients for your specific application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@alvokorbio.com?subject=COA%20%26%20Trial%20Samples%20Request"
                className="bg-white text-[#0F4C81] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@alvokorbio.com
              </a>
              <a
                href="https://wa.me/8613918629532"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#20BD5A] transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                WhatsApp: +86 13918629532
              </a>
            </div>
          </div>
        </section>
      </div>
    ),
  },
];