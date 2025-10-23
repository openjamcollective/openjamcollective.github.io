import React, { useEffect, useState } from "react";
import "./instagram.css"; // ✅ import the CSS file
import postsDataRaw from "../../lib/data/instagram.json";


const postsData: InstagramPost[] = postsDataRaw as InstagramPost[];
interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

const Instagram:React.FC =() =>{
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const limit = 9;

   useEffect(() => // Use the imported JSON directly
   setPosts(postsData.slice(0, limit)), []);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Follow us on Instagram</h2>
      <div className="instagram-grid">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-item"
          >
            {post.media_type === "VIDEO" ? (
              <video
                src={post.media_url}
                className="instagram-media"
                controls
              />
            ) : (
              <img
                src={post.media_url}
                alt={post.caption || ""}
                className="instagram-media"
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Instagram;