pnpm build 
rm -r -f dist/png
rm -r -f dist/audio
rm -r -f dist/font
rm -r -f dist/webp
rm -f dist/*.xlsx
scp -r dist root@124.220.2.31:/usr/local/xzt/