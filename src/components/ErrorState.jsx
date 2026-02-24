export default function ErrorState({ message }) {
  return (
    <div style={{ color: "red", marginTop: "1rem" }}>
      <p>Error: {message}</p>
    </div>
  );
}