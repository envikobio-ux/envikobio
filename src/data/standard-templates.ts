/**
 * Alvokor 91款原料独立站单品页标准化模板配置
 * 全站统一素材复用，避免页面割裂
 */

// ==================== 固定模块1: SEO转化首屏标题模板 ====================
export const seoTitleTemplate = (
  productName: string,
  grade: string,
  purity: string,
  certificates: string[]
) => {
  const certStr = certificates.filter(c => ['REACH', 'HALAL', 'SGS', 'ISO'].includes(c)).slice(0, 2).join(' & ') || 'SGS';
  return `${productName} ${grade} ${purity} | ${certStr} Certified, Free Test Samples, Full India Customs Documents`;
};

// ==================== 固定模块2: 差异化优势通用句式模板 ====================
export const advantageTemplates = {
  purity: (value: string) => 
    `${value} high purity verified by in-house lab full batch inspection`,
  source: (sourceType: string) => 
    `${sourceType}, complete certification for target export markets (India/SEA/EU)`,
  delivery: (stockQty: string = 'In stock') => 
    `${stockQty}, fast delivery within 3-7 working days for bulk orders`,
};

// ==================== 固定模块3: 参数表格通用表头 ====================
export const parameterTableHeader = `| INCI Name | CAS No. | Purity / Content | Appearance | Standard Packing | Shelf Life | Grade |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |`;

// ==================== 固定模块4: 分品级应用场景文案 ====================
export const applicationScenarios = {
  // 化妆品级原料应用场景
  cosmetic: {
    title: 'Application in Cosmetic Formulation',
    content: `**Skincare Products**
- Anti-aging serums and creams: Enhances skin barrier function, reduces fine lines
- Moisturizing lotions: Improves hydration retention, suitable for sensitive skin
- Whitening formulations: Supports even skin tone, reduces hyperpigmentation

**Hair Care Products**
- Shampoos and conditioners: Adds shine, improves hair texture
- Hair masks: Deep nourishment for damaged hair

**Sun Care Products**
- After-sun repair lotions: Soothes skin, reduces UV damage
- SPF enhancers: Boosts sun protection efficacy

**Recommended Usage Level**: 0.1%-5% depending on specific formulation requirements.
**Compatibility**: Stable with common cosmetic ingredients, pH 4-8 optimal range.`,
  },
  
  // 食品/营养级原料应用场景
  food: {
    title: 'Application in Food & Nutritional Products',
    content: `**Functional Foods**
- Health supplements: Supports antioxidant, anti-aging functions
- Fortified beverages: Enhances nutritional value
- Functional snacks: Adds bioactive benefits

**Dietary Supplements**
- Capsules and tablets: Standardized dosage forms
- Powder supplements: Easy mixing, versatile applications
- Softgel formulations: Enhanced bioavailability

**Specialty Foods**
- Organic products: Natural source, clean label compliance
- Sports nutrition: Performance enhancement support

**Recommended Dosage**: Follow regulatory guidelines for specific markets (US FDA, EU FSA, India FSSAI).
**Stability**: Stable under normal storage conditions, avoid high temperature and humidity.`,
  },
  
  // 医药API多肽原料应用场景
  pharmaceutical: {
    title: 'Application in Pharmaceutical & API Development',
    content: `**Drug Formulation**
- API intermediates: High purity synthesis starting materials
- Peptide therapeutics: Biocompatible, pharmaceutical grade
- Controlled release formulations: Supports drug delivery systems

**Research & Development**
- Preclinical studies: Consistent batch quality for reproducibility
- Clinical trial materials: GMP compliant production
- Drug stability testing: Long-term shelf stability data available

**Regulatory Compliance**
- ICH guidelines: Full documentation support
- Pharmacopoeia standards: USP/EP/JP compliance testing
- IND/NDA support: Complete regulatory documentation package

**Quality Assurance**: Batch-to-batch consistency, full traceability from raw material to finished API.`,
  },
};

// ==================== 固定模块5: 文件下载专区统一文案 ====================
export const documentDownloadText = {
  title: 'Document Download Section',
  content: 'Free one-click download: COA, TDS, MSDS, REACH registration, HALAL/KOSHER/FSSC22000 (certificates subject to product qualification)',
  buttonText: 'Download Full COA & TDS',
};

