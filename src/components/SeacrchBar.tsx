"use client";

import { useState } from "react";
import SearchMenuFecturer from "./SearchMenuFecturer";

export default function SeacrchBar() {
  const [menuFecturer, setMenuFecturer] = useState("");
  const handleSearch = () => {};
  return (
    <form
      className="searchbar"
      onSubmit={handleSearch}
    >
      <div className="searchbar__item">
        <SearchMenuFecturer
          menuFecturer={menuFecturer}
          setMenuFecturer={setMenuFecturer}
        />
      </div>
    </form>
  );
}
