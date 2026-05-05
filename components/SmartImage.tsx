import Image, { ImageProps } from "next/image";
import { images, ImageKey } from "@/utils/picture";

type SmartImageProps = Omit<ImageProps, "src" | "alt"> & {
  name: ImageKey;
  alt?: string; // optional override
};

export function SmartImage({ name, alt, ...props }: SmartImageProps) {
  const img = images[name];

  return (
    <Image
      src={encodeURI(img.src)}
      alt={alt ?? img.alt}
      width={img.width}
      height={img.height}
      {...props}
    />
  );
}