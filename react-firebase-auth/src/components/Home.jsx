import React from 'react';
// import './App.css';

function Home() {
  return (
    <div className="App">
      <nav>
      </nav>
      <section className="hero">
        <div className="hero-container">
          <div className="column-left">
            <h1>GoldenYrs that brings a new way to live.</h1>
            <p>
              Don't leave your daily life up to chance. Our web serves as a virtual caregiver for seniors, providing comprehensive support to ensure their well-being and safety.
            </p>
            <a href="/learn-more" className="learn-more-button">Learn More</a>
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
