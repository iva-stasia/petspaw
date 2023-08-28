import MenuItem from "./MenuItem";

const links = [
  {
    title: "Voting",
    url: "/voting",
    image: "/vote-table.svg",
  },
  {
    title: "Breeds",
    url: "/breeds?limit=10",
    image: "/pet-breeds.svg",
  },
  {
    title: "Gallery",
    url: "/gallery?limit=5",
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
