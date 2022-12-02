import { Search, Hero, MovieContainer, Error, ActorsCard } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default function Home({ movies, error, shows, all, people }) {
  if (error) {
    return <Error link="/" />;
  }
  const allResults = all.results;
  const moviesResults = movies.results;
  const showsResults = shows.results;
  const peopleResults = people.results;
  console.log(people);
  return (
    <main className="content-body">
      <Search />
      <section className="hero-section">
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
        >
          {allResults.map((data, i) => {
            if (i > 9) return;
            return (
              <SwiperSlide key={data.id}>
                <Hero data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="movie-listing">
        <h1 className="section-title">Trending Movies</h1>
        <div className="movies-list-carousel">
          {moviesResults.map(data => {
            return <MovieContainer key={data.id} link={``} data={data} />;
          })}
        </div>
      </section>
      <section className="movie-listing">
        <h1 className="section-title">Trending TV Shows</h1>
        <div className="movies-list-carousel">
          {showsResults.map(data => {
            return <MovieContainer key={data.id} link={``} data={data} />;
          })}
        </div>
      </section>
      <section className="trending-actors">
        <h1 className="section-title">Trending Persons</h1>
        <div className="artist-containers-holder">
          {peopleResults.map(data => (
            <ActorsCard key={data.id} data={data} />
          ))}
        </div>
      </section>
    </main>
  );
}
export async function getServerSideProps() {
  try {
    // movies
    const reqMovies = await fetch(
      `${process.env.API_URL}/trending/movie/day?api_key=${process.env.API_KEY}`
    );
    const movies = await reqMovies.json();

    // shows
    const reqShows = await fetch(
      `${process.env.API_URL}/trending/tv/day?api_key=${process.env.API_KEY}`
    );
    const shows = await reqShows.json();

    // all
    const reqAll = await fetch(
      `${process.env.API_URL}/trending/all/day?api_key=${process.env.API_KEY}`
    );
    const all = await reqAll.json();

    // people
    const reqPeople = await fetch(
      `${process.env.API_URL}/trending/person/day?api_key=${process.env.API_KEY}`
    );
    const people = await reqPeople.json();

    return {
      props: { movies, shows, all, people, error: false },
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
