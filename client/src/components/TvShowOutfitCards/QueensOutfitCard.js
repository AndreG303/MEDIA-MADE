import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../app.css";
import { Link } from "react-router-dom";
import TvShowJumbotron from "../TvShowJumbotron/TvShowJumbotron";

function QueensOutfitCard(props) {

  const queensArray = props.showOutfits.filter((i) => {
    return i.category === "queens";
  });

  const queensLength = queensArray.map((imageEl) => 100 / queensArray);

  const [queenWidthState, setQueenWidthState] = useState(queensLength);

  const queensiD = queensArray.map((e) => e._id);

  

  return (
    <>

      {/* Queen's Gambit */}
      <TvShowJumbotron>QUEEN'S GAMBIT</TvShowJumbotron>
      <div
        style={{
          display: "flex",
          justifyContent: "inlineBlock",
          marginBottom: "20px",
        }}
      >
        {queenWidthState.map((cardWidth, i) => (
          <Card
            key={"card-" + i}
            className="full-outfit"
            style={{ width: cardWidth + "%", transition: "width 1s" }}
            onMouseOver={() => {
              let min = 5;
              let variance = 100 - queenWidthState.length * min;
              let nWidth = [];
              let maxValue = -3;
              queenWidthState.forEach((width, x) => {
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
              setQueenWidthState(nWidth);
            }}
          >
            <Link
              to={"/outfits/" + queensiD[i]}
              onClick={
                (props.handleQueensChangeOfPage &&
                  (() => props.handleQueensChangeOfPage(queensiD[i]))) ||
                (() => {})
              }
            >
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + queensArray[i].outfitImage}
              />
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}

export default QueensOutfitCard;
