import { Link } from "react-router-dom";
import "./navBarCssSection.css";

export default function NavBarSection() {
  return (
    <div className="navbar-centered">
      <div className="bg-maroon text-center py-2 shadow-sm">
        <nav className="d-inline-block">
          <Link to="/" className="nav-link-custom mx-3 fw-semibold text-decoration-none">Home</Link>
          <Link to="/packages" className="nav-link-custom mx-3 fw-semibold text-decoration-none">Packages</Link>
          <Link to="/events" className="nav-link-custom mx-3 fw-semibold text-decoration-none">Events</Link>
          <Link to="/branches" className="nav-link-custom mx-3 fw-semibold text-decoration-none">Branches</Link>
          <Link to="/success" className="nav-link-custom mx-3 fw-semibold text-decoration-none">Success Stories</Link>
          <Link to="/blog" className="nav-link-custom mx-3 fw-semibold text-decoration-none">Blog</Link>
          <Link to="/about" className="nav-link-custom mx-3 fw-semibold text-decoration-none">About Us</Link>
          <Link to="/contact" className="nav-link-custom mx-3 fw-semibold text-decoration-none">Contact Us</Link>
          <Link to="/help" className="nav-link-custom mx-3 fw-semibold d-inline-flex align-items-center">
           Help
          <button className="btn btn-light dropdown-toggle ms-1 transparent-btn"></button>
          </Link>

        </nav>
      </div>
    </div>
  );
}
