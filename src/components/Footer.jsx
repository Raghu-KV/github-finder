import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer footer-center p-4 text-base-content bg-neutral">
      <div>
        <FaGithub className="text-2xl" />
        <p className="text-xl">Github Finder</p>
      </div>
    </footer>
  );
}

export default Footer;
