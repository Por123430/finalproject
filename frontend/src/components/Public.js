import { Link } from "react-router-dom";
import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <main className="public_main">
        <Link to="/login">Login</Link>
      </main>
    </section>
  );
  return content;
};

export default Public;
