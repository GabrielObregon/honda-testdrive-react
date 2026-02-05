import React from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#1a1a1a",
      color: "#fff",
      padding: "20px",
      marginTop: "40px",
      borderTop: "3px solid #E40521",
      textAlign: "center",
    }}
  >
    <p style={{ color: "#aaa", fontSize: "14px", margin: 0 }}>
      &copy; {new Date().getFullYear()} Honda Test Drive
    </p>
  </footer>
);

export default Footer;
