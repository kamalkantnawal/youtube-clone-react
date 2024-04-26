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
