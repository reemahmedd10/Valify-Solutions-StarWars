# Star Wars Dashboard

A React-based dashboard application that interacts with the Star Wars API (SWAPI) to display information about Star Wars characters, starships, and planets.

![Star Wars Dashboard](https://img.shields.io/badge/Next.js-13.5.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## 🌟 Features

- **🎬 Characters**: Browse and search Star Wars characters with detailed information
- **🚀 Starships**: Explore iconic vessels from the saga
- **🪐 Planets**: Discover diverse worlds across the galaxy
- **🔍 Search**: Real-time filtering on all pages
- **📱 Responsive**: Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI**: Dark theme with authentic Star Wars aesthetic
- **⚡ Fast**: Server-side rendering for optimal performance
- **🧪 Tested**: Unit tests with Jest and React Testing Library

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) (App Router with Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [SWAPI](https://swapi.dev/) (Star Wars API)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/react)

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18.17.0 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd Valify-Solutions-StarWars
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   ├── characters/
│   │   │   ├── page.tsx        # Characters route
│   │   │   ├── loading.tsx     # Loading state
│   │   │   └── error.tsx       # Error boundary
│   │   ├── starships/          # Starships route
│   │   ├── planets/            # Planets route
│   │   ├── layout.tsx          # Dashboard layout
│   │   └── page.tsx            # Dashboard home
│   ├── globals.css             # Global styles + Tailwind
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/
│   ├── __tests__/              # Unit tests
│   ├── Sidebar.tsx             # Navigation sidebar
│   ├── SearchBar.tsx           # Reusable search
│   ├── Modal.tsx               # Reusable modal
│   └── *Card.tsx               # Data cards
└── lib/
    └── swapi.ts                # API service layer
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint

## 🎯 Design Choices

### Architecture Decisions

**1. Next.js 13 App Router**
- Chose Next.js for Server Components, which fetch data on the server for better performance
- App Router provides intuitive file-based routing
- Automatic code splitting reduces initial bundle size

**2. Hybrid Server/Client Components**
- **Server Components** (`page.tsx` files): Handle data fetching from SWAPI
- **Client Components** (`'use client'`): Handle interactivity (search, modals)
- This hybrid approach provides optimal performance and UX

**3. TypeScript**
- Provides type safety and catches errors at compile time
- Improves developer experience with autocomplete
- Self-documenting code through interfaces

**4. Tailwind CSS**
- Utility-first approach enables rapid development
- Small bundle size through CSS purging
- Consistent design system with custom Star Wars theme
- Excellent responsive design utilities

**5. Simple State Management**
- Used React's `useState` hook for local state (search, modals)
- Server Components eliminate need for complex state management
- Keeps code simple and maintainable

### UI/UX Decisions

**1. Modal-Based Detail View**
- Chose modals over separate pages for better UX
- Users stay in context while viewing details
- Smooth animations enhance the experience

**2. Real-Time Search**
- Client-side filtering provides instant feedback
- No need for API calls, reducing latency
- Clear button for easy reset

**3. Loading & Error States**
- Skeleton screens maintain layout during loading
- Error boundaries with retry functionality
- Fallback mock data ensures app always works

**4. Star Wars Theme**
- Custom yellow accent color (#FFE81F) matches Star Wars branding
- Dark background evokes space/sci-fi aesthetic
- Subtle animations and hover effects add polish

## 🚧 Challenges Faced & Solutions

### Challenge 1: SSL Certificate Errors
**Problem**: Corporate proxy caused self-signed certificate errors when fetching from SWAPI.

**Solution**: 
- Implemented try-catch blocks with fallback mock data
- Added graceful error handling at multiple levels
- Ensures app always displays content, even with network issues

### Challenge 2: Tailwind CSS Not Loading
**Problem**: PostCSS configuration wasn't being processed correctly.

**Solution**: 
- Changed PostCSS config from `.mjs` to `.js` format
- Used CommonJS syntax for better compatibility
- Cleaned build cache to force recompilation

### Challenge 3: Node.js Version Compatibility  
**Problem**: Development environment had Node.js 18.14.0, but Next.js 14 requires 18.17.0+.

**Solution**: 
- Downgraded Next.js from 14.2 to 13.5.6
- Ensured all dependencies were compatible
- Maintained all modern features (Server Components, App Router)

### Challenge 4: Responsive Layout
**Problem**: Sidebar taking up too much space on smaller screens.

**Solution**: 
- Used fixed positioning with appropriate margins
- Could be enhanced with hamburger menu for mobile
- Current solution works well for tablet and desktop

### Challenge 5: Data Fetching Strategy
**Problem**: Balancing fresh data with performance.

**Solution**: 
- Used `cache: 'no-store'` for fresh data on each request
- Server Components render on the server, reducing client work
- Could be enhanced with revalidation strategies in production

## 🧪 Testing

Unit tests are included for critical components:

```bash
npm test
```

**Test Coverage**:
- `SearchBar.tsx` - 8 tests (rendering, interactions, accessibility)
- `Modal.tsx` - 5 tests (open/close behavior, backdrop clicks)

**Testing Philosophy**:
- Focus on user behavior rather than implementation details
- Test component interactions and state changes
- Ensure accessibility features work correctly

## 🎨 Styling & Theming

### Custom Theme
```typescript
colors: {
  'sw-yellow': '#FFE81F',  // Official Star Wars yellow
  'sw-gray': '#1a1a1a',    // Card backgrounds
  'sw-dark': '#0d0d0d',    // Main background
}
```

### Custom Utilities
- `.text-glow` - Glowing text effect for titles
- `.card-hover` - Smooth hover transitions
- `.star-border` - Yellow border with opacity

## 📊 Performance

- **Server-Side Rendering**: Fast initial page load
- **Code Splitting**: Automatic per-route splitting
- **Optimized Images**: (Would add if images were used)
- **Efficient Re-renders**: Local state prevents unnecessary updates

## 🚀 Deployment

This app can be deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

## 🔮 Future Enhancements

- [ ] Add more SWAPI endpoints (Films, Species, Vehicles)
- [ ] Implement pagination for large datasets
- [ ] Add favorites/bookmarks feature
- [ ] Implement dark/light mode toggle
- [ ] Add mobile hamburger menu
- [ ] Enhance caching with React Query
- [ ] Add more comprehensive tests
- [ ] Implement keyboard navigation
- [ ] Add analytics

## 🤝 Contributing

This is a portfolio/assessment project, but suggestions are welcome!

## 📝 License

This project is for educational purposes.

## 🙏 Acknowledgments

- [SWAPI](https://swapi.dev/) for the amazing Star Wars API
- [Next.js](https://nextjs.org/) team for the excellent framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling utilities

---

## 📚 Additional Documentation

For a comprehensive guide on implementation details, see [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)

This includes:
- Detailed explanation of each feature
- Code examples and locations
- Interview preparation tips
- Architecture diagrams
- Troubleshooting guide

---

**Built with ⚡ by [Your Name]**
