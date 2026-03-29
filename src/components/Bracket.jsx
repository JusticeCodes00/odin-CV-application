function Bracket({ position = "right" }) {
  return <span className="bracket">{position === "right" ? "{ " : " }:"}</span>;
}

export default Bracket;
