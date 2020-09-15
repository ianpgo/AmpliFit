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
        {difficulties.map((difficultyOption) => {
          return (
            <div className="control" key={difficultyOption}>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={difficultyOption === difficulty}
                  onChange={() =>
                    setDifficulty(
                      difficultyOption === difficulty ? null : difficultyOption
                    )
                  }
                />
                &nbsp;
                {difficultyOption}
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
        {durations.map((durationOption) => {
          return (
            <div className="control" key={durationOption}>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={durationOption === duration}
                  onChange={() =>
                    setDuration(
                      durationOption === duration ? null : durationOption
                    )
                  }
                />
                &nbsp;
                {durationOption}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
