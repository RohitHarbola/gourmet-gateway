export interface Brand {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  story: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const brands: Brand[] = [
  {
    slug: "barista",
    name: "Barista Coffee",
    category: "Cafe Chain",
    tagline: "India's Most Loved Coffee Experience",
    description:
      "Crafting moments over coffee, conversations and community.",
    heroImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000",
    story:
      "Barista has been a pioneer in India's café culture, offering premium coffee experiences and creating welcoming spaces for customers. Known for handcrafted beverages, warm hospitality and contemporary cafés, Barista continues to be a preferred destination for coffee lovers.",
    stats: [
      { value: "100+", label: "Locations" },
      { value: "20+", label: "Cities" },
      { value: "24+", label: "Years" },
      { value: "1M+", label: "Customers" },
    ],
  },

  {
    slug: "kylin",
    name: "Kylin",
    category: "Pan Asian Dining",
    tagline: "Contemporary Pan Asian Dining",
    description:
      "Inspired by authentic flavours, crafted for modern lifestyles.",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000",
    story:
      "Kylin delivers a refined Pan Asian dining experience, bringing together flavours from China, Thailand, Japan and Southeast Asia. Elegant interiors and innovative menus create memorable dining moments.",
    stats: [
      { value: "Pan Asian", label: "Cuisine" },
      { value: "Premium", label: "Dining" },
      { value: "Luxury", label: "Experience" },
      { value: "Award", label: "Winning" },
    ],
  },

  {
    slug: "wanchai",
    name: "Wanchai",
    category: "Asian QSR",
    tagline: "Asian Flavours On The Go",
    description:
      "Fresh, fast and flavourful.",
    heroImage:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000",
    story:
      "Wanchai offers modern Asian quick-service dining, combining speed, convenience and taste. The brand focuses on delivering authentic Asian-inspired dishes for contemporary consumers.",
    stats: [
      { value: "Fast", label: "Service" },
      { value: "Fresh", label: "Ingredients" },
      { value: "Asian", label: "Flavours" },
      { value: "Modern", label: "Dining" },
    ],
  },

  {
    slug: "drizzle-dust",
    name: "Drizzle & Dust",
    category: "Patisserie",
    tagline: "Artisanal Dessert Experiences",
    description:
      "Handcrafted pastries, cakes and indulgent creations.",
    heroImage:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2000",
    story:
      "Drizzle & Dust celebrates the art of baking, offering premium desserts and handcrafted pastries. Every creation combines quality ingredients, creativity and craftsmanship.",
    stats: [
      { value: "Premium", label: "Desserts" },
      { value: "Artisan", label: "Bakery" },
      { value: "Fresh", label: "Daily" },
      { value: "Luxury", label: "Treats" },
    ],
  },
];

export const getBrandBySlug = (slug: string) =>
  brands.find((brand) => brand.slug === slug);