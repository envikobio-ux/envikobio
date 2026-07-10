import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Brain, 
  Shield, 
  Sparkles, 
  Bone, 
  Moon, 
  Leaf,
  Users,
  Activity,
  Target,
  Dumbbell,
  Download,
  ArrowRight,
  Droplets,
  Sun,
  Zap,
  RefreshCw,
  Eye,
  Smile,
  Wind,
  Palette
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Catalogue | Alvokor Bio',
  description: 'Explore UltiWell® and UltiGlow™ product series - premium biosynthesis-based health supplements and skincare products.',
};

// UltiWell Product Categories
const ultiWellCategories = [
  {
    category: 'Core Nutrition',
    icon: Target,
    description: 'Essential nutritional foundation for daily wellness',
    products: [
      { id: 'core', name: 'UltiWell® Core', ingredients: ['Biosynthesis Vitamins B Complex', 'Chelated Minerals', 'Bio-available Vitamin D3', 'Natural Vitamin E'] },
      { id: 'vitality', name: 'UltiWell® Vitality', ingredients: ['CoQ10 (Biosynthesis)', 'B-Complex Vitamins', 'Adaptogenic Herbs', 'L-Carnitine'] },
      { id: 'balance', name: 'UltiWell® Balance', ingredients: ['Magnesium Bisglycinate', 'Vitamin B6', 'Zinc Chelate', 'L-Theanine'] },
      { id: 'pure', name: 'UltiWell® Pure', ingredients: ['Purified Vitamins', 'Pharmaceutical-grade Minerals', 'Natural Fillers'] },
      { id: 'elevate', name: 'UltiWell® Elevate', ingredients: ['Premium Multivitamin Complex', 'Antioxidants', 'Adaptogens', 'Essential Minerals'] },
      { id: 'nutriboost', name: 'UltiWell® NutriBoost', ingredients: ['Full Spectrum Vitamins', 'Chelated Minerals', 'Probiotics', 'Enzymes'] },
    ],
  },
  {
    category: 'Brain & Cognitive',
    icon: Brain,
    description: 'Mental clarity, focus and cognitive performance',
    products: [
      { id: 'clarity', name: 'UltiWell® Clarity', ingredients: ['Phosphatidylserine', 'DHA (Algae-derived)', 'Ginkgo Biloba', 'Lion\'s Mane Extract'] },
      { id: 'focus', name: 'UltiWell® Focus', ingredients: ['L-Tyrosine', 'Alpha-GPC', 'Huperzine A', 'Vitamin B12'] },
      { id: 'brainboost', name: 'UltiWell® BrainBoost', ingredients: ['Bacopa Monnieri', 'Acetyl-L-Carnitine', 'Lion\'s Mane', 'Alpha-GPC'] },
    ],
  },
  {
    category: 'Energy & Sports',
    icon: Dumbbell,
    description: 'Performance, strength and recovery solutions',
    products: [
      { id: 'strength', name: 'UltiWell® Strength', ingredients: ['Creatine Monohydrate', 'BCAA 2:1:1', 'HMB', 'Vitamin D3'] },
      { id: 'active', name: 'UltiWell® Active', ingredients: ['Electrolytes', 'B-Complex', 'CoQ10', 'L-Carnitine'] },
      { id: 'energy', name: 'UltiWell® Energy', ingredients: ['Green Tea Extract', 'Guarana', 'B-Vitamins', 'L-Taurine'] },
      { id: 'sportperformance', name: 'UltiWell® SportPerformance', ingredients: ['Advanced Protein Matrix', 'Performance Complex', 'Electrolytes', 'Recovery Agents'] },
      { id: 'recovery', name: 'UltiWell® Recovery Series', ingredients: ['Tart Cherry Extract', 'Turmeric (Curcumin)', 'MSM', 'Collagen Peptides'] },
    ],
  },
  {
    category: 'Anti-Aging & Beauty',
    icon: Sparkles,
    description: 'Youthful vitality and skin health',
    products: [
      { id: 'renew', name: 'UltiWell® Renew', ingredients: ['Resveratrol', 'NMN', 'CoQ10', 'Alpha-Lipoic Acid'] },
      { id: 'ageless', name: 'UltiWell® Ageless', ingredients: ['Collagen Peptides', 'Hyaluronic Acid', 'Vitamin C', 'Vitamin E'] },
      { id: 'youthvibe', name: 'UltiWell® YouthVibe', ingredients: ['Superfoods Blend', 'Adaptogens', 'Antioxidants', 'Essential Nutrients'] },
      { id: 'glow', name: 'UltiWell® Glow', ingredients: ['Hyaluronic Acid', 'Collagen', 'Biotin', 'Vitamin C'] },
      { id: 'skinnutritious', name: 'UltiWell® SkinNutritious', ingredients: ['Omega-3', 'Vitamin A', 'Zinc', 'Selenium'] },
      { id: 'bodycare', name: 'UltiWell® Body Care Series', ingredients: ['Natural Oils', 'Vitamins', 'Minerals', 'Herbal Extracts'] },
    ],
  },
  {
    category: 'Heart & Circulation',
    icon: Heart,
    description: 'Cardiovascular health and blood circulation',
    products: [
      { id: 'pulse', name: 'UltiWell® Pulse', ingredients: ['Omega-3 Fish Oil', 'CoQ10', 'Garlic Extract', 'Vitamin K2'] },
      { id: 'cardiofit', name: 'UltiWell® CardioFit', ingredients: ['Plant Sterols', 'Fiber', 'Niacin', 'Magnesium'] },
    ],
  },
  {
    category: 'Immune Support',
    icon: Shield,
    description: 'Immune system defense and protection',
    products: [
      { id: 'shield', name: 'UltiWell® Shield', ingredients: ['Vitamin C', 'Vitamin D3', 'Zinc', 'Elderberry Extract'] },
      { id: 'immunoshield', name: 'UltiWell® ImmunoShield', ingredients: ['Beta-Glucan', 'Colostrum', 'AHCC', 'Medicinal Mushrooms'] },
    ],
  },
  {
    category: 'Joint & Mobility',
    icon: Bone,
    description: 'Joint health, flexibility and mobility',
    products: [
      { id: 'flex', name: 'UltiWell® Flex', ingredients: ['Glucosamine', 'Chondroitin', 'MSM', 'Hyaluronic Acid'] },
      { id: 'mobility', name: 'UltiWell® Mobility', ingredients: ['Turmeric (Curcumin)', 'Boswellia', 'Ginger', 'White Willow Bark'] },
    ],
  },
  {
    category: 'Sleep & Relaxation',
    icon: Moon,
    description: 'Restful sleep and stress management',
    products: [
      { id: 'harmony', name: 'UltiWell® Harmony', ingredients: ['Ashwagandha', 'L-Theanine', 'Magnesium', 'Passionflower'] },
      { id: 'calm', name: 'UltiWell® Calm', ingredients: ['L-Theanine', 'GABA', 'Lemon Balm', 'Chamomile'] },
      { id: 'zenith', name: 'UltiWell® Zenith', ingredients: ['Premium Adaptogens', 'Advanced Nootropics', 'Superfoods', 'Premium Vitamins'] },
      { id: 'restful', name: 'UltiWell® Restful', ingredients: ['Melatonin', 'Valerian Root', 'Magnesium Glycinate', 'L-Tryptophan'] },
      { id: 'sleep', name: 'UltiWell® Sleep Series', ingredients: ['Chamomile', 'Passionflower', 'L-Theanine', 'Magnesium'] },
      { id: 'relaxation', name: 'UltiWell® Relaxation Series', ingredients: ['Relaxation Herbs Blend', 'Magnesium', 'B-Vitamins', 'Adaptogens'] },
      { id: 'mindsoothing', name: 'UltiWell® Mind Soothing Series', ingredients: ['Soothing Herbs', 'Omega-3', 'B-Complex', 'L-Theanine'] },
    ],
  },
  {
    category: 'Digestive Health',
    icon: Leaf,
    description: 'Digestion, detox and liver support',
    products: [
      { id: 'digest', name: 'UltiWell® Digest', ingredients: ['Digestive Enzymes', 'Probiotics 10B CFU', 'Prebiotics', 'Ginger'] },
      { id: 'cleanse', name: 'UltiWell® Cleanse', ingredients: ['Milk Thistle', 'Dandelion Root', 'Turmeric', 'Artichoke'] },
      { id: 'liversupport', name: 'UltiWell® LiverSupport', ingredients: ['Silymarin', 'NAC', 'Dandelion', 'Artichoke Extract'] },
      { id: 'ketobalance', name: 'UltiWell® KetoBalance', ingredients: ['MCT Oil', 'Exogenous Ketones', 'Electrolytes', 'Fiber'] },
    ],
  },
  {
    category: 'Specialized Care',
    icon: Users,
    description: 'Targeted solutions for specific needs',
    products: [
      { id: 'menopauseease', name: 'UltiWell® MenopauseEase', ingredients: ['Black Cohosh', 'Dong Quai', 'Evening Primrose', 'Vitamin E'] },
      { id: 'eyevive', name: 'UltiWell® EyeVive', ingredients: ['Lutein', 'Zeaxanthin', 'Bilberry', 'Vitamin A'] },
      { id: 'elderlycare', name: 'UltiWell® Elderly Care Series', ingredients: ['Senior Vitamins', 'Bone Support', 'Memory Complex', 'Joint Support'] },
    ],
  },
  {
    category: 'Lifestyle Solutions',
    icon: Activity,
    description: 'Daily wellness and lifestyle support',
    products: [
      { id: 'veganpure', name: 'UltiWell® VeganPure', ingredients: ['Plant Vitamins', 'Algae DHA', 'Vegan B12', 'Plant Minerals'] },
      { id: 'travel', name: 'UltiWell® Travel Series', ingredients: ['Travel Essentials', 'Immune Support', 'Digestive Aid', 'Sleep Support'] },
      { id: 'healthydiet', name: 'UltiWell® Healthy Diet Series', ingredients: ['Superfoods', 'Protein', 'Fiber', 'Nutrients'] },
      { id: 'dailycare', name: 'UltiWell® Daily Care Series', ingredients: ['Daily Essentials', 'Comfort Herbs', 'Wellness Support'] },
      { id: 'environment', name: 'UltiWell® Environment Optimization Series', ingredients: ['Environmental Support', 'Air Purifiers', 'Wellness Enhancers'] },
    ],
  },
  {
    category: 'Plant Extracts',
    icon: Leaf,
    description: 'High-potency plant-derived active ingredients',
    products: [
      { id: 'curcumin', name: 'UltiWell® Curcumin Extract', ingredients: ['Curcumin C3 Complex®', 'Piperine', 'Turmeric Oil'] },
      { id: 'resveratrol', name: 'UltiWell® Resveratrol Extract', ingredients: ['Trans-Resveratrol', 'Red Wine Extract', 'Grape Seed'] },
      { id: 'quercetin', name: 'UltiWell® Quercetin Extract', ingredients: ['Quercetin Dihydrate', 'Bromelain', 'Vitamin C'] },
      { id: 'egcg', name: 'UltiWell® EGCG Extract', ingredients: ['Green Tea Extract', 'EGCG', 'Natural Caffeine'] },
      { id: 'berberine', name: 'UltiWell® Berberine Extract', ingredients: ['Berberine HCl', 'Coptis Chinensis Extract'] },
      { id: 'silymarin', name: 'UltiWell® Silymarin Extract', ingredients: ['Milk Thistle Extract', 'Silymarin', 'Phosphatidylcholine'] },
    ],
  },
  {
    category: 'Bio-Natural Colors',
    icon: Sparkles,
    description: 'Natural food-grade colors from biosynthesis',
    products: [
      { id: 'betacarotene', name: 'UltiWell® Beta-Carotene', ingredients: ['Biosynthesis Beta-Carotene'] },
      { id: 'astaxanthin', name: 'UltiWell® Astaxanthin', ingredients: ['Haematococcus Pluvialis Extract'] },
      { id: 'lutein', name: 'UltiWell® Lutein', ingredients: ['Marigold Extract'] },
      { id: 'lycopene', name: 'UltiWell® Lycopene', ingredients: ['Tomato Extract'] },
      { id: 'anthocyanin', name: 'UltiWell® Anthocyanin', ingredients: ['Berry Extract Blend'] },
      { id: 'chlorophyll', name: 'UltiWell® Chlorophyll', ingredients: ['Alfalfa Extract', 'Chlorophyllin'] },
    ],
  },
];

