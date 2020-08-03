const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;
var liList = [];


const book_title = encodeURIComponent("어린왕자");  //책 제목 검색어 어린왕자

const getHtml = async () => {     //알라딘에서 북
    try {
        return await axios.get(`https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=${book_title}&x=0&y=0`);
    } catch (error) {
        console.error(error);
    }
};

const get_Html = getHtml().then(html => {
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.ss_book_box");

    $bodyList.each(function (i, element) {
        liList[i] = {
            id: i,
            coverImg: $(this).find('img.i_cover').attr('src'),
            title: $(this).find('a.bo3 b').text(),
            writer: $(this).find('div.ss_book_list ul li a').eq(3).text(),
            translator: $(this).find('div.ss_book_list ul li a').eq(4).text(),
            publisher: $(this).find('div.ss_book_list ul li a').eq(5).text(),
            price: $(this).find('span.ss_p2').text(),
            url: $(this).find('a.bo3').attr('href')
        };
    });

    const data = liList.filter(n=>n.title);
    return data;
}).then(res=>log(res));



/* Hook
useState -> 함수형 컴포넌트에서 상태 관리를 할 수 있음
-갑변적인 상태 지님
-constg [value, setValue] = useState(0); -> 배열 비구조하 할당 문법
-value가 상태값를 나타내고 setValue가 상태 설정 함수를 나타낸다고 봄
-이 함수의 파라미터에는 상태의 기본값(useState 괄호안에 값)
 반환은 배열을 반환
-하나의 상태 값만이 관리할 수 있으므로 여러개이면 여러번 사용
-useState에는 업데이트한 상태값과 그 이전의 값을 하나의 쌍으로 가지고 있다.
-this.state랑 같은 말이지만 this.state는 병합하는 방식이고 useState는 값을 대체하는 것이다.


useEffect -> 렌더링 직후 작업을 설정
-특정 작업을 하는 Hook
-componentDidMount와 componentDidupDate랑 같은 말
- DOM에서 render 함수가 먼저 작동한 이후에 componentDidMout와 compinentDidupdate componentwillunMount가 실행됨
- componentDidMount에서 값을 ?설정을 하면 componentDidupdate에서 값이 갱신됨 componentWillunMount 에서 마우팅이 끝나고 나서 clean up (effect) 함
- componentDidMount와 componentwillunMount가 개념상 같은 effect이지만 생명주기 메서드가 이를 분리 시켜줌
- 그런데 useEffect를 사용하는 경우 componentDidMount componentDidupdate componentWillunMount를 결합시킨 느낌... 셋 모두 가까이 묶을 수 있음
*/