import { IoHomeOutline } from "react-icons/io5";
import { GiLoveSong } from "react-icons/gi";
import { MdSubscriptions } from "react-icons/md";

export const sidebarOptions = [
  {
    label: "Home",
    icon: IoHomeOutline,
    key: "home",
  },
  {
    label: "Shorts",
    key: "shorts",
    icon: GiLoveSong,
  },
  {
    label: "Subscriptions",
    key: "subscriptions",
    icon: MdSubscriptions,
  },
];

export const ButtonListOptions = [
  {
    label: "All",
    key: "all",
  },
  {
    label: "JavaScript",
    key: "javascript",
  },
  {
    label: "Movies",
    key: "movies",
  },
  {
    label: "Data Structure",
    key: "datastucute",
  },
  {
    label: "Skills",
    key: "skills",
  },
  {
    label: "News",
    key: "news",
  },
  {
    label: "Live",
    key: "live",
  },
  {
    label: "New-Age-Music",
    key: "newagemusic",
  },
  {
    label: "Podcats",
    key: "podcats",
  },

  {
    label: "Music",
    key: "music",
  },

  {
    label: "Gaming",
    key: "gaming",
  },
  {
    label: "Cricket",
    key: "cricket",
  },
];

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=";
//"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=";

//"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=");
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
