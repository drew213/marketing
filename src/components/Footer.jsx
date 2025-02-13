import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.socialIcons}>
        <a
          href="https://www.facebook.com/profile.php?id=61560475528140"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          aria-label="Visit Our Facebook Page"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Falvisandmoltzmedia%2F&is_from_rle"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          aria-label="Visit Our Instagram Page"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/alvismoltz-media-35aa8834b"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          aria-label="Visit Our Linkedin Page"
        >
          <FaLinkedin />
        </a>
      </div>
      <p style={styles.text}>
        © {currentYear} Alvis & Moltz Media. All rights reserved.
      </p>
      <p style={styles.text}>
        Built by{" "}
        <a
          href="mailto:a7a-business@gmail.com"
          style={{ color: "#fff", textDecoration: "Underline" }}
        >
          A7A
        </a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
  icon: {
    color: "#fff",
    fontSize: "24px",
    margin: "0 10px",
    textDecoration: "none",
  },
  text: {
    fontSize: "14px",
    textAlign: "center",
  },
};

export default Footer;
