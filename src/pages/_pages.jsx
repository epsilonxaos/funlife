import { AnimatePresence } from "framer-motion";
import "../styles/index.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;