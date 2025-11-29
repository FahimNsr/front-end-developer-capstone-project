# Little Lemon Restaurant

A modern, responsive web application for Little Lemon, a family-owned Mediterranean restaurant in Chicago. This single-page application (SPA) provides an elegant dining experience with online table reservations, menu browsing, and restaurant information.

![Little Lemon Restaurant](public/images/Logo.svg)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Table Reservations**: Interactive booking form with real-time validation and available time slots
- **Menu Showcase**: Beautiful display of weekly specials with detailed descriptions
- **Customer Testimonials**: Social proof section featuring customer reviews and ratings
- **Accessibility**: WCAG-compliant with ARIA labels, keyboard navigation, and screen reader support
- **Performance Optimized**: Code splitting, lazy loading, and optimized images for fast load times
- **SEO Friendly**: Structured data, meta tags, and semantic HTML for better search engine visibility
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions

## 🛠️ Tech Stack

- **React 19.2.0**: Modern React with hooks and functional components
- **React Router DOM 7.9.6**: Client-side routing for SPA navigation
- **CSS3**: Custom design system with CSS variables for consistent styling
- **Create React App**: Development and build tooling
- **Jest & React Testing Library**: Comprehensive test coverage

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FahimNsr/front-end-developer-capstone-project.git
   cd front-end-developer-capstone-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload automatically when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run test:watch`
Runs tests in watch mode, automatically re-running tests when files change.

### `npm run test:coverage`
Runs tests and generates a coverage report showing which parts of your code are covered by tests.


### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and filenames include hashes. Your app is ready to be deployed!

## 📁 Project Structure

```
front-end-developer-capstone-project/
├── public/
│   ├── images/          # Image assets
│   ├── index.html       # HTML template
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # SEO robots file
├── src/
│   ├── components/      # Reusable React components
│   │   ├── BookingForm/    # Reservation form component
│   │   ├── CallToAction/   # Hero section component
│   │   ├── Chicago/        # About section component
│   │   ├── CustomersSay/    # Testimonials component
│   │   ├── Footer/          # Footer component
│   │   ├── Header/          # Header with navigation
│   │   ├── Main/            # Main routing component
│   │   ├── Nav/             # Navigation menu component
│   │   └── Specials/         # Menu specials component
│   ├── pages/          # Page components
│   │   ├── BookingPage/     # Reservation page
│   │   ├── ConfirmedBooking/ # Confirmation page
│   │   └── HomePage/        # Home page
│   ├── styles/         # Global styles
│   │   └── variables.css    # CSS design system variables
│   ├── utils/         # Utility functions
│   │   └── timesReducer.js  # Time slot management
│   ├── App.js         # Main App component
│   ├── App.css        # App styles
│   ├── index.js       # Application entry point
│   └── index.css      # Global styles
├── package.json       # Project dependencies
└── README.md         # Project documentation
```

## 🎨 Design System

The application uses a custom design system with CSS variables defined in `src/styles/variables.css`:

- **Colors**: Primary green (#495E57), yellow (#F4CE14), and orange (#EE9972)
- **Typography**: Markazi Text (display) and Karla (body)
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl)
- **Border Radius**: Standardized border radius values
- **Responsive Breakpoints**: Mobile-first approach with breakpoints at 767px, 998px, and 1024px

## ✅ Testing

The project includes comprehensive test coverage using Jest and React Testing Library:

- **Unit Tests**: Component logic and utility functions
- **Integration Tests**: Form validation and user interactions
- **Accessibility Tests**: ARIA attributes and keyboard navigation

Run tests with:
```bash
npm test
```

View test coverage:
```bash
npm run test:coverage
```

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of HTML5 semantic elements (header, nav, main, footer, section, article)
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Keyboard Navigation**: Full keyboard support for all functionality
- **Screen Reader Support**: Proper ARIA attributes and roles
- **Focus Management**: Clear focus indicators and logical tab order
- **Form Labels**: All form inputs properly labeled with `htmlFor` attributes
- **Alt Text**: Descriptive alt text for all images

## 🔍 SEO Optimizations

- **Meta Tags**: Comprehensive meta tags for description, keywords, and Open Graph
- **Structured Data**: JSON-LD schema markup for restaurant information
- **Semantic HTML**: Proper heading hierarchy and semantic structure
- **Canonical URLs**: Proper canonical URL tags
- **Social Sharing**: Open Graph and Twitter Card meta tags
- **Image Optimization**: Proper image attributes (width, height, alt text)

## ⚡ Performance Optimizations

- **Code Splitting**: Lazy loading of page components using React.lazy()
- **Image Optimization**: Lazy loading for below-the-fold images
- **Bundle Optimization**: Minified and optimized production builds
- **Efficient Rendering**: React.memo() for component memoization
- **Resource Prioritization**: Priority hints for critical resources

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The application is fully responsive with breakpoints optimized for:
- **Mobile**: < 767px
- **Tablet**: 768px - 997px
- **Desktop**: 998px - 1023px
- **Large Desktop**: ≥ 1024px

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 License

This project is part of a capstone project for front-end development coursework.

## 👨‍💻 Author

Developed as part of the Front-End Developer Capstone Project.

## 🙏 Acknowledgments

- Design inspiration from Little Lemon restaurant brand
- React community for excellent documentation
- Testing Library for comprehensive testing utilities

---

**Built with ❤️ using React**
