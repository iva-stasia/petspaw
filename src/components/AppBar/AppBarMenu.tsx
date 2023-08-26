import React from "react";
import IconLink from "../IconLink";

const links = [
  {
    title: "like",
    url: "/likes",
  },
  {
    title: "fav",
    url: "/favourites",
  },
  {
    title: "dislike",
    url: "/dislikes",
  },
];

const AppBarMenu = () => {
  return links.map(({ title, url }) => (
    <IconLink key={title} icon={title} url={url} />
  ));
};

export default AppBarMenu;
