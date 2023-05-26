import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


 function App({ Component, pageProps }) {
  return (
  <>
  <Navbar />
   <Component {...pageProps} />
   <Footer />
   </>
  );
}

export default App