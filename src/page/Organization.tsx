import React, {useEffect} from 'react';
import {objectives, orgInfoList} from '../lib/data/Info';
import OrganizationCard from '../components/about/OrganizationCard';
import bb4 from "../lib/images/bickfordboogie4.jpg"
import potb from "../lib/images/potb2.jpg";

const Organization: React.FC = () => {
    const mediaArr: string[] = [bb4, "https://www.youtube.com/watch?v=Xmbe9Y5cNpE",potb];
    useEffect(() => {
            const handleScroll = () => {
              const scrollY = window.scrollY;
              const parallax = document.querySelector('.org-img') as HTMLElement;
              if (parallax) {
                parallax.style.backgroundPositionY = `${scrollY * 0.2}px`;
              }
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
          }, []);
  return (
    <header className="App-header">
        {aboutInfo()}
        {/* {aboutInfo2(mediaArr)} */}
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

const aboutInfo = () => {
  return (
      <div className="container pagedisplay">
          <OrganizationCard obj={orgInfoList[0]} />
          <div className="row org-img"
                  style={{
                  backgroundImage: `url(${bb4})`,
                  }}>
          </div>
          <OrganizationCard obj={orgInfoList[1]} />
          <div className="row org-img"
                  style={{
                  backgroundImage: `url(${potb})`,
                  }}>
          </div>
          <div className="grid-container2 padVertical">
            <OrganizationCard obj={orgInfoList[2]} />
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId("https://www.youtube.com/watch?v=Xmbe9Y5cNpE")}`}
                title={`Open Jam Intro`}
                className="orgVid w-full h-full rounded-2xl shadow-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div>
        </div>
  )
}

const aboutInfo2 = (mediaArr: string[]) => {
  return(
        <div className="container pagedisplay">
        <div className="row">
        {orgInfoList.map((info, i) => {
          const media = mediaArr[i];
          const isYouTube = media?.includes('youtube.com') || media?.includes('youtu.be');

          // Alternate layout:
          const isEven = i % 2 === 0;

          const mediaElement = isYouTube ? (
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(media)}`}
                title={`YouTube video ${i}`}
                className="orgVid w-full h-full rounded-2xl shadow-lg"
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
            <div className="grid-container2">
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
            </div>
          );
        })}
        </div>
      </div>
  )
}