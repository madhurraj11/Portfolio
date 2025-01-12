import ProjectCard from "./ProjectCard";
import snapgram from "../../assets/Snapgram.png";
import foodvilla from "../../assets/Foodvilla.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          image={snapgram}
          demoLink="https://snapgram-nu.vercel.app/"
          codeLink="https://github.com/madhurraj11/snapgram"
          title="Social Media Website - Snapgram"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          demoLink="https://foodvillarestaurant.netlify.app/"
          codeLink="https://github.com/madhurraj11/snapgram"
          image={foodvilla}
          title="FoodVilla Website"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        
      </div>
    </div>
  );
};

export default Projects;
