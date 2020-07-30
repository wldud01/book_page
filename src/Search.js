import React, { Component } from 'react';
import './Mainpage.css';
import './Logo.css';
import './Routes';
import './Search.css';
import Main from './Main_div';

class search_page extends Component {
    handleCreate = data =>{
        console.log(data);
    }
    render(){
        return(
            <div className ="main">
                <div className="recommend">
                    <button className = "recomend_site">교보문고</button>
                    <button className = "recomend_site">Yes24</button>
                    <button className = "recomend_site">알라딘</button>
                    <button className = "recomend_site">노란책</button>
                    <button className = "recomend_site">교보문고</button>

                    <div className="recomend_book"></div>
                </div>

                <div className="main_result_space">
                    <div className = "Main_search_box">
                        <input type="text" className="Mp_search_box" />
                        <button type="submit" id="search_btn">검색</button>
                    </div>
                        
                    <div className="Mp_search_text">에 대한 검색 결과</div>
                    <div className="book_result"></div>
                </div>

            </div>
        )
    }
}
export default search_page;