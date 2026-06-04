import Button from "../components/common/Button.jsx";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for may have moved or no longer exists.</p>
        <Button to="/" icon="Home">Return Home</Button>
      </div>
    </section>
  );
}
