import '../styles/globals.css'
import { useEffect } from "react";
import MainComp from '../components/MainComp';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (

    <MainComp>
      <Component {...pageProps} />
      ***
    </MainComp>


  )
}

export default MyApp
