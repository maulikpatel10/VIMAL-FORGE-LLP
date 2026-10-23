import os
import subprocess
import sys

def main():
    # Create output directories
    out_dir = "/Users/maulikdaraniya/Desktop/Vimal/assets/videos"
    os.makedirs(out_dir, exist_ok=True)

    # URL of YouTube video
    youtube_url = "https://www.youtube.com/watch?v=TgZ5iCxFOb0"

    # Target clips configuration: (name, start_time, duration)
    # Selected timestamps that contain relevant action scenes:
    clips = {
        "hero_loop": ("00:00:02", 10),
        "ring_rolling_loop": ("00:01:02", 10),
        "forging_loop": ("00:00:30", 10),
        "machining_loop": ("00:01:38", 10),
        "quality_loop": ("00:02:10", 10),
    }

    # First, download the video in highest quality to a temp file
    temp_file = "/Users/maulikdaraniya/Desktop/Vimal/scripts/temp_full_video.mp4"
    print("Downloading full video...")
    try:
        subprocess.run([
            "yt-dlp",
            "-f", "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best",
            "-o", temp_file,
            youtube_url
        ], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error downloading video: {e}", file=sys.stderr)
        sys.exit(1)

    print("Full video downloaded. Extracting loops...")

    # Now cut each loop and convert to mp4 and webm
    for name, (start, duration) in clips.items():
        print(f"Creating loop: {name} (start: {start}, duration: {duration}s)...")
        
        mp4_out = os.path.join(out_dir, f"{name}.mp4")
        webm_out = os.path.join(out_dir, f"{name}.webm")
        
        try:
            # Extract MP4 loop (no audio, web optimized, high compression)
            subprocess.run([
                "ffmpeg", "-y",
                "-ss", start,
                "-i", temp_file,
                "-t", str(duration),
                "-an", # remove audio
                "-c:v", "libx264",
                "-profile:v", "baseline",
                "-level", "3.0",
                "-pix_fmt", "yuv420p",
                "-preset", "veryfast",
                "-crf", "28", # high compression for web loading speed
                mp4_out
            ], check=True)
            
            # Extract WebM loop (no audio, web optimized, high compression)
            subprocess.run([
                "ffmpeg", "-y",
                "-ss", start,
                "-i", temp_file,
                "-t", str(duration),
                "-an", # remove audio
                "-c:v", "libvpx-vp9" if name == "hero_loop" else "libvpx", # try vp9 for hero, vp8 for others
                "-crf", "32",
                "-b:v", "800k",
                webm_out
            ], check=True)
        except subprocess.CalledProcessError as e:
            print(f"Error processing clip {name}: {e}", file=sys.stderr)

    print("Done! Removing temporary file...")
    if os.path.exists(temp_file):
        os.remove(temp_file)
    print("All loop videos extracted successfully!")

if __name__ == "__main__":
    main()
