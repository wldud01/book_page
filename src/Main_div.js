import React, { useState, useEffect } from "react";
import "./Mainpage.css";
import "./Logo.css";
import Searchbar from "./component/Searchbar";

// const API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours

const Main = () => {
  //const [loading, setLoading] = useState(true);
  //const [books, setBooks] = useState([]);
  //const [errorMessage, setErrorMessage] = useState(null);

  /*
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setBooks(jsonResponse.Search);
        setLoading(false);
      });
  }, []);
  */
  /*
  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };
*/
  return (
    <div className="main">
      <div className="Logo">
        <h1>LOGO</h1>
      </div>
      <div id="search">
        <Searchbar />
      </div>
      <div id="sub_script">
        <section>
          합리적인 가격에 책을 찾아보세요.
          <br />
          액셀 형식의 견적서도 쉽고 빠르게 만들어 드립니다!
        </section>
      </div>

      <div id="footer">
        <div className="Date_Time">
          {/*<Clock className="Date" format = {'YYYY-MM-DD'} ticking ={true} timezone ={'Korea'}/>
                <Clock className="Time" format = {'hh:mm:ss'} ticking ={true} timezone ={'Korea'}/>*/}
        </div>
      </div>
    </div>
  );
};

export default Main; //값이 바뀔 때 마다 새로 렌더링됨
