import '../scss/main.scss';
import { Navbar, Footer, Loader } from '../components';
import { useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  router.events.on('routeChangeStart', () => setIsLoading(true));
  router.events.on('routeChangeComplete', () => setIsLoading(false));
  router.events.on('routeChangeError', () => setIsLoading(false));
  return (
    <>
      {isLoading && <Loader />}
      <main id="layout-container">
        <Navbar />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
