import classes from "../lib/classes";

export default function ClassDetails(props) {
  const { classId } = props;
  const activity = classes.find((activity) => {
    return `${activity.id}` === classId;
  });
  if (!activity) {
    return <div>No Activity found</div>;
  }
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="has-text-centered	">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/UItWltVZZmE?&autoplay=1&controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div
          style={{
            width: "1120px",
            display: "inline-block",
            textAlign: "left",
          }}
        >
          <div className="title is-2">{activity.name}</div>
          <div className="subtitle is-2">
            {activity.teacher} - {activity.duration}
          </div>
          <p>{activity.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
