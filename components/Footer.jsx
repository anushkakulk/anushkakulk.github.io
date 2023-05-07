import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="flex bg-[#696D7D] justify-center items-center py-4">
        <RiCopyrightLine className="mr-2 text-white"/>
        <p className= 'text-white'>
          Copyright 2023 Anushka Kulkarni. Built with Next.js and
          Tailwind. Hosted on Github Pages.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
