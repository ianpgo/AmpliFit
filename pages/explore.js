import Categories from "../components/Categories";
import Classes from "../components/Classes";

export default function Home() {
  const [category, setCategory] = React.useState("Yoga");
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Explore Classes</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <Categories current={category} setCategory={setCategory} />
        <Classes category={category} />
      </div>
    </div>
  );
}
