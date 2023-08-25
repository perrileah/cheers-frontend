import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/breweries">All Breweries</Link> |{" "}
        <Link to="/checkins"> All Checkins</Link>
      </nav>
    </header>
  );
}
