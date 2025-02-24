import React from "react";

import './Home.css'

function Home() {
    return (
        <div className="home">
      <header className="home-header">
        <h1>Welcome to My E-commerce Site</h1>
      </header>
      <section className="home-products">
        <h2>Featured Products</h2>
        <div className="product-list">

          <div className="product-item">
            <img src="data:image/jpeg;base64,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caMxUDaOFBzj6El2jdPK+edw8JI8yOOgBO4Dc0aDoAXQTcit7A0DGEcWyMI73Fp9C1/oYvbyQ+fF7a5sM7jdxryYTOarnLbFZ5Od4RjX8Q5ufWK59aw2fvu0XdaG2qzvjL2hzNQ5jg4UIc0EGmh6wF036Gb28kPnxe2n6Gb28kPnxe2pzzmX0jDC49toDaPbW12y0MtcmBk7A1odE0tzY8uY4gk84E5O1yHBdVdPLfekQDZWwzAZYnNLX/5CAe5eT9DN7eSHz4vbT9DN7eSHz4vbWbR7r15brxlaWR+DgBFMUcVX9jnyEDuVfWm8y4uc4vc9xJLnHMk6lxJcXHrXZ/oZvbyQ+fF7a9N38iN5veBJgjZXNzntNBxDWEl3VUdamWxO1k8gQP8AZrjuM2X8mJWWorZe4YrFZo7LFXCwGpOr3ONXuPSSSVKqKCIigEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q==" alt="Product" />
            <h3>Product 3</h3>
            <p>$49.99</p>
            <button className="addToCart">Add To Cart</button>
          </div>

          <div className="product-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmQDY4QLuoG_rOgjVItNpXlsjfRXZViSMEw&s" alt="Product" />
            <h3>Product 3</h3>
            <p>$49.99</p>
            <button className="addToCart">Add To Cart</button>
          </div>

          <div className="product-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE89eFGnaNuTu6mxjnelKDpkb0x_3q1K1sQ&s" alt="Product" />
            <h3>Product 3</h3>
            <p>$49.99</p>
            <button className="addToCart">Add To Cart</button>
          </div>

          <div className="product-item">
            <img src="path_to_image" alt="Product" />
            <h3>Product 3</h3>
            <p>$49.99</p>
            <button className="addToCart">Add To Cart</button>
          </div>

          <div className="product-item">
            <img src="path_to_image" alt="Product" />
            <h3>Product 3</h3>
            <p>$49.99</p>
            <button className="addToCart">Add To Cart</button>
          </div>

          <div className="product-item">
            <img src="path_to_image" alt="Product" />
            <h3>Product 3</h3>
            <p>$49.99</p>
            <button className="addToCart">Add To Cart</button>
          </div>

        </div>
      </section>
    </div>
    );
}

export default Home;
