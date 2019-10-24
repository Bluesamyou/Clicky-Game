import React from "react";

function Card(props) {
  var styles = {
    card: {
      display: "inline-flex",
      backgroundSize: "cover",
      backgroundPosition: "50%",
      height: "170px",
      width: "170px",
      margin: "8px 25px",
      border: "5px solid #f1f1f1",
      borderRadius: "3px",
      boxShadow: "0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23)",
      cursor: "pointer"
    },
    container: {
      minHeight: "80%",
      justifyContent: "center",
      paddingTop: "50px",
      paddingBottom: "50px",
      width: "90%",
      margin: "0 auto"
    }
  };

  return (
    <div className="card-container" style={styles.container}>
      {props.cardImage.length > 0
        ? props.cardImage.map((image, index) => (
            <div
              style={{ ...styles.card, backgroundImage: `url(${image})` }}
              onClick={props.clickHandler}
            ></div>
          ))
        : null}
    </div>
  );
}
export default Card;
