import Image from "next/image";

function MountainImage({ src, alt, ...props }) {
  return (
    <Image src={src} alt={alt} width={1200} height={800} {...props} />
  );
}

const ANNAPURNA_CAPTION_SRC = "/mountain-images/annapurna/caption.jpg";
export function AnnapurnaCaptionPicture(props) {
  return (
    <MountainImage
      src={ANNAPURNA_CAPTION_SRC}
      alt="Annapurna range with prayer flags and a trekker in the foreground"
      {...props}
    />
  );
}

const DHAULAGIRI_DOWNLOAD_SRC = "/mountain-images/dhaulagiri/download.jpg";
export function DhaulagiriDownloadPicture(props) {
  return (
    <MountainImage
      src={DHAULAGIRI_DOWNLOAD_SRC}
      alt="Dhaulagiri massif in the Himalayas"
      {...props}
    />
  );
}

const HIMALCHULI_DOWNLOAD_SRC = "/mountain-images/himalchuli/download.jpg";
export function HimalchuliDownloadPicture(props) {
  return (
    <MountainImage
      src={HIMALCHULI_DOWNLOAD_SRC}
      alt="Himalchuli peak and surrounding high mountains"
      {...props}
    />
  );
}

const KANCHANJANGA_TREK_COST_SRC =
  "/mountain-images/kanchanjanga/Kanchenjunga-Trek-Cost-.jpg";
export function KanchanjangaKanchenjungaTrekCostPicture(props) {
  return (
    <MountainImage
      src={KANCHANJANGA_TREK_COST_SRC}
      alt="Kanchenjunga region mountain scenery"
      {...props}
    />
  );
}

const LHOSSE_LHOTSE_SRC = "/mountain-images/lhosse/Lhotse.webp";
export function LhosseLhotsePicture(props) {
  return (
    <MountainImage
      src={LHOSSE_LHOTSE_SRC}
      alt="Lhotse peak rising above the clouds"
      {...props}
    />
  );
}

const MAKALU_MT_SRC = "/mountain-images/makalu/mt-makalu.jpg";
export function MakaluMtMakaluPicture(props) {
  return (
    <MountainImage
      src={MAKALU_MT_SRC}
      alt="Mount Makalu and rugged Himalayan ridges"
      {...props}
    />
  );
}

const MOUNT_EVEREST_SRC = encodeURI(
  "/mountain-images/mount everest/Mount-Everest.webp",
);
export function MountEverestPicture(props) {
  return (
    <MountainImage
      src={MOUNT_EVEREST_SRC}
      alt="Mount Everest and the surrounding summit pyramid"
      {...props}
    />
  );
}

const YALUNG_KANG_DKL_SRC = encodeURI(
  "/mountain-images/yalung kang/DKL_FUNGLING_IMG_1752.jpg",
);
export function YalungKangDklFunglingImg1752Picture(props) {
  return (
    <MountainImage
      src={YALUNG_KANG_DKL_SRC}
      alt="Yalung Kang and high peaks along the ridge"
      {...props}
    />
  );
}