import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Sparkles,
  Droplets,
  Heart,
  Shield,
  Zap,
  RefreshCw,
  Sun,
  Leaf,
  Eye,
  Smile,
  Wind,
  Palette,
  CheckCircle,
  Package,
  Award,
  Globe,
  Droplet
} from 'lucide-react';

// All UltiGlow Products Data
const ultiGlowProducts: Record<string, {
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  keyIngredients: { name: string; percentage?: string }[];
  specifications: {
    volume?: string;
    skinType?: string;
    keyIngredient?: string;
    concentration?: string;
  };
  certifications: string[];
  howToUse: string[];
}> = {
  // Deep Hydration
  'bio-ha-serum': {
    name: 'UltiGlow™ Bio-HA Serum',
    category: 'Deep Hydration',
    description: 'Multi-weight HA for 72-hour deep hydration',
    fullDescription: 'UltiGlow™ Bio-HA Serum features multi-molecular weight hyaluronic acid from biosynthesis, providing 72-hour deep hydration at multiple skin layers.',
    benefits: [
      '72-hour hydration',
      'Multi-layer moisture',
      'Plumping effect',
      'Smooth skin texture'
    ],
    keyIngredients: [
      { name: 'Bio-HA (Multi-weight)', percentage: '2%' },
      { name: 'Sodium Hyaluronate' },
      { name: 'Hydrolyzed HA' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'All skin types',
      keyIngredient: 'Bio-HA',
      concentration: '2%'
    },
    certifications: ['GMP Certified', 'Dermatologist tested', 'Hypoallergenic'],
    howToUse: ['Apply 2-3 drops to clean skin', 'Use morning and evening', 'Follow with moisturizer']
  },
  'bio-ha-cream': {
    name: 'UltiGlow™ Bio-HA Cream',
    category: 'Deep Hydration',
    description: 'Intensive moisturizing cream with plumping effect',
    fullDescription: 'UltiGlow™ Bio-HA Cream delivers intensive moisturization with a visible plumping effect for smoother, more youthful-looking skin.',
    benefits: [
      'Intensive moisture',
      'Visible plumping',
      'Smooth finish',
      'Barrier support'
    ],
    keyIngredients: [
      { name: 'Bio-HA', percentage: '1%' },
      { name: 'Ceramides' },
      { name: 'Squalane' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Dry/Normal skin'
    },
    certifications: ['GMP Certified', 'Dermatologist tested'],
    howToUse: ['Apply to face and neck', 'Use morning and evening', 'Massage gently']
  },
  'bio-ha-mask': {
    name: 'UltiGlow™ Bio-HA Mask',
    category: 'Deep Hydration',
    description: 'Intensive hydration mask for dry skin',
    fullDescription: 'UltiGlow™ Bio-HA Mask provides intensive hydration treatment for dry and dehydrated skin.',
    benefits: [
      'Intensive treatment',
      'Deep hydration',
      'Refreshing feel',
      'Instant results'
    ],
    keyIngredients: [
      { name: 'Bio-HA', percentage: '3%' },
      { name: 'Aloe Vera' },
      { name: 'Vitamin B5' }
    ],
    specifications: {
      volume: '25ml per sheet',
      skinType: 'Dry/Dehydrated skin'
    },
    certifications: ['GMP Certified', 'Sheet mask'],
    howToUse: ['Apply to clean face', 'Leave for 15-20 minutes', 'Remove and pat remaining essence']
  },
  'bio-ha-toner': {
    name: 'UltiGlow™ Bio-HA Toner',
    category: 'Deep Hydration',
    description: 'Hydrating prep toner for better absorption',
    fullDescription: 'UltiGlow™ Bio-HA Toner prepares skin for better absorption of subsequent skincare products while providing hydration.',
    benefits: [
      'Prepares skin',
      'Enhanced absorption',
      'Hydrating base',
      'Balanced pH'
    ],
    keyIngredients: [
      { name: 'Bio-HA', percentage: '0.5%' },
      { name: 'Glycerin' },
      { name: 'Rose Water' }
    ],
    specifications: {
      volume: '200ml',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'Alcohol-free'],
    howToUse: ['Apply after cleansing', 'Use cotton pad or hands', 'Pat gently into skin']
  },
  'bio-glucosamine-serum': {
    name: 'UltiGlow™ Bio-Glucosamine Serum',
    category: 'Deep Hydration',
    description: 'Enhances natural HA production',
    fullDescription: 'UltiGlow™ Bio-Glucosamine Serum enhances the skin\'s natural hyaluronic acid production for long-term hydration.',
    benefits: [
      'Boosts natural HA',
      'Long-term hydration',
      'Firming effect',
      'Anti-aging benefits'
    ],
    keyIngredients: [
      { name: 'N-Acetyl Glucosamine', percentage: '5%' },
      { name: 'Niacinamide' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'All skin types',
      concentration: '5%'
    },
    certifications: ['GMP Certified', 'Clinical tested'],
    howToUse: ['Apply 2-3 drops', 'Use morning and evening', 'Follow with moisturizer']
  },
  'bio-glucosamine-cream': {
    name: 'UltiGlow™ Bio-Glucosamine Cream',
    category: 'Deep Hydration',
    description: 'Barrier repair and moisture lock',
    fullDescription: 'UltiGlow™ Bio-Glucosamine Cream repairs skin barrier and locks in moisture for lasting hydration.',
    benefits: [
      'Barrier repair',
      'Moisture lock',
      'Protective layer',
      'Smooth skin'
    ],
    keyIngredients: [
      { name: 'N-Acetyl Glucosamine', percentage: '3%' },
      { name: 'Ceramides' },
      { name: 'Cholesterol' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Dry/Compromised skin'
    },
    certifications: ['GMP Certified', 'Barrier repair tested'],
    howToUse: ['Apply to face and neck', 'Use evening', 'Massage thoroughly']
  },
  // Anti-Aging
  'bio-collagen-serum': {
    name: 'UltiGlow™ Bio-Collagen Serum',
    category: 'Anti-Aging',
    description: 'Recombinant human collagen, firming and elastic',
    fullDescription: 'UltiGlow™ Bio-Collagen Serum features recombinant human collagen for superior firming and elasticity improvement.',
    benefits: [
      'Firming effect',
      'Elasticity boost',
      'Wrinkle reduction',
      'Human-like collagen'
    ],
    keyIngredients: [
      { name: 'Recombinant Collagen Type III', percentage: '1%' },
      { name: 'Peptides' },
      { name: 'Vitamin C' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Aging skin',
      keyIngredient: 'Recombinant Collagen',
      concentration: '1%'
    },
    certifications: ['GMP Certified', 'Clinical proven'],
    howToUse: ['Apply 2-3 drops', 'Use morning and evening', 'Follow with moisturizer']
  },
  'bio-collagen-cream': {
    name: 'UltiGlow™ Bio-Collagen Cream',
    category: 'Anti-Aging',
    description: 'Day cream for firming and anti-wrinkle',
    fullDescription: 'UltiGlow™ Bio-Collagen Cream is a firming day cream that reduces wrinkles and improves skin elasticity.',
    benefits: [
      'Firming day cream',
      'Wrinkle reduction',
      'SPF protection',
      'Radiant finish'
    ],
    keyIngredients: [
      { name: 'Bio-Collagen', percentage: '2%' },
      { name: 'Peptides' },
      { name: 'SPF 15' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Aging skin'
    },
    certifications: ['GMP Certified', 'SPF tested'],
    howToUse: ['Apply morning', 'Use as daily moisturizer', 'Follow with sunscreen']
  },
  'bio-collagen-mask': {
    name: 'UltiGlow™ Bio-Collagen Mask',
    category: 'Anti-Aging',
    description: 'Intensive repair mask',
    fullDescription: 'UltiGlow™ Bio-Collagen Mask provides intensive repair treatment for aging and tired skin.',
    benefits: [
      'Intensive repair',
      'Instant lift',
      'Deep nourishment',
      'Anti-aging boost'
    ],
    keyIngredients: [
      { name: 'Bio-Collagen', percentage: '3%' },
      { name: 'Peptides' },
      { name: 'Adenosine' }
    ],
    specifications: {
      volume: '25ml per sheet',
      skinType: 'Aging/Tired skin'
    },
    certifications: ['GMP Certified', 'Anti-aging tested'],
    howToUse: ['Apply to clean face', 'Leave for 20 minutes', 'Remove and massage remaining']
  },
  'bio-collagen-eye-cream': {
    name: 'UltiGlow™ Bio-Collagen Eye Cream',
    category: 'Anti-Aging',
    description: 'Reduces fine lines around eyes',
    fullDescription: 'UltiGlow™ Bio-Collagen Eye Cream targets fine lines and wrinkles around the delicate eye area.',
    benefits: [
      'Reduces fine lines',
      'Eye area firming',
      'Dark circle help',
      'Gentle formula'
    ],
    keyIngredients: [
      { name: 'Bio-Collagen', percentage: '1%' },
      { name: 'Peptides' },
      { name: 'Caffeine' }
    ],
    specifications: {
      volume: '15ml',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'Ophthalmologist tested'],
    howToUse: ['Apply small amount', 'Use ring finger', 'Pat gently around eyes']
  },
  'bio-peptide-serum': {
    name: 'UltiGlow™ Bio-Peptide Serum',
    category: 'Anti-Aging',
    description: 'Multi-peptide complex, wrinkle reduction',
    fullDescription: 'UltiGlow™ Bio-Peptide Serum combines multiple peptides for comprehensive wrinkle reduction.',
    benefits: [
      'Multi-peptide formula',
      'Wrinkle reduction',
      'Expression line help',
      'Firming effect'
    ],
    keyIngredients: [
      { name: 'Argireline', percentage: '10%' },
      { name: 'Matrixyl 3000', percentage: '3%' },
      { name: 'Copper Peptide' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Aging skin',
      concentration: '10%'
    },
    certifications: ['GMP Certified', 'Clinical proven'],
    howToUse: ['Apply to target areas', 'Use morning and evening', 'Pat gently']
  },
  'bio-peptide-cream': {
    name: 'UltiGlow™ Bio-Peptide Cream',
    category: 'Anti-Aging',
    description: 'Anti-aging firming cream',
    fullDescription: 'UltiGlow™ Bio-Peptide Cream is a comprehensive anti-aging firming cream with peptide technology.',
    benefits: [
      'Firming cream',
      'Anti-aging action',
      'Smooth texture',
      'Long-term results'
    ],
    keyIngredients: [
      { name: 'Peptide Complex', percentage: '5%' },
      { name: 'Ceramides' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Aging skin'
    },
    certifications: ['GMP Certified', 'Dermatologist tested'],
    howToUse: ['Apply to face and neck', 'Use morning and evening', 'Massage upward']
  },
  'bio-copper-peptide-serum': {
    name: 'UltiGlow™ Bio-Copper Peptide Serum',
    category: 'Anti-Aging',
    description: 'Copper peptide for skin renewal',
    fullDescription: 'UltiGlow™ Bio-Copper Peptide Serum accelerates skin renewal and repair with copper peptide technology.',
    benefits: [
      'Skin renewal',
      'Repair acceleration',
      'Anti-inflammatory',
      'Collagen boost'
    ],
    keyIngredients: [
      { name: 'Copper Peptide GHK-Cu', percentage: '1%' },
      { name: 'Hyaluronic Acid' },
      { name: 'Allantoin' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Aging/Damaged skin',
      concentration: '1%'
    },
    certifications: ['GMP Certified', 'Clinical tested'],
    howToUse: ['Apply 2-3 drops', 'Use evening', 'Follow with moisturizer']
  },
  // Brightening
  'bio-vitamin-c-serum': {
    name: 'UltiGlow™ Bio-Vitamin C Serum',
    category: 'Brightening',
    description: 'Stable vitamin C (≥20%), brightening and antioxidant',
    fullDescription: 'UltiGlow™ Bio-Vitamin C Serum features stable 20% vitamin C for brightening and powerful antioxidant protection.',
    benefits: [
      'Brightening effect',
      'Antioxidant protection',
      'Even skin tone',
      'Collagen support'
    ],
    keyIngredients: [
      { name: 'L-Ascorbic Acid', percentage: '20%' },
      { name: 'Vitamin E' },
      { name: 'Ferulic Acid' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Dull/Uneven skin',
      concentration: '20%'
    },
    certifications: ['GMP Certified', 'Stability tested'],
    howToUse: ['Apply morning', 'Use SPF afterward', 'Start with alternate days']
  },
  'bio-niacinamide-serum': {
    name: 'UltiGlow™ Bio-Niacinamide Serum',
    category: 'Brightening',
    description: 'Niacinamide (≥10%), evens skin tone',
    fullDescription: 'UltiGlow™ Bio-Niacinamide Serum with 10% niacinamide evens skin tone and improves skin barrier.',
    benefits: [
      'Even skin tone',
      'Pore minimizing',
      'Barrier support',
      'Oil control'
    ],
    keyIngredients: [
      { name: 'Niacinamide', percentage: '10%' },
      { name: 'Zinc PCA' },
      { name: 'Hyaluronic Acid' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'All skin types',
      concentration: '10%'
    },
    certifications: ['GMP Certified', 'Clinical tested'],
    howToUse: ['Apply morning and evening', 'Use before moisturizer', 'Can be layered']
  },
  'bio-arbutin-serum': {
    name: 'UltiGlow™ Bio-Arbutin Serum',
    category: 'Brightening',
    description: 'Alpha-arbutin, fades dark spots',
    fullDescription: 'UltiGlow™ Bio-Arbutin Serum with alpha-arbutin effectively fades dark spots and hyperpigmentation.',
    benefits: [
      'Fades dark spots',
      'Hyperpigmentation help',
      'Even tone',
      'Gentle formula'
    ],
    keyIngredients: [
      { name: 'Alpha-Arbutin', percentage: '2%' },
      { name: 'Niacinamide' },
      { name: 'Hyaluronic Acid' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Hyperpigmented skin',
      concentration: '2%'
    },
    certifications: ['GMP Certified', 'Brightening tested'],
    howToUse: ['Apply to affected areas', 'Use morning and evening', 'Use sunscreen daily']
  },
  'bio-brightening-cream': {
    name: 'UltiGlow™ Bio-Brightening Cream',
    category: 'Brightening',
    description: 'Daily brightening moisturizer',
    fullDescription: 'UltiGlow™ Bio-Brightening Cream is a daily moisturizer that brightens skin while providing hydration.',
    benefits: [
      'Daily brightening',
      'Hydration',
      'Even tone',
      'Radiant glow'
    ],
    keyIngredients: [
      { name: 'Vitamin C Derivative', percentage: '5%' },
      { name: 'Niacinamide' },
      { name: 'Licorice Extract' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Dull skin'
    },
    certifications: ['GMP Certified', 'Brightening tested'],
    howToUse: ['Apply morning and evening', 'Massage into skin', 'Follow with SPF morning']
  },
  'bio-brightening-mask': {
    name: 'UltiGlow™ Bio-Brightening Mask',
    category: 'Brightening',
    description: 'Intensive brightening treatment',
    fullDescription: 'UltiGlow™ Bio-Brightening Mask provides intensive brightening treatment for dull and uneven skin.',
    benefits: [
      'Intensive treatment',
      'Instant brightening',
      'Even tone',
      'Radiant skin'
    ],
    keyIngredients: [
      { name: 'Vitamin C', percentage: '10%' },
      { name: 'Arbutin' },
      { name: 'Licorice Extract' }
    ],
    specifications: {
      volume: '25ml per sheet',
      skinType: 'Dull/Uneven skin'
    },
    certifications: ['GMP Certified', 'Brightening tested'],
    howToUse: ['Apply to clean face', 'Leave for 15-20 minutes', 'Use 2-3 times weekly']
  },
  // Sensitive Repair
  'bio-ectoine-serum': {
    name: 'UltiGlow™ Bio-Ectoine Serum',
    category: 'Sensitive Repair',
    description: 'Protects and repairs skin barrier',
    fullDescription: 'UltiGlow™ Bio-Ectoine Serum protects and repairs skin barrier with natural extremolyte compound.',
    benefits: [
      'Barrier protection',
      'Repair support',
      'Anti-inflammatory',
      'Hydration'
    ],
    keyIngredients: [
      { name: 'Ectoine', percentage: '2%' },
      { name: 'Ceramides' },
      { name: 'Panthenol' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Sensitive/Compromised skin',
      concentration: '2%'
    },
    certifications: ['GMP Certified', 'Sensitive skin tested'],
    howToUse: ['Apply to clean skin', 'Use morning and evening', 'Gentle application']
  },
  'bio-ectoine-cream': {
    name: 'UltiGlow™ Bio-Ectoine Cream',
    category: 'Sensitive Repair',
    description: 'Calming moisturizer for sensitive skin',
    fullDescription: 'UltiGlow™ Bio-Ectoine Cream is a calming moisturizer specifically designed for sensitive and reactive skin.',
    benefits: [
      'Calming effect',
      'Sensitive skin care',
      'Redness reduction',
      'Protection'
    ],
    keyIngredients: [
      { name: 'Ectoine', percentage: '1%' },
      { name: 'Centella Asiatica' },
      { name: 'Allantoin' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Sensitive skin'
    },
    certifications: ['GMP Certified', 'Hypoallergenic'],
    howToUse: ['Apply to face and neck', 'Use as needed', 'Gentle massage']
  },
  'bio-bisabolol-serum': {
    name: 'UltiGlow™ Bio-Bisabolol Serum',
    category: 'Sensitive Repair',
    description: 'Quick relief for redness and irritation',
    fullDescription: 'UltiGlow™ Bio-Bisabolol Serum provides quick relief for redness, irritation, and sensitive skin reactions.',
    benefits: [
      'Quick relief',
      'Redness reduction',
      'Soothing effect',
      'Anti-inflammatory'
    ],
    keyIngredients: [
      { name: 'Alpha-Bisabolol', percentage: '1%' },
      { name: 'Panthenol' },
      { name: 'Allantoin' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Sensitive/Irritated skin',
      concentration: '1%'
    },
    certifications: ['GMP Certified', 'Dermatologist tested'],
    howToUse: ['Apply to affected areas', 'Use as needed', 'Can be layered']
  },
  'bio-centella-cream': {
    name: 'UltiGlow™ Bio-Centella Cream',
    category: 'Sensitive Repair',
    description: 'Centella asiatica for repair',
    fullDescription: 'UltiGlow™ Bio-Centella Cream harnesses centella asiatica for skin repair and soothing benefits.',
    benefits: [
      'Repair support',
      'Soothing effect',
      'Healing aid',
      'Strengthening'
    ],
    keyIngredients: [
      { name: 'Centella Asiatica Extract', percentage: '5%' },
      { name: 'Asiaticoside' },
      { name: 'Madecassoside' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Compromised skin'
    },
    certifications: ['GMP Certified', 'Repair tested'],
    howToUse: ['Apply to affected areas', 'Use morning and evening', 'Gentle application']
  },
  'bio-sensitive-mask': {
    name: 'UltiGlow™ Bio-Sensitive Mask',
    category: 'Sensitive Repair',
    description: 'Intensive calming treatment',
    fullDescription: 'UltiGlow™ Bio-Sensitive Mask provides intensive calming treatment for sensitive and reactive skin.',
    benefits: [
      'Intensive calming',
      'Redness relief',
      'Soothing treatment',
      'Barrier support'
    ],
    keyIngredients: [
      { name: 'Ectoine', percentage: '2%' },
      { name: 'Centella' },
      { name: 'Bisabolol' }
    ],
    specifications: {
      volume: '25ml per sheet',
      skinType: 'Sensitive skin'
    },
    certifications: ['GMP Certified', 'Hypoallergenic'],
    howToUse: ['Apply to clean face', 'Leave for 15 minutes', 'Use as needed']
  },
  'bio-ceramide-cream': {
    name: 'UltiGlow™ Bio-Ceramide Cream',
    category: 'Sensitive Repair',
    description: 'Rebuilds skin barrier',
    fullDescription: 'UltiGlow™ Bio-Ceramide Cream rebuilds and strengthens the skin barrier with essential ceramides.',
    benefits: [
      'Barrier rebuild',
      'Strengthening',
      'Protection',
      'Hydration retention'
    ],
    keyIngredients: [
      { name: 'Ceramide NP', percentage: '3%' },
      { name: 'Ceramide AP' },
      { name: 'Ceramide EOP' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Compromised barrier skin',
      concentration: '3%'
    },
    certifications: ['GMP Certified', 'Barrier tested'],
    howToUse: ['Apply to face and neck', 'Use evening', 'Can be layered']
  },
  // Acne Control
  'bio-salicylic-serum': {
    name: 'UltiGlow™ Bio-Salicylic Serum',
    category: 'Acne Control',
    description: 'Oil-soluble BHA, deep pore cleansing',
    fullDescription: 'UltiGlow™ Bio-Salicylic Serum with BHA provides deep pore cleansing for acne-prone skin.',
    benefits: [
      'Deep pore cleansing',
      'Exfoliation',
      'Acne prevention',
      'Oil control'
    ],
    keyIngredients: [
      { name: 'Salicylic Acid', percentage: '2%' },
      { name: 'Niacinamide' },
      { name: 'Tea Tree Oil' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Acne-prone skin',
      concentration: '2%'
    },
    certifications: ['GMP Certified', 'Acne tested'],
    howToUse: ['Apply to affected areas', 'Start with alternate days', 'Use sunscreen']
  },
  'bio-acne-serum': {
    name: 'UltiGlow™ Bio-Acne Serum',
    category: 'Acne Control',
    description: 'Salicylic acid + niacinamide complex',
    fullDescription: 'UltiGlow™ Bio-Acne Serum combines salicylic acid and niacinamide for comprehensive acne treatment.',
    benefits: [
      'Acne treatment',
      'Inflammation reduction',
      'Pore clearing',
      'Prevention'
    ],
    keyIngredients: [
      { name: 'Salicylic Acid', percentage: '1%' },
      { name: 'Niacinamide', percentage: '5%' },
      { name: 'Zinc PCA' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Acne-prone skin'
    },
    certifications: ['GMP Certified', 'Clinical tested'],
    howToUse: ['Apply to clean skin', 'Use evening', 'Follow with moisturizer']
  },
  'bio-acne-patch': {
    name: 'UltiGlow™ Bio-Acne Patch',
    category: 'Acne Control',
    description: 'Hydrocolloid patch, overnight treatment',
    fullDescription: 'UltiGlow™ Bio-Acne Patch uses hydrocolloid technology for overnight acne treatment.',
    benefits: [
      'Overnight treatment',
      'Pimple reduction',
      'Protection',
      'Fast healing'
    ],
    keyIngredients: [
      { name: 'Hydrocolloid' },
      { name: 'Salicylic Acid' },
      { name: 'Niacinamide' }
    ],
    specifications: {
      volume: '36 patches',
      skinType: 'Acne-prone skin'
    },
    certifications: ['GMP Certified', 'Patch tested'],
    howToUse: ['Clean and dry area', 'Apply patch', 'Leave overnight']
  },
  'bio-oil-control-toner': {
    name: 'UltiGlow™ Bio-Oil Control Toner',
    category: 'Acne Control',
    description: 'Oil-balancing, pore refinement',
    fullDescription: 'UltiGlow™ Bio-Oil Control Toner balances oil production and refines pores for clearer skin.',
    benefits: [
      'Oil control',
      'Pore refinement',
      'Balancing',
      'Mattifying'
    ],
    keyIngredients: [
      { name: 'Niacinamide', percentage: '5%' },
      { name: 'Zinc PCA' },
      { name: 'Witch Hazel' }
    ],
    specifications: {
      volume: '200ml',
      skinType: 'Oily/Combination skin'
    },
    certifications: ['GMP Certified', 'Oil control tested'],
    howToUse: ['Apply after cleansing', 'Use cotton pad', 'Morning and evening']
  },
  'bio-tea-tree-serum': {
    name: 'UltiGlow™ Bio-Tea Tree Serum',
    category: 'Acne Control',
    description: 'Natural antibacterial, spot treatment',
    fullDescription: 'UltiGlow™ Bio-Tea Tree Serum provides natural antibacterial action for spot treatment of acne.',
    benefits: [
      'Natural antibacterial',
      'Spot treatment',
      'Quick action',
      'Gentle formula'
    ],
    keyIngredients: [
      { name: 'Tea Tree Oil', percentage: '5%' },
      { name: 'Niacinamide' },
      { name: 'Salicylic Acid' }
    ],
    specifications: {
      volume: '15ml',
      skinType: 'Acne-prone skin',
      concentration: '5%'
    },
    certifications: ['GMP Certified', 'Natural ingredients'],
    howToUse: ['Apply to spots only', 'Use as needed', 'Can be used under makeup']
  },
  // Skin Renewal
  'bio-aha-serum': {
    name: 'UltiGlow™ Bio-AHA Serum',
    category: 'Skin Renewal',
    description: 'Gentle exfoliation, smooth skin texture',
    fullDescription: 'UltiGlow™ Bio-AHA Serum provides gentle exfoliation for smoother, more radiant skin.',
    benefits: [
      'Gentle exfoliation',
      'Smooth texture',
      'Brightening',
      'Renewal'
    ],
    keyIngredients: [
      { name: 'Glycolic Acid', percentage: '8%' },
      { name: 'Lactic Acid' },
      { name: 'Hyaluronic Acid' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Dull/Rough skin',
      concentration: '8%'
    },
    certifications: ['GMP Certified', 'Exfoliation tested'],
    howToUse: ['Apply evening', 'Start with 2-3 times weekly', 'Use sunscreen daily']
  },
  'bio-bha-toner': {
    name: 'UltiGlow™ Bio-BHA Toner',
    category: 'Skin Renewal',
    description: 'Pore clearing, blackhead reduction',
    fullDescription: 'UltiGlow™ Bio-BHA Toner clears pores and reduces blackheads for clearer skin.',
    benefits: [
      'Pore clearing',
      'Blackhead reduction',
      'Exfoliation',
      'Smooth skin'
    ],
    keyIngredients: [
      { name: 'Salicylic Acid', percentage: '1%' },
      { name: 'Willow Bark Extract' },
      { name: 'Niacinamide' }
    ],
    specifications: {
      volume: '200ml',
      skinType: 'Oily/Acne-prone skin',
      concentration: '1%'
    },
    certifications: ['GMP Certified', 'Pore tested'],
    howToUse: ['Apply after cleansing', 'Use cotton pad', 'Evening use recommended']
  },
  'bio-renew-mask': {
    name: 'UltiGlow™ Bio-Renew Mask',
    category: 'Skin Renewal',
    description: 'Enzyme renewal, brightening effect',
    fullDescription: 'UltiGlow™ Bio-Renew Mask uses natural enzymes for skin renewal with brightening effect.',
    benefits: [
      'Enzyme renewal',
      'Brightening',
      'Gentle exfoliation',
      'Radiant skin'
    ],
    keyIngredients: [
      { name: 'Papain Enzyme', percentage: '2%' },
      { name: 'Bromelain' },
      { name: 'Vitamin C' }
    ],
    specifications: {
      volume: '100ml',
      skinType: 'Dull skin'
    },
    certifications: ['GMP Certified', 'Enzyme tested'],
    howToUse: ['Apply thin layer', 'Leave 10-15 minutes', 'Rinse thoroughly']
  },
  'bio-retinol-serum': {
    name: 'UltiGlow™ Bio-Retinol Serum',
    category: 'Skin Renewal',
    description: 'Encapsulated retinol, anti-aging renewal',
    fullDescription: 'UltiGlow™ Bio-Retinol Serum features encapsulated retinol for effective anti-aging with minimal irritation.',
    benefits: [
      'Anti-aging',
      'Wrinkle reduction',
      'Cell renewal',
      'Gentle delivery'
    ],
    keyIngredients: [
      { name: 'Encapsulated Retinol', percentage: '0.5%' },
      { name: 'Bakuchiol' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Aging skin',
      concentration: '0.5%'
    },
    certifications: ['GMP Certified', 'Retinol tested'],
    howToUse: ['Apply evening only', 'Start with 2-3 times weekly', 'Always use sunscreen']
  },
  'bio-lactic-serum': {
    name: 'UltiGlow™ Bio-Lactic Serum',
    category: 'Skin Renewal',
    description: 'Gentle exfoliation for sensitive skin',
    fullDescription: 'UltiGlow™ Bio-Lactic Serum provides gentle AHA exfoliation suitable for sensitive skin.',
    benefits: [
      'Gentle exfoliation',
      'Hydrating',
      'Sensitive skin safe',
      'Brightening'
    ],
    keyIngredients: [
      { name: 'Lactic Acid', percentage: '5%' },
      { name: 'Hyaluronic Acid' },
      { name: 'Aloe Vera' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Sensitive skin',
      concentration: '5%'
    },
    certifications: ['GMP Certified', 'Sensitive skin tested'],
    howToUse: ['Apply evening', 'Use 2-3 times weekly', 'Follow with moisturizer']
  },
  // Sun Protection
  'bio-sunscreen-spf50': {
    name: 'UltiGlow™ Bio-Sunscreen SPF50',
    category: 'Sun Protection',
    description: 'Lightweight broad spectrum protection',
    fullDescription: 'UltiGlow™ Bio-Sunscreen SPF50 provides lightweight broad spectrum protection with a non-greasy finish.',
    benefits: [
      'SPF 50 protection',
      'Broad spectrum',
      'Lightweight',
      'Non-greasy'
    ],
    keyIngredients: [
      { name: 'Zinc Oxide' },
      { name: 'Titanium Dioxide' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'SPF tested', 'Broad spectrum'],
    howToUse: ['Apply liberally', 'Reapply every 2 hours', 'Use daily']
  },
  'bio-sun-serum': {
    name: 'UltiGlow™ Bio-Sun Serum',
    category: 'Sun Protection',
    description: 'Sun protection serum, glow finish',
    fullDescription: 'UltiGlow™ Bio-Sun Serum combines sun protection with a radiant, glowing finish.',
    benefits: [
      'Sun protection',
      'Glowing finish',
      'Serum texture',
      'Hydrating'
    ],
    keyIngredients: [
      { name: 'Chemical UV Filters' },
      { name: 'Niacinamide' },
      { name: 'Hyaluronic Acid' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'SPF tested'],
    howToUse: ['Apply after skincare', 'Use as last step', 'Reapply as needed']
  },
  'bio-after-sun-gel': {
    name: 'UltiGlow™ Bio-After Sun Gel',
    category: 'Sun Protection',
    description: 'Soothing after-sun care',
    fullDescription: 'UltiGlow™ Bio-After Sun Gel soothes and cools skin after sun exposure.',
    benefits: [
      'Soothing',
      'Cooling effect',
      'Hydration',
      'Recovery'
    ],
    keyIngredients: [
      { name: 'Aloe Vera', percentage: '90%' },
      { name: 'Cucumber Extract' },
      { name: 'Allantoin' }
    ],
    specifications: {
      volume: '100ml',
      skinType: 'Sun-exposed skin'
    },
    certifications: ['GMP Certified', 'After-sun tested'],
    howToUse: ['Apply after sun exposure', 'Use liberally', 'Can be refrigerated']
  },
  'bio-uv-shield-cream': {
    name: 'UltiGlow™ Bio-UV Shield Cream',
    category: 'Sun Protection',
    description: 'Daily UV protection moisturizer',
    fullDescription: 'UltiGlow™ Bio-UV Shield Cream combines daily moisturization with UV protection.',
    benefits: [
      'Daily protection',
      'Moisturizing',
      'SPF 30',
      'Lightweight'
    ],
    keyIngredients: [
      { name: 'UV Filters' },
      { name: 'Ceramides' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'SPF 30 tested'],
    howToUse: ['Apply morning', 'Use as daily moisturizer', 'Reapply as needed']
  },
  // Antioxidant
  'bio-ergothioneine-serum': {
    name: 'UltiGlow™ Bio-Ergothioneine Serum',
    category: 'Antioxidant',
    description: 'Deep antioxidant protection (≥98%)',
    fullDescription: 'UltiGlow™ Bio-Ergothioneine Serum delivers deep antioxidant protection with high-purity ergothioneine.',
    benefits: [
      'Deep antioxidant',
      'Cell protection',
      'Anti-aging',
      'DNA protection'
    ],
    keyIngredients: [
      { name: 'Ergothioneine', percentage: '0.5%' },
      { name: 'Vitamin C' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'All skin types',
      keyIngredient: 'Ergothioneine ≥98%'
    },
    certifications: ['GMP Certified', 'Antioxidant tested'],
    howToUse: ['Apply morning', 'Use before sunscreen', 'Daily use recommended']
  },
  'bio-resveratrol-cream': {
    name: 'UltiGlow™ Bio-Resveratrol Cream',
    category: 'Antioxidant',
    description: 'Anti-aging night cream',
    fullDescription: 'UltiGlow™ Bio-Resveratrol Cream is an anti-aging night cream with powerful antioxidant properties.',
    benefits: [
      'Anti-aging',
      'Antioxidant',
      'Night repair',
      'Firming'
    ],
    keyIngredients: [
      { name: 'Resveratrol', percentage: '1%' },
      { name: 'Peptides' },
      { name: 'Ceramides' }
    ],
    specifications: {
      volume: '50ml',
      skinType: 'Aging skin',
      concentration: '1%'
    },
    certifications: ['GMP Certified', 'Anti-aging tested'],
    howToUse: ['Apply evening', 'Massage into skin', 'Use on clean skin']
  },
  'bio-green-tea-essence': {
    name: 'UltiGlow™ Bio-Green Tea Essence',
    category: 'Antioxidant',
    description: 'EGCG essence, soothing antioxidant',
    fullDescription: 'UltiGlow™ Bio-Green Tea Essence harnesses EGCG for soothing antioxidant protection.',
    benefits: [
      'EGCG antioxidant',
      'Soothing',
      'Anti-inflammatory',
      'Protection'
    ],
    keyIngredients: [
      { name: 'EGCG', percentage: '5%' },
      { name: 'Green Tea Extract' },
      { name: 'Aloe Vera' }
    ],
    specifications: {
      volume: '100ml',
      skinType: 'All skin types',
      concentration: '5%'
    },
    certifications: ['GMP Certified', 'EGCG tested'],
    howToUse: ['Apply after toner', 'Pat into skin', 'Morning and evening']
  },
  'bio-ferulic-serum': {
    name: 'UltiGlow™ Bio-Ferulic Acid Serum',
    category: 'Antioxidant',
    description: 'Enhances other antioxidant activities',
    fullDescription: 'UltiGlow™ Bio-Ferulic Acid Serum enhances the effectiveness of other antioxidants like Vitamin C and E.',
    benefits: [
      'Antioxidant booster',
      'Stability enhancer',
      'Photo-protection',
      'Anti-aging'
    ],
    keyIngredients: [
      { name: 'Ferulic Acid', percentage: '0.5%' },
      { name: 'Vitamin C' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'All skin types',
      concentration: '0.5%'
    },
    certifications: ['GMP Certified', 'Stability tested'],
    howToUse: ['Apply morning', 'Use with Vitamin C', 'Follow with sunscreen']
  },
  // Eye Care
  'bio-eye-cream': {
    name: 'UltiGlow™ Bio-Eye Cream',
    category: 'Eye Care',
    description: 'Reduces dark circles and fine lines',
    fullDescription: 'UltiGlow™ Bio-Eye Cream reduces dark circles and fine lines around the delicate eye area.',
    benefits: [
      'Dark circle reduction',
      'Fine line help',
      'Brightening',
      'Hydration'
    ],
    keyIngredients: [
      { name: 'Caffeine', percentage: '2%' },
      { name: 'Peptides' },
      { name: 'Vitamin K' }
    ],
    specifications: {
      volume: '15ml',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'Ophthalmologist tested'],
    howToUse: ['Apply small amount', 'Use ring finger', 'Pat gently']
  },
  'bio-peptide-eye-serum': {
    name: 'UltiGlow™ Bio-Peptide Eye Serum',
    category: 'Eye Care',
    description: 'Peptide complex for eye contour',
    fullDescription: 'UltiGlow™ Bio-Peptide Eye Serum targets eye contour concerns with advanced peptide technology.',
    benefits: [
      'Peptide action',
      'Eye contour',
      'Firming',
      'Anti-wrinkle'
    ],
    keyIngredients: [
      { name: 'Peptide Complex', percentage: '5%' },
      { name: 'Caffeine' },
      { name: 'Hyaluronic Acid' }
    ],
    specifications: {
      volume: '15ml',
      skinType: 'Aging eye area',
      concentration: '5%'
    },
    certifications: ['GMP Certified', 'Eye tested'],
    howToUse: ['Apply small amount', 'Use morning and evening', 'Gentle patting']
  },
  'bio-eye-mask': {
    name: 'UltiGlow™ Bio-Eye Mask',
    category: 'Eye Care',
    description: 'Intensive treatment for tired eyes',
    fullDescription: 'UltiGlow™ Bio-Eye Mask provides intensive treatment for tired, puffy eyes.',
    benefits: [
      'Intensive treatment',
      'De-puffing',
      'Brightening',
      'Refreshing'
    ],
    keyIngredients: [
      { name: 'Caffeine' },
      { name: 'Peptides' },
      { name: 'Cucumber Extract' }
    ],
    specifications: {
      volume: '60 patches (30 pairs)',
      skinType: 'Tired eyes'
    },
    certifications: ['GMP Certified', 'Patch tested'],
    howToUse: ['Apply under eyes', 'Leave 15-20 minutes', 'Use 2-3 times weekly']
  },
  // Lip Care
  'bio-lip-balm': {
    name: 'UltiGlow™ Bio-Lip Balm',
    category: 'Lip Care',
    description: 'Moisturizing lip balm with natural ingredients',
    fullDescription: 'UltiGlow™ Bio-Lip Balm moisturizes and protects lips with natural, bio-synthesized ingredients.',
    benefits: [
      'Moisturizing',
      'Protection',
      'Natural shine',
      'Soft lips'
    ],
    keyIngredients: [
      { name: 'Shea Butter' },
      { name: 'Beeswax' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '10g',
      skinType: 'All lips'
    },
    certifications: ['GMP Certified', 'Natural ingredients'],
    howToUse: ['Apply as needed', 'Use throughout day', 'Can be used under lipstick']
  },
  'bio-lip-mask': {
    name: 'UltiGlow™ Bio-Lip Mask',
    category: 'Lip Care',
    description: 'Overnight intensive lip treatment',
    fullDescription: 'UltiGlow™ Bio-Lip Mask provides overnight intensive treatment for soft, smooth lips.',
    benefits: [
      'Overnight treatment',
      'Intensive repair',
      'Deep hydration',
      'Smooth lips'
    ],
    keyIngredients: [
      { name: 'Hyaluronic Acid' },
      { name: 'Ceramides' },
      { name: 'Shea Butter' }
    ],
    specifications: {
      volume: '15ml',
      skinType: 'Dry lips'
    },
    certifications: ['GMP Certified', 'Lip tested'],
    howToUse: ['Apply thick layer at night', 'Leave overnight', 'Wipe off morning']
  },
  'bio-lip-serum': {
    name: 'UltiGlow™ Bio-Lip Serum',
    category: 'Lip Care',
    description: 'Plumping and hydrating lip serum',
    fullDescription: 'UltiGlow™ Bio-Lip Serum plumps and hydrates lips for a fuller, smoother appearance.',
    benefits: [
      'Plumping',
      'Hydrating',
      'Smooth texture',
      'Fuller lips'
    ],
    keyIngredients: [
      { name: 'Hyaluronic Acid' },
      { name: 'Peptides' },
      { name: 'Mint Oil' }
    ],
    specifications: {
      volume: '10ml',
      skinType: 'All lips'
    },
    certifications: ['GMP Certified', 'Lip tested'],
    howToUse: ['Apply to lips', 'Use as needed', 'Can be layered under balm']
  },
  // Pore Care
  'bio-pore-serum': {
    name: 'UltiGlow™ Bio-Pore Serum',
    category: 'Pore Care',
    description: 'Refines pores, controls oil',
    fullDescription: 'UltiGlow™ Bio-Pore Serum refines pores and controls excess oil for smoother skin.',
    benefits: [
      'Pore refinement',
      'Oil control',
      'Smooth skin',
      'Mattifying'
    ],
    keyIngredients: [
      { name: 'Niacinamide', percentage: '10%' },
      { name: 'Zinc PCA' },
      { name: 'Salicylic Acid' }
    ],
    specifications: {
      volume: '30ml',
      skinType: 'Oily/Combination skin',
      concentration: '10%'
    },
    certifications: ['GMP Certified', 'Pore tested'],
    howToUse: ['Apply to T-zone', 'Use morning and evening', 'Follow with moisturizer']
  },
  'bio-pore-mask': {
    name: 'UltiGlow™ Bio-Pore Mask',
    category: 'Pore Care',
    description: 'Deep cleansing clay mask',
    fullDescription: 'UltiGlow™ Bio-Pore Mask provides deep cleansing with clay to minimize pores.',
    benefits: [
      'Deep cleansing',
      'Pore minimizing',
      'Oil absorption',
      'Purifying'
    ],
    keyIngredients: [
      { name: 'Kaolin Clay' },
      { name: 'Bentonite Clay' },
      { name: 'Tea Tree Oil' }
    ],
    specifications: {
      volume: '100ml',
      skinType: 'Oily/Combination skin'
    },
    certifications: ['GMP Certified', 'Clay mask tested'],
    howToUse: ['Apply thin layer', 'Leave 10-15 minutes', 'Rinse thoroughly']
  },
  'bio-pore-toner': {
    name: 'UltiGlow™ Bio-Pore Toner',
    category: 'Pore Care',
    description: 'Tightens pores, smooths texture',
    fullDescription: 'UltiGlow™ Bio-Pore Toner tightens pores and smooths skin texture for a refined appearance.',
    benefits: [
      'Pore tightening',
      'Texture smoothing',
      'Balancing',
      'Refreshing'
    ],
    keyIngredients: [
      { name: 'Witch Hazel' },
      { name: 'Niacinamide' },
      { name: 'Tea Tree Oil' }
    ],
    specifications: {
      volume: '200ml',
      skinType: 'Oily/Combination skin'
    },
    certifications: ['GMP Certified', 'Pore tested'],
    howToUse: ['Apply after cleansing', 'Use cotton pad', 'Morning and evening']
  },
  // Natural Color
  'bio-lip-tint': {
    name: 'UltiGlow™ Bio-Lip Tint',
    category: 'Natural Color',
    description: 'Plant-based natural color',
    fullDescription: 'UltiGlow™ Bio-Lip Tint provides plant-based natural color for a subtle, lasting tint.',
    benefits: [
      'Natural color',
      'Long-lasting',
      'Moisturizing',
      'Buildable'
    ],
    keyIngredients: [
      { name: 'Plant Pigments' },
      { name: 'Jojoba Oil' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '5ml',
      skinType: 'All lips'
    },
    certifications: ['GMP Certified', 'Natural ingredients'],
    howToUse: ['Apply to lips', 'Layer for intensity', 'Can be used on cheeks']
  },
  'bio-bb-cream': {
    name: 'UltiGlow™ Bio-BB Cream',
    category: 'Natural Color',
    description: 'Natural coverage, light finish',
    fullDescription: 'UltiGlow™ Bio-BB Cream provides natural coverage with a light, breathable finish.',
    benefits: [
      'Natural coverage',
      'Light finish',
      'SPF protection',
      'Skincare benefits'
    ],
    keyIngredients: [
      { name: 'Mineral Pigments' },
      { name: 'Hyaluronic Acid' },
      { name: 'Niacinamide' }
    ],
    specifications: {
      volume: '40ml',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'SPF tested'],
    howToUse: ['Apply to face', 'Blend evenly', 'Can be layered']
  },
  'bio-blush': {
    name: 'UltiGlow™ Bio-Blush',
    category: 'Natural Color',
    description: 'Mineral blush, healthy glow',
    fullDescription: 'UltiGlow™ Bio-Blush provides a healthy, natural glow with mineral pigments.',
    benefits: [
      'Healthy glow',
      'Natural finish',
      'Buildable color',
      'Long-wearing'
    ],
    keyIngredients: [
      { name: 'Mineral Pigments' },
      { name: 'Mica' },
      { name: 'Jojoba Oil' }
    ],
    specifications: {
      volume: '8g',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'Mineral based'],
    howToUse: ['Apply to cheeks', 'Blend outward', 'Layer for intensity']
  },
  'bio-highlighter': {
    name: 'UltiGlow™ Bio-Highlighter',
    category: 'Natural Color',
    description: 'Natural radiance, subtle shimmer',
    fullDescription: 'UltiGlow™ Bio-Highlighter creates natural radiance with subtle, elegant shimmer.',
    benefits: [
      'Natural radiance',
      'Subtle shimmer',
      'Elegant glow',
      'Versatile'
    ],
    keyIngredients: [
      { name: 'Mica' },
      { name: 'Mineral Pigments' },
      { name: 'Argan Oil' }
    ],
    specifications: {
      volume: '6g',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'Mineral based'],
    howToUse: ['Apply to high points', 'Blend well', 'Can be used on body']
  },
  'bio-bronzer': {
    name: 'UltiGlow™ Bio-Bronzer',
    category: 'Natural Color',
    description: 'Sun-kissed natural look',
    fullDescription: 'UltiGlow™ Bio-Bronzer creates a sun-kissed, natural look for a healthy complexion.',
    benefits: [
      'Sun-kissed look',
      'Natural warmth',
      'Contouring',
      'Buildable'
    ],
    keyIngredients: [
      { name: 'Mineral Bronzers' },
      { name: 'Mica' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '8g',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'Mineral based'],
    howToUse: ['Apply where sun hits', 'Blend well', 'Layer for intensity']
  },
  'bio-eyebrow-gel': {
    name: 'UltiGlow™ Bio-Eyebrow Gel',
    category: 'Natural Color',
    description: 'Natural definition, long-lasting',
    fullDescription: 'UltiGlow™ Bio-Eyebrow Gel provides natural definition with long-lasting hold.',
    benefits: [
      'Natural definition',
      'Long-lasting hold',
      'Easy application',
      'Smudge-proof'
    ],
    keyIngredients: [
      { name: 'Natural Pigments' },
      { name: 'Beeswax' },
      { name: 'Vitamin E' }
    ],
    specifications: {
      volume: '5ml',
      skinType: 'All skin types'
    },
    certifications: ['GMP Certified', 'Long-wearing tested'],
    howToUse: ['Brush through brows', 'Shape as desired', 'Can be layered']
  }
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(ultiGlowProducts).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = ultiGlowProducts[id];
  
  if (!product) {
    return {
      title: 'Product Not Found | UltiGlow™ | Enviko Bio',
    };
  }

  return {
    title: `${product.name} | UltiGlow™ | Enviko Bio`,
    description: product.fullDescription,
  };
}

export default async function UltiGlowProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = ultiGlowProducts[id];

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/catalogue" className="text-gray-500 hover:text-gray-700">Catalogue</Link>
            <span className="text-gray-400">/</span>
            <Link href="/catalogue#ultiglow" className="text-gray-500 hover:text-gray-700">UltiGlow™</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Product Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
                <Sparkles className="w-4 h-4" />
                {product.category}
              </div>
              <h1 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.fullDescription}
              </p>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#A1BA80' }} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.specifications.volume && (
                    <div>
                      <p className="text-sm text-gray-500">Volume/Size</p>
                      <p className="font-medium text-gray-900">{product.specifications.volume}</p>
                    </div>
                  )}
                  {product.specifications.skinType && (
                    <div>
                      <p className="text-sm text-gray-500">Skin Type</p>
                      <p className="font-medium text-gray-900">{product.specifications.skinType}</p>
                    </div>
                  )}
                  {product.specifications.keyIngredient && (
                    <div>
                      <p className="text-sm text-gray-500">Key Ingredient</p>
                      <p className="font-medium text-gray-900">{product.specifications.keyIngredient}</p>
                    </div>
                  )}
                  {product.specifications.concentration && (
                    <div>
                      <p className="text-sm text-gray-500">Concentration</p>
                      <p className="font-medium text-gray-900">{product.specifications.concentration}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Product Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Droplet className="w-24 h-24 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-400">Product Image</p>
                  <p className="text-sm text-gray-400">{product.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Key Ingredients */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                    <Leaf className="w-5 h-5" style={{ color: '#A1BA80' }} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Key Ingredients</h3>
                </div>
                <ul className="space-y-2">
                  {product.keyIngredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center justify-between text-gray-700">
                      <span>{ingredient.name}</span>
                      {ingredient.percentage && (
                        <span className="text-sm text-gray-500">{ingredient.percentage}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                    <Award className="w-5 h-5" style={{ color: '#A1BA80' }} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Certifications</h3>
                </div>
                <ul className="space-y-2">
                  {product.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* How to Use */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                    <Globe className="w-5 h-5" style={{ color: '#A1BA80' }} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">How to Use</h3>
                </div>
                <ul className="space-y-2">
                  {product.howToUse.map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#A1BA80' }}>
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-normal text-gray-900 mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us for detailed specifications, pricing, and OEM/ODM partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#A1BA80' }}
            >
              Request Quote
            </Link>
            <Link 
              href="/catalogue#ultiglow"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
