import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <a href="mailto:madhurchauhan1100@gmail.com" target="_blank">
          <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          madhurchauhan1100@gmail.com
        </li>
        </a>
        <a href="https://www.linkedin.com/in/madhurchauhan1121/" target="_blank">
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          https://www.linkedin.com/in/madhurchauhan1121/
        </li>
        </a>
        <a href="https://github.com/madhurraj11" target="_blank">
        <li className="flex gap-1 items-center">
          <FaGithub />
          https://github.com/madhurraj11
        </li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
