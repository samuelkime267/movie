import { useState } from 'react';
import { useRouter } from 'next/router';
import { MovieContainer, Error, Pagination } from '../../components';

const TvGenre = ({ genre, discover, params: contextParams, error }) => {
  const router = useRouter();
  const [activeGenre, setActiveGenre] = useState(contextParams?.at(1));
  if (error) {
    return <Error />;
  }

  const changeGenre = function (genre) {
    if (genre === activeGenre) return;
    const urlPaths = router.asPath.split('/');
    const mediaType = urlPaths[2];
    router.push(`${mediaType}/${genre.toLowerCase()}/1`);
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
        <section className="pagination-container">
          <Pagination
            curPage={discover.page}
            totalPages={discover.total_pages}
          />
        </section>
      </main>
    </>
  );
};

export default TvGenre;
export async function getServerSideProps(context) {
  const params = context.params.medias;
  const mediaType = params[0]; //movie
  const genreType = params[1]; //all
  const pageNo = params[2]; //1
  console.log(mediaType, genreType, pageNo);

  try {
    // genres
    const reqGenre = await fetch(
      `${process.env.API_URL}/genre/${mediaType}/list?api_key=${process.env.API_KEY}&language=en-US`
    );
    const genre = await reqGenre.json();

    // movies in selected genre
    const reqDiscover = await fetch(
      `${process.env.API_URL}/discover/${mediaType}?api_key=${
        process.env.API_KEY
      }&language=en-US&page=${pageNo}&with_genres=${
        genre.genres.find(genre => genreType === genre.name.toLowerCase())?.id
      }`
    );
    const discover = await reqDiscover.json();

    return {
      props: { error: false, genre, discover, params },
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}
