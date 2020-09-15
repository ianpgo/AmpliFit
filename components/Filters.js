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
        <br />
        <div className="title is-4" style={{ marginBottom: "6px;" }}>
          Difficulty
        </div>
        {difficulties.map((difficulty) => {
          return (
            <div className="control" key={difficulty}>
              <label className="checkbox">
                <input type="checkbox" />
                &nbsp;
                {difficulty}
              </label>
            </div>
          );
        })}
      </div>
      <br />
      <div>
        <div className="title is-4" style={{ marginBottom: "6px;" }}>
          Duration
        </div>
        {durations.map((duration) => {
          return (
            <div className="control" key={duration}>
              <label className="checkbox">
                <input type="checkbox" />
                &nbsp;
                {duration}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
