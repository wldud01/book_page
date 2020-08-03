import React from "react";
import "./Logo.css";
import "./Routes";
import "./Search.css";

import qs from "qs";
import Searchbar from "../component/Searchbar";
import crawling from "../scrapping";

const Search = (props) => {
  /*
  const { book_title } = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(book_title);
  */
  return (
    <div className="main">
      <div className="recommend">
        <button className="recomend_site">교보문고</button>
        <button className="recomend_site">Yes24</button>
        <button className="recomend_site">알라딘</button>
        <button className="recomend_site">노란책</button>
        <button className="recomend_site">Gmarket</button>

        <div className="recomend_book"></div>
      </div>

      <div className="main_result_space">
        <div className="Main_search_box">
          <Searchbar />
        </div>
        <div className="Mp_search_text">에 대한 검색 결과</div>
        <div className="book_result"></div>
      </div>
    </div>
  );
};

export default Search;
