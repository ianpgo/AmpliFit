import classes from "../lib/classes";
import ClassCard from "./ClassCard";

export default function Classes(props) {
  const { category } = props;
  const filtered = classes.filter((program) => {
    return (program.category = category);
  });

  return (
    <div className="tile is-ancestor">
      {filtered.map((activity, i) => {
        return (
          <div key={i} className="tile is-4">
            <ClassCard activity={activity} />;
          </div>
        );
      })}
    </div>
  );
}
