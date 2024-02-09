# Optimizing image dimensions and file size

The reason for this folder (public-unoptimized) and this documentation are that the `nextJS <Image />` component does not work for projects that are statically exported. NextJS image optimzation is a runtime feature of the `<Image />` component, not a build-time feature. This is why it does not work with `output: export` configuration.

To improve website loading times, make sure to use images that have optimized size and file size from the `public/` folder.

## Setup

Instal `imageMagick` ([docs](https://imagemagick.org/index.php)):

```sh
$ brew install imagemagick

$  magick -version
```

## Resize image

Some images have much bigger dimensions than needed. Resize them using `convert`:

```sh
# resize to 640px and write to public folder
$ convert public-unoptimized/profilePic.jpeg -resize 640 public/profilePic-640.jpeg
```

## Compress image

Compress by 80%:

```sh
# example - or use optimize-jpeg.sh
convert public-unoptimized/profilePic.jpeg -quality 80% public/profilePic-80%.jpeg"
```

Compress by setting maximum filesize:

```sh
# -define jpeg:extent=30kb
convert original.jpeg -define jpeg:extent=30kb output.jpg

# other example, writing from public-unoptimized/ to public/
convert public-unoptimized/original.jpeg -define jpeg:extent=30kb public/output.jpg

```

Compress by setting max dimensions

```sh
convert flower.jpg -resize 200x100 flower_small.jpg
```
