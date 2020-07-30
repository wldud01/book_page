import React, { Component } from 'react';
import './Mainpage.css';
import './Logo.css';






class Main extends Component {
        state ={
            book:""
        }

//input이 변하는 상황을 확인하기 위해 작성
    handleChange = e=>{
        this.setState({
            book:e.target.value
        });
    };
/*
    handleSubmit =e=>{
        e.preventDefault();  //페이지 로딩 방지
        //this.props.onCreate(this.state)  //상태값을 부모에게 전달
        //상태 초기화
        this.setState({
            book:"",
        });
    };
    */
    render(){
        const book = this.state.book;
        return (
        <div className = "main">
            <div className="Logo">
                <h1>LOGO</h1>
            </div>
            <div id = "search">
                <form>
                        <input type = "text"
                                title="검색"
                                name = "booktitle"
                                value = {book}
                                onChange = {this.handleChange}
                                className = "search_box"
                                placeholder="검색어를 입력하세요..."
                        />
                        <button type ="submit"
                                className="search_button"
                             
                                ><h3>검색</h3>
                        </button>
                </form>
            </div>
            <div id = "sub_script">
                <section>
                    합리적인 가격에 책을 찾아보세요.<br/>
                    액셀 형식의 견적서도 쉽고 빠르게 만들어 드립니다!
                </section>
            </div>

            <div id = "footer">
                <div className = "Date_Time">
                    {/*<Clock className="Date" format = {'YYYY-MM-DD'} ticking ={true} timezone ={'Korea'}/>
                    <Clock className="Time" format = {'hh:mm:ss'} ticking ={true} timezone ={'Korea'}/>*/}
                </div>
            </div>
        </div>
        )
    }
}


export default Main;  //값이 바뀔 때 마다 새로 렌더링됨