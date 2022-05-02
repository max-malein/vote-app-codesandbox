import { useEffect, useState } from "react";
import RatingTable from "./RatingTable.js";

export default function WeeklyRating() {
  const [currentRating, setCurrentRating] = useState([]);

  useEffect(() => {
    let rating = getRating();
    rating.then((r) => setCurrentRating(r));
  }, []);

  let content = <div>'loading...'</div>;
  if (currentRating) {
    console.log("currentRating = ", currentRating);
    content = <RatingTable rating={currentRating}></RatingTable>;
  }

  return <div className="weekly-results-container">{content}</div>;
}

async function getRating() {
  let url = "/test-response.json";
  let response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }

  console.log("не получилось зафетчить");
  return "shit";
}
