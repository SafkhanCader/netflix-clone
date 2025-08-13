import React from 'react'

export default function MovieCard({ title, image, rating, large }) {
  return (
    <article className={`card ${large ? 'card--large' : ''}`}>
      <div className="card__imageWrap">
        {image ? (
          <img
            className="card__image"
            src={image}
            alt={title}
            loading="lazy"
            draggable="false"
          />
        ) : (
          <div className="card__placeholder" aria-hidden="true">
            {title?.[0] ?? '•'}
          </div>
        )}
        <div className="card__overlay">
          <span className="card__rating" aria-label="Average rating">
            ★ {rating?.toFixed ? rating.toFixed(1) : '–'}
          </span>
          <button className="btn btn--tiny">Add to List</button>
        </div>
      </div>
      <h3 className="card__title">{title}</h3>
    </article>
  )
}