// ==================== 固定模块6: 统一样品政策文案 ====================
export const samplePolicy = {
  title: 'Unified Sample Policy',
  content: `We provide free 10g-50g test samples for cosmetic raw materials; food/pharma raw samples support customized small packs. 

**Sample Terms:**
- Customers only bear international DHL freight
- All courier cost will be fully deducted from your first bulk order
- Sample delivery: 4-6 working days to India/SEA via DHL

**How to Request:**
1. Click "Request Free Test Sample" button below
2. Fill in your company details and product interest
3. We will confirm sample availability within 24 hours`,
  buttonText: 'Request Free Test Sample',
};

// ==================== 固定模块7: FAQ统一问答 ====================
export const faqItems = [
  {
    question: 'How many days sample delivery to India/SEA?',
    answer: 'DHL delivery 4-6 working days, door to door service.',
  },
  {
    question: 'Can you provide full customs clearance documents for India import?',
    answer: 'Yes, we supply commercial invoice, CO, SGS test report, origin statement as customs demand.',
  },
  {
    question: 'What\'s your MOQ?',
    answer: 'In-stock goods support 1kg trial order; bulk standard package 20kg/25kg drum/bag.',
  },
  {
    question: 'Are your goods stable batch with consistent purity?',
    answer: 'Independent laboratory full inspection for every batch, complete test record provided.',
  },
];

// ==================== 固定模块8: CTA按钮文案 ====================
export const ctaButtons = {
  downloadCOA: {
    text: 'Download Full COA & TDS',
    variant: 'outline',
  },
  requestSample: {
    text: 'Request Free Test Sample',
    variant: 'default',
  },
  whatsapp: {
    text: 'Chat Via WhatsApp Instantly',
    phoneNumber: '+8613918629532', // 替换为实际WhatsApp号码
  },
};

// ==================== 分组映射：产品分类到应用场景 ====================
export const categoryToScenario: Record<string, 'cosmetic' | 'food' | 'pharmaceutical'> = {
  'Cosmetic Raw Material': 'cosmetic',
  'Food Additive(c2111)': 'food',
  'Food Enzymes(c2613)': 'food',
  'Nutritional Enhancer(c2111)': 'food',
  'Natural Pigment(c2411)': 'food',
  'Vitamin(c2111)': 'food',
  'Pharmaceutical API': 'pharmaceutical',
  'Amino Acid(c2111)': 'food',
  'Sweetener(c2111)': 'food',
};

// ==================== 品级分类映射 ====================
export const gradeTypes = {
  cosmetic: 'Cosmetic Grade',
  food: 'Food Grade',
  pharmaceutical: 'Pharmaceutical Grade',
};

// ==================== 外观类型映射 ====================
export const appearanceTypes: Record<string, string> = {
  'Oil': 'Clear to light yellow liquid',
  'Powder': 'White to off-white crystalline powder',
  'Liquid': 'Clear liquid',
  'Solid': 'White solid',
};

// ==================== 证书图标映射 ====================
export const certificateIcons: Record<string, string> = {
  'REACH': '🇪🇺 REACH',
  'HALAL': '🕌 HALAL',
  'KOSHER': '✡️ KOSHER',
  'FSSC22000': '🍽️ FSSC22000',
  'ISO': '📋 ISO 9001',
  'SGS': '🔬 SGS',
  'GMP': '🏭 GMP',
  'COA': '📄 COA',
  'MSDS': '📋 MSDS',
};

// ==================== 完整产品页面数据接口 ====================
export interface StandardProductPage {
  // SEO首屏
  seoTitle: string;
  heroSubtitle: string;
  
  // 差异化优势（3条）
  advantages: [string, string, string];
  
  // 参数表格
  inciName: string;
  casNo: string;
  purity: string;
  appearance: string;
  packing: string;
  shelfLife: string;
  grade: string;
  
  // 应用场景
  applicationScenario: 'cosmetic' | 'food' | 'pharmaceutical';
  
  // 固定模块（直接引用上方常量）
  documentDownload: typeof documentDownloadText;
  samplePolicy: typeof samplePolicy;
  faq: typeof faqItems;
  cta: typeof ctaButtons;
}

// ==================== 产品数据接口 ====================
export interface AlvokorProduct {
  id: number;
  slug: string;
  cas: string;
  name: string;
  inci_name: string;
  group: string;
  grade: string;
  purity: string;
  packages: string;
  certificates: string[];
  appearance_type: string;
  supplier: string;
  app_scenario: 'cosmetic' | 'food' | 'pharmaceutical';
  shelf_life: string;
}

export type { StandardProductPage as StandardProductPageType, AlvokorProduct as AlvokorProductType };