import '../scss/main.scss';
import { Navbar, Footer } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main id="layout-container">
        <Navbar />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
