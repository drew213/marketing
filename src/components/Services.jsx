import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import branding from "../assets/branding.jpeg";
import socialMedia from "../assets/social-media.jpg";
import contentCreation from "../assets/content-creation.jpg";
import seo from "../assets/seo.jpg";


const Services = () => {
  const services = [
    { title: "Social Media Management", description: "Boost Your Online Presence", image: socialMedia },
    { title: "SEO & Digital Marketing", description: "Improve your website's visibility", image: seo },
    { title: "Branding and Strategy", description: "Develop a strong brand identity", image: branding },
    { title: "Content Creation", description: "Engaging content for your audience", image: contentCreation },
  ];


  return (
    <div style={styles.container}>
      <h1>Services we Offer</h1>
      <div style={styles.cardContainer}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f4f4f4",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  },
};

export default Services;
