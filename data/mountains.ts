import type { ImageKey } from "@/utils/picture";

export type Mountain = {
  slug: string;
  name: string;
  imageKey: ImageKey;
  elevation: string;
  location: string;
  range: string;
  summary: string;
  description: readonly string[];
  facts: readonly {
    label: string;
    value: string;
  }[];
};

export const mountains = [
  {
    slug: "mount-everest",
    name: "Mount Everest",
    imageKey: "everest",
    elevation: "8,848.86 m",
    location: "Solukhumbu District, Nepal",
    range: "Mahalangur Himal",
    summary:
      "The highest mountain on Earth, known in Nepal as Sagarmatha and in Tibet as Chomolungma.",
    description: [
      "Mount Everest rises above the Khumbu region and is the best-known summit in the Himalaya. Its height, weather, and thin air make it one of the most demanding mountains in the world.",
      "The Nepal side of Everest is closely connected with Sherpa communities, high-altitude climbing history, and the dramatic landscape of Sagarmatha National Park.",
    ],
    facts: [
      { label: "Local name", value: "Sagarmatha" },
      { label: "First ascent", value: "1953" },
      { label: "Route area", value: "Khumbu" },
    ],
  },
  {
    slug: "kanchenjunga",
    name: "Kanchenjunga",
    imageKey: "kanchenjunga",
    elevation: "8,586 m",
    location: "Eastern Nepal and Sikkim border",
    range: "Kanchenjunga Himal",
    summary:
      "The world's third-highest mountain, treasured for its huge massif and remote eastern Himalayan landscape.",
    description: [
      "Kanchenjunga is one of the great mountains of the world and the highest summit in eastern Nepal. Its name is often translated as the five treasures of snow, referring to its group of major peaks.",
      "The region around Kanchenjunga is less crowded than Nepal's central trekking areas, with long approaches, rich biodiversity, and deep cultural importance.",
    ],
    facts: [
      { label: "World rank", value: "Third highest" },
      { label: "First ascent", value: "1955" },
      { label: "Name meaning", value: "Five treasures of snow" },
    ],
  },
  {
    slug: "lhotse",
    name: "Lhotse",
    imageKey: "lhotse",
    elevation: "8,516 m",
    location: "Solukhumbu District, Nepal",
    range: "Mahalangur Himal",
    summary:
      "A neighbor of Everest with one of the most dramatic south faces in the Himalaya.",
    description: [
      "Lhotse sits directly beside Everest and is connected to it by the South Col. Its name means south peak, because of its position relative to Everest.",
      "Although it is close to the world's highest mountain, Lhotse has its own identity, especially because of its steep south face and elegant summit line.",
    ],
    facts: [
      { label: "Meaning", value: "South peak" },
      { label: "First ascent", value: "1956" },
      { label: "Neighbor", value: "Mount Everest" },
    ],
  },
   {
    slug: "yalung-kang",
    name: "Yalung Kang",
    imageKey: "yalungKang",
    elevation: "8,505 m",
    location: "Taplejung District, Nepal",
    range: "Kanchenjunga Himal",
    summary:
      "Also called Kanchenjunga West, this high summit is part of the huge Kanchenjunga massif.",
    description: [
      "Yalung Kang is a major summit of the Kanchenjunga group and is often referred to as Kanchenjunga West. It stands in one of Nepal's most remote high mountain regions.",
      "Because it belongs to the larger Kanchenjunga massif, Yalung Kang shares the area's wild scale, long approaches, and powerful eastern Himalayan setting.",
    ],
    facts: [
      { label: "Also known as", value: "Kanchenjunga West" },
      { label: "Massif", value: "Kanchenjunga" },
      { label: "Region", value: "Eastern Nepal" },
    ],
  },
  {
    slug: "makalu",
    name: "Makalu",
    imageKey: "makalu",
    elevation: "8,485 m",
    location: "Sankhuwasabha District, Nepal",
    range: "Mahalangur Himal",
    summary:
      "A pyramid-shaped giant east of Everest, respected for its clean shape and difficult climbing.",
    description: [
      "Makalu is the fifth-highest mountain in the world and is famous for its beautiful pyramid form. It rises east of Everest in a quieter part of the Mahalangur Himal.",
      "The Makalu-Barun region includes high glaciers, deep river valleys, and rich ecosystems, making the mountain important beyond climbing alone.",
    ],
    facts: [
      { label: "World rank", value: "Fifth highest" },
      { label: "First ascent", value: "1955" },
      { label: "Protected area", value: "Makalu-Barun" },
    ],
  },
  {
    slug: "dhaulagiri",
    name: "Dhaulagiri",
    imageKey: "dhaulagiri",
    elevation: "8,167 m",
    location: "Gandaki Province, Nepal",
    range: "Dhaulagiri Himal",
    summary:
      "A massive white peak west of the Kali Gandaki Gorge, famous for its steep faces and isolated beauty.",
    description: [
      "Dhaulagiri means white mountain, a fitting name for its huge snow-covered walls. It dominates western Nepal and stands across the Kali Gandaki valley from Annapurna.",
      "The mountain is admired for its scale and seriousness. Its position gives trekkers and climbers wide views of some of Nepal's most dramatic high terrain.",
    ],
    facts: [
      { label: "Meaning", value: "White mountain" },
      { label: "First ascent", value: "1960" },
      { label: "Nearby valley", value: "Kali Gandaki" },
    ],
  },
  {
    slug: "manaslu",
    name: "Manaslu",
    imageKey: "manaslu",
    elevation: "8,163 m",
    location: "Gorkha District, Nepal",
    range: "Mansiri Himal",
    summary:
      "The mountain of the spirit, rising above remote valleys and classic high-pass trekking country.",
    description: [
      "Manaslu is the eighth-highest mountain in the world. Its name is commonly linked with the Sanskrit word for spirit or soul.",
      "The surrounding conservation area is known for Tibetan-influenced villages, forested valleys, glaciers, and the challenging Larkya La pass.",
    ],
    facts: [
      { label: "Meaning", value: "Mountain of the spirit" },
      { label: "First ascent", value: "1956" },
      { label: "Famous pass", value: "Larkya La" },
    ],
  },
  {
    slug: "annapurna",
    name: "Annapurna",
    imageKey: "annapurna",
    elevation: "8,091 m",
    location: "Gandaki Province, Nepal",
    range: "Annapurna Himal",
    summary:
      "A sacred and powerful Himalayan massif surrounded by some of Nepal's most loved trekking routes.",
    description: [
      "Annapurna is both a single 8,000-meter summit and the name of a broader mountain range. The region is known for deep valleys, terraced villages, forests, glaciers, and close mountain views.",
      "The Annapurna Circuit and Annapurna Sanctuary routes made this area one of Nepal's classic trekking destinations, while the main summit remains a serious climb.",
    ],
    facts: [
      { label: "First ascent", value: "1950" },
      { label: "Famous route", value: "Annapurna Circuit" },
      { label: "Meaning", value: "Goddess of nourishment" },
    ],
  },
  {
    slug: "himalchuli",
    name: "Himalchuli",
    imageKey: "himalchuli",
    elevation: "7,893 m",
    location: "Gorkha District, Nepal",
    range: "Mansiri Himal",
    summary:
      "A striking peak in the Manaslu region, known for its sharp profile and remote mountain setting.",
    description: [
      "Himalchuli stands south of Manaslu and forms part of the impressive Mansiri Himal. It is not as internationally famous as Everest or Annapurna, but it has a strong presence in central Nepal.",
      "The mountain's ridges and walls make it visually dramatic from nearby valleys, and its remote position gives it a quieter, more rugged character.",
    ],
    facts: [
      { label: "Region", value: "Manaslu area" },
      { label: "First ascent", value: "1960" },
      { label: "Character", value: "Remote and rugged" },
    ],
  },
  
  
  
 
] as const satisfies readonly Mountain[];

export function getMountainBySlug(slug: string) {
  return mountains.find((mountain) => mountain.slug === slug);
}
