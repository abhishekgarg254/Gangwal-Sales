import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>About</h2>
      <p>
        Our wholesale shop offers an extensive range of high-quality products to
        meet the diverse needs of your business. From fresh produce and dry
        goods to household essentials and specialty items, we ensure you have
        access to everything you need under one roof. We understand the
        importance of cost-efficiency in running a business.Take advantage of
        our bulk ordering options to save even more. Whether you need large
        quantities of a single item or a variety of products, we can accommodate
        your needs, ensuring timely delivery and consistent stock availability.
        Quality is our top priority.
        <br />
        <br />
        We offer a wide range of products from numerous companies, including:
        <br />
        Waghbakri, Nivea, Mamaearth, Aqualogica, Derma, Bblunt, Lotus,
        BellaVita, Reckitt Benkiser, Malas Food, Yardley, Vicco, Scotch Brite,
        Godrej, RedBull, Boroline, Riya, St Louis, Laxmanrekhaa, Apis, Huggies,
        Mysore Sandal, Meghdoot, Duracel, Figaro, Oleev Active, Veeba, Drphenyl,
        Vega Comb, Snapin, Tikku, MyFitness, WonderFresh, Wafers, Bhandari
        Glycrine.
      </p>
    </div>
  );
};

export default Services;
