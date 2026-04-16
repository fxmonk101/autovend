import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object | object[];
}

export default function SEOHead({ title, description, keywords, canonical, ogImage, structuredData }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    if (ogImage) {
      setMeta("og:image", ogImage, true);
      setMeta("twitter:image", ogImage);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Structured data - support single or array
    const sdCleanup: string[] = [];
    if (structuredData) {
      const items = Array.isArray(structuredData) ? structuredData : [structuredData];
      items.forEach((sd, i) => {
        const id = `structured-data-${i}`;
        sdCleanup.push(id);
        let script = document.getElementById(id) as HTMLScriptElement;
        if (!script) {
          script = document.createElement("script");
          script.id = id;
          script.type = "application/ld+json";
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(sd);
      });
    }

    return () => {
      sdCleanup.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
      // Clean legacy single id
      const sd = document.getElementById("structured-data");
      if (sd) sd.remove();
    };
  }, [title, description, keywords, canonical, ogImage, structuredData]);

  return null;
}
