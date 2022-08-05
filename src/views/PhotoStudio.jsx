import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const PhotoStudio = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 480, height: 640 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const takePhoto = () => {
    const width = 480;
    const height = 640;

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
    console.log(hasPhoto);
  };

  return (
    <>
      <div>
        <TempCameraContainer ref={videoRef} />
        <button onClick={takePhoto}>SNAP</button>
      </div>
      <div>
        <TempPhotoContainer ref={photoRef} />
        <RetakeButton photo={hasPhoto}>CLOSE</RetakeButton>
      </div>
    </>
  );
};

export default PhotoStudio;

const TempCameraContainer = styled.video`
  max-width: 380px;
  border-radius: 50px;
  margin: 0;
  padding: 0;
`;

const TempPhotoContainer = styled.canvas`
  max-width: 380px;
  border-radius: 50px;
`;

const RetakeButton = styled.button`
  display: none;
`;
