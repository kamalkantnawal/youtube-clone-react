import { Button, Input } from "antd";

import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="searchBar">
      <Input type="text" style={{ width: "50%" }} className="round-right" />
      <Button className="icon round-left">
        <IoMdSearch size={28} />
      </Button>
    </div>
  );
};

export default Search;
