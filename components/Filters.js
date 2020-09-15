import classes from "../lib/classes";

export default function Filters(props) {
  const { duration, setDuration, difficulty, setDifficulty } = props;
  const durations = Object.keys(
    classes.reduce((accum, program) => {
      accum[program.duration] = true;
      return accum;
    }, {})
  );
  const difficulties = Object.keys(
    classes.reduce((accum, program) => {
      accum[program.difficulty] = true;
      return accum;
    }, {})
  );

  return (
    <div>
      <div>
        {difficulties.map((difficulty) => {
          return (
            <label className="checkbox">
              <input type="checkbox" />
              {difficulty}
            </label>
          );
        })}
      </div>
      <div>
        {durations.map((duration) => {
          return (
            <label className="checkbox">
              <input type="checkbox" />
              {duration}
            </label>
          );
        })}
      </div>
    </div>
  );
}
