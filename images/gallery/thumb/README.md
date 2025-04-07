# Thumbnail Images Directory

This directory contains thumbnail versions of the gallery images. These low-resolution thumbnails are used as placeholder images while the full-resolution images are loading, providing a better user experience by reducing perceived loading time.

## Thumbnail Creation Guidelines

1. Create thumbnails at approximately 10-20% of the original image size
2. Save as WebP format for better compression
3. Apply a light blur (optional) to optimize the blurred placeholder effect
4. Name thumbnails with the pattern: `[original_filename]_thumb.webp`

## Example Command for Creating Thumbnails

Using ImageMagick:

```bash
convert original.jpg -resize 200x -quality 60 -blur 0x2 thumb/original_thumb.webp
```

Or using a batch process:

```bash
for file in *.jpg; do
  convert "$file" -resize 200x -quality 60 -blur 0x2 "thumb/${file%.*}_thumb.webp"
done
```

## Why Thumbnails?

- Faster initial page load
- Reduces bandwidth usage
- Better user experience with progressive loading
- Minimizes layout shifts during page loading
