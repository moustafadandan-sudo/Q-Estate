export type ProjectAmenity = {
  icon: string;
  title: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  developer: string;
  price: string;
  priceValue: number;
  type: string;
  propertyTypes: string[];
  handover: string;
  handoverYear: number;
  payment: string;
  downpayment: string;
  handoverPayment: string;
  image: string;
  featured: boolean;
  amenities: ProjectAmenity[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "skala-villas",
    name: "Skala Villas",
    location: "Qetaifan Island North",
    developer: "Ariane Real Estate",
    price: "4.8M QAR",
    priceValue: 4800000,
    type: "3 • 4 • 5 • 6 BHK",
    propertyTypes: ["Villa"],
    handover: "End of 2027",
    handoverYear: 2027,
    payment: "9 Years (End of 2034)",
    downpayment: "2%",
    handoverPayment: "30% Till Handover",
    image: "/images/projects/skala/cover.jpeg",
    featured: true,

    amenities: [
      { icon: "🏊", title: "Private Pool" },
      { icon: "🌊", title: "Beach Access" },
      { icon: "🏋️", title: "Fitness Center" },
      { icon: "🌴", title: "Landscaped Gardens" },
      { icon: "🛡️", title: "24/7 Security" },
      { icon: "🚗", title: "Private Parking" },
      { icon: "🧒", title: "Kids Play Area" },
      { icon: "🏠", title: "Smart Home" },
    ],

    gallery: [
      "/images/projects/skala/cover.jpeg",
      "/images/projects/skala/aerial.jpeg",
      "/images/projects/skala/beach.jpeg",
      "/images/projects/skala/bathroom.jpeg",
      "/images/projects/skala/bedroom.jpeg",
      "/images/projects/skala/kitchen.jpeg",
      "/images/projects/skala/hotel.jpeg",
      "/images/projects/skala/lobby.jpeg",
      "/images/projects/skala/villafront.jpeg",
      "/images/projects/skala/villafront2.jpeg",
      "/images/projects/skala/masterplan1.jpeg",
    ],
  },

  {
    slug: "city-avenue",
    name: "City Avenue",
    location: "Lusail",
    developer: "Ariane Real Estate",
    price: "1.1M QAR",
    priceValue: 1100000,
    type: "1 • 2 • 3 BHK",
    propertyTypes: ["Apartment"],
    handover: "July 2027",
    handoverYear: 2027,
    payment: "6 Years (Until End of 2032)",
    downpayment: "2%",
    handoverPayment: "25% Till Handover",
    image: "/images/projects/cityavenue/cover.jpeg",
    featured: true,

    amenities: [
      { icon: "🏊", title: "Swimming Pool" },
      { icon: "🏋️", title: "Fitness Center" },
      { icon: "🛡️", title: "24/7 Security" },
      { icon: "🚗", title: "Resident Parking" },
      { icon: "🛍️", title: "Mall Access" },
      { icon: "🌳", title: "Crescent Park Nearby" },
      { icon: "🏟️", title: "Stadium Location" },
      { icon: "🛎️", title: "Reception Services" },
    ],

    gallery: [
      "/images/projects/cityavenue/cover.jpeg",
      "/images/projects/cityavenue/abovemall.jpeg",
      "/images/projects/cityavenue/exterior1.jpeg",
      "/images/projects/cityavenue/exterior2.jpeg",
      "/images/projects/cityavenue/layout.jpeg",
      "/images/projects/cityavenue/livingroom.jpeg",
      "/images/projects/cityavenue/bedroom.jpeg",
      "/images/projects/cityavenue/wardrobe.jpeg",
      "/images/projects/cityavenue/pool.jpeg",
    ],
  },

  {
    slug: "marina-44",
    name: "Marina 44",
    location: "Lusail Marina",
    developer: "Ariane Real Estate",
    price: "1.2M QAR",
    priceValue: 1200000,
    type: "1 • 2 BHK",
    propertyTypes: ["Apartment"],
    handover: "End of 2028",
    handoverYear: 2028,
    payment: "7 Years (End of 2033)",
    downpayment: "2%",
    handoverPayment: "40% Till Handover",
    image: "/images/projects/marina44/cover.jpeg",
    featured: true,

    amenities: [
      { icon: "🏊", title: "Swimming Pool" },
      { icon: "🏋️", title: "Fitness Center" },
      { icon: "🌊", title: "Marina Views" },
      { icon: "🛡️", title: "24/7 Security" },
      { icon: "🚗", title: "Resident Parking" },
      { icon: "🛎️", title: "Reception Services" },
      { icon: "🧒", title: "Kids Play Area" },
      { icon: "☕", title: "Resident Lounge" },
    ],

    gallery: [
      "/images/projects/marina44/cover.jpeg",
      "/images/projects/marina44/building.jpeg",
      "/images/projects/marina44/buildingdetails.jpeg",
      "/images/projects/marina44/location.jpeg",
      "/images/projects/marina44/view.jpeg",
    ],
  },

  {
    slug: "milos",
    name: "Milos",
    location: "Al Qutaifiya",
    developer: "Ariane Real Estate",
    price: "1.65M QAR",
    priceValue: 1650000,
    type: "1 • 2 • 3 BHK",
    propertyTypes: ["Apartment"],
    handover: "End of 2027",
    handoverYear: 2027,
    payment: "7 Years (Until End of 2032)",
    downpayment: "2%",
    handoverPayment: "40% Till Handover",
    image: "/images/projects/milos/cover.jpeg",
    featured: true,

    amenities: [
      { icon: "🏊", title: "Swimming Pool" },
      { icon: "🏋️", title: "Fitness Center" },
      { icon: "🌴", title: "Landscaped Areas" },
      { icon: "🛡️", title: "24/7 Security" },
      { icon: "🚗", title: "Resident Parking" },
      { icon: "🧒", title: "Kids Play Area" },
      { icon: "☕", title: "Resident Lounge" },
      { icon: "🛎️", title: "Reception Services" },
    ],

    gallery: [
      "/images/projects/milos/cover.jpeg",
      "/images/projects/milos/cover2.jpeg",
      "/images/projects/milos/exterior.jpeg",
      "/images/projects/milos/exterior2.jpeg",
      "/images/projects/milos/exterior3.jpeg",
      "/images/projects/milos/bedroom.jpeg",
      "/images/projects/milos/gym.jpeg",
      "/images/projects/milos/kidplay.jpeg",
      "/images/projects/milos/multipurposehall.jpeg",
      "/images/projects/milos/nightmarket.jpeg",
      "/images/projects/milos/nightmarket2.jpeg",
      "/images/projects/milos/nightmarket3.jpeg",
      "/images/projects/milos/pool.jpeg",
      "/images/projects/milos/reception.jpeg",
      "/images/projects/milos/theater.jpeg",
      "/images/projects/milos/view1.jpeg",
      "/images/projects/milos/view2.jpeg",
      "/images/projects/milos/view3.jpeg",
      "/images/projects/milos/washroom.jpeg",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}