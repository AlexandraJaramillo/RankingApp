import { React, useState } from "react";

import { App, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card({ app }) {
  return (
    <>
      <App key={app.id}>
        <Link to={`/${app.id}`}>
          <Icon src={app.app_icon} alt="descr" />
        </Link>
        <TextContainer>
          <span>
            <b>{app.app_name}</b>
          </span>
          <span>{app.type}</span>
          <div className="star">
            <AiFillStar style={{ color: "#2670E0" }} />
            <span>
              <b>{app.rating.toString()}</b>
              {console.log(app.rating.valueOf())}
            </span>
          </div>
          <Rating
            name="half-rating-read"
            style={{ color: "#2370E0" }}
            defaultValue={parseFloat(app.rating)}
            precision={0.1}
            readOnly
          />
        </TextContainer>
      </App>
    </>
  );
}

export default Card;
