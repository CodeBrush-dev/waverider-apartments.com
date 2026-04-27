// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.waverider-apartments.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.waverider-apartments.com/","title_tag":"Encuentro Beach Apartments & Cabarete Rentals | Waverider Apartments","meta_description":"Waverider Apartments offers Encuentro Beach apartments and Cabarete rentals on the Dominican Republic’s North Coast, close to the beach and pool."},{"page_url":"https://www.waverider-apartments.com/apartment-2","title_tag":"Studio Apartment Dominican Republic Near Pool | Waverider Apartments","meta_description":"Ground-floor furnished studio apartment in the Dominican Republic with private covered patio near the swimming pool at Waverider Apartments, Playa Encuentro."},{"page_url":"https://www.waverider-apartments.com/apartment-4","title_tag":"One-Bedroom Apartment Cabarete with Patio | Waverider Apartments","meta_description":"Furnished one-bedroom apartment in Cabarete with kitchenette, dining area, covered patio, rooftop terrace access, and swimming pool at Waverider Apartments."},{"page_url":"https://www.waverider-apartments.com/apartment-5","title_tag":"One-Bedroom Apartment Cabarete Rental | Waverider Apartments","meta_description":"Cozy furnished one-bedroom Cabarete rental with covered patio at Waverider Apartments, Playa Encuentro on the Dominican Republic North Coast."},{"page_url":"https://www.waverider-apartments.com/apartment-6","title_tag":"One-Bedroom Apartment Cabarete Ocean View | Waverider Apartments","meta_description":"Furnished one-bedroom Cabarete apartment with ocean view and access to rooftop terrace and swimming pool at Waverider Apartments, Playa Encuentro."},{"page_url":"https://www.waverider-apartments.com/contact-email-and-phone","title_tag":"Contact Waverider Apartments Encuentro Beach Cabarete","meta_description":"Contact Waverider Apartments at Encuentro Beach, Cabarete for vacation rentals on the Dominican Republic North Coast by email, phone, or WhatsApp."},{"page_url":"https://www.waverider-apartments.com/location","title_tag":"Location Encuentro Beach Apartments North Coast | Waverider Apartments","meta_description":"Find Waverider Apartments at Playa Encuentro between Sosua and Cabarete on the Dominican Republic North Coast, across from Encuentro Plaza."},{"page_url":"https://www.waverider-apartments.com/photo-gallery","title_tag":"Encuentro Beach Apartments Photo Gallery | Waverider Apartments","meta_description":"View the Waverider Apartments photo gallery: pool, rooftop terrace, gardens, and nearby Encuentro Beach surf spots between Sosua and Cabarete."},{"page_url":"https://www.waverider-apartments.com/payment-options","title_tag":"Rental Rates Cabarete & Discounts | Waverider Apartments","meta_description":"See Cabarete rental rates, long-stay discounts, and payment options for Waverider Apartments at Playa Encuentro on the Dominican Republic North Coast."}],"keywords":["Waverider Apartments","Encuentro Beach Apartments","Cabarete Rentals","One-Bedroom Apartment Cabarete","Studio Apartment Dominican Republic","Vacation Rentals Cabarete","Beachfront Accommodation Dominican Republic","North Coast Apartments","Rental Rates Cabarete","Swimming Pool Apartments"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.waverider-apartments.com/#lodgingbusiness",
  "name": "Waverider Apartments",
  "url": "https://www.waverider-apartments.com/",
  "description": "Waverider Apartments is an apart-hotel near Encuentro Beach in Cabarete on the Dominican Republic North Coast, offering furnished studio and one-bedroom apartments with patios, pool access, and discounts for longer stays.",
  "telephone": "+1-809-885-7670",
  "image": [
    "https://static.wixstatic.com/media/ece34d_b5da49326594455f8a00025999d66411~mv2.jpg/v1/fill/w_785,h_477,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/result_img_2021_11_28_04_57_51.jpg",
    "https://static.wixstatic.com/media/ece34d_6977808718ef49c4bd6e2cc6907222f8%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/ece34d_6977808718ef49c4bd6e2cc6907222f8%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/ece34d_6977808718ef49c4bd6e2cc6907222f8%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/ece34d_6977808718ef49c4bd6e2cc6907222f8%7Emv2.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Calle Pablo Cohnen, Vista Del Caribe Community (Playa Encuentro)",
    "addressLocality": "Cabarete",
    "addressRegion": "Puerto Plata",
    "addressCountry": "DO"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Encuentro Beach - Cabarete, Dominican Republic North Coast"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "reservations",
      "telephone": "+1-809-885-7670",
      "availableLanguage": [
        "en"
      ]
    }
  ],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Swimming pool",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free street parking",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Rooftop terrace",
      "value": true
    }
  ],
  "employee": [
    {
      "@type": "Person",
      "name": "Ralph",
      "jobTitle": "Manager"
    },
    {
      "@type": "Person",
      "name": "Tina",
      "jobTitle": "Assistant Manager"
    }
  ],
  "containsPlace": [
    {
      "@type": "Apartment",
      "name": "Apartment #2 - Studio with Private Covered Patio",
      "url": "https://www.waverider-apartments.com/apartment-2",
      "description": "Furnished studio apartment on ground level near the pool with private covered patio."
    },
    {
      "@type": "Apartment",
      "name": "Apartment #4 - 1 BR / 1 BA, covered patio",
      "url": "https://www.waverider-apartments.com/apartment-4",
      "description": "Furnished one bedroom apartment with dining area, kitchenette, queen bed, bathroom, covered patio and access to rooftop terrace and swimming pool."
    },
    {
      "@type": "Apartment",
      "name": "Apartment #5 - 1 BR / 1 BA with covered patio",
      "url": "https://www.waverider-apartments.com/apartment-5",
      "description": "Furnished one bedroom apartment with covered patio."
    },
    {
      "@type": "Apartment",
      "name": "Apartment #6 - 1 BR / 1 BA Ocean View",
      "url": "https://www.waverider-apartments.com/apartment-6",
      "description": "Furnished one bedroom apartment with ocean view."
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Apartment Rental Rates & Discounts",
    "url": "https://www.waverider-apartments.com/payment-options",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Apartment #2 rental",
        "itemOffered": {
          "@type": "Apartment",
          "name": "Apartment #2 - Studio with Private Covered Patio"
        },
        "price": "35",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "unitCode": "DAY"
        }
      },
      {
        "@type": "Offer",
        "name": "Apartment #4 rental",
        "itemOffered": {
          "@type": "Apartment",
          "name": "Apartment #4 - 1 BR / 1 BA, covered patio"
        },
        "price": "30",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "unitCode": "DAY"
        }
      },
      {
        "@type": "Offer",
        "name": "Apartment #5 rental",
        "itemOffered": {
          "@type": "Apartment",
          "name": "Apartment #5 - 1 BR / 1 BA with covered patio"
        },
        "price": "30",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "unitCode": "DAY"
        }
      },
      {
        "@type": "Offer",
        "name": "Apartment #6 rental",
        "itemOffered": {
          "@type": "Apartment",
          "name": "Apartment #6 - 1 BR / 1 BA Ocean View"
        },
        "price": "35",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "unitCode": "DAY"
        }
      }
    ]
  },
  "petsAllowed": false,
  "smokingAllowed": false
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
