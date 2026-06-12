# Enviko Biotechnology Official Website System
# User Operation Manual
# Version: V1.0

---

## Table of Contents

1. Software Overview
2. System Requirements
3. Software Installation
4. Functional Modules
5. Operating Instructions
6. FAQ

---

## 1. Software Overview

### 1.1 Software Information

- **Software Name**: Enviko Biotechnology Official Website System
- **Software Version**: V1.0
- **Development Environment**: Next.js 16 + React 19 + TypeScript 5
- **Runtime Environment**: Node.js 24+, modern browsers (Chrome, Firefox, Safari, Edge)
- **Software Type**: Web Application (B/S Architecture)
- **Development Language**: TypeScript/JavaScript

### 1.2 Software Purpose

Enviko Biotechnology Official Website System is the official web platform for Shanghai Enviko Biotechnology Co., Ltd. The system provides comprehensive corporate information display, product browsing, solution introduction, news publication, and customer contact functions. It serves as the primary digital portal for the company's global B2B business operations.

### 1.3 Main Functions

- Corporate homepage with company overview and key statistics
- Product catalog for UltiWell® health supplement brand (57 products across 13 series)
- Product catalog for UltiGlow™ skincare brand (57 products across 12 functional categories)
- Product detail pages with ingredient information and specifications
- Solutions showcase for pharmaceutical, cosmetics, and agricultural industries
- News and updates publication system
- Product catalogue download functionality
- ChemicalBook B2B platform integration for online shopping
- Contact form for business inquiries
- SEO optimization and sitemap generation

---

## 2. System Requirements

### 2.1 Server Requirements

| Item | Requirement |
|------|-------------|
| Operating System | Linux (Ubuntu 20.04+) / macOS / Windows Server |
| Node.js | Version 24.0 or higher |
| Memory | Minimum 2GB RAM |
| Disk Space | Minimum 1GB free space |
| Network | Stable internet connection |

### 2.2 Client Requirements

| Item | Requirement |
|------|-------------|
| Browser | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |
| Screen Resolution | Minimum 1280x720, recommended 1920x1080 |
| Network | Broadband internet connection |

---

## 3. Software Installation

### 3.1 Deployment Steps

**Step 1: Obtain Source Code**
Extract the source code package to the target deployment directory.

**Step 2: Install Dependencies**
Open a terminal, navigate to the project directory, and execute:
```
pnpm install
```
Wait for all dependencies to be installed successfully.

**Step 3: Configure Environment**
Ensure the following environment variables are set:
- `DEPLOY_RUN_PORT`: Service listening port (default: 5000)
- `COZE_PROJECT_DOMAIN_DEFAULT`: Public access domain
- `COZE_PROJECT_ENV`: Environment type (DEV/PROD)

**Step 4: Build Production Version**
Execute the following command:
```
pnpm build
```

**Step 5: Start Service**
Execute the following command:
```
pnpm start
```
The service will start on the configured port (default 5000).

### 3.2 Development Mode

For development and testing:
```
pnpm dev
```
The development server supports hot module replacement (HMR) for real-time code updates.

---

## 4. Functional Modules

### 4.1 Homepage Module

**Access Path**: `/`

**Functions**:
- Display company hero banner with brand slogan
- Show company key statistics (years of experience, product count, service countries, client satisfaction)
- Present research areas including pharmaceuticals, cosmetics, food & nutrition, and agriculture
- Showcase core technology and biosynthesis capabilities
- Display company impact and global reach
- Quick navigation to all major sections

**Operation**:
1. Open browser and enter the website URL
2. The homepage loads automatically with all sections displayed
3. Scroll down to view different content sections
4. Click on navigation links to access specific pages

### 4.2 About Us Module

**Access Path**: `/about`

**Functions**:
- Company mission and vision statement
- Company development timeline (founded 2023, brand registration, office expansion, global platform growth)
- Core values display (Innovation, Global Partnership, Quality Assurance, Sustainability)
- Business areas introduction (Biotechnology R&D, Food Ingredient Formulation, Dosage Form Innovation, Market Trend Research)

**Operation**:
1. Click "About" in the navigation bar
2. Scroll through the mission, timeline, values, and business sections
3. Review company history and core competencies

### 4.3 Products Module

**Access Path**: `/products`

**Functions**:
- Display two major product brands: UltiWell® and UltiGlow™
- UltiWell® brand overview with 13 product series and 57 health supplement products
- UltiGlow™ brand overview with 12 functional categories and 57 skincare products
- Quick navigation to each brand's detailed product listing

#### 4.3.1 UltiWell® Product Pages

**Access Path**: `/products/ultiwell`

**Functions**:
- Display all 13 product series with product counts
- Series categories include: Vitamins & Minerals, Joint & Bone Health, Cardiovascular Health, Liver & Detox, Brain & Cognitive, Eye Health, Immune Support, Digestive Health, Women's Health, Men's Health, Sports Nutrition, Anti-Aging & Longevity, Sleep & Stress Relief
- Click any series to view detailed product list
- Each product card shows product name and key ingredients

**Access Path**: `/products/ultiwell/[id]`

**Functions**:
- Display individual product detail information
- Show product name, description, key ingredients, benefits
- Provide dosage information and certifications
- Link to ChemicalBook B2B platform for purchasing

