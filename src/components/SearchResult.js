import { Link } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = ({ result }) => {
  return (
    <div className="search-result">
      <Link to="/initial">
        {result.name}
        <p>{result.phone}</p>
        <p>{result.email}</p>
      </Link>
    </div>
  );
};

export default SearchResult;
