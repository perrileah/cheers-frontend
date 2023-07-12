export function CheckinsIndex(props) {
  return (
    <div>
      <h1>All Check-Ins</h1>
      {props.checkins.map((checkin) => (
        <div key={checkin.id}>
          <h2>{checkin.rating + "/5: " + checkin.comments}</h2>
          <p>
            <strong>Brewery: </strong>
            {checkin.brewery_id}
          </p>
          <p>{checkin.image_url}</p>
          <p>
            <strong>User: </strong>
            {checkin.user_id}
          </p>
        </div>
      ))}
    </div>
  );
}
