const { useState } = React;

export function WatcherDetails({ watcher, onSubmitEdit }) {
  //display watcher details and allow editing only the watcher name
  const [isEditing, setIsEditing] = useState(false);
  const [fullname, setFullname] = useState(watcher.fullname);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSubmitEdit(watcher.id, fullname);
  };

  return (
    <section className="watcher-details">
      <img src={watcher.img} alt={watcher.fullname} />
      <h2>
        {isEditing ? (
          <input
            type="text"
            value={fullname}
            onChange={(ev) => setFullname(ev.target.value)}
          />
        ) : (
          watcher.fullname
        )}
      </h2>
      <div className="movies-list">
        <table>
          <thead>
            <tr>
              <th>Movie</th>
              <th>Search</th>
            </tr>
          </thead>
          <tbody>
            {watcher.movies.map((movie, idx) => {
              return (
                <tr key={idx}>
                  <td>{movie}</td>
                  <td>
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.google.com/search?q=${movie}`,
                          "_blank"
                        )
                      }
                    >
                      Search
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </section>
  );
}
