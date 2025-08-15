import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f4f8, #e0ecf4)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "40px",
          maxWidth: "800px",
          width: "100%",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            height: "120px",
            marginBottom: "20px",
            animation: "spin 20s linear infinite",
          }}
        />

        <h1 style={{ marginBottom: "10px", color: "#333" }}>
          Welcome to My React Learning Repo!
        </h1>

        <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
          Hi, I’m <strong>Kailash Gayari</strong>. This repository is a
          collection of projects and examples I’ve created to learn and
          understand React concepts deeply.
        </p>

        <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
          Each folder/module covers different React features — from functional
          components to hooks, context API, routing, and more.
        </p>

        <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
          Feel free to explore and learn along with me!
        </p>

        <a
          href="https://github.com/kailash-dev/react-learning"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "20px 0",
            textDecoration: "none",
            fontWeight: "bold",
            color: "#0d6efd",
          }}
        >
          📂 Visit the GitHub Repo
        </a>

        <br />

        <button
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            background: "linear-gradient(90deg, #4facfe, #00f2fe)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onClick={() => navigate("/concepts")}
          onMouseOver={(e: any) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e: any) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          🚀 Explore Concepts
        </button>
      </div>
    </div>
  );
}
