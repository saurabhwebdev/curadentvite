# Curadent - Modern Dental Clinic Website

A modern, responsive dental clinic website built with React, Vite, and TailwindCSS. Features a beautiful UI, smooth animations, and comprehensive dental service information.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive SEO implementation with structured data
- **Performance Focused**: Built with Vite for optimal loading speeds
- **Service Pages**: Detailed pages for all dental services
- **Online Booking**: Integrated Calendly booking system
- **Location Integration**: Google Maps integration for clinic location
- **Accessibility**: WCAG compliant for better accessibility

## 🛠️ Tech Stack

- React 18
- Vite
- TailwindCSS
- Framer Motion
- React Router DOM
- React Query
- React Helmet Async
- Radix UI Components
- Phosphor Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/saurabhwebdev/curadentvite.git
```

2. Install dependencies:
```bash
cd curadentvite
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🌐 Environment Variables

Create a `.env` file in the root directory with the following variables:
```env
VITE_CALENDLY_URL=your_calendly_url
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## 📄 Project Structure

```
src/
├── components/        # Reusable components
├── pages/            # Page components
│   └── services/     # Service-specific pages
├── lib/              # Utility functions
├── styles/           # Global styles
└── assets/           # Static assets
```

## 🔧 Configuration

- **TailwindCSS**: Configuration in `tailwind.config.js`
- **Vite**: Configuration in `vite.config.js`
- **SEO**: Global SEO settings in `components/SEO.jsx`
- **Routing**: Route definitions in `App.jsx`

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 📱 PWA Support

The website is PWA-ready with:
- Service Worker integration
- Installable on mobile devices
- Offline support
- App-like experience

## 🔒 Security

- HTTPS enforced
- Content Security Policy
- XSS Protection
- CORS configured
- Secure Headers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Saurabh** - *Initial work* - [saurabhwebdev](https://github.com/saurabhwebdev)

## 🙏 Acknowledgments

- Design inspiration from modern healthcare websites
- Icons by Phosphor Icons
- UI Components by Radix UI
- Animation library by Framer Motion

## 📞 Contact

For any queries or support, please contact:
- Email: hello@curadent.in
- Phone: +91 91081 61850

---
Made with ❤️ for Curadent Dental Clinic
