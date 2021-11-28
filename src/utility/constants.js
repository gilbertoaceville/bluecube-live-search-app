import { IoHome } from "@react-icons/all-files/io5/IoHome";
import { IoMailUnread } from "@react-icons/all-files/io5/IoMailUnread";
import { HiChartBar } from "@react-icons/all-files/hi/HiChartBar";
import { GiCornerFlag } from "@react-icons/all-files/gi/GiCornerFlag";
import { GiPartyPopper } from "@react-icons/all-files/gi/GiPartyPopper";
import { HiLink } from "@react-icons/all-files/hi/HiLink";
import { GiGolfFlag } from "@react-icons/all-files/gi/GiGolfFlag";
import { HiUsers } from "@react-icons/all-files/hi/HiUsers";

export const primaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-blue");
export const grayColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-gray");
export const redColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-red");

export const staticUrL = "https://ik.imagekit.io/xitvuuh9spa/woman_cex79V6c1.png";

export const profileUrl =
  "https://images.unsplash.com/photo-1526511253005-9a4a8cde2956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzgwNDQ4NTI&ixlib=rb-1.2.1&q=80&w=200";

export const pageLinks = [
  { icon: <IoHome />, ref: "Home" },
  { icon: <IoMailUnread />, ref: "Message" },
  { ref: "Share" },
  { icon: <HiChartBar />, ref: "Ranking" },
  { icon: <GiCornerFlag />, ref: "Challenge" },
  { icon: <GiPartyPopper />, ref: "Party" },
  { icon: <HiLink />, ref: "Connect" },
  { icon: <GiGolfFlag />, ref: "Parade" },
  { icon: <HiUsers />, ref: "Group" },
];

export const lists = [
  "world",
  "following",
  "popular",
  "post",
  "gender",
  "location",
  "profession",
];

export const notifyList = [
  {
    title: "Michael liked you!",
    timer: "About 20 minutes ago",
    img: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NDh8MHwxfHNlYXJjaHwyMHx8bWVufGVufDB8fHx8MTYzODA1MzkzNg&ixlib=rb-1.2.1&q=80&w=200",
    latest: false,
  },
  {
    title: "Jack liked you!",
    timer: "About 40 minutes ago",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NDh8MHwxfHNlYXJjaHwxN3x8bWVufGVufDB8fHx8MTYzODA1MzkzNg&ixlib=rb-1.2.1&q=80&w=200",
    latest: true,
  },
  {
    title: "Martin commented on your photo!",
    timer: "About 56 minutes ago",
    img: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2NDh8MHwxfHNlYXJjaHwxNHx8bWVufGVufDB8fHx8MTYzODA1MzkzNg&ixlib=rb-1.2.1&q=80&w=200",
    latest: true,
  },
];
