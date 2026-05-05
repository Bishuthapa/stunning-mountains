const path = "/mountain-images";
export const images = {
  everest: {
    src: `${path}/mount everest/img.webp`,
    alt: "Mount Everest and the surrounding summit pyramid",
    width: 1200,
    height: 800,
  },
  annapurna: {
    src: `${path}/annapurna/img.jpg`,
    alt: "Annapurna range with prayer flags",
    width: 1200,
    height: 800,
  },
  dhaulagiri: {
    src: `${path}/dhaulagiri/img.jpg`,
    alt: "Dhaulagir mountain",
    width: 1200,
    height: 800,
  },
  himalchuli: {
    src: `${path}/himalchuli/img.jpg`,
    alt: "Himalchuli",
    width: 1200,
    height: 800,
  },

  kanachanjanga: {
    src: `${path}/kanchanjanga/img.jpg`,
    alt: "Kanachanjanga",
    width: 1200,
    height: 800,
  },
  lhotse: {
    src: `${path}/Lhotse/img.webp`,
    alt: "Lhotse",
    width: 1200,
    height: 800,
  },
  makalu: {
    src: `${path}/makalu/img.jpg`,
    alt: "Makalu",
    width: 1200,
    height: 800,
  },
  manaslu: {
    src: `${path}/manaslu/img.gif`,
    alt: "Manaslu",
    width: 1200,
    height: 800,
  },

  yalungkhang : {
    src: `${path}/yalung-kang/img.jpg`,
    alt: "Yalung-Kang",
    width: 1200,
    height: 800,
  }

} as const;

export type ImageKey = keyof typeof images;