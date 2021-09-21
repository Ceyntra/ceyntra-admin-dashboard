import {
  Mail,
  MoveToInbox,
  Home,
  Flight,
  Place,
  Hotel,
  LocalTaxi,
  EmojiPeople,
  Build,
  Message,
  Person,
  Add,
} from "@material-ui/icons";
// import NavItem  from './NavItem';
import React from "react";
const menuItems = [
  {
    title: "Dashboard",
    icon: <Home />,
    active: false,
    link: "/home",
  },
  {
    title: "Travellers",
    icon: <Flight />,
    active: false,
    link: "/home/travellers",
  },
  {
    title: "Places",
    icon: <Place />,
    active: false,
    link: "/home/places",
  },
  {
    title: "Add Places",
    icon: <Add/>,
    active: false,
    link: "/home/newplace",
  },
  {
    title: "Services",
    icon: <Build />,
    active: false,
    link: "/home/services",
  },
  {
    title: "Hotel",
    icon: <Hotel />,
    active: false,
    link: "/home/hotels",
  },
  {
    title: "Taxis",
    icon: <LocalTaxi />,
    active: false,
    link: "/home/taxis",
  },
  {
    title: "Guides",
    icon: <EmojiPeople />,
    active: false,
    link: "/home/guides",
  },
  {
    title: "Messages",
    icon: <Message />,
    active: false,
    link: "/home/messages",
  },
  {
    title: "Profile",
    icon: <Person />,
    active: false,
    link: "/home/profile",
  },
];

export default menuItems;
