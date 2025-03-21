import { ChevronRight, Droplets } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">
          <Droplets className="text-primary" />
          <span>HydroSmart</span>
        </div>
        <div className="nav-links">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#specs" className="nav-link">
            Specs
          </a>
          <a href="#reviews" className="nav-link">
            Reviews
          </a>
        </div>
        <button className="btn btn-primary">
          Pre-order now <ChevronRight />
        </button>
      </nav>
    </header>
  );
};

export default Header;
