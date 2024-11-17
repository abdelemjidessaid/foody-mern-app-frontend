import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-lg font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span className="flex justify-center items-center">
        {total} Restaurant{total > 1 ? "s" : ""} found in
        <span className="ml-2 font-bold text-blue-500">{city.toLocaleUpperCase()}</span>
        <Link to="/" className="ml-3 underline text-sm font-semibold cursor-pointer text-blue-500">
          Change Location
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
