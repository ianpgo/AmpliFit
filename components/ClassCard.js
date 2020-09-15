import { useRouter } from "next/router";

export default function ClassCard(props) {
  const { activity } = props;
  const router = useRouter();

  return (
    <div
      className="card"
      onClick={(e) => {
        e.preventDefault();
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(`/classes/${activity.id}`);
      }}
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={activity.images[0]} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{activity.name}</p>
            <p className="subtitle is-6">{activity.teacher}</p>
          </div>
        </div>

        <div className="content">
          <p>{activity.shortDescription}</p>
          <b>{activity.difficulty}</b>
        </div>
      </div>
    </div>
  );
}
