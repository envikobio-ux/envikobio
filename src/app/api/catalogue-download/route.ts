import { NextResponse } from 'next/server';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, BorderStyle, WidthType } from 'docx';

const productCategories = [
  {
    category: 'Core Nutrition',
    description: 'Essential nutritional foundation for daily wellness',
    products: [
      { name: 'UltiWell® Core', nameZh: '极舒优活核心', description: 'Foundation and core nutritional supplements' },
      { name: 'UltiWell® Vitality', nameZh: '极舒优活活力', description: 'Energy enhancement and vitality boost' },
      { name: 'UltiWell® Balance', nameZh: '极舒优活平衡', description: 'Body balance and coordination support' },
      { name: 'UltiWell® Pure', nameZh: '极舒优活纯净', description: 'Pure, contaminant-free supplements' },
      { name: 'UltiWell® Elevate', nameZh: '极舒优活提升', description: 'Overall health and quality of life enhancement' },
      { name: 'UltiWell® NutriBoost', nameZh: '极舒优活营养增效', description: 'Comprehensive nutritional support' },
    ],
  },
  {
    category: 'Brain & Cognitive',
    description: 'Mental clarity, focus and cognitive performance',
    products: [
      { name: 'UltiWell® Clarity', nameZh: '极舒优活明晰', description: 'Brain health and mental clarity' },
      { name: 'UltiWell® Focus', nameZh: '极舒优活专注', description: 'Attention and cognitive function enhancement' },
      { name: 'UltiWell® BrainBoost', nameZh: '极舒优活益智', description: 'Memory and cognitive performance support' },
    ],
  },
  {
    category: 'Energy & Sports',
    description: 'Performance, strength and recovery solutions',
    products: [
      { name: 'UltiWell® Strength', nameZh: '极舒优活力量', description: 'Muscle and physical strength enhancement' },
      { name: 'UltiWell® Active', nameZh: '极舒优活动力', description: 'Active lifestyle and sports nutrition' },
      { name: 'UltiWell® Energy', nameZh: '极舒优活能量', description: 'Energy boost and endurance support' },
      { name: 'UltiWell® SportPerformance', nameZh: '极舒优活运动表现', description: 'High-performance nutrition for athletes' },
      { name: 'UltiWell® Recovery Series', nameZh: '极舒优活运动恢复', description: 'Post-exercise recovery and muscle relief' },
    ],
  },
  {
    category: 'Anti-Aging & Beauty',
    description: 'Youthful vitality and skin health',
    products: [
      { name: 'UltiWell® Renew', nameZh: '极舒优活焕新', description: 'Anti-aging and vitality restoration' },
      { name: 'UltiWell® Ageless', nameZh: '极舒优活无龄', description: 'Anti-aging and skin care' },
      { name: 'UltiWell® YouthVibe', nameZh: '极舒优活青春', description: 'Health and vitality for the young generation' },
      { name: 'UltiWell® Glow', nameZh: '极舒优活光彩', description: 'Skin health and beauty' },
      { name: 'UltiWell® SkinNutritious', nameZh: '极舒优活肌肤滋养', description: 'Skin health and beauty nutrition' },
      { name: 'UltiWell® Body Care Series', nameZh: '极舒优活身体护理', description: 'Skin health and body care products' },
    ],
  },
  {
    category: 'Heart & Circulation',
    description: 'Cardiovascular health and blood circulation',
    products: [
      { name: 'UltiWell® Pulse', nameZh: '极舒优活脉动', description: 'Heart health and blood circulation' },
      { name: 'UltiWell® CardioFit', nameZh: '极舒优活心动力', description: 'Cardiovascular health promotion' },
    ],
  },
  {
    category: 'Immune Support',
    description: 'Immune system defense and protection',
    products: [
      { name: 'UltiWell® Shield', nameZh: '极舒优活护盾', description: 'Immune system support and protection' },
      { name: 'UltiWell® ImmunoShield', nameZh: '极舒优活免疫护盾', description: 'Immune system enhancement' },
    ],
  },
  {
    category: 'Joint & Mobility',
    description: 'Joint health, flexibility and mobility',
    products: [
      { name: 'UltiWell® Flex', nameZh: '极舒优活灵活', description: 'Joint health and flexibility' },
      { name: 'UltiWell® Mobility', nameZh: '极舒优活灵动', description: 'Joint flexibility and pain relief' },
    ],
  },
  {
    category: 'Sleep & Relaxation',
    description: 'Restful sleep and stress management',
    products: [
      { name: 'UltiWell® Harmony', nameZh: '极舒优活和谐', description: 'Mind-body harmony and relaxation' },
      { name: 'UltiWell® Calm', nameZh: '极舒优活宁静', description: 'Stress management and relaxation' },
      { name: 'UltiWell® Zenith', nameZh: '极舒优活巅峰', description: 'Premium flagship product line' },
      { name: 'UltiWell® Restful', nameZh: '极舒优活安睡', description: 'Sleep quality improvement' },
      { name: 'UltiWell® Sleep Series', nameZh: '极舒优活睡眠系列', description: 'Sleep quality and pattern improvement' },
      { name: 'UltiWell® Relaxation Series', nameZh: '极舒优活放松系列', description: 'Stress management and relaxation' },
      { name: 'UltiWell® Mind Soothing Series', nameZh: '极舒优活心灵舒缓', description: 'Mental health support and relaxation' },
    ],
  },
  {
    category: 'Digestive Health',
    description: 'Digestion, detox and liver support',
    products: [
      { name: 'UltiWell® Digest', nameZh: '极舒优活消化', description: 'Digestive system health support' },
      { name: 'UltiWell® Cleanse', nameZh: '极舒优活净化', description: 'Body detoxification and cleansing' },
      { name: 'UltiWell® LiverSupport', nameZh: '极舒优活肝护', description: 'Liver health and detoxification' },
      { name: 'UltiWell® KetoBalance', nameZh: '极舒优活生酮平衡', description: 'Keto diet and weight management' },
    ],
  },
  {
    category: 'Specialized Care',
    description: 'Targeted solutions for specific needs',
    products: [
      { name: 'UltiWell® MenopauseEase', nameZh: '极舒优活更年舒', description: 'Menopause symptom relief' },
      { name: 'UltiWell® EyeVive', nameZh: '极舒优活明目', description: 'Eye health and vision protection' },
      { name: 'UltiWell® Elderly Care Series', nameZh: '极舒优活老年护理', description: 'Quality of life products for seniors' },
    ],
  },
  {
    category: 'Lifestyle Solutions',
    description: 'Daily wellness and lifestyle support',
    products: [
      { name: 'UltiWell® VeganPure', nameZh: '极舒优活纯素', description: 'Vegan and pure supplements' },
      { name: 'UltiWell® Travel Series', nameZh: '极舒优活旅行系列', description: 'Portable products for travelers' },
      { name: 'UltiWell® Healthy Diet Series', nameZh: '极舒优活健康饮食', description: 'Nutritious food and beverages' },
      { name: 'UltiWell® Daily Care Series', nameZh: '极舒优活日常养护', description: 'Daily comfort and wellness tools' },
      { name: 'UltiWell® Environment Optimization Series', nameZh: '极舒优活环境优化', description: 'Living and working environment enhancement' },
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
          text: '「Ultimate Wellness」追求极致美好和健康',
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
            width: { size: 35, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: '中文名称', bold: true, size: 20 })],
              }),
            ],
            width: { size: 25, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: 'Description', bold: true, size: 20 })],
              }),
            ],
            width: { size: 40, type: WidthType.PERCENTAGE },
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
                  children: [new TextRun({ text: product.nameZh, size: 20 })],
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
