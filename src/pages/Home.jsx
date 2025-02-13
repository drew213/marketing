import React, { useState, useEffect } from "react";
import CookieConsent from "../components/CookieConsent";
import ThreeScene from "../components/ThreeScene";
import Services from "../components/Services";
import Contact from "../components/Contact";
import AboutCard from "../components/AboutCard";
import TestCard from "../components/TestCard";

const Home = () => {
  // Rotating Text Animation
  const textOptions = ["GROW", "IMPROVE", "ADVANCE", "CULTIVATE", "DEVELOP"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    
    

  const about = [
    {
      title: "🎯 Targeted Ads: Reaching the Right Audience with Precision",
      description:
        "In today's competitive digital landscape, reaching the right audience is key to maximizing marketing success. At A&A Media, we specialize in Targeted Ads, ensuring your brand connects with ideal customers based on location, interests, and behaviors.",
      points: [
        "📍 Location-Based Targeting – Deliver ads to users in specific cities, regions, or countries to maximize local engagement.",
        "🎯 Interest-Based Targeting – Connect with users based on their hobbies, preferences, and online behavior.",
        "📊 Behavioral Targeting – Analyze past interactions and engagement to reach potential customers who are most likely to convert.",
      ],
    },
    {
      title: "📝 Content That Converts: High-Impact Advertising Strategies",
      description:
        "Creating content is one thing, but making it convert is another. We specialize in crafting compelling ads and social media posts that drive real business results.",
      points: [
        "🖼️ Visually Stunning Ads – Professionally designed content that grabs attention.",
        "📝 Engaging Copywriting – Persuasive ad copy that encourages action.",
        "📈 A/B Testing – Optimized performance through data-driven adjustments.",
        "🚀 Call-To-Actions (CTAs) – Designed to increase conversions and engagement.",
      ],
    },
    {
      title:
        "⏳ Time-Saving: Focus on Your Business While We Handle the Marketing",
      description:
        "Running a business is time-consuming. Let us take the burden off your shoulders by managing your marketing campaigns while you focus on growing your company.",
      points: [
        "⚡ Automated Campaign Management – Reduce manual work with AI-driven strategies.",
        "📆 Scheduled Posting – Consistently deliver content to the right audience at the right time.",
        "📊 Performance Tracking – Real-time analytics and insights to monitor success.",
      ],
    },
    {
      title: "📊 Data-Driven Results: Maximize ROI with Advanced Analytics",
      description:
        "Data is at the heart of everything we do. We analyze campaign performance to ensure your marketing efforts are optimized for the best possible return on investment.",
      points: [
        "📉 Real-Time Data Analysis – Get live insights into campaign performance.",
        "📈 Conversion Rate Optimization – Identify and implement strategies that increase leads and sales.",
        "📊 Cost-Effective Ad Spending – Optimize budget allocation for maximum impact.",
        "📍 Market Insights – Leverage audience behavior and trends for smarter marketing decisions.",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <CookieConsent />
      <section id="home" className="container">
        <h1>Welcome to A&M Media</h1>
        <p>
          We <span className="highlight">{textOptions[currentTextIndex]}</span>{" "}
          your business with targeted social media marketin,
          <br />
          creating engaging content and ads that reach personalized
          <br />
          audiences to maximize sales and engagement.
        </p>

        {/* About Section (Improved) */}
        <h3>Why Choose Us</h3>
        <div style={styles.cardContainer}>
          {about.map((item, index) => (
            <AboutCard
              key={index}
              title={item.title}
              description={item.description}
              points={item.points}
            />
          ))}
        </div>

        <ThreeScene />
      </section>

      {/* Services Section */}
      <section id="services" className="container">
        <Services />
          </section>
          <TestCard />

      {/* Contact Section */}
      <section id="contact" className="container">
        <Contact />
      </section>
    </div>
  );
};

// Styles for card container
const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  },
};

export default Home;
