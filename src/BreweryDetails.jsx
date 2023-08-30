import { useParams } from "react-router-dom";

export function BreweryDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Brewery Details! - {id}</h1>
    </div>
  );
}
