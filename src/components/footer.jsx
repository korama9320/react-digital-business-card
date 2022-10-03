import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <FontAwesomeIcon icon={faTwitter} className="faa"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faFacebook} className="faa"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className="faa"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub} className="faa"></FontAwesomeIcon>
      </footer>
    </>
  );
}
