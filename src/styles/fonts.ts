import localFont from "next/font/local";
const Grandis = localFont({
  src: [
    { path: './fonts/Grandis/GrandisThin.woff2', weight: '100', style: 'normal'},
    { path: './fonts/Grandis/GrandisThinItalic.woff2', weight: '100', style: 'italic' },
    { path: './fonts/Grandis/GrandisLight.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Grandis/GrandisLightItalic.woff2', weight: '300', style: 'italic' },
    { path: './fonts/Grandis/GrandisRegular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Grandis/GrandisRegularItalic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/Grandis/GrandisMedium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Grandis/GrandisMediumItalic.woff2', weight: '500', style: 'italic' },
    { path: './fonts/Grandis/GrandisBold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Grandis/GrandisBoldItalic.woff2', weight: '700', style: 'italic' },
    { path: './fonts/Grandis/GrandisBlack.woff2', weight: '900', style: 'normal' },
    { path: './fonts/Grandis/GrandisBlackItalic.woff2', weight: '900', style: 'italic' }
  ],
  variable: "--font-grandis",
  fallback: ['sans-serif']
})

const GrandisExtended = localFont({
  src: [
    { path: './fonts/GrandisExtended/GrandisExtendedThin.woff2', weight: '100', style: 'normal' },
    { path: './fonts/GrandisExtended/GrandisExtendedThinItalic.woff2', weight: '100', style: 'italic' },
    { path: './fonts/GrandisExtended/GrandisExtendedLight.woff2', weight: '300', style: 'normal' },
    { path: './fonts/GrandisExtended/GrandisExtendedLightItalic.woff2', weight: '300', style: 'italic' },
    { path: './fonts/GrandisExtended/GrandisExtendedRegular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/GrandisExtended/GrandisExtendedRegularItalic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/GrandisExtended/GrandisExtendedMedium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/GrandisExtended/GrandisExtendedMediumItalic.woff2', weight: '500', style: 'italic' },
    { path: './fonts/GrandisExtended/GrandisExtendedBold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/GrandisExtended/GrandisExtendedBoldItalic.woff2', weight: '700', style: 'italic' },
    { path: './fonts/GrandisExtended/GrandisExtendedBlack.woff2', weight: '900', style: 'normal' },
    { path: './fonts/GrandisExtended/GrandisExtendedBlackItalic.woff2', weight: '900', style: 'italic' }
  ],
  variable: "--font-grandis-extended",
  fallback: ['sans-serif']
})

const Rubik = localFont({
  src: [
    { path: './fonts/Rubik/Rubik-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Rubik/Rubik-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: './fonts/Rubik/Rubik-Black.woff2', weight: '900', style: 'normal' },
    { path: './fonts/Rubik/Rubik-BlackItalic.woff2', weight: '900', style: 'italic' },
    { path: './fonts/Rubik/Rubik-Italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/Rubik/Rubik-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Rubik/Rubik-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: './fonts/Rubik/Rubik-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Rubik/Rubik-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: './fonts/Rubik/Rubik-Regular.woff2', weight: '400', style: 'normal' },
  ],
  variable: "--font-rubik",
  fallback: ['sans-serif'],
})

export { Grandis, GrandisExtended, Rubik }
