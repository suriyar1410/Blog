import React from "react";
import "../App.css";

function About() {
  return (
    <div className="blog-page">
    <div className="container my-5 ">
      <div className="about-card mb-4 p-4 shadow-sm">
        <h2 className="mb-3 text-center">About InfoFlare</h2>
        <p className="text-muted">
          InfoFlare brings you the latest news, insights, and articles from multiple categories including 
          <strong> Technology, Sports, Health, Politics, and Entertainment</strong>. Our goal is to keep you informed 
          and provide reliable, up-to-date content curated by expert writers.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="row mb-4">
        <div className="col-lg-6 mb-3">
          <div className="card p-4 shadow-sm h-100 ">
            <h4 className="text-center">Our Mission</h4>
            <p className="text-muted">
              To deliver accurate, engaging, and insightful content that empowers readers to stay informed about 
              the latest developments in their favorite categories.
            </p>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="card p-4 shadow-sm h-100">
            <h4 className="text-center">Our Vision</h4>
            <p className="text-muted">
              To become the most trusted digital platform for news and knowledge, connecting people with the information 
              they care about the most.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className=" p-4 mb-4 shadow-sm">
        <h4>Categories We Cover</h4>
        <ul className="text-muted">
          <li><strong>Technology:</strong> Software, hardware, AI, and emerging innovations.</li>
          <li><strong>Sports:</strong> Updates, match analysis, and athlete stories.</li>
          <li><strong>Health:</strong> Wellness, medical breakthroughs, mental health insights.</li>
          <li><strong>Politics:</strong> Global and local politics, policy updates.</li>
          <li><strong>Entertainment:</strong> Movies, music, celebrity news, and culture.</li>
        </ul>
      </div>
    </div>
      </div>
  );
}

export default About;
