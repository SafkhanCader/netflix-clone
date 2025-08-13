import React, { useEffect, useRef, useState } from 'react';
import './Row.css';
import MovieCard from '../Movie/MovieCard.jsx';
import { IMG_W500, TMDB_OPTIONS } from '../../lib/requests.js';

export default function Row({ title, fetchUrl }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const scrollerRef = useRef(null);

  useEffect(() => {
    let active = true;

    const loadMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(fetchUrl, TMDB_OPTIONS);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!active) return;
        setItems(Array.isArray(data?.results) ? data.results : []);
      } catch (e) {
        setError('Failed to load movies');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
    return () => {
      active = false;
    };
  }, [fetchUrl]);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * (dir === 'left' ? -1 : 1);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="row" aria-label={title}>
      <div className="row__header">
        <h2 className="row__title">{title}</h2>
        <div className="row__controls">
          <button className="carousel-btn" onClick={() => scrollBy('left')}>
            ‹
          </button>
          <button className="carousel-btn" onClick={() => scrollBy('right')}>
            ›
          </button>
        </div>
      </div>

      <div className="row__scroller" ref={scrollerRef}>
        {loading && <div className="row__status">Loading…</div>}
        {error && <div className="row__status row__status--error">{error}</div>}
        {!loading && !error && items.length === 0 && (
          <div className="row__status">No results.</div>
        )}
        {!loading &&
          !error &&
          items.map((m) => {
            const poster = m.poster_path ? `${IMG_W500}${m.poster_path}` : '';
            return (
              <MovieCard
                key={m.id}
                title={m.title || m.name || 'Untitled'}
                image={poster}
              />
            );
          })}
      </div>
    </section>
  );
}