// UltiGlow Product Categories - By Function
const ultiGlowCategories = [
  {
    category: 'Deep Hydration',
    icon: Droplets,
    description: 'Multi-layer hydration with biosynthesis hyaluronic acid and glucosamine',
    products: [
      { id: 'bio-ha-serum', name: 'UltiGlow™ Bio-HA Serum', ingredients: ['Bio-HA (Multi-weight) 2%', 'Sodium Hyaluronate', 'Hydrolyzed HA'] },
      { id: 'bio-ha-cream', name: 'UltiGlow™ Bio-HA Cream', ingredients: ['Bio-HA 1%', 'Ceramides', 'Squalane'] },
      { id: 'bio-ha-mask', name: 'UltiGlow™ Bio-HA Mask', ingredients: ['Bio-HA 3%', 'Aloe Vera', 'Vitamin B5'] },
      { id: 'bio-ha-toner', name: 'UltiGlow™ Bio-HA Toner', ingredients: ['Bio-HA 0.5%', 'Glycerin', 'Rose Water'] },
      { id: 'bio-glucosamine-serum', name: 'UltiGlow™ Bio-Glucosamine Serum', ingredients: ['N-Acetyl Glucosamine 5%', 'Niacinamide', 'Vitamin E'] },
      { id: 'bio-glucosamine-cream', name: 'UltiGlow™ Bio-Glucosamine Cream', ingredients: ['N-Acetyl Glucosamine 3%', 'Ceramides', 'Cholesterol'] },
    ],
  },
  {
    category: 'Anti-Aging',
    icon: Heart,
    description: 'Collagen and peptide formulations for youthful skin',
    products: [
      { id: 'bio-collagen-serum', name: 'UltiGlow™ Bio-Collagen Serum', ingredients: ['Recombinant Collagen Type III 1%', 'Peptides', 'Vitamin C'] },
      { id: 'bio-collagen-cream', name: 'UltiGlow™ Bio-Collagen Cream', ingredients: ['Bio-Collagen 2%', 'Peptides', 'SPF 15'] },
      { id: 'bio-collagen-mask', name: 'UltiGlow™ Bio-Collagen Mask', ingredients: ['Bio-Collagen 3%', 'Peptides', 'Adenosine'] },
      { id: 'bio-collagen-eye-cream', name: 'UltiGlow™ Bio-Collagen Eye Cream', ingredients: ['Bio-Collagen 1%', 'Peptides', 'Caffeine'] },
      { id: 'bio-peptide-serum', name: 'UltiGlow™ Bio-Peptide Serum', ingredients: ['Argireline 10%', 'Matrixyl 3000 3%', 'Copper Peptide'] },
      { id: 'bio-peptide-cream', name: 'UltiGlow™ Bio-Peptide Cream', ingredients: ['Peptide Complex 5%', 'Ceramides', 'Vitamin E'] },
      { id: 'bio-copper-peptide-serum', name: 'UltiGlow™ Bio-Copper Peptide Serum', ingredients: ['Copper Peptide GHK-Cu 1%', 'Hyaluronic Acid', 'Allantoin'] },
    ],
  },
  {
    category: 'Brightening',
    icon: Sparkles,
    description: 'Vitamin C and brightening complexes for radiant skin',
    products: [
      { id: 'bio-vitamin-c-serum', name: 'UltiGlow™ Bio-Vitamin C Serum', ingredients: ['L-Ascorbic Acid 20%', 'Vitamin E', 'Ferulic Acid'] },
      { id: 'bio-niacinamide-serum', name: 'UltiGlow™ Bio-Niacinamide Serum', ingredients: ['Niacinamide 10%', 'Zinc PCA', 'Hyaluronic Acid'] },
      { id: 'bio-arbutin-serum', name: 'UltiGlow™ Bio-Arbutin Serum', ingredients: ['Alpha-Arbutin 2%', 'Niacinamide', 'Hyaluronic Acid'] },
      { id: 'bio-brightening-cream', name: 'UltiGlow™ Bio-Brightening Cream', ingredients: ['Vitamin C Derivative 5%', 'Niacinamide', 'Licorice Extract'] },
      { id: 'bio-brightening-mask', name: 'UltiGlow™ Bio-Brightening Mask', ingredients: ['Vitamin C 10%', 'Arbutin', 'Licorice Extract'] },
    ],
  },
  {
    category: 'Sensitive Repair',
    icon: Shield,
    description: 'Gentle formulations for sensitive and compromised skin',
    products: [
      { id: 'bio-ectoine-serum', name: 'UltiGlow™ Bio-Ectoine Serum', ingredients: ['Ectoine 2%', 'Ceramides', 'Panthenol'] },
      { id: 'bio-ectoine-cream', name: 'UltiGlow™ Bio-Ectoine Cream', ingredients: ['Ectoine 1%', 'Centella Asiatica', 'Allantoin'] },
      { id: 'bio-bisabolol-serum', name: 'UltiGlow™ Bio-Bisabolol Serum', ingredients: ['Alpha-Bisabolol 1%', 'Panthenol', 'Allantoin'] },
      { id: 'bio-centella-cream', name: 'UltiGlow™ Bio-Centella Cream', ingredients: ['Centella Asiatica Extract 5%', 'Asiaticoside', 'Madecassoside'] },
      { id: 'bio-sensitive-mask', name: 'UltiGlow™ Bio-Sensitive Mask', ingredients: ['Ectoine 2%', 'Centella', 'Bisabolol'] },
      { id: 'bio-ceramide-cream', name: 'UltiGlow™ Bio-Ceramide Cream', ingredients: ['Ceramide NP 3%', 'Ceramide AP', 'Ceramide EOP'] },
    ],
  },
  {
    category: 'Acne Control',
    icon: Zap,
    description: 'Acne-fighting formulations with biosynthesis actives',
    products: [
      { id: 'bio-salicylic-serum', name: 'UltiGlow™ Bio-Salicylic Serum', ingredients: ['Salicylic Acid 2%', 'Niacinamide', 'Tea Tree Oil'] },
      { id: 'bio-acne-serum', name: 'UltiGlow™ Bio-Acne Serum', ingredients: ['Salicylic Acid 1%', 'Niacinamide 5%', 'Zinc PCA'] },
      { id: 'bio-acne-patch', name: 'UltiGlow™ Bio-Acne Patch', ingredients: ['Hydrocolloid', 'Salicylic Acid', 'Niacinamide'] },
      { id: 'bio-oil-control-toner', name: 'UltiGlow™ Bio-Oil Control Toner', ingredients: ['Niacinamide 5%', 'Zinc PCA', 'Witch Hazel'] },
      { id: 'bio-tea-tree-serum', name: 'UltiGlow™ Bio-Tea Tree Serum', ingredients: ['Tea Tree Oil 5%', 'Niacinamide', 'Salicylic Acid'] },
    ],
  },
  {
    category: 'Skin Renewal',
    icon: RefreshCw,
    description: 'Exfoliation and renewal formulations',
    products: [
      { id: 'bio-aha-serum', name: 'UltiGlow™ Bio-AHA Serum', ingredients: ['Glycolic Acid 8%', 'Lactic Acid', 'Hyaluronic Acid'] },
      { id: 'bio-bha-toner', name: 'UltiGlow™ Bio-BHA Toner', ingredients: ['Salicylic Acid 1%', 'Willow Bark Extract', 'Niacinamide'] },
      { id: 'bio-renew-mask', name: 'UltiGlow™ Bio-Renew Mask', ingredients: ['Papain Enzyme 2%', 'Bromelain', 'Vitamin C'] },
      { id: 'bio-retinol-serum', name: 'UltiGlow™ Bio-Retinol Serum', ingredients: ['Encapsulated Retinol 0.5%', 'Bakuchiol', 'Vitamin E'] },
      { id: 'bio-lactic-serum', name: 'UltiGlow™ Bio-Lactic Serum', ingredients: ['Lactic Acid 5%', 'Hyaluronic Acid', 'Aloe Vera'] },
    ],
  },
  {
    category: 'Sun Protection',
    icon: Sun,
    description: 'UV protection with skin-loving ingredients',
    products: [
      { id: 'bio-sunscreen-spf50', name: 'UltiGlow™ Bio-Sunscreen SPF50', ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Vitamin E'] },
      { id: 'bio-sun-serum', name: 'UltiGlow™ Bio-Sun Serum', ingredients: ['Chemical UV Filters', 'Niacinamide', 'Hyaluronic Acid'] },
      { id: 'bio-after-sun-gel', name: 'UltiGlow™ Bio-After Sun Gel', ingredients: ['Aloe Vera 90%', 'Cucumber Extract', 'Allantoin'] },
      { id: 'bio-uv-shield-cream', name: 'UltiGlow™ Bio-UV Shield Cream', ingredients: ['UV Filters', 'Ceramides', 'Vitamin E'] },
    ],
  },
  {
    category: 'Antioxidant',
    icon: Leaf,
    description: 'Natural antioxidant complexes for skin defense',
    products: [
      { id: 'bio-ergothioneine-serum', name: 'UltiGlow™ Bio-Ergothioneine Serum', ingredients: ['Ergothioneine 0.5%', 'Vitamin C', 'Vitamin E'] },
      { id: 'bio-resveratrol-cream', name: 'UltiGlow™ Bio-Resveratrol Cream', ingredients: ['Resveratrol 1%', 'Peptides', 'Ceramides'] },
      { id: 'bio-green-tea-essence', name: 'UltiGlow™ Bio-Green Tea Essence', ingredients: ['EGCG 5%', 'Green Tea Extract', 'Aloe Vera'] },
      { id: 'bio-ferulic-serum', name: 'UltiGlow™ Bio-Ferulic Acid Serum', ingredients: ['Ferulic Acid 0.5%', 'Vitamin C', 'Vitamin E'] },
    ],
  },
  {
    category: 'Eye Care',
    icon: Eye,
    description: 'Targeted solutions for delicate eye area',
    products: [
      { id: 'bio-eye-cream', name: 'UltiGlow™ Bio-Eye Cream', ingredients: ['Caffeine 2%', 'Peptides', 'Vitamin K'] },
      { id: 'bio-peptide-eye-serum', name: 'UltiGlow™ Bio-Peptide Eye Serum', ingredients: ['Peptide Complex 5%', 'Caffeine', 'Hyaluronic Acid'] },
      { id: 'bio-eye-mask', name: 'UltiGlow™ Bio-Eye Mask', ingredients: ['Caffeine', 'Peptides', 'Cucumber Extract'] },
    ],
  },
  {
    category: 'Lip Care',
    icon: Smile,
    description: 'Nourishing and protecting lip products',
    products: [
      { id: 'bio-lip-balm', name: 'UltiGlow™ Bio-Lip Balm', ingredients: ['Shea Butter', 'Beeswax', 'Vitamin E'] },
      { id: 'bio-lip-mask', name: 'UltiGlow™ Bio-Lip Mask', ingredients: ['Hyaluronic Acid', 'Ceramides', 'Shea Butter'] },
      { id: 'bio-lip-serum', name: 'UltiGlow™ Bio-Lip Serum', ingredients: ['Hyaluronic Acid', 'Peptides', 'Mint Oil'] },
    ],
  },
  {
    category: 'Pore Care',
    icon: Wind,
    description: 'Pore refining and oil control solutions',
    products: [
      { id: 'bio-pore-serum', name: 'UltiGlow™ Bio-Pore Serum', ingredients: ['Niacinamide 10%', 'Zinc PCA', 'Salicylic Acid'] },
      { id: 'bio-pore-mask', name: 'UltiGlow™ Bio-Pore Mask', ingredients: ['Kaolin Clay', 'Bentonite Clay', 'Tea Tree Oil'] },
      { id: 'bio-pore-toner', name: 'UltiGlow™ Bio-Pore Toner', ingredients: ['Witch Hazel', 'Niacinamide', 'Tea Tree Oil'] },
    ],
  },
  {
    category: 'Natural Color',
    icon: Palette,
    description: 'Natural color cosmetics with bio-derived pigments',
    products: [
      { id: 'bio-lip-tint', name: 'UltiGlow™ Bio-Lip Tint', ingredients: ['Plant Pigments', 'Jojoba Oil', 'Vitamin E'] },
      { id: 'bio-bb-cream', name: 'UltiGlow™ Bio-BB Cream', ingredients: ['Mineral Pigments', 'Hyaluronic Acid', 'Niacinamide'] },
      { id: 'bio-blush', name: 'UltiGlow™ Bio-Blush', ingredients: ['Mineral Pigments', 'Mica', 'Jojoba Oil'] },
      { id: 'bio-highlighter', name: 'UltiGlow™ Bio-Highlighter', ingredients: ['Mica', 'Mineral Pigments', 'Argan Oil'] },
      { id: 'bio-bronzer', name: 'UltiGlow™ Bio-Bronzer', ingredients: ['Mineral Bronzers', 'Mica', 'Vitamin E'] },
      { id: 'bio-eyebrow-gel', name: 'UltiGlow™ Bio-Eyebrow Gel', ingredients: ['Natural Pigments', 'Beeswax', 'Vitamin E'] },
    ],
  },
];

export default function CataloguePage() {
  const totalUltiWell = ultiWellCategories.reduce((sum, cat) => sum + cat.products.length, 0);
  const totalUltiGlow = ultiGlowCategories.reduce((sum, cat) => sum + cat.products.length, 0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
              Product Catalogue
            </h1>
            <p className="text-lg text-gray-600">
              Explore our complete range of biosynthesis-based products across two premium brands
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/api/catalogue-download" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#A1BA80' }}
              >
                <Download className="w-5 h-5" />
                Download Full Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Navigation */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#ultiwell" 
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#d7e1c7' }}
            >
              <Target className="w-5 h-5" style={{ color: '#A1BA80' }} />
              <span className="font-medium" style={{ color: '#6e8956' }}>UltiWell® ({totalUltiWell} Products)</span>
            </a>
            <a 
              href="#ultiglow" 
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#d7e1c7' }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#A1BA80' }} />
              <span className="font-medium" style={{ color: '#6e8956' }}>UltiGlow™ ({totalUltiGlow} Products)</span>
            </a>
          </div>
        </div>
      </section>

      {/* UltiWell Section */}
      <section id="ultiwell" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              <Target className="w-4 h-4" />
              Health Supplements
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-2">
              UltiWell® Product Catalogue
            </h2>
            <p className="text-xl mb-4" style={{ color: '#A1BA80' }}>「Ultimate Wellness」</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium biosynthesis-based health supplements for every wellness need
            </p>
            <div className="mt-4 inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              {totalUltiWell} Products across {ultiWellCategories.length} Categories
            </div>
          </div>

          {ultiWellCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <category.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-gray-900">{category.category}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                    {category.products.length} Products
                  </span>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.products.map((product, productIndex) => (
                  <Link 
                    key={productIndex} 
                    href={`/products/ultiwell/${product.id}`}
                    className="block"
                  >
                    <Card className="border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 group h-full">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-normal text-gray-900 group-hover:text-green-700 transition-colors">
                            {product.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-1" />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <ul className="space-y-1">
                            {product.ingredients.map((ingredient, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#A1BA80' }} />
                                {ingredient}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UltiGlow Section */}
      <section id="ultiglow" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              <Sparkles className="w-4 h-4" />
              Skincare Products
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-2">
              UltiGlow™ Product Catalogue
            </h2>
            <p className="text-xl mb-4" style={{ color: '#A1BA80' }}>「Ultimate Glow」</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium skincare powered by biosynthesis technology
            </p>
            <div className="mt-4 inline-block px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#d7e1c7', color: '#6e8956' }}>
              {totalUltiGlow} Products across {ultiGlowCategories.length} Categories
            </div>
          </div>

          {ultiGlowCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#d7e1c7' }}>
                  <category.icon className="w-6 h-6" style={{ color: '#A1BA80' }} />
                </div>
                <div>
                  <h3 className="text-xl font-normal text-gray-900">{category.category}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f5e8', color: '#6e8956' }}>
                    {category.products.length} Products
                  </span>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.products.map((product, productIndex) => (
                  <Link 
                    key={productIndex} 
                    href={`/products/ultiglow/${product.id}`}
                    className="block"
                  >
                    <Card className="border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 group h-full bg-white">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-normal text-gray-900 group-hover:text-green-700 transition-colors">
                            {product.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 mt-1" />
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <ul className="space-y-1">
                            {product.ingredients.map((ingredient, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#A1BA80' }} />
                                {ingredient}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-normal text-gray-900 mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer OEM/ODM services and bulk ingredient supply for B2B partners worldwide.
            Contact us for detailed specifications, pricing, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#A1BA80' }}
            >
              Request Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="mailto:info@alvokorbiosolution.com" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-400"
            >
              info@alvokorbiosolution.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
