import classes from "../lib/classes";
import ClassCard from "./ClassCard";

export default function Classes(props) {
  const { category, difficulty, duration } = props;
  const filtered = classes.filter((program) => {
    if (difficulty && program.difficulty !== difficulty) {
      return false;
    }
    if (duration && program.duration !== duration) {
      return false;
    }
    return program.category === category;
  });

  return (
    <div className="classes-wrapper">
      {filtered.map((activity, i) => {
        return (
          <div key={i} className="card-wrapper">
            <ClassCard activity={activity} />
          </div>
        );
      })}
    </div>
  );
}
