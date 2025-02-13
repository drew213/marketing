import React, { useState } from "react";
import logo from "../assets/LOGO.jpeg";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Company Logo" style={styles.image} />
      </div>

      {/* Navigation Menu */}
      <nav style={{ ...styles.nav }}>
        <ul style={styles.navList}>
          <li>
            <a href="#home" style={styles.navItem}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" style={styles.navItem}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" style={styles.navItem}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// ✅ Responsive Styles
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px ",
    backgroundColor: "#0077ff",
    color: "#fff",
    position: "fixed",

    width: "100%",
    height: "20px",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },

  image: {
    width: "80px",
    height: "50px",
  },

  nav: {
    display: "flex",
    justifyContent: "center",
  },

  navList: {
    display: "flex",
    listStyle: "none",
    padding: 20,
  },

  navItem: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
    padding: "10px",
    transition: "0.3s",
  },

  navItemHover: {
    textDecoration: "underline",
    color: "#ffcc00",
  },

  // Mobile Menu Styling
  "@media (max-width: 400px)": {
    nav: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "30%",
      height: "100vh",
      backgroundColor: "#0077ff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "-5px 0 10px rgba(0, 0, 0, 0.2)",
      transform: "translateX(100%)",
    },

    navList: {
      flexDirection: "column",
      gap: "15px",
    },

    navItem: {
      fontSize: "22px",
      fontWeight: "bold",
      padding: "10px",
      transition: "0.3s",
    },

    navItemHover: {
      color: "#ffcc00",
      textDecoration: "underline",
    },
  },
};

export default Header;
