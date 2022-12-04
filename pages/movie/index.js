import { useState } from 'react';
import { useRouter } from 'next/router';
import { MovieContainer, Error } from '../../components';
const Movie = ({ genre, discover, error }) => {
  const [activeGenre, setActiveGenre] = useState('All');
  const router = useRouter();
  if (error) {
    return <Error />;
  }
  const changeGenre = function (genre) {
    if (genre === activeGenre) return;
    router.push(`/movie/${genre.toLowerCase()}`);
  };

  return (
    <>
      <main className="content-body">
        <div className="section-genres-header">
          <h1 className="section-title">All Genres</h1>
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

export default Movie;
export async function getServerSideProps(context) {
  console.log(context);
  try {
    // genre
    const reqGenre = await fetch(
      `${process.env.API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
    );
    const genre = await reqGenre.json();

    // discover
    const reqDiscover = await fetch(
      `${process.env.API_URL}/discover/movie?api_key=${
        process.env.API_KEY
      }&language=en-US&page=${1}`
    );
    const discover = await reqDiscover.json();

    return {
      props: { error: false, genre, discover },
    };
  } catch (error) {
    return {
      props: {
        error: true,
        data: '',
      },
    };
  }
}
