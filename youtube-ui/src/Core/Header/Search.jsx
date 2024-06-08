import { Autocomplete, SearchDiv } from "./Style";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_SEARCH_API } from "../Constants";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../Store/Reducers/ProjectInfo";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const cacheSearch = useSelector((store) => store.project.cacheSearchResult);
  const url = YOUTUBE_SEARCH_API + searchQuery;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (cacheSearch[searchQuery]) {
        setSuggestion(cacheSearch[searchQuery]);
      } else {
        getSearchResult();
      }
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  const getSearchResult = async () => {
    try {
      const data = await axios(url);
      setSuggestion(data?.data[1]);

      dispatch(
        cacheResults({
          [searchQuery]: data?.data[1],
        })
      );
    } catch (err) {
      console.error("Error Fetching Search Result", err);
    }
  };

  return (
    <div>
      <SearchDiv>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          className="search"
        />
        <Button className="button" style={{ border: "0.3px solid #d3d0d0" }}>
          <IoMdSearch size={24} />
        </Button>
      </SearchDiv>
      {suggestion?.length > 0 && showSuggestion && (
        <Autocomplete>
          <ul>
            {suggestion.map((item, index) => (
              <li className="li" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </Autocomplete>
      )}
    </div>
  );
};

export default Search;
