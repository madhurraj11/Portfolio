import TextChange from "../TextChange";
import avatarImg from "../../assets/Madhur1.jpg";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        I am a passionate Web Developer and JavaScript enthusiast, dedicated to crafting innovative websites and applications that captivate and perform. 
        With a knack for learning and seamlessly applying new technologies, I strive to deliver cutting-edge solutions that meet modern digital demands.
        </p>
        <a href="mailto:madhurchauhan1100@gmail.com" target="_blank">
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </a>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
        <img src={avatarImg} alt="ProfilePhoto" className="rounded-full"/>
      </div>
    </div>
  );
};

export default Home;
