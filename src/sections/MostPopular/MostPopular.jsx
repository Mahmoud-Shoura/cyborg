import React from "react";
import "./Mostpopular.css";

import popular_01 from "../../assets/images/popular-01.jpg";
import popular_02 from "../../assets/images/popular-02.jpg";
import popular_03 from "../../assets/images/popular-03.jpg";
import popular_04 from "../../assets/images/popular-04.jpg";
import popular_05 from "../../assets/images/popular-05.jpg";
import popular_06 from "../../assets/images/popular-06.jpg";
import popular_07 from "../../assets/images/popular-07.jpg";
import popular_08 from "../../assets/images/popular-08.jpg";

import { Card } from "../../components/index";

const MostPopular = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="section-header">
          <h4>Most Popular</h4>
        </div>
        <div className="most-popular-items">
          <Card
            image={popular_01}
            title="Fortnite"
            category="Sandbox"
            rate="3.8"
            download="2.3M"
          />
          <Card
            image={popular_02}
            title="Pubg"
            category="Stream-X"
            rate="4.8"
            download="1.1M"
          />
          <Card
            image={popular_03}
            title="Dota2"
            category="Legendary"
            rate="2.7"
            download="5.3M"
          />
          <Card
            image={popular_04}
            title="CS-Go"
            category="Battle S"
            rate="3.9"
            download="6.1M"
          />
          <Card
            image={popular_05}
            title="MinCraft"
            category="Legendary"
            rate="3.9"
            download="29.3M"
          />
          <Card
            image={popular_06}
            title="Eagles Fly"
            category="Matrix"
            rate="2.6"
            download="10.1M"
          />
          <Card
            image={popular_07}
            title="Dota3"
            category="Legendary"
            rate="2.5"
            download="7.3M"
          />
          <Card
            image={popular_08}
            title="Pubg Lite"
            category="Battle S"
            rate="3.5"
            download="5.1M"
          />
        </div>
      </div>
    </>
  );
};

export default MostPopular;
