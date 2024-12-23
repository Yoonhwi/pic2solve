import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface MainDesCardProps {
  imgSrc: string | StaticImport;
  alt: string;
  size: number | `${number}` | undefined;
}

const MainImgCard = ({ imgSrc, alt, size }: MainDesCardProps) => {
  return (
    <div className="w-[420px] h-[600px] bg-background rounded-md p-4 shadow-md flex items-center justify-center">
      <Image
        src={imgSrc}
        alt={alt}
        width={size}
        height={size}
        className="rounded-md overflow-hidden"
      />
    </div>
  );
};

export default MainImgCard;
