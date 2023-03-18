import React, { Fragment, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  Button,
  Copyright,
  FirstSection,
  Form,
  Icons,
  Link,
  Links,
  SecSection,
  SecSectionContainer,
} from "./footer.component.styles";
const Footer = () => {
  const socials = [
    {
      icon: faFacebookF,
      url: "https://www.facebook.com/saif.mohammed0",
      bg: "#1877f2",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/saif-mohammed-2a4ab31a6/",
      bg: "#0077b5",
    },
    {
      icon: faTwitter,
      url: "https://twitter.com/Saif_Mohammed0",
      bg: "#1da1f2",
    },
    { icon: faGithub, url: "https://github.com/Saif-Mohammed1", bg: "#333" },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/saifmo7ammed/",
      bg: "#f56040",
    },
  ];

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value === "") {
      setIsValid(null);
    } else {
      setIsValid(event.target.checkValidity());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(false);
    alert(`Thanks for signing up with ${email}!`);
    setEmail("");
  };

  return (
    <div style={{ color: "white" }}>
      <FirstSection>
        <h1> Simplify how your team works today.</h1>
        <Button> Get Started</Button>
      </FirstSection>
      <SecSection>
        <SecSectionContainer>
          <Logo />
          <Links>
            {socials.map(({ icon, url, bg }, index) => (
              <Fragment key={index}>
                <li style={{ padding: "0 5px" }}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Icons icon={icon} bg={bg} />
                  </a>
                </li>
              </Fragment>
            ))}
          </Links>
        </SecSectionContainer>
        <Link>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Community</li>
            <li> Privacy Policy</li>
          </ul>
        </Link>
        <Form>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Updates in your inbox…"
              value={email}
              onChange={handleChange}
              required
            />
            <button>Go</button>
            {isValid && <p style={{ color: "green" }}>Valid email</p>}
            {isValid === false && <p style={{ color: "red" }}>Invalid email</p>}
          </form>
          <Copyright> Copyright 2020. All Rights Reserved</Copyright>
        </Form>
      </SecSection>
    </div>
  );
};

export default Footer;
