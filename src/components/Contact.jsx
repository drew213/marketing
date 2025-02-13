import React from "react";
import { InlineWidget } from "react-calendly";

const Contact = () => {
  return (
    <div className="container">
      <h1>Get in Touch</h1>
      <p>Book a free consultation with our experts.</p>
      <InlineWidget url="https://calendly.com/alvismoltzmedia/30min" />
    </div>
  );
};

export default Contact;
