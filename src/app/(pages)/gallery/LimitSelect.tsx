import SelectBase from "@src/components/SelectBase";
import { LIMIT_OPTIONS } from "@src/utils/constants";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LimitSelect = () => {
  const [limit, setLimit] = useState("5");
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
    <div className="flex-1">
      <label htmlFor="limit-select-gallery" className="select_label">
        Limit
      </label>
      <SelectBase>
        <select
          name="limit"
          id="limit-select-gallery"
          onChange={(e) => setLimit(e.target.value)}
          value={limit}
          className="select_base bg-white"
        >
          {LIMIT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option} items per page
            </option>
          ))}
        </select>
      </SelectBase>
    </div>
  );
};

export default LimitSelect;
