import React from "react";
import LinkList from "../../src/FooterLinks";
import "../../src/CSS/Footer.css";
import LinkComponent from "../Components/LinkComponent";

const Footer = () => {
  const socialLink = LinkList.map((link) => {
    return <LinkComponent key={link.id} image={link.image} />;
  });

  return (
    <div className="footer">
      <div classname="license-info">
        <h3>CA DRE# 01969175/ NMLS# 1632566</h3>
        <p>719 5th Street,</p>
        <p>Modesto, CA 95351</p>
      </div>
      <div className="link-box">{socialLink}</div>
    </div>
  );
};
export default Footer;
