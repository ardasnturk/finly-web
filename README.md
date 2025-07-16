# Finly - Finance Management App Website

A modern, responsive single-page website for the Finly mobile app, built with React, Vite, and React Router v7.

## 🚀 Features

- **Modern Design**: Clean, minimalistic design with dark/light mode support
- **Responsive Layout**: Fully responsive design that works on all devices
- **Theme Switching**: Automatic theme detection with manual toggle option
- **Smooth Scrolling**: Smooth navigation between sections
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: WCAG compliant with proper focus management

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **React Router v7** - Modern routing with SSR support
- **TypeScript** - Type safety and better developer experience
- **TailwindCSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
finly-web/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx      # Navigation and theme toggle
│   │   ├── Hero.tsx        # Main hero section
│   │   ├── Features.tsx    # App features showcase
│   │   ├── FeatureCard.tsx # Individual feature card
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   ├── FAQ.tsx         # Frequently asked questions
│   │   ├── Footer.tsx      # Footer with links and language switcher
│   │   ├── ThemeProvider.tsx # Theme context and management
│   │   └── index.ts        # Component exports
│   ├── routes/
│   │   └── home.tsx        # Main page component
│   ├── themes.ts           # Theme configuration
│   ├── app.css             # Global styles
│   ├── root.tsx            # Root layout component
│   └── routes.ts           # Route configuration
├── assets/                 # Static assets
│   ├── icon.png           # App icon
│   ├── adaptive-icon.png  # Adaptive app icon
│   └── screenshots/       # App screenshots by language
│       ├── en/            # English screenshots
│       ├── tr/            # Turkish screenshots
│       ├── de/            # German screenshots
│       └── ...            # Other languages
├── public/                # Public assets
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#3b82f6) - Used for buttons, links, and highlights
- **Secondary**: Gray scale - Used for text, backgrounds, and borders
- **Success**: Green (#10b981) - Used for positive actions
- **Warning**: Orange (#f59e0b) - Used for warnings
- **Error**: Red (#ef4444) - Used for errors

### Typography

- **Font**: Inter - Modern, readable font family
- **Weights**: 100-900 with italic support
- **Responsive**: Scales appropriately across devices

### Components

- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary style with hover animations
- **Forms**: Clean inputs with focus states
- **Navigation**: Smooth scrolling between sections

## 🌍 Internationalization

The website is prepared for multiple languages:

- English (en)
- Turkish (tr)
- German (de)
- Spanish (es)
- Italian (it)
- Japanese (ja)
- Chinese (ch)

Screenshots are organized by language code in the `assets/screenshots/` directory.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd finly-web
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
yarn build
```

The built files will be in the `build/` directory.

### Running Production Build

```bash
yarn start
```

## 📱 App Information

- **App Name**: Finly
- **App Store Link**: https://apps.apple.com/us/app/budget-tracker-finance-finly/id6747941491
- **Category**: Finance & Budgeting
- **Platform**: iOS (Android and Web coming soon)

## 🎯 Key Features Highlighted

1. **Income & Expense Tracking** - Smart categorization and insights
2. **Advanced Analytics** - Detailed charts and reports
3. **Goal Setting** - Visual progress tracking
4. **Smart Reminders** - Never miss important payments
5. **AI Suggestions** - Personalized financial advice
6. **Security** - Bank-level encryption and privacy

## 🔧 Customization

### Adding New Languages

1. Add language code to the `languages` array in `Footer.tsx`
2. Create screenshot folder: `assets/screenshots/{langCode}/`
3. Add screenshots numbered 01-05.png

### Modifying Themes

Edit the `app/themes.ts` file to customize colors and styling.

### Adding New Sections

1. Create new component in `app/components/`
2. Add to the main page in `app/routes/home.tsx`
3. Update navigation in `Header.tsx` if needed

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

This is a private project. Please contact the development team for contribution guidelines.

## 📞 Support

For support, email support@finly.app or visit the app's support page.