#### 4.3.2 UltiGlow™ Product Pages

**Access Path**: `/products/ultiglow`

**Functions**:
- Display all 12 functional categories with product counts
- Categories include: Hydration & Moisturizing, Anti-Aging & Firming, Brightening & Even Tone, Acne & Oil Control, Sensitivity Repair, Sun Protection, Exfoliation & Renewal, Eye Care, Lip Care, Neck & Body Care, Hair & Scalp Care, Men's Skincare
- Each category shows key products with ingredient highlights

**Access Path**: `/products/ultiglow/[id]`

**Functions**:
- Display individual product detail information
- Show product name, description, key ingredients, benefits
- Provide application method and certifications
- Link to ChemicalBook B2B platform for purchasing

### 4.4 Solutions Module

**Access Path**: `/solutions`

**Functions**:
- Display biosynthesis solutions for three industry sectors
- Pharmaceutical Biosynthesis: API development, biocatalyst optimization, GMP compliance
- Cosmetics Biosynthesis: Natural active ingredients, green chemistry, sustainable sourcing
- Sustainable Agriculture: Bio-fertilizers, biopesticides, soil health solutions

**Operation**:
1. Click "Solutions" in the navigation bar
2. Browse the three industry sectors
3. Click "Learn More" for detailed solution information

### 4.5 Product Catalogue Module

**Access Path**: `/catalogue`

**Functions**:
- Display complete product catalog in English
- Show product categories with ingredient lists
- Each product card displays product name and key ingredients in gray badges
- Provide PDF catalogue download functionality

**Operation**:
1. Click "Catalogue" in the navigation bar
2. Browse product categories and individual products
3. Click "Download Catalogue" button to download the PDF version
4. The system will generate and download the catalogue document

### 4.6 Shop Module

**Access Path**: `/shop`

**Functions**:
- Direct link to ChemicalBook B2B platform
- Product search functionality on ChemicalBook
- B2B purchasing interface for bulk orders
- Category browsing on the ChemicalBook platform

**Operation**:
1. Click "Shop" in the navigation bar
2. Browse the shop page with ChemicalBook integration
3. Click product links to be redirected to ChemicalBook platform
4. Complete purchases on the ChemicalBook B2B platform

### 4.7 News Module

**Access Path**: `/news`

**Functions**:
- Display latest company news and industry updates
- News articles with title, date, category, and excerpt
- Load more functionality for paginated news browsing
- News categories include: Company News, Industry Updates, Product Launches

**Operation**:
1. Click "News" in the navigation bar
2. Browse the latest news articles
3. Click "Load More" to view additional articles
4. Read article excerpts for quick overview

### 4.8 Contact Module

**Access Path**: `/contact`

**Functions**:
- Contact form with fields for name, email, phone, company, and message
- Form validation for required fields
- Company contact information display
- Office address and location information

**Operation**:
1. Click "Contact" in the navigation bar
2. Fill in the contact form with your information
3. Enter your message in the text area
4. Click "Send Message" to submit the inquiry
5. The system will validate the form and send the message

---

## 5. Operating Instructions

### 5.1 Navigation

The website uses a top navigation bar with the following menu items:
- **Home**: Return to the homepage
- **About**: View company information
- **Products**: Browse product catalog (UltiWell® and UltiGlow™)
- **Solutions**: View industry solutions
- **Catalogue**: Download product catalogue
- **Shop**: Access ChemicalBook B2B platform
- **News**: Read latest updates
- **Contact**: Send business inquiries

### 5.2 Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full navigation bar with all menu items visible
- **Tablet**: Condensed navigation with dropdown menu
- **Mobile**: Hamburger menu icon for navigation access

### 5.3 Product Browsing Flow

1. Navigate to "Products" page
2. Select UltiWell® or UltiGlow™ brand
3. Browse product categories within the selected brand
4. Click on a product to view detailed information
5. Use the ChemicalBook link to proceed with B2B purchasing

### 5.4 Catalogue Download Flow

1. Navigate to "Catalogue" page
2. Browse the product listings
3. Click "Download Catalogue" button
4. The PDF catalogue will be automatically downloaded to your device

---

## 6. FAQ

### Q1: What browsers are supported?
A: The system supports Chrome 90+, Firefox 88+, Safari 14+, and Edge 90+. For the best experience, we recommend using the latest version of Chrome.

### Q2: How to purchase products?
A: Click "Shop" in the navigation bar, which will redirect you to the ChemicalBook B2B platform where you can search for and purchase products in bulk.

### Q3: How to download the product catalogue?
A: Navigate to the "Catalogue" page and click the "Download Catalogue" button. The PDF catalogue will be downloaded automatically.

### Q4: How to contact the company?
A: Navigate to the "Contact" page, fill in the contact form with your information and message, then click "Send Message". You can also find the company's address and phone number on the same page.

### Q5: Is the website mobile-friendly?
A: Yes, the website uses responsive design and automatically adapts to mobile phones, tablets, and desktop computers.

### Q6: What product brands are available?
A: The website features two brands: UltiWell® (health supplements, 57 products across 13 series) and UltiGlow™ (skincare products, 57 products across 12 functional categories).

---

*Document Version: V1.0*
*Last Updated: 2026-04-28*
