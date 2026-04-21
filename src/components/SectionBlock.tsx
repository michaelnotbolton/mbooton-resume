import type { HTMLAttributes, PropsWithChildren } from 'react'

type SectionBlockProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    title: string
    eyebrow?: string
  }
>

function slugify(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export function SectionBlock({
  children,
  title,
  eyebrow,
  className,
  ...rest
}: SectionBlockProps) {
  const headingId = `${slugify(title)}-heading`

  return (
    <section
      className={['section-block', className].filter(Boolean).join(' ')}
      aria-labelledby={headingId}
      {...rest}
    >
      <div className="section-copy">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title" id={headingId}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
