import SelectBase from "@src/components/SelectBase";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface TypeSelectProps {
  type: string;
  setType: (breed: string) => void;
}

const TypeSelect = ({ type, setType }: TypeSelectProps) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setType(type);
    } else {
      setType("All");
    }
  }, [searchParams, setType]);

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
