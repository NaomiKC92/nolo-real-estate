import React from "react";
import LinkList from "../../src/FooterLinks";
import "../../src/CSS/Footer.css";
import LinkComponent from "../Components/LinkComponent";

const Footer = () => {
  const socialLink = LinkList.map((link) => {
    return <LinkComponent key={link.id} image={link.image} />;
  });

  return <div className="footer">{socialLink}</div>;
};
export default Footer;
