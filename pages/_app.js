import '../scss/main.scss';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main id="layout-container">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
