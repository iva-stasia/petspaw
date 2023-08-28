import SelectBase from "@src/components/SelectBase";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface OrderSelectProps {
  order: string;
  setOrder: (breed: string) => void;
}

const OrderSelect = ({ order, setOrder }: OrderSelectProps) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sort = searchParams.get("sort");
    if (sort) {
      setOrder(sort);
    } else {
      setOrder("rand");
    }
  }, [searchParams, setOrder]);

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
