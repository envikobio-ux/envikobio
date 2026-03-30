import { NextResponse } from 'next/server';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, BorderStyle, WidthType } from 'docx';

const productCategories = [
  {
    category: 'Core Nutrition',
    description: 'Essential nutritional foundation for daily wellness',
    products: [
      { name: 'UltiWell® Core', description: 'Foundation and core nutritional supplements' },
      { name: 'UltiWell® Vitality', description: 'Energy enhancement and vitality boost' },
      { name: 'UltiWell® Balance', description: 'Body balance and coordination support' },
      { name: 'UltiWell® Pure', description: 'Pure, contaminant-free supplements' },
      { name: 'UltiWell® Elevate', description: 'Overall health and quality of life enhancement' },
      { name: 'UltiWell® NutriBoost', description: 'Comprehensive nutritional support' },
    ],
  },
  {
    category: 'Brain & Cognitive',
    description: 'Mental clarity, focus and cognitive performance',
    products: [
      { name: 'UltiWell® Clarity', description: 'Brain health and mental clarity' },
      { name: 'UltiWell® Focus', description: 'Attention and cognitive function enhancement' },
      { name: 'UltiWell® BrainBoost', description: 'Memory and cognitive performance support' },
    ],
  },
  {
    category: 'Energy & Sports',
    description: 'Performance, strength and recovery solutions',
    products: [
      { name: 'UltiWell® Strength', description: 'Muscle and physical strength enhancement' },
      { name: 'UltiWell® Active', description: 'Active lifestyle and sports nutrition' },
      { name: 'UltiWell® Energy', description: 'Energy boost and endurance support' },
      { name: 'UltiWell® SportPerformance', description: 'High-performance nutrition for athletes' },
      { name: 'UltiWell® Recovery Series', description: 'Post-exercise recovery and muscle relief' },
    ],
  },
  {
    category: 'Anti-Aging & Beauty',
    description: 'Youthful vitality and skin health',
    products: [
      { name: 'UltiWell® Renew', description: 'Anti-aging and vitality restoration' },
      { name: 'UltiWell® Ageless', description: 'Anti-aging and skin care' },
      { name: 'UltiWell® YouthVibe', description: 'Health and vitality for the young generation' },
      { name: 'UltiWell® Glow', description: 'Skin health and beauty' },
      { name: 'UltiWell® SkinNutritious', description: 'Skin health and beauty nutrition' },
      { name: 'UltiWell® Body Care Series', description: 'Skin health and body care products' },
    ],
  },
  {
    category: 'Heart & Circulation',
    description: 'Cardiovascular health and blood circulation',
    products: [
      { name: 'UltiWell® Pulse', description: 'Heart health and blood circulation' },
      { name: 'UltiWell® CardioFit', description: 'Cardiovascular health promotion' },
    ],
  },
  {
    category: 'Immune Support',
    description: 'Immune system defense and protection',
    products: [
      { name: 'UltiWell® Shield', description: 'Immune system support and protection' },
      { name: 'UltiWell® ImmunoShield', description: 'Immune system enhancement' },
    ],
  },
  {
    category: 'Joint & Mobility',
    description: 'Joint health, flexibility and mobility',
    products: [
      { name: 'UltiWell® Flex', description: 'Joint health and flexibility' },
      { name: 'UltiWell® Mobility', description: 'Joint flexibility and pain relief' },
    ],
  },
  {
    category: 'Sleep & Relaxation',
    description: 'Restful sleep and stress management',
    products: [
      { name: 'UltiWell® Harmony', description: 'Mind-body harmony and relaxation' },
      { name: 'UltiWell® Calm', description: 'Stress management and relaxation' },
      { name: 'UltiWell® Zenith', description: 'Premium flagship product line' },
      { name: 'UltiWell® Restful', description: 'Sleep quality improvement' },
      { name: 'UltiWell® Sleep Series', description: 'Sleep quality and pattern improvement' },
      { name: 'UltiWell® Relaxation Series', description: 'Stress management and relaxation' },
      { name: 'UltiWell® Mind Soothing Series', description: 'Mental health support and relaxation' },
    ],
  },
  {
    category: 'Digestive Health',
    description: 'Digestion, detox and liver support',
    products: [
      { name: 'UltiWell® Digest', description: 'Digestive system health support' },
      { name: 'UltiWell® Cleanse', description: 'Body detoxification and cleansing' },
      { name: 'UltiWell® LiverSupport', description: 'Liver health and detoxification' },
      { name: 'UltiWell® KetoBalance', description: 'Keto diet and weight management' },
    ],
  },
  {
    category: 'Specialized Care',
    description: 'Targeted solutions for specific needs',
    products: [
      { name: 'UltiWell® MenopauseEase', description: 'Menopause symptom relief' },
      { name: 'UltiWell® EyeVive', description: 'Eye health and vision protection' },
      { name: 'UltiWell® Elderly Care Series', description: 'Quality of life products for seniors' },
    ],
  },
  {
    category: 'Lifestyle Solutions',
    description: 'Daily wellness and lifestyle support',
    products: [
      { name: 'UltiWell® VeganPure', description: 'Vegan and pure supplements' },
      { name: 'UltiWell® Travel Series', description: 'Portable products for travelers' },
      { name: 'UltiWell® Healthy Diet Series', description: 'Nutritious food and beverages' },
      { name: 'UltiWell® Daily Care Series', description: 'Daily comfort and wellness tools' },
      { name: 'UltiWell® Environment Optimization Series', description: 'Living and working environment enhancement' },
    ],
  },
];

