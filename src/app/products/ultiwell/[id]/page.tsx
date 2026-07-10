import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Target, 
  Brain, 
  Dumbbell, 
  Sparkles, 
  Heart, 
  Shield, 
  Bone, 
  Moon, 
  Leaf,
  Users,
  Activity,
  CheckCircle,
  Package,
  Leaf as LeafIcon,
  Award,
  Globe
} from 'lucide-react';

// All UltiWell Products Data
const ultiWellProducts: Record<string, {
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  ingredients: string[];
  specifications: {
    servingSize?: string;
    capsulesPerBottle?: string;
    keyIngredient?: string;
    purity?: string;
  };
  certifications: string[];
  applications: string[];
}> = {
  // Core Nutrition
  'core': {
    name: 'UltiWell® Core',
    category: 'Core Nutrition',
    description: 'Foundation and core nutritional supplements',
    fullDescription: 'UltiWell® Core provides essential vitamins, minerals, and nutrients to support your daily wellness foundation. Formulated with bio-synthesized ingredients for optimal absorption and efficacy.',
    benefits: [
      'Complete daily nutritional support',
      'Enhanced bioavailability',
      'Supports overall wellness',
      'Scientifically formulated'
    ],
    ingredients: ['Biosynthesis Vitamins B Complex', 'Chelated Minerals', 'Bio-available Vitamin D3', 'Natural Vitamin E'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Multi-vitamin complex'
    },
    certifications: ['GMP Certified', 'ISO 9001', 'Non-GMO'],
    applications: ['Daily supplementation', 'Nutritional gaps', 'General wellness']
  },
  'vitality': {
    name: 'UltiWell® Vitality',
    category: 'Core Nutrition',
    description: 'Energy enhancement and vitality boost',
    fullDescription: 'UltiWell® Vitality is designed to boost your natural energy levels and support overall vitality. Perfect for those seeking to maintain peak performance throughout the day.',
    benefits: [
      'Natural energy enhancement',
      'Reduced fatigue',
      'Improved mental clarity',
      'Sustained vitality'
    ],
    ingredients: ['CoQ10 (Biosynthesis)', 'B-Complex Vitamins', 'Adaptogenic Herbs', 'L-Carnitine'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'CoQ10 ≥98%'
    },
    certifications: ['GMP Certified', 'Third-party tested'],
    applications: ['Energy support', 'Active lifestyle', 'Fatigue management']
  },
  'balance': {
    name: 'UltiWell® Balance',
    category: 'Core Nutrition',
    description: 'Body balance and coordination support',
    fullDescription: 'UltiWell® Balance supports your body\'s natural equilibrium, promoting overall balance and coordination for optimal daily function.',
    benefits: [
      'Supports body balance',
      'Enhances coordination',
      'Promotes internal harmony',
      'Natural formulation'
    ],
    ingredients: ['Magnesium Bisglycinate', 'Vitamin B6', 'Zinc Chelate', 'L-Theanine'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'ISO 9001'],
    applications: ['Balance support', 'Stress management', 'Daily wellness']
  },
  'pure': {
    name: 'UltiWell® Pure',
    category: 'Core Nutrition',
    description: 'Pure, contaminant-free supplements',
    fullDescription: 'UltiWell® Pure offers the highest purity supplements, free from contaminants and artificial additives. Ideal for those with sensitive systems or purity preferences.',
    benefits: [
      'Ultra-pure formulation',
      'No artificial additives',
      'Contaminant-free',
      'Hypoallergenic'
    ],
    ingredients: ['Purified Vitamins', 'Pharmaceutical-grade Minerals', 'Natural Fillers'],
    specifications: {
      servingSize: '1-2 capsules daily',
      capsulesPerBottle: '60 capsules',
      purity: '≥99%'
    },
    certifications: ['GMP Certified', 'Pharmaceutical grade', 'Purity tested'],
    applications: ['Purity-focused supplementation', 'Sensitive individuals', 'Quality assurance']
  },
  'elevate': {
    name: 'UltiWell® Elevate',
    category: 'Core Nutrition',
    description: 'Overall health and quality of life enhancement',
    fullDescription: 'UltiWell® Elevate is a comprehensive formula designed to enhance overall health and improve quality of life through advanced biosynthesis technology.',
    benefits: [
      'Comprehensive health support',
      'Quality of life improvement',
      'Advanced formula',
      'Long-term wellness'
    ],
    ingredients: ['Premium Multivitamin Complex', 'Antioxidants', 'Adaptogens', 'Essential Minerals'],
    specifications: {
      servingSize: '3 capsules daily',
      capsulesPerBottle: '90 capsules'
    },
    certifications: ['GMP Certified', 'ISO 9001', 'Clinical studies'],
    applications: ['Overall wellness', 'Quality of life', 'Health optimization']
  },
  'nutriboost': {
    name: 'UltiWell® NutriBoost',
    category: 'Core Nutrition',
    description: 'Comprehensive nutritional support',
    fullDescription: 'UltiWell® NutriBoost delivers comprehensive nutritional support with enhanced absorption technology for maximum benefit.',
    benefits: [
      'Complete nutritional profile',
      'Enhanced absorption',
      'Convenient daily dose',
      'Scientifically balanced'
    ],
    ingredients: ['Full Spectrum Vitamins', 'Chelated Minerals', 'Probiotics', 'Enzymes'],
    specifications: {
      servingSize: '3 capsules daily',
      capsulesPerBottle: '90 capsules'
    },
    certifications: ['GMP Certified', 'Non-GMO', 'Gluten-free'],
    applications: ['Daily nutrition', 'Dietary supplement', 'Wellness maintenance']
  },
  // Brain & Cognitive
  'clarity': {
    name: 'UltiWell® Clarity',
    category: 'Brain & Cognitive',
    description: 'Brain health and mental clarity',
    fullDescription: 'UltiWell® Clarity supports brain health and mental clarity with advanced nootropic compounds from biosynthesis sources.',
    benefits: [
      'Enhanced mental clarity',
      'Improved focus',
      'Brain health support',
      'Cognitive protection'
    ],
    ingredients: ['Phosphatidylserine', 'DHA (Algae-derived)', 'Ginkgo Biloba', 'Lion\'s Mane Extract'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Phosphatidylserine ≥50%'
    },
    certifications: ['GMP Certified', 'Third-party tested'],
    applications: ['Mental clarity', 'Focus support', 'Brain health']
  },
  'focus': {
    name: 'UltiWell® Focus',
    category: 'Brain & Cognitive',
    description: 'Attention and cognitive function enhancement',
    fullDescription: 'UltiWell® Focus is specifically formulated to enhance attention and cognitive function for peak mental performance.',
    benefits: [
      'Improved attention span',
      'Enhanced cognitive function',
      'Better concentration',
      'Mental stamina'
    ],
    ingredients: ['L-Tyrosine', 'Alpha-GPC', 'Huperzine A', 'Vitamin B12'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Cognitive tested'],
    applications: ['Focus enhancement', 'Study support', 'Work performance']
  },
  'brainboost': {
    name: 'UltiWell® BrainBoost',
    category: 'Brain & Cognitive',
    description: 'Memory and cognitive performance support',
    fullDescription: 'UltiWell® BrainBoost combines premium nootropics to support memory and overall cognitive performance.',
    benefits: [
      'Memory enhancement',
      'Cognitive boost',
      'Neuroprotection',
      'Mental agility'
    ],
    ingredients: ['Bacopa Monnieri', 'Acetyl-L-Carnitine', 'Lion\'s Mane', 'Alpha-GPC'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Memory tested'],
    applications: ['Memory support', 'Cognitive enhancement', 'Brain health']
  },
  // Energy & Sports
  'strength': {
    name: 'UltiWell® Strength',
    category: 'Energy & Sports',
    description: 'Muscle and physical strength enhancement',
    fullDescription: 'UltiWell® Strength supports muscle development and physical strength with premium biosynthesis ingredients.',
    benefits: [
      'Muscle development',
      'Strength gains',
      'Recovery support',
      'Performance optimization'
    ],
    ingredients: ['Creatine Monohydrate', 'BCAA 2:1:1', 'HMB', 'Vitamin D3'],
    specifications: {
      servingSize: '1 scoop daily',
      capsulesPerBottle: '30 servings',
      keyIngredient: 'Creatine ≥99.9%'
    },
    certifications: ['GMP Certified', 'Sports tested', 'Banned substance free'],
    applications: ['Muscle building', 'Strength training', 'Athletic performance']
  },
  'active': {
    name: 'UltiWell® Active',
    category: 'Energy & Sports',
    description: 'Active lifestyle and sports nutrition',
    fullDescription: 'UltiWell® Active is designed for active individuals seeking comprehensive sports nutrition support.',
    benefits: [
      'Active lifestyle support',
      'Energy optimization',
      'Recovery enhancement',
      'Endurance boost'
    ],
    ingredients: ['Electrolytes', 'B-Complex', 'CoQ10', 'L-Carnitine'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Clean sport'],
    applications: ['Active lifestyle', 'Sports nutrition', 'Energy support']
  },
  'energy': {
    name: 'UltiWell® Energy',
    category: 'Energy & Sports',
    description: 'Energy boost and endurance support',
    fullDescription: 'UltiWell® Energy provides sustained energy boost and endurance support for peak performance.',
    benefits: [
      'Sustained energy',
      'Endurance support',
      'No crash formula',
      'Natural stimulants'
    ],
    ingredients: ['Green Tea Extract', 'Guarana', 'B-Vitamins', 'L-Taurine'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Natural caffeine 100mg'
    },
    certifications: ['GMP Certified', 'Energy tested'],
    applications: ['Energy boost', 'Endurance', 'Performance']
  },
  'sportperformance': {
    name: 'UltiWell® SportPerformance',
    category: 'Energy & Sports',
    description: 'High-performance nutrition for athletes',
    fullDescription: 'UltiWell® SportPerformance is elite-level nutrition for serious athletes seeking maximum performance.',
    benefits: [
      'Elite performance',
      'Comprehensive formula',
      'Recovery optimization',
      'Competition ready'
    ],
    ingredients: ['Advanced Protein Matrix', 'Performance Complex', 'Electrolytes', 'Recovery Agents'],
    specifications: {
      servingSize: '2 scoops daily',
      capsulesPerBottle: '30 servings'
    },
    certifications: ['GMP Certified', 'Informed Sport', 'NSF Certified'],
    applications: ['Elite sports', 'Competition', 'Professional athletics']
  },
  'recovery': {
    name: 'UltiWell® Recovery Series',
    category: 'Energy & Sports',
    description: 'Post-exercise recovery and muscle relief',
    fullDescription: 'UltiWell® Recovery Series accelerates post-exercise recovery and provides muscle relief.',
    benefits: [
      'Faster recovery',
      'Muscle relief',
      'Inflammation support',
      'Restoration'
    ],
    ingredients: ['Tart Cherry Extract', 'Turmeric (Curcumin)', 'MSM', 'Collagen Peptides'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Recovery tested'],
    applications: ['Post-workout', 'Recovery', 'Muscle relief']
  },
  // Anti-Aging & Beauty
  'renew': {
    name: 'UltiWell® Renew',
    category: 'Anti-Aging & Beauty',
    description: 'Anti-aging and vitality restoration',
    fullDescription: 'UltiWell® Renew combines advanced anti-aging compounds to restore vitality and promote youthful aging.',
    benefits: [
      'Anti-aging support',
      'Vitality restoration',
      'Cellular renewal',
      'Youthful energy'
    ],
    ingredients: ['Resveratrol', 'NMN', 'CoQ10', 'Alpha-Lipoic Acid'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Resveratrol ≥98%'
    },
    certifications: ['GMP Certified', 'Anti-aging tested'],
    applications: ['Anti-aging', 'Vitality', 'Cellular health']
  },
  'ageless': {
    name: 'UltiWell® Ageless',
    category: 'Anti-Aging & Beauty',
    description: 'Anti-aging and skin care',
    fullDescription: 'UltiWell® Ageless is formulated for comprehensive anti-aging support with skin health benefits.',
    benefits: [
      'Visible anti-aging',
      'Skin health',
      'Radiant appearance',
      'Cellular protection'
    ],
    ingredients: ['Collagen Peptides', 'Hyaluronic Acid', 'Vitamin C', 'Vitamin E'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Beauty tested'],
    applications: ['Anti-aging', 'Skin care', 'Beauty from within']
  },
  'youthvibe': {
    name: 'UltiWell® YouthVibe',
    category: 'Anti-Aging & Beauty',
    description: 'Health and vitality for the young generation',
    fullDescription: 'UltiWell® YouthVibe supports health and vitality for the young generation with age-appropriate formulations.',
    benefits: [
      'Youthful vitality',
      'Energy support',
      'Modern lifestyle',
      'Preventive care'
    ],
    ingredients: ['Superfoods Blend', 'Adaptogens', 'Antioxidants', 'Essential Nutrients'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Youth tested'],
    applications: ['Youth wellness', 'Preventive health', 'Modern lifestyle']
  },
  'glow': {
    name: 'UltiWell® Glow',
    category: 'Anti-Aging & Beauty',
    description: 'Skin health and beauty',
    fullDescription: 'UltiWell® Glow promotes skin health and beauty from within with premium skin-nourishing ingredients.',
    benefits: [
      'Radiant skin',
      'Beauty from within',
      'Skin nourishment',
      'Natural glow'
    ],
    ingredients: ['Hyaluronic Acid', 'Collagen', 'Biotin', 'Vitamin C'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Beauty tested'],
    applications: ['Skin health', 'Beauty', 'Radiance']
  },
  'skinnutritious': {
    name: 'UltiWell® SkinNutritious',
    category: 'Anti-Aging & Beauty',
    description: 'Skin health and beauty nutrition',
    fullDescription: 'UltiWell® SkinNutritious delivers comprehensive skin nutrition for optimal skin health and appearance.',
    benefits: [
      'Comprehensive skin nutrition',
      'Healthy complexion',
      'Skin barrier support',
      'Nutritional beauty'
    ],
    ingredients: ['Omega-3', 'Vitamin A', 'Zinc', 'Selenium'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Dermatologist tested'],
    applications: ['Skin nutrition', 'Complexion support', 'Skin health']
  },
  'bodycare': {
    name: 'UltiWell® Body Care Series',
    category: 'Anti-Aging & Beauty',
    description: 'Skin health and body care products',
    fullDescription: 'UltiWell® Body Care Series offers comprehensive body care products for skin health and overall wellness.',
    benefits: [
      'Body care support',
      'Skin health',
      'Overall wellness',
      'Complete care'
    ],
    ingredients: ['Natural Oils', 'Vitamins', 'Minerals', 'Herbal Extracts'],
    specifications: {
      servingSize: 'As directed',
      capsulesPerBottle: 'Various'
    },
    certifications: ['GMP Certified', 'Body care tested'],
    applications: ['Body care', 'Skin health', 'Wellness']
  },
  // Heart & Circulation
  'pulse': {
    name: 'UltiWell® Pulse',
    category: 'Heart & Circulation',
    description: 'Heart health and blood circulation',
    fullDescription: 'UltiWell® Pulse supports heart health and healthy blood circulation for cardiovascular wellness.',
    benefits: [
      'Heart health support',
      'Healthy circulation',
      'Cardiovascular wellness',
      'Energy support'
    ],
    ingredients: ['Omega-3 Fish Oil', 'CoQ10', 'Garlic Extract', 'Vitamin K2'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Omega-3 EPA/DHA'
    },
    certifications: ['GMP Certified', 'Heart health tested'],
    applications: ['Heart health', 'Circulation', 'Cardiovascular wellness']
  },
  'cardiofit': {
    name: 'UltiWell® CardioFit',
    category: 'Heart & Circulation',
    description: 'Cardiovascular health promotion',
    fullDescription: 'UltiWell® CardioFit promotes cardiovascular health with a synergistic blend of heart-healthy nutrients.',
    benefits: [
      'Cardiovascular support',
      'Heart function',
      'Healthy blood flow',
      'Preventive care'
    ],
    ingredients: ['Plant Sterols', 'Fiber', 'Niacin', 'Magnesium'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Cardio tested'],
    applications: ['Cardiovascular health', 'Heart wellness', 'Prevention']
  },
  // Immune Support
  'shield': {
    name: 'UltiWell® Shield',
    category: 'Immune Support',
    description: 'Immune system support and protection',
    fullDescription: 'UltiWell® Shield provides comprehensive immune system support and protection for year-round wellness.',
    benefits: [
      'Immune protection',
      'Defense support',
      'Year-round wellness',
      'Natural immunity'
    ],
    ingredients: ['Vitamin C', 'Vitamin D3', 'Zinc', 'Elderberry Extract'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Vitamin C 1000mg'
    },
    certifications: ['GMP Certified', 'Immunity tested'],
    applications: ['Immune support', 'Seasonal wellness', 'Protection']
  },
  'immunoshield': {
    name: 'UltiWell® ImmunoShield',
    category: 'Immune Support',
    description: 'Immune system enhancement',
    fullDescription: 'UltiWell® ImmunoShield enhances immune system function with advanced immune-supporting compounds.',
    benefits: [
      'Enhanced immunity',
      'Stronger defenses',
      'Quick response',
      'Long-term support'
    ],
    ingredients: ['Beta-Glucan', 'Colostrum', 'AHCC', 'Medicinal Mushrooms'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Immune enhancement tested'],
    applications: ['Immune enhancement', 'Advanced support', 'Wellness']
  },
  // Joint & Mobility
  'flex': {
    name: 'UltiWell® Flex',
    category: 'Joint & Mobility',
    description: 'Joint health and flexibility',
    fullDescription: 'UltiWell® Flex supports joint health and flexibility for comfortable movement and active lifestyle.',
    benefits: [
      'Joint comfort',
      'Flexibility support',
      'Mobility enhancement',
      'Cartilage health'
    ],
    ingredients: ['Glucosamine', 'Chondroitin', 'MSM', 'Hyaluronic Acid'],
    specifications: {
      servingSize: '3 capsules daily',
      capsulesPerBottle: '90 capsules',
      keyIngredient: 'Glucosamine 1500mg'
    },
    certifications: ['GMP Certified', 'Joint health tested'],
    applications: ['Joint health', 'Flexibility', 'Mobility']
  },
  'mobility': {
    name: 'UltiWell® Mobility',
    category: 'Joint & Mobility',
    description: 'Joint flexibility and pain relief',
    fullDescription: 'UltiWell® Mobility provides joint flexibility support and natural pain relief for improved movement.',
    benefits: [
      'Improved mobility',
      'Natural pain relief',
      'Joint comfort',
      'Active lifestyle'
    ],
    ingredients: ['Turmeric (Curcumin)', 'Boswellia', 'Ginger', 'White Willow Bark'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Mobility tested'],
    applications: ['Pain relief', 'Mobility', 'Joint comfort']
  },
  // Sleep & Relaxation
  'harmony': {
    name: 'UltiWell® Harmony',
    category: 'Sleep & Relaxation',
    description: 'Mind-body harmony and relaxation',
    fullDescription: 'UltiWell® Harmony promotes mind-body harmony and deep relaxation for overall wellness.',
    benefits: [
      'Mind-body balance',
      'Deep relaxation',
      'Stress relief',
      'Inner peace'
    ],
    ingredients: ['Ashwagandha', 'L-Theanine', 'Magnesium', 'Passionflower'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Stress tested'],
    applications: ['Relaxation', 'Stress relief', 'Balance']
  },
  'calm': {
    name: 'UltiWell® Calm',
    category: 'Sleep & Relaxation',
    description: 'Stress management and relaxation',
    fullDescription: 'UltiWell® Calm provides effective stress management and relaxation support for modern life.',
    benefits: [
      'Stress management',
      'Calm mindset',
      'Relaxation',
      'Emotional balance'
    ],
    ingredients: ['L-Theanine', 'GABA', 'Lemon Balm', 'Chamomile'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Calm tested'],
    applications: ['Stress management', 'Relaxation', 'Emotional wellness']
  },
  'zenith': {
    name: 'UltiWell® Zenith',
    category: 'Sleep & Relaxation',
    description: 'Premium flagship product line',
    fullDescription: 'UltiWell® Zenith represents our premium flagship product line with the highest quality ingredients.',
    benefits: [
      'Premium quality',
      'Flagship formula',
      'Optimal results',
      'Luxury wellness'
    ],
    ingredients: ['Premium Adaptogens', 'Advanced Nootropics', 'Superfoods', 'Premium Vitamins'],
    specifications: {
      servingSize: '3 capsules daily',
      capsulesPerBottle: '90 capsules'
    },
    certifications: ['GMP Certified', 'Premium grade', 'Third-party tested'],
    applications: ['Premium wellness', 'Optimal health', 'Flagship support']
  },
  'restful': {
    name: 'UltiWell® Restful',
    category: 'Sleep & Relaxation',
    description: 'Sleep quality improvement',
    fullDescription: 'UltiWell® Restful improves sleep quality for restorative rest and refreshed mornings.',
    benefits: [
      'Better sleep',
      'Faster onset',
      'Restorative rest',
      'Refreshed mornings'
    ],
    ingredients: ['Melatonin', 'Valerian Root', 'Magnesium Glycinate', 'L-Tryptophan'],
    specifications: {
      servingSize: '1-2 capsules before bed',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Melatonin 3mg'
    },
    certifications: ['GMP Certified', 'Sleep tested'],
    applications: ['Sleep improvement', 'Rest', 'Recovery']
  },
  'sleep': {
    name: 'UltiWell® Sleep Series',
    category: 'Sleep & Relaxation',
    description: 'Sleep quality and pattern improvement',
    fullDescription: 'UltiWell® Sleep Series offers comprehensive sleep support for quality sleep patterns.',
    benefits: [
      'Quality sleep',
      'Pattern improvement',
      'Natural formula',
      'Non-habit forming'
    ],
    ingredients: ['Chamomile', 'Passionflower', 'L-Theanine', 'Magnesium'],
    specifications: {
      servingSize: '2 capsules before bed',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Sleep pattern tested'],
    applications: ['Sleep quality', 'Pattern support', 'Rest']
  },
  'relaxation': {
    name: 'UltiWell® Relaxation Series',
    category: 'Sleep & Relaxation',
    description: 'Stress management and relaxation',
    fullDescription: 'UltiWell® Relaxation Series provides comprehensive stress management and relaxation support.',
    benefits: [
      'Comprehensive relaxation',
      'Stress management',
      'Calm support',
      'Wellness balance'
    ],
    ingredients: ['Relaxation Herbs Blend', 'Magnesium', 'B-Vitamins', 'Adaptogens'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Relaxation tested'],
    applications: ['Stress relief', 'Relaxation', 'Wellness']
  },
  'mindsoothing': {
    name: 'UltiWell® Mind Soothing Series',
    category: 'Sleep & Relaxation',
    description: 'Mental health support and relaxation',
    fullDescription: 'UltiWell® Mind Soothing Series supports mental health and provides soothing relaxation.',
    benefits: [
      'Mental support',
      'Soothing effect',
      'Emotional balance',
      'Peace of mind'
    ],
    ingredients: ['Soothing Herbs', 'Omega-3', 'B-Complex', 'L-Theanine'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Mental wellness tested'],
    applications: ['Mental wellness', 'Soothing', 'Emotional support']
  },
  // Digestive Health
  'digest': {
    name: 'UltiWell® Digest',
    category: 'Digestive Health',
    description: 'Digestive system health support',
    fullDescription: 'UltiWell® Digest supports digestive system health with enzymes and probiotics for optimal digestion.',
    benefits: [
      'Digestive health',
      'Better absorption',
      'Gut wellness',
      'Comfortable digestion'
    ],
    ingredients: ['Digestive Enzymes', 'Probiotics 10B CFU', 'Prebiotics', 'Ginger'],
    specifications: {
      servingSize: '2 capsules with meals',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Digestive tested'],
    applications: ['Digestion support', 'Gut health', 'Nutrient absorption']
  },
  'cleanse': {
    name: 'UltiWell® Cleanse',
    category: 'Digestive Health',
    description: 'Body detoxification and cleansing',
    fullDescription: 'UltiWell® Cleanse supports natural body detoxification and gentle cleansing.',
    benefits: [
      'Gentle detox',
      'Body cleansing',
      'Renewed energy',
      'Internal refresh'
    ],
    ingredients: ['Milk Thistle', 'Dandelion Root', 'Turmeric', 'Artichoke'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Cleanse tested'],
    applications: ['Detox', 'Cleansing', 'Body renewal']
  },
  'liversupport': {
    name: 'UltiWell® LiverSupport',
    category: 'Digestive Health',
    description: 'Liver health and detoxification',
    fullDescription: 'UltiWell® LiverSupport promotes liver health and supports natural detoxification processes.',
    benefits: [
      'Liver health',
      'Detoxification',
      'Liver protection',
      'Regeneration support'
    ],
    ingredients: ['Silymarin', 'NAC', 'Dandelion', 'Artichoke Extract'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Silymarin ≥80%'
    },
    certifications: ['GMP Certified', 'Liver tested'],
    applications: ['Liver health', 'Detox', 'Protection']
  },
  'ketobalance': {
    name: 'UltiWell® KetoBalance',
    category: 'Digestive Health',
    description: 'Keto diet and weight management',
    fullDescription: 'UltiWell® KetoBalance supports ketogenic diet and healthy weight management.',
    benefits: [
      'Keto support',
      'Weight management',
      'Metabolic balance',
      'Energy support'
    ],
    ingredients: ['MCT Oil', 'Exogenous Ketones', 'Electrolytes', 'Fiber'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Keto tested'],
    applications: ['Keto diet', 'Weight management', 'Metabolic support']
  },
  // Specialized Care
  'menopauseease': {
    name: 'UltiWell® MenopauseEase',
    category: 'Specialized Care',
    description: 'Menopause symptom relief',
    fullDescription: 'UltiWell® MenopauseEase provides natural relief from menopause symptoms for comfortable transition.',
    benefits: [
      'Symptom relief',
      'Hormonal balance',
      'Comfort support',
      'Natural formula'
    ],
    ingredients: ['Black Cohosh', 'Dong Quai', 'Evening Primrose', 'Vitamin E'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Women\'s health tested'],
    applications: ['Menopause support', 'Symptom relief', 'Women\'s wellness']
  },
  'eyevive': {
    name: 'UltiWell® EyeVive',
    category: 'Specialized Care',
    description: 'Eye health and vision protection',
    fullDescription: 'UltiWell® EyeVive supports eye health and protects vision with targeted nutrients.',
    benefits: [
      'Eye health',
      'Vision protection',
      'Blue light defense',
      'Eye strain relief'
    ],
    ingredients: ['Lutein', 'Zeaxanthin', 'Bilberry', 'Vitamin A'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Lutein 20mg'
    },
    certifications: ['GMP Certified', 'Eye health tested'],
    applications: ['Eye health', 'Vision support', 'Digital strain']
  },
  'elderlycare': {
    name: 'UltiWell® Elderly Care Series',
    category: 'Specialized Care',
    description: 'Quality of life products for seniors',
    fullDescription: 'UltiWell® Elderly Care Series offers quality of life products specifically designed for seniors.',
    benefits: [
      'Senior wellness',
      'Quality of life',
      'Age-specific formula',
      'Comprehensive care'
    ],
    ingredients: ['Senior Vitamins', 'Bone Support', 'Memory Complex', 'Joint Support'],
    specifications: {
      servingSize: 'As directed',
      capsulesPerBottle: 'Various'
    },
    certifications: ['GMP Certified', 'Senior tested'],
    applications: ['Senior care', 'Quality of life', 'Age support']
  },
  // Lifestyle Solutions
  'veganpure': {
    name: 'UltiWell® VeganPure',
    category: 'Lifestyle Solutions',
    description: 'Vegan and pure supplements',
    fullDescription: 'UltiWell® VeganPure offers 100% vegan and pure supplements for plant-based lifestyles.',
    benefits: [
      '100% vegan',
      'Plant-based',
      'Pure ingredients',
      'Ethical choice'
    ],
    ingredients: ['Plant Vitamins', 'Algae DHA', 'Vegan B12', 'Plant Minerals'],
    specifications: {
      servingSize: '2 capsules daily',
      capsulesPerBottle: '60 capsules'
    },
    certifications: ['GMP Certified', 'Vegan certified', 'Cruelty-free'],
    applications: ['Vegan nutrition', 'Plant-based', 'Ethical wellness']
  },
  'travel': {
    name: 'UltiWell® Travel Series',
    category: 'Lifestyle Solutions',
    description: 'Portable products for travelers',
    fullDescription: 'UltiWell® Travel Series offers convenient portable products for travelers on the go.',
    benefits: [
      'Travel-ready',
      'Portable format',
      'Convenient',
      'Essential support'
    ],
    ingredients: ['Travel Essentials', 'Immune Support', 'Digestive Aid', 'Sleep Support'],
    specifications: {
      servingSize: 'As needed',
      capsulesPerBottle: 'Travel pack'
    },
    certifications: ['GMP Certified', 'Travel tested'],
    applications: ['Travel wellness', 'Portable nutrition', 'On-the-go']
  },
  'healthydiet': {
    name: 'UltiWell® Healthy Diet Series',
    category: 'Lifestyle Solutions',
    description: 'Nutritious food and beverages',
    fullDescription: 'UltiWell® Healthy Diet Series provides nutritious food and beverage supplements.',
    benefits: [
      'Nutritious',
      'Healthy diet support',
      'Convenient',
      'Balanced nutrition'
    ],
    ingredients: ['Superfoods', 'Protein', 'Fiber', 'Nutrients'],
    specifications: {
      servingSize: 'As directed',
      capsulesPerBottle: 'Various'
    },
    certifications: ['GMP Certified', 'Diet tested'],
    applications: ['Healthy diet', 'Nutrition', 'Dietary support']
  },
  'dailycare': {
    name: 'UltiWell® Daily Care Series',
    category: 'Lifestyle Solutions',
    description: 'Daily comfort and wellness tools',
    fullDescription: 'UltiWell® Daily Care Series offers daily comfort and wellness tools for everyday life.',
    benefits: [
      'Daily wellness',
      'Comfort support',
      'Everyday care',
      'Practical solutions'
    ],
    ingredients: ['Daily Essentials', 'Comfort Herbs', 'Wellness Support'],
    specifications: {
      servingSize: 'As directed',
      capsulesPerBottle: 'Various'
    },
    certifications: ['GMP Certified', 'Daily care tested'],
    applications: ['Daily wellness', 'Comfort', 'Everyday care']
  },
  'environment': {
    name: 'UltiWell® Environment Optimization Series',
    category: 'Lifestyle Solutions',
    description: 'Living and working environment enhancement',
    fullDescription: 'UltiWell® Environment Optimization Series enhances living and working environments.',
    benefits: [
      'Environment support',
      'Air quality',
      'Space optimization',
      'Wellness environment'
    ],
    ingredients: ['Environmental Support', 'Air Purifiers', 'Wellness Enhancers'],
    specifications: {
      servingSize: 'As directed',
      capsulesPerBottle: 'Various'
    },
    certifications: ['GMP Certified', 'Environment tested'],
    applications: ['Environment', 'Wellness space', 'Air quality']
  },
  // Plant Extracts
  'curcumin': {
    name: 'UltiWell® Curcumin Extract',
    category: 'Plant Extracts',
    description: 'Turmeric extract (Curcumin ≥95%)',
    fullDescription: 'UltiWell® Curcumin Extract provides high-potency turmeric extract with superior bioavailability.',
    benefits: [
      'Anti-inflammatory',
      'Joint support',
      'Antioxidant',
      'High potency'
    ],
    ingredients: ['Curcumin C3 Complex®', 'Piperine', 'Turmeric Oil'],
    specifications: {
      servingSize: '1-2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Curcumin ≥95%'
    },
    certifications: ['GMP Certified', 'Potency verified', 'Third-party tested'],
    applications: ['Inflammation', 'Joint health', 'Antioxidant']
  },
  'resveratrol': {
    name: 'UltiWell® Resveratrol Extract',
    category: 'Plant Extracts',
    description: 'Red grape extract (Resveratrol ≥98%)',
    fullDescription: 'UltiWell® Resveratrol Extract delivers premium red grape extract for anti-aging and cardiovascular support.',
    benefits: [
      'Anti-aging',
      'Heart health',
      'Longevity support',
      'Antioxidant'
    ],
    ingredients: ['Trans-Resveratrol', 'Red Wine Extract', 'Grape Seed'],
    specifications: {
      servingSize: '1 capsule daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Resveratrol ≥98%'
    },
    certifications: ['GMP Certified', 'Potency verified'],
    applications: ['Anti-aging', 'Longevity', 'Heart health']
  },
  'quercetin': {
    name: 'UltiWell® Quercetin Extract',
    category: 'Plant Extracts',
    description: 'Sophora japonica extract (Quercetin ≥95%)',
    fullDescription: 'UltiWell® Quercetin Extract provides high-purity quercetin for immune and allergy support.',
    benefits: [
      'Immune support',
      'Allergy relief',
      'Antioxidant',
      'Anti-inflammatory'
    ],
    ingredients: ['Quercetin Dihydrate', 'Bromelain', 'Vitamin C'],
    specifications: {
      servingSize: '1-2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Quercetin ≥95%'
    },
    certifications: ['GMP Certified', 'Potency verified'],
    applications: ['Immune support', 'Allergy', 'Antioxidant']
  },
  'egcg': {
    name: 'UltiWell® EGCG Extract',
    category: 'Plant Extracts',
    description: 'Green tea extract (EGCG ≥50%)',
    fullDescription: 'UltiWell® EGCG Extract delivers concentrated green tea catechins for metabolism and antioxidant support.',
    benefits: [
      'Metabolism boost',
      'Antioxidant',
      'Weight management',
      'Energy support'
    ],
    ingredients: ['Green Tea Extract', 'EGCG', 'Natural Caffeine'],
    specifications: {
      servingSize: '1 capsule daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'EGCG ≥50%'
    },
    certifications: ['GMP Certified', 'Potency verified'],
    applications: ['Metabolism', 'Antioxidant', 'Weight management']
  },
  'berberine': {
    name: 'UltiWell® Berberine Extract',
    category: 'Plant Extracts',
    description: 'Coptis chinensis extract (Berberine ≥97%)',
    fullDescription: 'UltiWell® Berberine Extract provides high-purity berberine for metabolic and cardiovascular health.',
    benefits: [
      'Blood sugar support',
      'Heart health',
      'Metabolic support',
      'Gut health'
    ],
    ingredients: ['Berberine HCl', 'Coptis Chinensis Extract'],
    specifications: {
      servingSize: '1-2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Berberine ≥97%'
    },
    certifications: ['GMP Certified', 'Potency verified'],
    applications: ['Blood sugar', 'Metabolism', 'Heart health']
  },
  'silymarin': {
    name: 'UltiWell® Silymarin Extract',
    category: 'Plant Extracts',
    description: 'Milk thistle extract (Silymarin ≥80%)',
    fullDescription: 'UltiWell® Silymarin Extract delivers concentrated milk thistle for liver health and detoxification.',
    benefits: [
      'Liver protection',
      'Detoxification',
      'Regeneration',
      'Antioxidant'
    ],
    ingredients: ['Milk Thistle Extract', 'Silymarin', 'Phosphatidylcholine'],
    specifications: {
      servingSize: '1-2 capsules daily',
      capsulesPerBottle: '60 capsules',
      keyIngredient: 'Silymarin ≥80%'
    },
    certifications: ['GMP Certified', 'Potency verified'],
    applications: ['Liver health', 'Detox', 'Protection']
  },
  // Bio-Natural Colors
  'betacarotene': {
    name: 'UltiWell® Beta-Carotene',
    category: 'Bio-Natural Colors',
    description: 'Natural orange color (≥96%)',
    fullDescription: 'UltiWell® Beta-Carotene provides natural orange color from biosynthesis for food and supplement applications.',
    benefits: [
      'Natural color',
      'Vitamin A precursor',
      'Antioxidant',
      'Clean label'
    ],
    ingredients: ['Biosynthesis Beta-Carotene'],
    specifications: {
      servingSize: 'As needed',
      capsulesPerBottle: 'Bulk',
      keyIngredient: 'Beta-Carotene ≥96%'
    },
    certifications: ['GMP Certified', 'Food grade', 'Natural origin'],
    applications: ['Food coloring', 'Supplements', 'Beverages']
  },
  'astaxanthin': {
    name: 'UltiWell® Astaxanthin',
    category: 'Bio-Natural Colors',
    description: 'Natural red color (≥2%)',
    fullDescription: 'UltiWell® Astaxanthin delivers natural red color from microalgae biosynthesis.',
    benefits: [
      'Natural red color',
      'Powerful antioxidant',
      'Skin health',
      'Eye health'
    ],
    ingredients: ['Haematococcus Pluvialis Extract'],
    specifications: {
      servingSize: 'As needed',
      capsulesPerBottle: 'Bulk',
      keyIngredient: 'Astaxanthin ≥2%'
    },
    certifications: ['GMP Certified', 'Food grade', 'Natural origin'],
    applications: ['Food coloring', 'Supplements', 'Cosmetics']
  },
  'lutein': {
    name: 'UltiWell® Lutein',
    category: 'Bio-Natural Colors',
    description: 'Natural yellow color (≥5%)',
    fullDescription: 'UltiWell® Lutein provides natural yellow color from marigold biosynthesis.',
    benefits: [
      'Natural yellow color',
      'Eye health',
      'Antioxidant',
      'Vision support'
    ],
    ingredients: ['Marigold Extract'],
    specifications: {
      servingSize: 'As needed',
      capsulesPerBottle: 'Bulk',
      keyIngredient: 'Lutein ≥5%'
    },
    certifications: ['GMP Certified', 'Food grade', 'Natural origin'],
    applications: ['Food coloring', 'Eye supplements', 'Beverages']
  },
  'lycopene': {
    name: 'UltiWell® Lycopene',
    category: 'Bio-Natural Colors',
    description: 'Natural red color (≥5%)',
    fullDescription: 'UltiWell® Lycopene delivers natural red color from tomato biosynthesis.',
    benefits: [
      'Natural red color',
      'Antioxidant',
      'Heart health',
      'Prostate support'
    ],
    ingredients: ['Tomato Extract'],
    specifications: {
      servingSize: 'As needed',
      capsulesPerBottle: 'Bulk',
      keyIngredient: 'Lycopene ≥5%'
    },
    certifications: ['GMP Certified', 'Food grade', 'Natural origin'],
    applications: ['Food coloring', 'Supplements', 'Beverages']
  },
  'anthocyanin': {
    name: 'UltiWell® Anthocyanin',
    category: 'Bio-Natural Colors',
    description: 'Natural purple color (≥25%)',
    fullDescription: 'UltiWell® Anthocyanin provides natural purple color from berry biosynthesis.',
    benefits: [
      'Natural purple color',
      'Antioxidant',
      'Brain health',
      'Cardiovascular'
    ],
    ingredients: ['Berry Extract Blend'],
    specifications: {
      servingSize: 'As needed',
      capsulesPerBottle: 'Bulk',
      keyIngredient: 'Anthocyanin ≥25%'
    },
    certifications: ['GMP Certified', 'Food grade', 'Natural origin'],
    applications: ['Food coloring', 'Beverages', 'Supplements']
  },
  'chlorophyll': {
    name: 'UltiWell® Chlorophyll',
    category: 'Bio-Natural Colors',
    description: 'Natural green color',
    fullDescription: 'UltiWell® Chlorophyll delivers natural green color from plant biosynthesis.',
    benefits: [
      'Natural green color',
      'Detox support',
      'Internal deodorant',
      'Antioxidant'
    ],
    ingredients: ['Alfalfa Extract', 'Chlorophyllin'],
    specifications: {
      servingSize: 'As needed',
      capsulesPerBottle: 'Bulk'
    },
    certifications: ['GMP Certified', 'Food grade', 'Natural origin'],
    applications: ['Food coloring', 'Beverages', 'Health products']
  }
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(ultiWellProducts).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = ultiWellProducts[id];
  
  if (!product) {
    return {
      title: 'Product Not Found | UltiWell® | Alvokor Bio',
    };
  }

  return {
    title: `${product.name} | UltiWell® | Alvokor Bio`,
    description: product.fullDescription,
  };
}

export default async function UltiWellProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = ultiWellProducts[id];

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
            <Link href="/catalogue#ultiwell" className="text-gray-500 hover:text-gray-700">UltiWell®</Link>
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
                <Target className="w-4 h-4" />
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
                  {product.specifications.servingSize && (
                    <div>
                      <p className="text-sm text-gray-500">Serving Size</p>
                      <p className="font-medium text-gray-900">{product.specifications.servingSize}</p>
                    </div>
                  )}
                  {product.specifications.capsulesPerBottle && (
                    <div>
                      <p className="text-sm text-gray-500">Package Size</p>
                      <p className="font-medium text-gray-900">{product.specifications.capsulesPerBottle}</p>
                    </div>
                  )}
                  {product.specifications.keyIngredient && (
                    <div>
                      <p className="text-sm text-gray-500">Key Ingredient</p>
                      <p className="font-medium text-gray-900">{product.specifications.keyIngredient}</p>
                    </div>
                  )}
                  {product.specifications.purity && (
                    <div>
                      <p className="text-sm text-gray-500">Purity</p>
                      <p className="font-medium text-gray-900">{product.specifications.purity}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Product Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Package className="w-24 h-24 mx-auto text-gray-300 mb-4" />
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
            {/* Ingredients */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                    <LeafIcon className="w-5 h-5" style={{ color: '#A1BA80' }} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Key Ingredients</h3>
                </div>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                      {ingredient}
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

            {/* Applications */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                    <Globe className="w-5 h-5" style={{ color: '#A1BA80' }} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Applications</h3>
                </div>
                <ul className="space-y-2">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A1BA80' }} />
                      {app}
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
              href="/catalogue#ultiwell"
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
