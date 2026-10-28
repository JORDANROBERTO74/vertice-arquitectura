export type Project = {
  title: string;
  category: string;
  year: string;
  location: string;
  image: string;
  aspect: string;
};

export type Principle = {
  number: string;
  title: string;
  description: string;
};

export type JournalArticle = {
  title: string;
  date: string;
  category: string;
  readTime: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTagline: string;
  };
  navigation: {
    brand: string;
    links: {
      projects: string;
      studio: string;
      approach: string;
      journal: string;
      contact: string;
    };
    localeLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    coordinates: string;
    scrollHint: string;
    imageAlt: string;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    countLabel: string;
    items: Project[];
  };
  editorialBreak: {
    quote: string;
    author: string;
    title: string;
    location: string;
    imageAlt: string;
  };
  studioSection: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    stats: Array<{ value: string; label: string }>;
  };
  approachSection: {
    eyebrow: string;
    title: string;
    principles: Principle[];
  };
  journalSection: {
    eyebrow: string;
    title: string;
    viewAll: string;
    articles: JournalArticle[];
  };
  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    email: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    credits: string;
    backToTop: string;
  };
};

export const en: Dictionary = {
  meta: {
    title: "Vértice Arquitectura — Spatial Purity & Contemporary Form",
    description:
      "Vértice is an architectural studio dedicated to tectonic honesty, natural light, and elemental permanence.",
    ogTagline: "Tectonic purity and contemporary spatial architecture.",
  },
  navigation: {
    brand: "Vértice",
    links: {
      projects: "Projects",
      studio: "Studio",
      approach: "Approach",
      journal: "Journal",
      contact: "Contact",
    },
    localeLabel: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    subtitle: "Architectural Studio",
    titleLine1: "Form emerges",
    titleLine2: "from restraint",
    coordinates: "41.3874° N, 2.1686° E",
    scrollHint: "Scroll to explore",
    imageAlt: "Geometric concrete facade bathed in clean morning light",
  },
  projectsSection: {
    eyebrow: "Selected Work",
    title: "Projects",
    countLabel: "Projects",
    items: [
      {
        title: "Casa Umbral",
        category: "Residential",
        year: "2025",
        location: "Oslo, Norway",
        image: "/images/projects/project-01.jpg",
        aspect: "4/3",
      },
      {
        title: "Pabellón Sal",
        category: "Cultural",
        year: "2024",
        location: "Menorca, Spain",
        image: "/images/projects/project-02.jpg",
        aspect: "4/3",
      },
      {
        title: "Torre Alba",
        category: "Commercial",
        year: "2024",
        location: "Helsinki, Finland",
        image: "/images/projects/project-03.jpg",
        aspect: "4/3",
      },
      {
        title: "Centro Cultural Mareas",
        category: "Cultural",
        year: "2023",
        location: "Copenhagen, Denmark",
        image: "/images/projects/project-04.jpg",
        aspect: "4/3",
      },
    ],
  },
  editorialBreak: {
    quote: "Architecture is not merely about space, but about time arrested in physical matter.",
    author: "Juhani Pallasmaa",
    title: "Atelier Stone Pavilion",
    location: "Stockholm Archipelago",
    imageAlt: "Minimalist stone wall and raw architectural texture",
  },
  studioSection: {
    eyebrow: "About the Practice",
    title: "Rooted in silence, built for permanence.",
    paragraph1:
      "Founded in 2018, Vértice develops architectural solutions that strip away superficial ornament to celebrate authentic material weight, deliberate geometry, and the rhythm of daylight.",
    paragraph2:
      "From private residences carved into rugged coastal landscapes to civic pavilions in historic quarters, our work begins with listening to topography, atmosphere, and local material heritage.",
    stats: [
      { value: "24", label: "Completed Projects" },
      { value: "07", label: "International Awards" },
      { value: "05", label: "Countries Built" },
    ],
  },
  approachSection: {
    eyebrow: "Our Methodology",
    title: "Guiding Principles",
    principles: [
      {
        number: "01",
        title: "Material Honesty",
        description:
          "We specify stone, untreated timber, exposed aggregate, and steel in their natural expressions, letting time enhance their patina.",
      },
      {
        number: "02",
        title: "Light as Structure",
        description:
          "Openings and fissures are calibrated to map the sun’s trajectory across living surfaces, shaping volume through quiet shadows.",
      },
      {
        number: "03",
        title: "Contextual Resonance",
        description:
          "A building must not impose. It must listen to soil topography, thermal microclimates, and regional memory before making its mark.",
      },
    ],
  },
  journalSection: {
    eyebrow: "Writings & Research",
    title: "Journal",
    viewAll: "All articles",
    articles: [
      {
        title: "The Poetics of Concrete and Coastal Air",
        date: "October 2026",
        category: "Materiality",
        readTime: "6 min read",
      },
      {
        title: "In Praise of Shadows: Designing Low-Glance Intimacy",
        date: "July 2026",
        category: "Theory",
        readTime: "4 min read",
      },
      {
        title: "Thermal Inertia and Passive Cooling in the Mediterranean",
        date: "April 2026",
        category: "Practice",
        readTime: "8 min read",
      },
    ],
  },
  contactSection: {
    eyebrow: "Initiate Dialogue",
    title: "Let us build something quiet and lasting together.",
    description:
      "We accept a limited selection of residential, civic, and cultural commissions each year to ensure uncompromising focus.",
    emailLabel: "Inquiries",
    email: "estudio@vertice-arquitectura.example",
    addressLabel: "Main Studio",
    address: "Carrer de Balmes 148, Barcelona",
    phoneLabel: "Direct Line",
    phone: "+34 932 410 882",
  },
  footer: {
    tagline: "Architecture of quiet rigor and elemental clarity.",
    copyright: "© 2026 Vértice Arquitectura",
    credits: "Crafted with architectural precision.",
    backToTop: "Back to top",
  },
};
