export function CheckinsShow(props) {
  return (
    <div>
      <h1>Check-in information</h1>
      <p>Brewery ID: {props.checkin.brewery_id}</p>
      <p>User ID: {props.checkin.user_id}</p>
      <p>Rating: {props.checkin.rating}</p>
      <p>Image URL: {props.checkin.image_url}</p>
      <p>Comments: {props.checkin.comments}</p>
    </div>
  );
}
