import axios from "axios";
import { Video } from "../types";
import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No videos"} />
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  // CHANGING THE ABOVE LINE TO BASE_URL CAUSES ERR:CONN ERROR
  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
