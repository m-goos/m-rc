#!/bin/sh

echo
echo "Run this script from the root folder."
echo "Optimize image file by compressing it to 80% of its original size"
echo
echo
echo "Images in public-unoptimized/:"
echo

ls -la public-unoptimized/

echo
echo "==========================="
echo

read -p "choose input file from public-unoptimized (excluding extension): " inputfile
read -p "extension for inputfile: " extension

echo "Compressing by 80%"
echo "Writing output to public/ folder"
echo "Output file: public/$inputfile-q80.$extension"
echo
convert "public-unoptimized/$inputfile.$extension" -quality 80% "public/$inputfile-q80.$extension"

echo
echo "==========================="
echo
echo "Images in public/:"
echo

ls -la public/

echo
