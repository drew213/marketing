import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} style={styles.image} />
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "250px",
    margin: "10px",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default ServiceCard;
