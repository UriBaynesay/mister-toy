import { ToyPreview } from "./toy-preview";

export function ToysList({ toys }) {
  return (
    <div className="toys-list-container grid">
      <ul>
        {toys.map((toy) => {
          return (
            <li key={toy._id}>
              <ToyPreview toy={toy} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
