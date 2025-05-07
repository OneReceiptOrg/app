import { Template } from "./types";

export const templates: Record<string, Template> = {
  gucci: {
    id: "gucci",
    name: "Gucci",
    description: "Premium luxury fashion documents",
    logoUrl: "/receipts-previews/logos/gucci.png",
    previewImageUrl: "/receipts-previews/gucci.png",
    receipts: [
      {
        id: "gucci",
        name: "Gucci London",
        selector: "#receipt3",
        assetsInline: true,
        filename: "gucci.html",
      },
      {
        id: "gucci_nyc",
        name: "Gucci NYC",
        selector: "#capture_here:gucci_nyc",
        // selector: "#pf1",
        // selector: ".c.x1.y1.w2.h2",
        // selector: ".pc.pc1.w0.h0.opened",
        assetsInline: false,
        filename: "gucci_nyc.html",
      },
    ],
    invoices: [
      {
        id: "gucci",
        name: "Gucci",
        selector: "#pf1",
        assetsInline: false,
        filename: "gucci.html",
      },
    ],
  },
  farfetch: {
    id: "farfetch",
    name: "Farfetch",
    description: "Luxury fashion and retail documents",
    logoUrl: "/receipts-previews/logos/farfetch.png",
    previewImageUrl: "/invoice-previews/farfetch.png",
    receipts: [],
    invoices: [
      {
        id: "farfetch",
        name: "Farfetch",
        selector: "#page-container",
        assetsInline: false,
        filename: "farfetch.html",
      },
    ],
  },
  sephora: {
    id: "sephora",
    name: "Sephora",
    description: "Beauty and cosmetics documents",
    logoUrl: "/receipts-previews/logos/sephora.png",
    previewImageUrl: "/receipts-previews/sephora.png",
    receipts: [
      {
        id: "sephora",
        name: "Sephora",
        selector: "#receipt3",
        assetsInline: true,
        filename: "sephora.html",
      },
    ],
    invoices: [],
  },
  lv: {
    id: "lv",
    name: "Louis Vuitton",
    description: "Luxury fashion and accessories documents",
    logoUrl: "/receipts-previews/logos/lv.png",
    previewImageUrl: "/receipts-previews/lv.png",
    receipts: [
      {
        id: "lv",
        name: "Louis Vuitton",
        filename: "lv_1.html",
        selector: ".pc.pc1.w0.h0.opened",
        assetsInline: false,
      },
    ],
    invoices: [],
  },
  balenciaga: {
    id: "balenciaga",
    name: "Balenciaga",
    description: "Luxury fashion and accessories documents",
    logoUrl: "/receipts-previews/logos/balenciaga.png",
    previewImageUrl: "/receipts-previews/balenciaga.png",
    receipts: [
      {
        id: "balenciaga",
        name: "Balenciaga",
        filename: "balenciaga.html",
        selector: "#receipt3",
      },
    ],
    invoices: [],
  },
  samsung: {
    id: "samsung",
    name: "Samsung",
    description: "Premium electronics and mobile device documents",
    logoUrl: "/receipts-previews/logos/samsung.png",
    previewImageUrl: "/receipts-previews/samsung.png",
    receipts: [
      {
        id: "samsung",
        name: "Samsung",
        filename: "samsung.html",
        selector: "#receipt3",
      },
    ],
    invoices: [],
  },
  adidas: {
    id: "adidas",
    name: "Adidas",
    description: "Sportswear and athletic footwear documents",
    logoUrl: "/receipts-previews/logos/adidas.png",
    previewImageUrl: "/receipts-previews/adidas.png",
    receipts: [
      {
        id: "adidas",
        name: "Adidas",
        filename: "adidas.html",
        selector: "#receipt3",
      },
    ],
    invoices: [],
  },
  apple: {
    id: "apple",
    name: "Apple",
    description: "Electronics and accessories documents",
    logoUrl: "/receipts-previews/logos/apple.png",
    previewImageUrl: "/receipts-previews/apple.png",
    receipts: [
      {
        id: "apple",
        name: "Apple",
        selector: ".global_container_",
        filename: "apple.html",
      },
    ],
    invoices: [
      {
        id: "apple",
        name: "Apple",
        selector: "#capture_here",
        filename: "apple.html",
      },
    ],
  },
  dyson: {
    id: "dyson",
    name: "Dyson",
    description: "Premium vacuum and appliance documents",
    logoUrl: "/receipts-previews/logos/dyson.png",
    previewImageUrl: "/receipts-previews/dyson.png",
    receipts: [
      {
        id: "dyson",
        name: "Dyson",

        selector: "#receipt3",
        filename: "dyson.html",
      },
    ],
    invoices: [],
  },
  flight_club: {
    id: "flight_club",
    name: "Flight Club",
    description: "Premium sneaker and streetwear documents",
    logoUrl: "/receipts-previews/logos/flight_club.png",
    previewImageUrl: "/receipts-previews/flight_club.png",
    receipts: [
      {
        id: "flight_club",
        name: "Flight Club",
        selector: ".global_container_",
        filename: "flight_club.html",
      },
    ],
    invoices: [],
  },
  flannels: {
    id: "flannels",
    name: "Flannels",
    description: "High-end fashion and retail documents",
    logoUrl: "/receipts-previews/logos/flannels.png",
    previewImageUrl: "/receipts-previews/flannels.png",
    receipts: [
      {
        id: "flannels",
        name: "Flannels",
        selector: "#receipt3",
        filename: "flannels.html",
      },
    ],
    invoices: [],
  },
  stussy: {
    id: "stussy",
    name: "Stüssy",
    description: "Streetwear fashion documents",
    logoUrl: "/receipts-previews/logos/stussy.png",
    previewImageUrl: "/receipts-previews/stussy.png",
    receipts: [
      {
        id: "stussy",
        name: "Stüssy",
        selector: "#receipt3",
        filename: "stussy.html",
      },
    ],
    invoices: [],
  },
  foot_locker: {
    id: "foot_locker",
    name: "Foot Locker",
    description: "Athletic footwear and apparel documents",
    logoUrl: "/receipts-previews/logos/foot_locker.png",
    previewImageUrl: "/receipts-previews/foot_locker.png",
    receipts: [
      {
        id: "foot_locker",
        name: "Foot Locker",
        selector: "#receipt3",
        filename: "foot_locker.html",
      },
    ],
    invoices: [],
  },
  three_uk: {
    id: "three_uk",
    name: "Three UK",
    description: "Telecommunications and mobile services documents",
    logoUrl: "/receipts-previews/logos/three_uk.png",
    previewImageUrl: "/receipts-previews/three_uk.png",
    receipts: [
      {
        id: "three_uk",
        name: "Three UK",
        selector: "#receipt3",
        filename: "three_uk.html",
      },
    ],
    invoices: [],
  },
  goyard: {
    id: "goyard",
    name: "Goyard",
    description: "Luxury fashion and accessories documents",
    logoUrl: "/receipts-previews/logos/goyard.png",
    previewImageUrl: "/receipts-previews/goyard.png",
    receipts: [
      {
        id: "goyard",
        name: "Goyard",
        selector: ".l-constrained",
        filename: "goyard.html",
      },
    ],
    invoices: [],
  },
  cpcompany: {
    id: "cpcompany",
    name: "C.P. Company",
    description: "Technical sportswear and innovative garment dyeing documents",
    logoUrl: "/invoice-previews/logo/cp.png",
    previewImageUrl: "/invoice-previews/cp.png",
    receipts: [],
    invoices: [
      {
        id: "cpcompany",
        name: "C.P. Company",
        selector: "body",
        filename: "cpcompany.html",
      },
    ],
  },
  saint_laurent: {
    id: "saint_laurent",
    name: "Saint Laurent",
    description: "Luxury fashion and accessories documents",
    logoUrl: "/receipts-previews/logos/saint_laurent.png",
    previewImageUrl: "/invoice-previews/saint_laurent.png",
    receipts: [],
    invoices: [
      {
        id: "saint_laurent",
        name: "Saint Laurent",
        selector: "body",
        filename: "saint_laurent.html",
      },
    ],
  },
};

