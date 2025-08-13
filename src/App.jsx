import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';
import Row from './components/Row/Row.jsx';
import Footer from './components/Footer/Footer.jsx';
import { requests } from './lib/requests.js';
import Login from './login/login.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // This function will be called when login is successful
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <Navbar />
          <main>
            <Banner />
            <section className="rows">
              <Row title="Now Playing" fetchUrl={requests.nowPlaying} large />
              <Row title="Popular" fetchUrl={requests.popular} />
              <Row title="Top Rated" fetchUrl={requests.topRated} />
              <Row title="Upcoming" fetchUrl={requests.upcoming} />
            </section>
          </main>
          <Footer />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
