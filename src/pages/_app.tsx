import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import '@/styles/global.css'
import '@/styles/theme.css'
import '@/styles/dark.css'
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
