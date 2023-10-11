import { Link } from "react-router-dom";
import { useState } from "react";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(false);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/breweries">All Breweries</Link> |{" "}
        <Link to="/checkins"> All Checkins</Link> |{" "}
        {localStorage.jwt === undefined ? (
          <>
            <a href="/signup"> Signup |</a>
            <a href="/login"> Login </a>
          </>
        ) : (
          <LogoutLink />
        )}
      </nav>
    </header>
  );
}
