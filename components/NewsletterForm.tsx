"use client";

type Props = {
  style?: React.CSSProperties;
};

export default function NewsletterForm({ style }: Props) {
  return (
    <form
      className="news-form"
      style={style}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="email" required placeholder="your name@correspondence.eu" />
      <button type="submit">Subscribe</button>
    </form>
  );
}
