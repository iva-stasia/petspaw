import Icon from "@src/components/Icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface SortBtnProps {
  icon: string;
}

type Order = "asc" | "desc";

const SortBtn = ({ icon }: SortBtnProps) => {
  const [order, setOrder] = useState<Order>("asc");
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSort = () => {
    setOrder(icon === "sort-revert" ? "desc" : "asc");

    if (!order) return;

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("sort", order);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${currentRoute}${query}`);
  };

  return (
    <button
      onClick={handleSort}
      className="h-10 w-10 flex items-center justify-center text-grey bg-grey-light rounded-[10px] appearance-none border-2 border-grey-light hover:border-red-light hover:cursor-pointer hover:text-red transition-colors"
    >
      <Icon icon={icon} size={20} />
    </button>
  );
};

export default SortBtn;
