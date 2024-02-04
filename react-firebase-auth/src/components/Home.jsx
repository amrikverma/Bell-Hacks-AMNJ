import React from 'react';
// import './App.css';

function Home() {
  return (
    <div className="App">
      <nav>
        <div className="logo">GoldenYrs</div>
        <div id="nav-items">
          <div className="sub2"><a href="Home.html">Home</a></div>
          <div className="sub4"><a href="About.html">About</a></div>
          <div className="sub5"><a href="Contact.html">Contact</a></div>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-container">
          <div className="column-left">
            <h1>GoldenYrs that brings a new way to live.</h1>
            <p>
              Don't leave your daily life up to chance. Our web serves as a virtual caregiver for seniors, providing comprehensive support to ensure their well-being and safety.
            </p>
            <button>Learn More</button>
          </div>
          <div className="column-right">
            <img src="https://www.fellowshipsquareseniorliving.org/media/2670/adobestock_111750524.jpeg" alt="Golden Years Image" className="hero-image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
