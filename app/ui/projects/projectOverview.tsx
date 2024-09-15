import ProjectCard from "@/app/ui/projects/projectCard";

export default function ProjectOverview() {
  const cardData = [
    {
      imagePath: "/defaultProject/Schnappi_1.png",
      title: "Mountain Adventure",
      description: "Explore the breathtaking views of mountain peaks.",
    },
    {
      imagePath: "/defaultProject/Schnappi_2.png",
      title: "Beach Relaxation",
      description: "Unwind on the sunny shores of pristine beaches.",
    },
    {
      imagePath: "/defaultProject/Schnappi_3.png",
      title: "Urban Exploration",
      description: "Discover the vibrant culture of bustling cities.",
    },
    {
      imagePath: "/defaultProject/Schnappi_1.png",
      title: "Urban Exploration",
      description: "Discover the vibrant culture of bustling cities.",
    },
    {
      imagePath: "/defaultProject/Schnappi_1.png",
      title: "Scooby Dooby Doo",
      description:
        "Discover the vibrant culture of bustling cities. asdkfj eke hfjs adsf szadf sd fsdf ",
    },
    {
      imagePath: "/defaultProject/Schnappi_1.png",
      title: "Urban Exploration",
      description: "Discover the vibrant culture of bustling cities.",
    },
    {
      imagePath: "/defaultProject/Schnappi_1.png",
      title: "idk what",
      description: "Discover the vibrant .",
    },
  ];
  return (
    // <div className="p-4 min-h-screen">
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-evenly mb-8">Projects</h1>
      {/* Flexbox Layout */}
      <div className="flex flex-wrap justify-center gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="basis-80 max-w-sm">
            <ProjectCard
              imageUrl={card.imagePath}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
