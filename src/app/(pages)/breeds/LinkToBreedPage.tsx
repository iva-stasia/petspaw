import Link from "next/link";

interface LinkToBreedPageProps {
  id: string;
  name: string;
}

const LinkToBreedPage = ({ id, name }: LinkToBreedPageProps) => {
  return (
    <Link
      href={`breeds/${id}`}
      className="absolute h-full w-full bg-red/60 cursor-pointer z-10 opacity-0 hover:opacity-100 transition-all"
    >
      <div className="h-full p-2.5 flex items-end">
        <div className="py-[5px] px-2.5 w-full text-center text-red bg-white rounded-[10px]">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default LinkToBreedPage;
