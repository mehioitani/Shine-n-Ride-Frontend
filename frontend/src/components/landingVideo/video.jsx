import DetailingVideo from '../../assets/videos/detailingVideo.mp4';
import './video.css'

const Video = () => {
  return (
   <div className="detailing-video">
    {/* loop controls */}
<video  autoPlay muted  >
<source src={DetailingVideo} type="video/mp4" />
Your browser does not support the video tag.
</video>
</div>
  );
};

export default Video;
