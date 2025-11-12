import React, { useEffect, useState } from "react";
import "./instagram.css"; // ✅ import the CSS file
import postsDataRaw from "../../lib/data/instagram.json";


const postsData: InstagramPost[] = (postsDataRaw as InstagramPost[]).filter(post => post.media_type !== "VIDEO");
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
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(postsData.length / limit);

   useEffect(() => // Use the imported JSON directly
   setPosts(postsData.slice(0, limit)), []);

    useEffect(() => {
    // Update visible posts when the page changes
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    setPosts(postsData.slice(startIndex, endIndex));
  }, [currentPage]);

    const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
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
            {/* ✅ Pagination Controls */}
      <div className="pagination" style={{ textAlign: "center", marginTop: "1rem" }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active-page" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Instagram;