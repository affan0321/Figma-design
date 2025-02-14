import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/body";
import 'swiper/swiper-bundle.css';
import CustomCarousel from "./Components/CustomCarousel";
import MarqueeReverse from "./Components/MarqueeReverse";
import Contents from "./Components/Contents";
import Contents1 from "./Components/Contents1";
import Contents2 from "./Components/Contents2";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Body />
      <CustomCarousel />
      <MarqueeReverse />
      <Contents />
      <Contents1 />
      <Contents2 />
    </div>
  );
}





// import { Outfit } from '@next/font/google';

// const outfit = Outfit({
//   subsets: ['latin'],
//   variable: '--outfit-font'
// });

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <html lang="en">
//         <body className={outfit.variable}>
//           <Component {...pageProps} />
//         </body>
//       </html>
//     </>
//   );
// }

// export default MyApp;
