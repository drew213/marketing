import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Jane Smith",
    text: "Fantastic service and quality. Will buy again!",
  },
  {
    name: "Frank P",
    text: "Alvis and Moltz Media has done an incredible job advertising for my business, bringing in more customers than I ever expected. Henry and Isaac are hardworking, creative, and incredibly sharp—they truly understand how to make marketing work for my business and I’m sure they could do the same for any company no matter their needs.",
  },
  {
    name: "Sam Wilson",
    text: "Exceeded my expectations in every way.",
  },
];

const TestCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          style={{
            ...styles.card,
            opacity: index === currentIndex ? 1 : 0.5,
            transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
          }}
        >
          <p style={styles.text}>"{testimonial.text}"</p>
          <p style={styles.name}>- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

// ✅ Improved Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },

  card: {
    width: "50%",
    maxWidth: "400px",
    backgroundColor: "#FFFFF",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 12px 22px rgba(1, 1, 0.8, 0.1)",
    textAlign: "center",
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  },

  text: {
    fontSize: "12px",
      fontStyle: "italic",
    fontWeight: "bold",
    color: "#333",
    lineHeight: "1.2",
  },

  name: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#0077ff",
  },
};

export default TestCard;
