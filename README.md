# TypeScript Storybook Mobile Design System

A modern, mobile-first design system built with TypeScript and Storybook, optimized for React Native development. This project provides a comprehensive set of reusable components with full TypeScript support and interactive documentation.

## 🚀 Features

- **TypeScript First**: Full type safety with comprehensive interfaces
- **Mobile-First Design**: Components optimized for mobile app development
- **Storybook Integration**: Interactive component documentation and testing
- **Custom CSS Classes**: Clean, maintainable styling without external dependencies
- **React Native Ready**: Components designed for mobile app development

## 📦 Components

### Core Components

- **Button** - 5 variants (primary, secondary, outline, ghost, danger) with 3 sizes
- **Card** - Multiple elevation levels and padding options for content containers
- **Input** - Form inputs with focus states and validation styling
- **List** - Mobile-optimized lists with dividers and interactive items

### Design System Features

- **Mobile-First Approach**: 44px minimum touch targets for accessibility
- **Consistent Spacing**: Harmonized padding, margins, and sizing
- **Modern Aesthetics**: Rounded corners, soft shadows, and smooth transitions
- **Accessibility**: Proper focus states and keyboard navigation support

## 🛠️ Tech Stack

- **TypeScript** - Type-safe development
- **React** - Component library
- **Storybook** - Component documentation and testing
- **CSS3** - Custom styling with modern features
- **Babel** - JavaScript/TypeScript compilation

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd storybook-mobileapp

# Install dependencies
npm install
```

### Development

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook
```

### Available Scripts

- `npm run storybook` - Start development server (http://localhost:6006)
- `npm run build-storybook` - Build static Storybook files
- `npm run build` - Build the project

## 📱 Component Usage

### Button Component

```tsx
import { Button } from './stories/Button';

// Primary button
<Button variant="primary" size="medium" label="Click me" />

// Secondary button
<Button variant="secondary" size="large" label="Secondary" />

// Outline button
<Button variant="outline" size="small" label="Outline" />
```

### Card Component

```tsx
import { Card } from './stories/Card';

// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Elevated card
<Card elevation="elevated">
  <h3>Elevated Card</h3>
  <p>This card has more shadow</p>
</Card>
```

### Input Component

```tsx
import { Input } from './stories/Input';

// Basic input
<Input 
  placeholder="Enter your name"
  size="medium"
/>

// Input with label
<Input 
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  required
/>
```

### List Component

```tsx
import { List, ListItem } from './stories/List';

// Basic list
<List title="Settings">
  <ListItem>General Settings</ListItem>
  <ListItem>Privacy & Security</ListItem>
  <ListItem>Notifications</ListItem>
</List>

// Interactive list
<List title="Navigation">
  <ListItem clickable onClick={() => navigate('/home')}>
    Home
  </ListItem>
  <ListItem clickable onClick={() => navigate('/profile')}>
    Profile
  </ListItem>
</List>
```

## 🎨 Styling

The project uses custom CSS classes for styling, providing:

- **Consistent Design Language**: Unified color palette and spacing
- **Mobile Optimization**: Touch-friendly sizing and interactions
- **Responsive Design**: Components that work across different screen sizes
- **Accessibility**: High contrast ratios and proper focus indicators

### CSS Classes

- `.btn-mobile` - Base button styling
- `.btn-primary`, `.btn-secondary`, etc. - Button variants
- `.btn-sm`, `.btn-md`, `.btn-lg` - Button sizes
- `.card-mobile` - Card container styling
- `.input-mobile` - Input field styling
- `.list-mobile` - List container styling

## 📁 Project Structure

```
storybook-mobileapp/
├── .storybook/           # Storybook configuration
│   ├── main.js          # Main Storybook config
│   └── preview.js       # Global preview settings
├── stories/             # Component library
│   ├── Button.tsx       # Button component
│   ├── Button.stories.ts # Button stories
│   ├── Card.tsx         # Card component
│   ├── Card.stories.ts  # Card stories
│   ├── Input.tsx        # Input component
│   ├── Input.stories.ts # Input stories
│   ├── List.tsx         # List component
│   ├── List.stories.ts  # List stories
│   └── globals.css      # Global styles
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🔧 Configuration

### TypeScript Configuration

The project includes a comprehensive `tsconfig.json` with:
- Strict type checking
- React JSX support
- ES2020 target
- Module resolution for Node.js

### Storybook Configuration

Storybook is configured with:
- TypeScript support
- Babel compilation
- CSS processing
- React documentation generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Storybook](https://storybook.js.org/)
- Powered by [TypeScript](https://www.typescriptlang.org/)
- Styled with modern CSS3 features