import React from "react";

const AboutCard = ({ title, description, points }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>

      {points && points.length > 0 && (
        <ul style={styles.list}>
          {points.map((point, index) => (
            <li key={index}> {point}</li>
          ))}
        </ul>
      )}

      <button styles={styles.button}>
        <a href="#contact">Book Now</a>
      </button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 3, 0.1)",
    textAlign: "left",
    width: "500px",
    margin: "10px",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#0077ff",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default AboutCard;
