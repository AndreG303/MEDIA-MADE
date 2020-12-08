import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../app.css";
import { Link } from "react-router-dom";
import TvShowJumbotron from "../TvShowJumbotron/TvShowJumbotron";

function EmilyOutfitCard(props) {
  const emilyArray = props.showOutfits.filter((i) => {
    return i.category === "emily";
  });

  const emilyLength = emilyArray.map((imageEl) => 100 / emilyArray);

  const [emilyWidthState, setEmilyWidthState] = useState(emilyLength);

  const emilyiD = emilyArray.map((e) => e._id);


  

  return (
    <>
      <TvShowJumbotron>EMILY IN PARIS</TvShowJumbotron>
      {/* Emily in Paris */}
      <div
        style={{
          display: "flex",
          justifyContent: "inlineBlock",
          marginBottom: "20px",
        }}
      >
        {emilyWidthState.map((cardWidth, i) => (
          <Card
            key={"card-" + i}
            className="full-outfit"
            style={{ width: cardWidth + "%", transition: "width 1s" }}
            onMouseOver={() => {
              let min = 5;
              let variance = 100 - emilyWidthState.length * min;
              let nWidth = [];
              let maxValue = -3;
              emilyWidthState.forEach((width, x) => {
                nWidth.push(Math.abs(x - i));
                maxValue =
                  maxValue < Math.abs(x - i) ? Math.abs(x - i) : maxValue;
              });
              let sum = 0;
              nWidth = nWidth.map((nw, i) => {
                return maxValue - nw;
              });
              nWidth.forEach((nw) => (sum += nw));
              let scale = variance / sum;
              nWidth = nWidth.map((nw, i) => {
                return scale * nw + min;
              });
              setEmilyWidthState(nWidth);
            }}
          >
            <Link
              to={"/outfits/" + emilyiD[i]}
              onClick={
                (props.handleEmilyChangeOfPage &&
                  (() => props.handleEmilyChangeOfPage(emilyiD[i]))) ||
                (() => {})
              }
            >
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + emilyArray[i].outfitImage}
              />
            </Link>
          </Card>
        ))}
      </div>

     
    </>
  );
}

export default EmilyOutfitCard;
