import { Button, Input } from "antd";
import { SearchDiv } from "./Style";
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_SEARCH_API } from "../Constants";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const url = YOUTUBE_SEARCH_API + searchQuery;
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getSearchResult();
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);
  const getSearchResult = async () => {
    try {
      const data = await axios(url);
    } catch (err) {
      console.error("Error Fetching Search Result", err);
    }
  };
  return (
    <SearchDiv>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search"
      />
      <Button className="button" style={{ border: "0.3px solid #d3d0d0" }}>
        <IoMdSearch size={24} />
      </Button>
    </SearchDiv>
  );
};

export default Search;
