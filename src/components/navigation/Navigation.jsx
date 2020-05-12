import React from "react";
import "../../assets/scss/nav.scss";
import { search, bell, elipse } from "../../assets/images/menu";

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="brand">TransMonitor</div>
      <div className="search">
        <img src={search} />
        <input type="type" placeholder="search..." className="searcher" />
      </div>
      <a href="#" className="support">
        Support
      </a>
      <a href="#" className="faq">
        FAQ
      </a>
      <div className="notify">
        <img src={bell} />

        <span className="elipse">
          <img src={elipse} />
          <div className="title">8</div>
        </span>
      </div>
      <div className="profile">
        <div className="greeting">Hello</div>
        <div className="name">Oluwa John</div>
      </div>
    </div>
  );
};
