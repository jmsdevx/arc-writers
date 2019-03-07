import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head
      title="Arc Writer's Tool"
      description="Create engaging narratives using the 12
     Jungian Personality Archetypes.  API is located at arcapi.org."
    />
    <Nav />

    <div className="hero">
      <h1 className="title">Arc Writer's Tool</h1>
      <p className="description">
        Create engaging narratives using the 12 Jungian Personality Archetypes.
        API located at arcapi.org.
      </p>

      <div className="row">
        <Link href="/quiz">
          <a className="card">
            <h3>Take The Quiz</h3>
            <p>Which personality archetype are you?</p>
          </a>
        </Link>
        <Link href="/info">
          <a className="card">
            <h3>All The Types</h3>
            <p>Get information about the types.</p>
          </a>
        </Link>
        <Link href="/tool">
          <a className="card">
            <h3>Get Inspired</h3>
            <p>Use the tool to create a perfect story.</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
