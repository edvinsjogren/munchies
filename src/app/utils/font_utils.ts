import local from 'next/font/local';

export const sanfrancisco = local({
  src: [
    {
      path: '../../../public/fonts/SF-Pro.ttf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '760',
    },
  ],
  variable: '--font-sanfrancisco',
});
