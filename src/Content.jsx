import { BreweriesIndex } from "./BreweriesIndex";

export function Content() {
  const breweries = [
    { id: 1, name: "Light the Lamp", city: "Grayslake" },
    { id: 2, name: "Harbor Brewing Company", city: "Round Lake Beach" },
  ];

  return (
    <div>
      <h1>Welcome to Cheers! a brewery-rating app</h1>
      <BreweriesIndex breweries={breweries} />
    </div>
  );
}
