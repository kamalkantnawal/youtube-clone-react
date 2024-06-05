import { Button, Input } from "antd";
import { SearchDiv } from "./Style";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <SearchDiv>
      <Input className="search" />
      <Button className="button" style={{ border: "0.3px solid #d3d0d0" }}>
        <IoMdSearch size={24} />
      </Button>
    </SearchDiv>
  );
};

export default Search;
