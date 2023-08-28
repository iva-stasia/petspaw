import SelectBase from "@src/components/SelectBase";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const OrderSelect = () => {
  const [order, setOrder] = useState("rand");
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("sort", order);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${currentRoute}${query}`);
  }, [order, currentRoute, searchParams, router]);

  return (
    <div>
      <label htmlFor="order-select" className="select_label">
        Order
      </label>
      <SelectBase>
        <select
          name="order"
          id="order-select"
          onChange={(e) => setOrder(e.target.value)}
          value={order}
          className="select_base bg-white"
        >
          <option value="rand">Random</option>
          <option value="decs">Z to A</option>
          <option value="asc">A to Z</option>
        </select>
      </SelectBase>
    </div>
  );
};

export default OrderSelect;
