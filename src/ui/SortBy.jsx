import { useSearchParams } from "react-router-dom";
import Select from "../ui/Select";

function SortBy({ field, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      sortValue={sortBy}
    ></Select>
  );
}

export default SortBy;
