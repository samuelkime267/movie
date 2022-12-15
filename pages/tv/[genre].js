import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MovieContainer, Error } from '../../components';
const TvGenre = ({ genre, discover, contextParams, error }) => {
  const router = useRouter();
  const [activeGenre, setActiveGenre] = useState(contextParams.genre);
  if (error) {
    return <Error />;
  }
  const changeGenre = function (genre) {
    if (genre === activeGenre) return;
    router.push(`/tv/${genre.toLowerCase()}`);
  };
  return (
    <>
      <main className="content-body">
        <div className="section-genres-header">
          <h1 className="section-title">
            {activeGenre.toLowerCase() === 'all' ? 'all genres' : activeGenre}
          </h1>
          <form>
            <select
              value={activeGenre}
              onChange={e => {
                changeGenre(e.target.value);
                setActiveGenre(e.target.value);
              }}
            >
              <option value={'All'}>All</option>
              {genre.genres.map(genre => (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </select>
          </form>
        </div>
        <section className="category-movie-container">
          {discover.results.map(movie => (
            <MovieContainer key={movie.id} data={movie} link={`movie`} />
          ))}
        </section>
      </main>
    </>
  );
};

export default TvGenre;
export async function getServerSideProps(context) {
  const contextParams = context.params;
  try {
    // genres
    const reqGenre = await fetch(
      `${process.env.API_URL}/genre/tv/list?api_key=${process.env.API_KEY}&language=en-US`
    );
    const genre = await reqGenre.json();

    // movies in selected genre
    const reqDiscover = await fetch(
      `${process.env.API_URL}/discover/tv?api_key=${
        process.env.API_KEY
      }&language=en-US&page=${1}&with_genres=${
        genre.genres.find(
          genre => contextParams.genre === genre.name.toLowerCase()
        )?.id
      }`
    );
    const discover = await reqDiscover.json();

    return {
      props: { error: false, genre, discover, contextParams },
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}
