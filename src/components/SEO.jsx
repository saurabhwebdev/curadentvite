import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  canonicalUrl = 'https://curadent.in',
  ogType = 'website',
  ogImage = 'https://curadent.in/assets/images/og-image.jpg',
  keywords,
  children,
  language = 'en-IN' 
}) => {
  // Base title for the website
  const siteTitle = 'Curadent - Advanced Dental Care in Bengaluru';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  // Default description if none provided
  const defaultDescription = 'Curadent provides advanced dental care services including general dentistry, cosmetic dentistry, orthodontics, and dental implants. Visit our modern clinic in Kasturi Nagar, Bengaluru for expert dental care.';
  const metaDescription = description || defaultDescription;

  // Default keywords for dental practice
  const defaultKeywords = 'dental clinic Bengaluru, dentist kasturi nagar, dental care, teeth cleaning, dental implants, orthodontics, cosmetic dentistry, root canal, dental crown, teeth whitening, dental surgery, emergency dentist';
  const metaKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="author" content="Curadent Dental Clinic" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru" />
      <meta name="geo.position" content="13.0125;77.6541" />
      <meta name="ICBM" content="13.0125, 77.6541" />

      {/* Favicon Tags */}
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
      <link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg" color="#0066CC" />
      <meta name="msapplication-TileColor" content="#0066CC" />
      <meta name="msapplication-config" content="/assets/icons/browserconfig.xml" />

      {/* PWA Tags */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#0066CC" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Curadent" />
      <meta name="application-name" content="Curadent" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Curadent Dental Clinic" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Curadent" />
      <meta property="og:locale" content={language} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@curadent" />
      <meta name="twitter:creator" content="@curadent" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Curadent Dental Clinic" />

      {/* Additional SEO Best Practices */}
      <meta name="theme-color" content="#0066CC" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Curadent" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="application-name" content="Curadent" />

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Curadent",
          "alternateName": "Curadent Dental Clinic",
          "image": ogImage,
          "url": "https://curadent.in",
          "telephone": ["+919108161850", "+919900379125"],
          "email": ["hello@curadent.in", "hellocuradent@gmail.com", "kritilaxmijha@gmail.com"],
          "description": metaDescription,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "#301, First floor, 2nd Main Road, East of NGEF Layout",
            "addressLocality": "Kasturi Nagar",
            "addressRegion": "Bengaluru",
            "addressCountry": "IN",
            "postalCode": "560043"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0125",
            "longitude": "77.6541"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "10:00",
              "closes": "20:00"
            }
          ],
          "sameAs": [
            "https://facebook.com/curadent",
            "https://instagram.com/curadent",
            "https://twitter.com/curadent"
          ],
          "priceRange": "₹₹",
          "@id": "https://curadent.in/#organization",
          "areaServed": {
            "@type": "City",
            "name": "Bengaluru"
          },
          "hasMap": "https://www.google.com/maps?cid=YOUR_GOOGLE_MAPS_CID",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1000"
          },
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
          "currenciesAccepted": "INR"
        })}
      </script>

      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://curadent.in/#organization",
          "name": "Curadent",
          "url": "https://curadent.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://curadent.in/logo.png",
            "width": "180",
            "height": "60"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+919108161850",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi", "kn"]
          }
        })}
      </script>

      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonicalUrl: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  keywords: PropTypes.string,
  language: PropTypes.string,
  children: PropTypes.node
};

export default SEO; 