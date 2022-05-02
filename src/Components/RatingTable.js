export default function RatingTable({ rating }) {
  let list = rating.map((item) => (
    <li
      className="list-group-item d-flex rounded-2 mb-2 border-1 row"
      key={item.id}
    >
      <ul className="list-inline row">
        <li className="list-inline-item col text-start">{item.name}</li>
        <li className="list-inline-item votes col-3 text-end">
          {item.numberOfVotes} votes
        </li>
      </ul>
    </li>
  ));
  console.log("rating type ", typeof rating);
  console.log("rating ", rating);

  return (
    <div className="rating-table">
      <ol className="list-group list-group-numbered container">{list}</ol>
    </div>
  );
}
