import SelectBase from "@src/components/SelectBase";
import { LIMIT_OPTIONS } from "@src/utils/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LimitSelect = () => {
  const [value, setValue] = useState("10");
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const limit = searchParams.get("limit");
    if (limit) {
      setValue(limit);
    }
  }, [searchParams]);

  const handleSort = (limit: string) => {
    setValue(limit);

    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.set("limit", limit);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${currentRoute}${query}`);
  };

  return (
    <SelectBase>
      <select
        name="breeds"
        id="breeds-select"
        onChange={(e) => handleSort(e.target.value)}
        value={value}
        className="select_base text-grey bg-grey-light"
      >
        {LIMIT_OPTIONS.map((option) => (
          <option key={option} value={option}>
            Limit: {option}
          </option>
        ))}
      </select>
    </SelectBase>
  );
};

export default LimitSelect;
