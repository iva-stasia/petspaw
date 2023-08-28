import SelectBase from "@src/components/SelectBase";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const TypeSelect = () => {
  const [type, setType] = useState("static");
  const currentRoute = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("type", type);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${currentRoute}${query}`);
  }, [type, currentRoute, searchParams, router]);

  return (
    <div>
      <label htmlFor="type-select" className="select_label">
        Type
      </label>
      <SelectBase>
        <select
          name="type"
          id="type-select"
          onChange={(e) => setType(e.target.value)}
          value={type}
          className="select_base bg-white"
        >
          <option value="all">All</option>
          <option value="static">Static</option>
          <option value="animated">Animated</option>
        </select>
      </SelectBase>
    </div>
  );
};

export default TypeSelect;
