'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Factory, 
  Microscope, 
  Warehouse,
  Target,
  Shield,
  Lightbulb,
  Award,
  Globe,
  ChevronRight,
  FileText,
  Users,
  CheckCircle2,
  Building2,
  FlaskConical
} from 'lucide-react';
import Link from 'next/link';

const facilities = [
  {
    icon: Factory,
    title: 'Certified Partner Network',
    desc: 'We collaborate with 8 GMP-certified manufacturing partners across China, offering fermentation capacities from 10,000L to 50,000L per facility.',
    metric: '8 Partners',
    metricLabel: 'Certified Manufacturers',
  },
  {
    icon: Microscope,
    title: 'Quality Control Network',
    desc: 'Each partner maintains independent QC labs with HPLC, GC-MS, and microbiology testing. Third-party testing for every batch before shipment.',
    metric: '100%',
    metricLabel: 'Batch Tested Before Shipment',
  },
  {
    icon: Warehouse,
    title: 'Warehouse & Logistics',
    desc: 'Temperature-controlled warehouse with real-time inventory management, supporting global shipping with full customs documentation.',
    metric: '5,000T',
    metricLabel: 'Annual Throughput',
  },
];

const certifications = [
  'cGMP', 'FSMA', 'FSSC 22000', 'ISO 9001',
  'KOSHER', 'HALAL', 'Self-GRAS', 'COSMOS',
  'FDA Registered', 'REACH Compliant',
];

const corporateValues = [
  {
    icon: Lightbulb,
    title: 'Vision',
    desc: 'To be the most trusted sourcing partner for bioactive ingredients — connecting global buyers with certified manufacturers across China.',
  },
  {
    icon: Target,
    title: 'Sourcing Network',
    desc: 'Curated partnerships with 8 certified manufacturing facilities, each audited for quality, compliance, and production consistency.',
  },
  {
    icon: Award,
    title: 'Quality',
    desc: 'End-to-end quality management from supplier audit to final product release, with full batch traceability and third-party testing.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ========== Module 1: Hero Banner ========== */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A1BA80]/90 via-[#A1BA80]/60 to-[#A1BA80]/30 z-10" />
          <div className="w-full h-full bg-gradient-to-br from-[#A1BA80] to-[#7A9A60]" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <h1 className="text-[48px] font-bold text-white mb-6 font-[family-name:var(--font-montserrat)]">
              About Alvokor
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Shanghai Alvokor Biotechnology Co., Ltd. is a specialized sourcing and supply chain partner 
              for high-value biosynthetic ingredients. We collaborate with a network of GMP-certified 
              manufacturing partners across China to deliver premium raw materials for cosmetic, 
              nutraceutical, and feed applications worldwide.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="text-white">
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-xs text-white/60">Certified Partners</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-white">50,000L</div>
                <div className="text-xs text-white/60">Total Capacity</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-white">5,000T</div>
                <div className="text-xs text-white/60">Annual Throughput</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-white/60">Export Markets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Module 2: Facilities (3 Columns) ========== */}
      <section className="py-20 px-4 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold text-center text-[#333333] mb-4 font-[family-name:var(--font-montserrat)]">
            Partner Manufacturing Network
          </h2>
          <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto">
            Aggregated production capacity from 8 certified manufacturing partners across China
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((item, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-[#A1BA80]/5 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-[#A1BA80]" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#333333] mb-2 font-[family-name:var(--font-montserrat)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <div className="pt-4 border-t border-[#E5E7EB]">
                    <span className="text-2xl font-bold text-[#A1BA80]">{item.metric}</span>
                    <span className="block text-xs text-[#999999] mt-1">{item.metricLabel}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Module 3: Quality Assurance & Technical Support ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-bold text-[#333333] mb-6 font-[family-name:var(--font-montserrat)]">
                Quality Assurance & Technical Support
              </h2>
              <p className="text-[#666666] leading-relaxed mb-6">
                Alvokor provides rigorous quality control across our entire supply network. 
                Every batch is tested for purity, stability, and compliance before shipment. 
                Our technical team offers formulation support, regulatory documentation 
                (COA, MSDS, TDS, allergen & non-GMO statements), and logistics coordination 
                to ensure smooth delivery worldwide.
              </p>
              <ul className="space-y-3">
                {[
                  'Third-party lab testing for purity & stability',
                  'Full regulatory documentation (COA, MSDS, TDS, REACH)',
                  'Formulation & application technical support',
                  'Global logistics & customs clearance assistance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#666666]">
                    <CheckCircle2 className="w-4 h-4 text-[#3A9973] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-lg">
                <Shield className="w-8 h-8 text-[#A1BA80]" />
                <div>
                  <div className="text-sm font-medium text-[#333333]">Quality First</div>
                  <div className="text-xs text-[#999999]">Rigorous QC Across Every Batch</div>
                </div>
              </div>
            </div>
            <div className="h-80 rounded-lg bg-gradient-to-br from-[#A1BA80]/20 to-[#F5F7FA] flex items-center justify-center">
              <div className="text-center p-8">
                <Shield className="w-16 h-16 text-[#A1BA80] mx-auto mb-4" />
                <p className="text-sm text-[#666666]">Trusted Quality Control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Module 4: Certifications ========== */}
      <section className="py-20 px-4 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold text-center text-[#333333] mb-4 font-[family-name:var(--font-montserrat)]">
            Certifications & Compliance
          </h2>
          <p className="text-center text-[#666666] mb-10">Global regulatory certifications for export markets</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-5 text-center hover:shadow-md transition-shadow"
              >
                <Shield className="w-8 h-8 mx-auto mb-2 text-[#A1BA80]" />
                <span className="text-sm font-semibold text-[#333333]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Module 5: Corporate Culture ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold text-center text-[#333333] mb-12 font-[family-name:var(--font-montserrat)]">
            Corporate Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {corporateValues.map((item, index) => (
              <div key={index} className="text-center p-8 rounded-lg bg-[#F5F7FA] hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#A1BA80]/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#A1BA80]" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#333333] mb-4 font-[family-name:var(--font-montserrat)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-[#A1BA80]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] font-bold text-white mb-4 font-[family-name:var(--font-montserrat)]">
            Partner with Alvokor
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Explore how our sourcing network can support your raw material needs
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#A1BA80] hover:bg-gray-100 font-semibold px-10">
              Contact Our Team <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}