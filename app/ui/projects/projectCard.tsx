import Image from "next/image";

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  imageUrl = "/defaultProject/Schnappi_1.png",
  title = "Card Title",
  description = "This is a short description of the card content.",
}: CardProps) {
  return (
    <div className="group h-full flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl bg-custom-dark-gray transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex-grow px-4 py-3 sm:px-6 sm:py-4">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 text-gray-400 group-hover:text-primary transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}
