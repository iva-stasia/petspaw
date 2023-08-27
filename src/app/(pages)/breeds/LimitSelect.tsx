import SelectBase from "@src/components/SelectBase";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const limitOptions = ["5", "10", "15", "20"];

const LimitSelect = () => {
  const [limit, setLimit] = useState("10");
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.set("limit", limit);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${currentRoute}${query}`);
  }, [limit, currentRoute, searchParams, router]);

  return (
    <SelectBase>
      <select
        name="breeds"
        id="breeds-select"
        onChange={(e) => setLimit(e.target.value)}
        value={limit}
        className="select_base"
      >
        {limitOptions.map((option) => (
          <option key={option} value={option}>
            Limit: {option}
          </option>
        ))}
      </select>
    </SelectBase>
  );
};

export default LimitSelect;