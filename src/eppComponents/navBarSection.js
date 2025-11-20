import "./navBarCssSection.css";

export default function NavBarSection() {
  return (
    <div className="navbar-centered">
      <div className="bg-maroon text-center py-2 shadow-sm">
        <nav className="d-inline-block">
          <a href="#" className="nav-link-custom mx-3 fw-semibold">Home</a>
          <a href="#" className="nav-link-custom mx-3 fw-semibold">Packages</a>
          <a href="#" className="nav-link-custom mx-3 fw-semibold">Events</a>
          <a href="#" className="nav-link-custom mx-3 fw-semibold">Branches</a>
          <a href="#" className="nav-link-custom mx-3 fw-semibold">Success Stories</a>
          <a href="#" className="nav-link-custom mx-3 fw-semibold">Blog</a>
          <a href="#" className="nav-link-custom mx-3 fw-semibold">About Us</a>
          <a href="#" className="nav-link-custom mx-3 fw-semibold">Contact Us</a>
          <a href="#" className="nav-link-custom mx-3 fw-semibold d-inline-flex align-items-center">
            Help
            <button className="btn btn-light dropdown-toggle ms-1 transparent-btn"></button>
          </a>
        </nav>
      </div>
    </div>
  );
}
