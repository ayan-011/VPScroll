 # open video folder in cmd and paste - 
   ## ffmpeg -i video.mp4 -vf "fps=31.3,scale=1000:-1" -vcodec libwebp -compression_level 1 -qscale 80 %d.webp 

   # 626 / 20 = 31.3 fps