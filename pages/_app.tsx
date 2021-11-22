import '../styles/globals.scss'
import '@fontsource/inter/variable.css'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
};

export default App;
