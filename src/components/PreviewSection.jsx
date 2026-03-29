function PreviewPrevSection({ theme, data }) {
  return (
    <section className="preview-section">
      <h2>{theme}</h2>
      {data.map(({ id, label, value }) => (
        <p key={id}>
          <strong>{label}: </strong>
          {value}
        </p>
      ))}
    </section>
  );
}

export default PreviewPrevSection;
