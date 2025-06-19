pnpm build 
rm -r -f dist/png
rm -f dist/*.xlsx
scp -r dist root@124.220.2.31:/usr/local/xzt/