export async function GET() {
  const children: (Paragraph | Table)[] = [];

  // Title
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: 'UltiWell® Product Catalogue 2026',
          bold: true,
          size: 48,
          color: 'A1BA80',
        }),
      ],
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  // Subtitle
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: '「Ultimate Wellness」',
          size: 24,
          color: '666666',
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    })
  );

  // Company Info
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: 'Shanghai Enviko Biotechnology Co., Ltd.',
          size: 22,
          color: '333333',
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: 'www.envikobio.com | info@envikobio.com',
          size: 20,
          color: '666666',
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 600 },
    })
  );

  // Product Categories
  productCategories.forEach((cat) => {
    // Category Header
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: cat.category,
            bold: true,
            size: 28,
            color: 'A1BA80',
          }),
        ],
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 100 },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: cat.description,
            italics: true,
            size: 20,
            color: '666666',
          }),
        ],
        spacing: { after: 200 },
      })
    );

    // Products Table
    const tableRows = [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: 'Product Name', bold: true, size: 20 })],
              }),
            ],
            width: { size: 40, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: 'Description', bold: true, size: 20 })],
              }),
            ],
            width: { size: 60, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
    ];

    cat.products.forEach((product) => {
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({ text: product.name, size: 20 })],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({ text: product.description, size: 18 })],
                }),
              ],
            }),
          ],
        })
      );
    });

    children.push(
      new Table({
        rows: tableRows,
        width: { size: 100, type: WidthType.PERCENTAGE },
      })
    );

    children.push(new Paragraph({ spacing: { after: 200 } }));
  });

  // Contact Section
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: 'Contact Us',
          bold: true,
          size: 28,
          color: 'A1BA80',
        }),
      ],
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: 'For OEM/ODM services, bulk ingredient supply, and partnership inquiries:',
          size: 20,
        }),
      ],
      spacing: { after: 100 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: 'Email: ', size: 20 }),
        new TextRun({ text: 'info@envikobio.com', size: 20, color: 'A1BA80' }),
      ],
      spacing: { after: 50 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: 'Phone/WhatsApp: ', size: 20 }),
        new TextRun({ text: '+86 13918629532', size: 20 }),
      ],
      spacing: { after: 50 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: 'Website: ', size: 20 }),
        new TextRun({ text: 'www.envikobio.com', size: 20, color: 'A1BA80' }),
      ],
      spacing: { after: 50 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: 'Address: ', size: 20 }),
        new TextRun({
          text: 'Room 207-2, No. 20 Jiafeng Road, Shanghai Free Trade Zone, Pudong District, Shanghai, China',
          size: 18,
        }),
      ],
      spacing: { after: 300 },
    })
  );

  // Copyright
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: '© 2026 Enviko Biotechnology. All rights reserved.',
          size: 18,
          color: '999999',
        }),
      ],
      alignment: AlignmentType.CENTER,
    })
  );

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: children,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': 'attachment; filename="UltiWell-Product-Catalogue-2026.docx"',
    },
  });
}
