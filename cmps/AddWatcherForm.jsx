const { useState } = React;

export function AddWatcherForm({ onAddWatcher }) {
  const [fullname, setFullname] = useState("");
  const [movies, setMovies] = useState("");

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleMoviesChange = (event) => {
    setMovies(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Split movies string by comma and trim each value
    const moviesArray = movies.split(",").map((movie) => movie.trim());
    // Call the onAddWatcher function from the parent component with the new watcher data
    onAddWatcher(fullname, moviesArray);
    // Reset form fields
    setFullname("");
    setMovies("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-watcher-form">
      <label>
        Full Name:
        <input
          type="text"
          value={fullname}
          onChange={handleFullnameChange}
          required
        />
      </label>
      <label>
        Movies (comma separated):
        <input
          type="text"
          value={movies}
          onChange={handleMoviesChange}
          required
        />
      </label>
      <button type="submit">Add Watcher</button>
    </form>
  );
}
