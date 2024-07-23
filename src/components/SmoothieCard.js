const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <p className="rating">{smoothie.rating}</p>
    </div>
  );
};

export default SmoothieCard;
