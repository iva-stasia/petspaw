import SelectBase from "@src/components/SelectBase";
import { LIMIT_OPTIONS } from "@src/utils/constants";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface LimitSelectProps {
  limit: string;
  setLimit: (breed: string) => void;
}

const LimitSelect = ({ limit, setLimit }: LimitSelectProps) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const limitQ = searchParams.get("limit");
    if (limitQ) {
      setLimit(limitQ);
    }
  }, [searchParams, setLimit]);

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
