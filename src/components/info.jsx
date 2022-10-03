import React, { useState } from "react";
import photo from "../assets/1663405359712.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <>
      <div className="info">
        <img src={photo} />
        <h2>Abdelrahman Youssef</h2>
        <h5>Front-End Web Developer</h5>
        <button>
          <FontAwesomeIcon icon={faEnvelope} className="fa" />
          Email
        </button>
        <button>
          {" "}
          <FontAwesomeIcon icon={faLinkedin} className="fa" />
          LinkedIN
        </button>
      </div>
    </>
  );
}
