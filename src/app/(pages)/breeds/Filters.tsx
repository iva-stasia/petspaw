import BreedSelect from "./BreedSelect";
import LimitSelect from "./LimitSelect";
import SortBtn from "./SortBtn";

const Filters = () => {
  return (
    <div className="flex-1 flex gap-2.5 ">
      <div className="flex-1">
        <BreedSelect />
      </div>
      <LimitSelect />
      <SortBtn icon="sort" />
      <SortBtn icon="sort-revert" />
    </div>
  );
};

export default Filters;
