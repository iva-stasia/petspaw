import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";

const links = [
  {
    title: "Voting",
    url: "/voting",
    image: "/vote-table.svg",
  },
  {
    title: "Breeds",
    url: "/breeds",
    image: "/pet-breeds.svg",
  },
  {
    title: "Gallery",
    url: "/gallery",
    image: "/images-search.svg",
  },
];

const Menu = () => {
  return (
    <div className="flex gap-4">
      {links.map(({ title, url, image }) => (
        <MenuItem key={title} title={title} url={url} image={image} />
      ))}
    </div>
  );
};

export default Menu;
