import axios from "axios";
import { Video } from "../types";
import NoResults from "../components/NoResults";
import VideoCard from "../components/VideoCard";

// Content Push 1
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

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = null;
  if (topic) {
    response = await axios.get(
      `https://tiktok-clone-jacob-stein1.vercel.app/api/discover/${topic}`
    );
  } else {
    response = await axios.get(
      `https://tiktok-clone-jacob-stein1.vercel.app/api/post`
    );
    // CHANGING THE ABOVE LINE TO BASE_URL CAUSES ERR:CONN ERROR
  }
  return {
    props: {
      videos: response.data,
    },
  };
};

export default Home;
