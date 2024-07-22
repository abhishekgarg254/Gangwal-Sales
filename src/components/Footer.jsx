import React from "react";
import me from "../assets/logo.jpg";
import { AiOutlineArrowUp, AiFillMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder" />

        <h2>Gangwal Sales</h2>
        <p>Come and visit our store</p>
        <br />
        <p>Address:- B.N.49 ,Near New Delta Photocopy,Neemuch M.P 458441 </p>
        <p>Contact No - +91 9131342245 </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://api.whatsapp.com/send?phone=919893397478"
            target={"blank"}
          >
            <FaWhatsapp />
          </a>
          <a href="mailto:Jaind9109@gmail.com" target={"blank"}>
            <AiFillMail />
          </a>
          <a
            href="https://www.google.com/maps/place/24%C2%B027'34.0%22N+74%C2%B052'06.0%22E/@24.4594444,74.8657584,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.4594444!4d74.8683333?entry"
            target={"blank"}
          >
            <CiLocationOn />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
