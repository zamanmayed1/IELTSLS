import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#081351] text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to={"/private-batch"} className="link link-hover">
          Private Batch
        </Link>
        <Link to={"/career-counsiling"} className="link link-hover">
          Career Counsiling
        </Link>
        <Link to={"/courses"} className="link link-hover">
          Courses
        </Link>
       
      </nav>
      <nav>
        <h6 className="footer-title">Important Links</h6>
        <Link to={"/about-us"} className="link link-hover">
          About us
        </Link>
        <Link to={"/skill-directory"} className="link link-hover">
        Skill Directory
        </Link>
        
        <Link to={"/"} className="link link-hover">
          Career
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to={"/"} className="link link-hover">
          Terms of use
        </Link>
        <Link to={"/"} className="link link-hover">
          Privacy policy
        </Link>
        <Link to={"/"} className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
