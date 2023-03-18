import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import {
  NavigationContainer,
  NavLinks,
  ParagraphContainer,
  Bars,
  SecNavLinks,
} from "./navigation.component.styles";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  return (
    <>
      <NavigationContainer>
        <a href="/">
          <Logo />
        </a>
        {showNavLinks ? (
          <Bars icon={faXmark} onClick={toggleNavLinks}></Bars>
        ) : (
          <Bars icon={faBars} onClick={toggleNavLinks}></Bars>
        )}

        <NavLinks>
          <li>Pricing</li>
          <li>Product</li>
          <li> About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </NavLinks>
        <ParagraphContainer>
          <p> Get Started</p>
        </ParagraphContainer>
      </NavigationContainer>
      {showNavLinks && (
        <SecNavLinks>
          <li>Pricing</li>
          <li>Product</li>
          <li> About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </SecNavLinks>
      )}
    </>
  );
};
export default Navigation;
