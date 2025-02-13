import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // ✅ Check existing cookie consent on load
  useEffect(() => {
    const consent = Cookies.get("cookie_consent");

    if (!consent) {
      setShowBanner(true);
    } else {
      setAnalytics(Cookies.get("analytics") === "true");
      setMarketing(Cookies.get("marketing") === "true");
    }
  }, []);

  // ✅ Accept All Cookies
  const handleAcceptAll = () => {
    Cookies.set("cookie_consent", "accepted", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });
    Cookies.set("analytics", "true", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });
    Cookies.set("marketing", "true", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });

    enableCalendlyCookies();
    setShowBanner(false);
    window.location.reload(); // ✅ Ensures services like Calendly reinitialize
  };

  // ✅ Save Preferences (Enable/Disable Specific Cookies)
  const handleSavePreferences = () => {
    Cookies.set("cookie_consent", "custom", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });
    Cookies.set("analytics", analytics ? "true" : "false", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });
    Cookies.set("marketing", marketing ? "true" : "false", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });

    if (!analytics && !marketing) {
      removeTrackingCookies();
    } else {
      enableCalendlyCookies();
    }

    setShowBanner(false);
    window.location.reload();
  };

  // ✅ Decline Cookies (Remove Tracking)
  const handleDecline = () => {
    Cookies.set("cookie_consent", "declined", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });

    removeTrackingCookies();
    setShowBanner(false);
    window.location.reload();
  };

  // ✅ Remove Tracking Cookies When Declined
  const removeTrackingCookies = () => {
    Cookies.remove("analytics");
    Cookies.remove("marketing");

    // ✅ Remove third-party tracking cookies from Calendly & others
    document.cookie =
      "__cf_bm=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.calendly.com";
    document.cookie =
      "__cfruid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.calendly.com";
    document.cookie =
      "_cfuvid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.calendly.com";
  };

  // ✅ Enable Third-Party Cookies for Calendly
  const enableCalendlyCookies = () => {
    Cookies.set("__cf_bm", "enabled", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });
    Cookies.set("__cfruid", "enabled", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });
    Cookies.set("_cfuvid", "enabled", {
      expires: 365,
      secure: true,
      sameSite: "None",
    });
  };

  if (!showBanner) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        We use cookies to enhance your experience. You can accept all, select
        preferences, or decline cookies. Read our{" "}
        <a href="/privacy-policy" style={styles.link}>
          Privacy Policy
        </a>
        .
      </p>
      <h5>
        <strong>Need Websites like this? </strong>
      </h5>
      <p>
        <strong>
          Contact A7A at a7a-business@gmail.com quoting Alvis & Moltz to get a
          discount
        </strong>{" "}
      </p>
      <div>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={analytics}
            onChange={() => setAnalytics(!analytics)}
          />
          Enable Analytics Cookies
        </label>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={marketing}
            onChange={() => setMarketing(!marketing)}
          />
          Enable Marketing Cookies
        </label>
        <button style={styles.acceptButton} onClick={handleAcceptAll}>
          Accept All
        </button>
        <button style={styles.saveButton} onClick={handleSavePreferences}>
          Save Preferences
        </button>
        <button style={styles.declineButton} onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
};

// ✅ Improved Styling
const styles = {
  banner: {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "360px",
    backgroundColor: "#222",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: "1000",
  },
  text: {
    fontSize: "14px",
    margin: "0 0 10px 0",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "underline",
  },
  checkboxLabel: {
    color: "#fff",
    display: "block",
    marginBottom: "5px",
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  },
  saveButton: {
    backgroundColor: "#FFA500",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  },
  declineButton: {
    backgroundColor: "#ff4444",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

export default CookieConsent;
