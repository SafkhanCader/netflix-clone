import React, { useRef } from 'react';
import './Banner.css';

// Assets
import backgroundImage from '../../assets/hero_banner.jpg';
import bannerTitleImage from '../../assets/hero_title.png';
import playIcon from '../../assets/play_icon.png';
import infoIcon from '../../assets/info_icon.png';

// Popular Section Images (14 cards)
import card1 from '../../assets/cards/card1.jpg';
import card2 from '../../assets/cards/card2.jpg';
import card3 from '../../assets/cards/card3.jpg';
import card4 from '../../assets/cards/card4.jpg';
import card5 from '../../assets/cards/card5.jpg';
import card6 from '../../assets/cards/card6.jpg';
import card7 from '../../assets/cards/card7.jpg';
import card8 from '../../assets/cards/card8.jpg';
import card9 from '../../assets/cards/card9.jpg';
import card10 from '../../assets/cards/card10.jpg';
import card11 from '../../assets/cards/card11.jpg';
import card12 from '../../assets/cards/card12.jpg';
import card13 from '../../assets/cards/card13.jpg';
import card14 from '../../assets/cards/card14.jpg';

export default function Banner() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth / 1.5, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth / 1.5, behavior: 'smooth' });
    }
  };

  const popularCards = [
    card1, card2, card3, card4, card5, card6, card7,
    card8, card9, card10, card11, card12, card13, card14
  ];

  return (
    <>
      {/* Banner Section */}
      <section
        className="banner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        aria-label="Featured title"
      >
        <div className="banner__overlay">
          <div className="banner__content">
            {/* Title PNG */}
            <img
              src={bannerTitleImage}
              alt="Banner Title"
              className="banner__title-img"
            />

            <p className="banner__desc">
              Watch something incredible today. Enjoy the latest hits and
              exclusive shows only on Netflix Clone.
            </p>

            <div className="banner__actions">
              <button className="btn btn--primary">
                <img src={playIcon} alt="Play" className="btn-icon-img" /> Play
              </button>
              <button className="btn btn--ghost">
                <img src={infoIcon} alt="More Info" className="btn-icon-img" /> More Info
              </button>
            </div>

            {/* Popular on Netflix */}
            <div className="popular">
              <h2 className="popular__title">Popular on Netflix</h2>
              <div className="popular__wrapper">
                <button className="popular__arrow left" onClick={scrollLeft}>
                  &#8249;
                </button>
                <div className="popular__row" ref={scrollRef}>
                  {popularCards.map((img, index) => (
                    <div className="popular__card" key={index}>
                      <div className="popular__number">{index + 1}</div>
                      <img src={img} alt={`Popular ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <button className="popular__arrow right" onClick={scrollRight}>
                  &#8250;
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="banner__fade" />
      </section>
    </>
  );
}
