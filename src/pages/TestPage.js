import React from "react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";

const TestPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TikTokEmbed
        url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
        width={375}
      />
    </div>
  );
};

export default TestPage;
