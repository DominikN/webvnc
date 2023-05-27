## generating a set of icons from `sygnet.svg`

```
inkscape -w 192 -h 192 sygnet.svg -o icons/android-chrome-192x192.png
inkscape -w 512 -h 512 sygnet.svg -o icons/android-chrome-512x512.png
inkscape -w 180 -h 180 sygnet.svg -o icons/apple-touch-icon.png
inkscape -w 16 -h 16 sygnet.svg -o icons/favicon-16x16.png
inkscape -w 32 -h 32 sygnet.svg -o icons/favicon-32x32.png
inkscape -w 150 -h 150 sygnet.svg -o icons/mstile-150x150.png
```