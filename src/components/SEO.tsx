import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  jsonSchema?: object;
  canonicalUrl?: string;
}

export default function SEO({ title, description, jsonSchema, canonicalUrl }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    
    // Find or create description meta tag in head
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);

  useEffect(() => {
    // Determine canonical URL dynamically if not passed as prop
    let resolvedCanonicalUrl = canonicalUrl;
    if (!resolvedCanonicalUrl) {
      const baseUrl = 'https://trendy-outfits.netlify.app';
      const cleanPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
      resolvedCanonicalUrl = `${baseUrl}${cleanPath}`;
    }

    // Find or create the canonical link tag in head
    let linkTag = document.querySelector('link[rel="canonical"]');
    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.setAttribute('rel', 'canonical');
      document.head.appendChild(linkTag);
    }
    linkTag.setAttribute('href', resolvedCanonicalUrl);
  }, [canonicalUrl, location.pathname]);

  useEffect(() => {
    if (!jsonSchema) {
      // If no schema is passed, make sure any old schema script is cleared
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.remove();
      }
      return;
    }

    // Find or create the JSON-LD script tag
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonSchema);

    return () => {
      // Cleanup the script tag when the component unmounts or changes
      const currentScript = document.querySelector('script[type="application/ld+json"]');
      if (currentScript) {
        currentScript.remove();
      }
    };
  }, [jsonSchema]);

  return null;
}
