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
  GraduationCap,
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
    title: 'Fermentation Workshop',
    desc: '50,000L total fermentation capacity with stainless steel bioreactors, automated control systems for precise temperature, pH, and dissolved oxygen monitoring.',
    metric: '50,000L',
    metricLabel: 'Fermentation Capacity',
  },
  {
    icon: Microscope,
    title: 'cGMP Clean Laboratory',
    desc: '2,000m² 100,000-level purified laboratory with complete QC testing equipment including HPLC, GC-MS, and microbiology analysis.',
    metric: '2,000m²',
    metricLabel: 'Lab Area',
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
    desc: 'To become a global leader in synthetic biology, driving sustainable biomanufacturing through continuous innovation in fermentation science and enzyme engineering.',
  },
  {
    icon: Target,
    title: 'Technology',
    desc: 'Core expertise in strain construction, fermentation process optimization, and green extraction technologies, with 28+ active patents and ongoing R&D investment.',
  },
  {
    icon: Award,
    title: 'Quality',
    desc: 'End-to-end quality management system from raw material sourcing to final product release, with full traceability and batch-to-batch consistency.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ========== Module 1: Hero Banner ========== */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A1BA80]/85 via-[#A1BA80]/60 to-transparent z-10" />
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-factory.jpg')" }}
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <h1 className="text-[48px] font-bold text-white mb-6 font-[family-name:var(--font-montserrat)]">
              About Alvokor
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Shanghai Alvokor Biotechnology Co., Ltd. is a synthetic biology company specializing in 
              the full-chain biomanufacturing of high-value natural ingredients. From strain construction 
              and fermentation to extraction and purification, we deliver premium raw materials for 
              cosmetic, nutraceutical, and feed applications worldwide.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="text-white">
                <div className="text-2xl font-bold text-[#4A90C2]">50,000L</div>
                <div className="text-xs text-white/60">Fermentation Capacity</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-[#4A90C2]">2,000m²</div>
                <div className="text-xs text-white/60">cGMP Lab</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-[#4A90C2]">28+</div>
                <div className="text-xs text-white/60">Patents</div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-[#4A90C2]">5,000T</div>
                <div className="text-xs text-white/60">Annual Output</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Module 2: Facilities (3 Columns) ========== */}
      <section className="py-20 px-4 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-bold text-center text-[#333333] mb-4 font-[family-name:var(--font-montserrat)]">
            Manufacturing Facilities
          </h2>
          <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto">
            State-of-the-art production infrastructure for industrial-scale biomanufacturing
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
                    <span className="text-2xl font-bold text-[#4A90C2]">{item.metric}</span>
                    <span className="block text-xs text-[#999999] mt-1">{item.metricLabel}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Module 3: R&D & University Collaboration ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-bold text-[#333333] mb-6 font-[family-name:var(--font-montserrat)]">
                R&D & University Partnerships
              </h2>
              <p className="text-[#666666] leading-relaxed mb-6">
                Alvokor collaborates with leading Chinese universities including Jiangnan University 
                (江南大学) on joint research programs in synthetic biology, fermentation engineering, 
                and enzyme discovery. Our R&D team of 15+ scientists focuses on:
              </p>
              <ul className="space-y-3">
                {[
                  'Strain engineering & high-throughput screening',
                  'Fermentation process optimization & scale-up',
                  'Green extraction & purification technologies',
                  'Analytical method development & validation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#666666]">
                    <CheckCircle2 className="w-4 h-4 text-[#3A9973] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-lg">
                <GraduationCap className="w-8 h-8 text-[#A1BA80]" />
                <div>
                  <div className="text-sm font-medium text-[#333333]">Jiangnan University</div>
                  <div className="text-xs text-[#999999]">Joint Synthetic Biology Research Program</div>
                </div>
              </div>
            </div>
            <div className="h-80 rounded-lg bg-[#F5F7FA] bg-cover bg-center" style={{ backgroundImage: "url('/lab-instruments.jpg')" }} />
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
            Explore how our biomanufacturing capabilities can support your raw material needs
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