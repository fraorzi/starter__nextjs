import { Roboto } from 'next/font/google';
// import localFont from 'next/font/local';

export const fontSans = Roboto({
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
  subsets: ['latin'],
});

// export const fontSans = localFont({
//   display: 'swap',
//   variable: '--font-sans',
//   src: [
//     {
//       path: './../../public/fonts/your-font/your-font_Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './../../public/fonts/your-font/your-font_Regular-italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//   ],
// });
