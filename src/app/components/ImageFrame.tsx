import Image, { StaticImageData } from "next/image";
import './ImageFrame.scss';

type ImageFrameProps = {
  image: string | StaticImageData;
  imageAlt: string;
  children?: React.ReactNode;
};

export default function ImageFrame({
  image,
  imageAlt,
  children,
}: ImageFrameProps) {
  return (
    <div className="ImageFrame shadow-lg/30">
      <Image
        src={image}
        alt={imageAlt}
        className="mt-3 w-full"
        height={270}
        width={360}
      />
      <div className="p-3 text-white text-2xl font-light primaryColor min-h-[2.5em]">
        {children}
      </div>
    </div>
  );
}
