import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  
  const pageVariants = {
    pageInitial: {
      opacity: 0,
      x: -200,
      y: 0
    },
    pageAnimate: {
      opacity: 1,
      x: 0,
      y: 0 
    },
    pageExit: {
      delay: 0.3,
      backgroundColor: 'black',
      filter: `invert()`,
      opacity: 0,
      x: 0,
      y: -100
    }
  };

  return (
    // exitBeforeEnter to wait for exit/enter animations to complete 
    // set initial to false to avoid animation on load -- initial={false}
    <AnimatePresence exitBeforeEnter> 
      <motion.div key={router.route} variants={pageVariants} initial="pageInitial" animate="pageAnimate" exit="pageExit">
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
