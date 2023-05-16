import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="flex bg-[#696D7D] justify-center items-center py-4">
  <RiCopyrightLine className="hidden md:block mr-2 text-white"/>
  <p className= 'text-white flex text-center items-center'>
    Copyright 2023 Anushka Kulkarni. Built with Next.js and Tailwind. Hosted with Vercel.
  </p>
</div>

    </footer>
  );
};

export default Footer;
