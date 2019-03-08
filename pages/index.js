import React from "react";
import Link from "next/link";
import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <div className="hero">
      <h1 className="title">Arc Writer's Tool</h1>
      <p className="description">
        Create engaging narratives using the 12 Jungian Personality Archetypes.
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
            <p>Get information about archetypes.</p>
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
        color: #067df7;
        text-align: center;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 4rem;
        line-height: 1.15;
        font-size: 4rem;
      }

      .description {
        font-size: 1.3rem;
      }
      .row {
        max-width: 80rem;
        margin: 5rem auto 2.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 0.4rem;
        width: 20rem;
        text-align: center;
        text-decoration: none;
        font-size: 1rem;

        border: 1px solid #9b9b9b;
        border-radius: 9999rem;
        color: #067df7;
      }
      .card:hover {
        border-color: #067df7;
        background: #067df7;
        color: white;
        opacity: 0.8;
      }
    `}</style>
  </Layout>
);

export default Home;
