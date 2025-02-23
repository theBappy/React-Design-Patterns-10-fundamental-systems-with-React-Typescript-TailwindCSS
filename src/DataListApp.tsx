import SimpleGamesInfo from "./components/ListData/GamesInfo";
import MoviesInfo from "./components/ListData/MoviesInfo";
import RenderList from "./components/ListData/RenderList";
import { games, movies } from "./game_movie_data/data";

const App = () => {
  return (
    <>
      <RenderList
        data={games}
        resourceName="games"
        dataToRender={SimpleGamesInfo}
      />
      <hr />
      <br />
      <br />
      <RenderList
        data={movies}
        resourceName="movies"
        dataToRender={MoviesInfo}
      />
    </>
  );
};

export default App;
