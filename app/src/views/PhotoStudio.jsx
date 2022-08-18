import React, { useRef, useEffect, useState } from 'react'

const PhotoStudio = () => {
   const videoRef = useRef(null)
   const photoRef = useRef(null)

   const [hasPhoto, setHasPhoto] = useState(false)

   const getVideo = () => {
      navigator.mediaDevices
         .getUserMedia({
            video: { width: 480, height: 640 },
         })
         .then(stream => {
            let video = videoRef.current
            video.srcObject = stream
            video.play()
         })
         .catch(err => {
            console.error(err)
         })
   }

   useEffect(() => {
      getVideo()
   }, [videoRef])

   const takePhoto = () => {
      const width = 480
      const height = 640

      let video = videoRef.current
      let photo = photoRef.current

      photo.width = width
      photo.height = height

      let ctx = photo.getContext('2d')
      ctx.drawImage(video, 0, 0, width, height)
      setHasPhoto(true)
      console.log(hasPhoto)
   }

   return (
      <>
         <div>
            <div className="w-full rounded-xl" ref={videoRef}></div>
            <button onClick={takePhoto}>◯</button>
         </div>
         <div>
            <div className="w-full rounded-xl" ref={photoRef}></div>
            <div className="" photo={hasPhoto}>
               CLOSE
            </div>
         </div>
      </>
   )
}

export default PhotoStudio
