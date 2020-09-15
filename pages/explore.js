import Categories from "../components/Categories";
import Classes from "../components/Classes";
import Filters from "../components/Filters";

export default function Home() {
  const [category, setCategory] = React.useState("Yoga");
  const [difficulty, setDifficulty] = React.useState(null);
  const [duration, setDuration] = React.useState();
  return (
    <div>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Explore Classes</h1>
          </div>
        </div>
      </section>
      <br />
      <br />
      <div className="container">
        <Categories current={category} setCategory={setCategory} />
        <div className="tile is-ancestor">
          <div className="tile is-2">
            <Filters
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              duration={duration}
              setDuration={setDuration}
            />
          </div>
          <div className="tile is-10">
            <Classes
              category={category}
              difficulty={difficulty}
              duration={duration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
