 # open video folder in cmd and paste - 
   ## ffmpeg -i video.mp4 -vf "fps=31.3,scale=1000:-1" -vcodec libwebp -compression_level 1 -qscale 80 %d.webp 

   # 626 / 20 = 31.3 fps

   # 60 images per second
     ffmpeg -i video.mp4 -vf "fps=60,scale=1000:-1" -c:v libwebp -compression_level 1 -qscale 80 %d.webp
     
   
   # 60 images per second
     ffmpeg -i video.mp4 -vf "fps=120,scale=1000:-1" -c:v libwebp -compression_level 1 -qscale 80 %d.webp
     
