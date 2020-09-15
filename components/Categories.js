import classes from "../lib/classes";

export default function Categories(props) {
  const { current, setCategory } = props;
  const categories = Object.keys(
    classes.reduce((accum, program) => {
      accum[program.category] = true;
      return accum;
    }, {})
  );

  console.log(categories);

  return (
    <div className="tabs">
      <ul>
        {categories.map((category) => {
          return (
            <li
              key={category}
              className={current === category ? "is-active" : ""}
            >
              <a onClick={() => setCategory(category)}>{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
