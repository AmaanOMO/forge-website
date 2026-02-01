# Hero video slideshow (Spring 2026 Applications page)

The hero uses 3 videos that autoplay in a loop. Add these files here:

- **hero-1.mp4**
- **hero-2.mp4**
- **hero-3.mp4**

Each clip is shown for 3 seconds, then it switches to the next; after the third clip it loops back to the first.

## Converting your MOV files to MP4

If your source files are `.MOV` (e.g. from Messages/Photos), convert them to MP4 for best browser support:

**Using ffmpeg** (install via `brew install ffmpeg` if needed):

```bash
# From the folder containing your 3 MOV files:
ffmpeg -i IMG_9341.MOV -c:v libx264 -an -t 3 hero-1.mp4
ffmpeg -i IMG_9297.MOV -c:v libx264 -an -t 3 hero-2.mp4
ffmpeg -i IMG_9295.MOV -c:v libx264 -an -t 3 hero-3.mp4
```

Then move `hero-1.mp4`, `hero-2.mp4`, and `hero-3.mp4` into this folder: `public/addedVids/`.

- `-an` removes audio (required for autoplay in most browsers).
- `-t 3` limits each output to 3 seconds; omit if you want the full clip.
