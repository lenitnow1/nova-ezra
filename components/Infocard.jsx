import React from 'react'

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
        'w-full max-w-sm h-full page-panel p-6 emboss-border',
        'flex flex-col',
        'transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]',
        className,
      ].join(' ')}
      data-anim="card"
    >
      <div className="flex-1">
        {(label || date) && (
          <div className="flex items-center justify-between text-sm">
            <span className="chapter-label !text-[0.65rem]">{label}</span>
            <span className="text-ink/50 font-body text-xs">{date}</span>
          </div>
        )}

        {title && (
          <p className="font-display text-2xl mt-5 mb-3 font-semibold leading-snug text-ink">
            {title}
          </p>
        )}

        {description && (
          <p className="text-ink/70 mb-5 font-body leading-relaxed text-sm">{description}</p>
        )}

        {Array.isArray(categories) && categories.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="bg-antique text-ink/80 px-2.5 py-1 font-display text-[11px] tracking-wide uppercase rounded-md border border-leather/15"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {footer && (
        <div className="font-body text-ink/50 mt-4 text-sm">{footer}</div>
      )}
    </div>
  )
}

export default Card
