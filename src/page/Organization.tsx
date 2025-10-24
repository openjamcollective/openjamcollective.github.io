import React from 'react';
import {objectives, orgInfoList} from '../lib/data/Info';
import OrganizationCard from '../components/about/OrganizationCard';
import bb4 from "../lib/images/bickfordboogie4.jpg"
import potb from "../lib/images/potb2.jpg";

const Organization: React.FC = () => {
    const mediaArr: string[] = [bb4, "https://www.youtube.com/watch?v=Xmbe9Y5cNpE",potb];
  return (
    <header className="App-header">
    <h4><i>About</i></h4>
      <div className="container pagedisplay">
        <div className='grid-container2'>
        {orgInfoList.map((info, i) => {
          const media = mediaArr[i];
          const isYouTube = media?.includes('youtube.com') || media?.includes('youtu.be');

          // Alternate layout:
          const isEven = i % 2 === 0;

          const mediaElement = isYouTube ? (
            <div className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(media)}`}
                title={`YouTube video ${i}`}
                className="youtube w-full h-full rounded-2xl shadow-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              src={media}
              alt="Organization media"
              className="orgImage rounded-2xl shadow-lg w-full object-cover"
            />
          );

          const cardElement = <OrganizationCard obj={info} />;

          return (
            <React.Fragment key={i}>
              {isEven ? (
                <>
                  {cardElement}
                  {mediaElement}
                </>
              ) : (
                <>
                  {mediaElement}
                  {cardElement}
                </>
              )}
            </React.Fragment>
          );
        })}
        </div>
      </div>
    </header>
  );
};

export default Organization;

// helper to safely extract video ID
function extractYouTubeId(url: string): string {
  const regex =
    /(?:youtube\.com\/(?:.*v=|embed\/|v\/)|youtu\.be\/)([^&?\/\s]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}
