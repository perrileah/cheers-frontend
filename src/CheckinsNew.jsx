export function CheckinsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateCheckin(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Check-In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Brewery ID: <input name="brewery_id" type="text" />
        </div>
        <div>
          User ID: <input name="user_id" type="text" />
        </div>
        <div>
          Rating: <input name="rating" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Comments: <input name="comments" type="text" />
        </div>
        <button type="submit">Create check-in</button>
      </form>
    </div>
  );
}
