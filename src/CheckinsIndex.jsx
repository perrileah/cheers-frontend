export function CheckinsIndex(props) {
  return (
    <div>
      <h1>All Check-Ins</h1>
      {props.checkins.map((checkin) => (
        <div key={checkin.id}>
          <h2>{checkin.comments}</h2>
          <p>{checkin.user_id}</p>
          <p>{checkin.brewery_id}</p>
          <p>{checkin.rating}</p>
          <p>{checkin.image_url}</p>
        </div>
      ))}
    </div>
  );
}
