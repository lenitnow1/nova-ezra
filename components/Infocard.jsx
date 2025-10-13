
import React from 'react';

// Tailwind-based Info Card (no external styled-components dependency)
// Props:
// - label: small prefix text before date (e.g., "Article on")
// - date: secondary small text on the right of the header
// - title: main heading text
// - categories: array of strings
// - footer: footer text (e.g., author)
// - className: extra classes for outer wrapper
const Card = ({
  label = '',
  date = '',
  title = '',
  description = '',
  categories = [],
  footer = '',
  className = ''
}) => {
  return (
    <div
      className={[
        'w-full max-w-sm h-full',
        'text-white',
        'p-5 rounded-lg',
          'relative',
        // Gradient border trick using CSS custom background
        '[background:linear-gradient(#212121,#212121)_padding-box,linear-gradient(145deg,transparent_35%,#0000FF,#40c9ff)_border-box] border border-transparent',
        'flex flex-col',
        'cursor-pointer origin-bottom-right',
        'transition duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-10',
        'bg-[#212121]',
        className,
      ].join(' ')}
      data-anim="card"
    >
      <div className="flex-1">
        {(label || date) && (
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-white/50 mr-1">{label}</span>
            <span className="text-white/70">{date}</span>
          </div>
        )}

        {title && (
          <p className="text-2xl mt-6 mb-2 font-semibold leading-snug">{title}</p>
        )}

        {description && (
          <p className="text-white/70 mb-4">{description}</p>
        )}

        {Array.isArray(categories) && categories.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="bg-[#0000FF] text-black/90 px-2 py-1 font-semibold uppercase text-[12px] rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {footer && (
        <div className="font-semibold text-white/60 mt-2">{footer}</div>
      )}
    </div>
  );
};

export default Card;
