export default function ClassCard(props) {
  const { activity } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={activity.images[0]} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{activity.teacher}</p>
            <p className="subtitle is-6">{activity.duration}</p>
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
