// console.log("Hello World!");


// Express는 요청을 받고 돌려주는(응답하는) npm 라이브러리, 요청하는 라이브러리로는 axios가 있다.
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
// cors 권한 설정. 다른 html에서 이 js를 사용할 수 있음. cors()에서 안을 비워두면 모든 요청 허용
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
});


// 파라미터를 이용한 get
app.get('/user/param/:id', (req, res) => {
    const q = req.params; // q = { id: '파라미터의 :id' }의 key : value형태
    res.send('Hello ' + q.id + '!');
});

// 쿼리를 이용한 get
app.get('/user/query/:id', (req, res) => {
    const p = req.query; // 파라미터 여러개를 쓰는 느낌? user/quary/'유저아이디'?'변수1'=aaa&'변수2'=bbb... 와 같이 쓰면 {변수1 : 'aaa', 변수2 : 'bbb' ... } 와 같은 형태가 됨
    res.send('Hello ' + p.id + '! You are ' + p.age + ' years old!'); // ?id=loitec&age=20 의 예제 결과물 : Hello loitec! You are 20 years old!
});

// 파라미터 예제
app.get('/user/sound/:animal', (req, res) => {
    const {animal} = req.params; // req.param이 json 데이터이기 때문에 바로 json으로 빠르게 넣을 수 있음 /user/sound/:animal 에서 변수명이 :animal이기에 {animal}로 사용
    if (animal == "dog") {
        res.send({'sound' : "멍멍"});
    }else if (animal == "cat") {
        res.send({'sound' : "야옹"});
    }else if (animal == "pig") {
        res.send({'sound' : "꿀꿀"});
    }else {
        res.send({'sound' : "알수없음"});
    };
});

// post 방법도 있음 나중에 따로 공부해보자

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`) // ' 말고 `사용 가능...? `` 사용 시 ${} 로 귀찮음 없이 변수를 사용 가능
})

/**
 * Port = 서버에 입장하는 입구, 내선번호 같은 것. 국제표준으로 정해진 포트가 있음 예를들면 https포트 = 443
 * localhost = 내 컴퓨터로 입장
 * app.get = http 메소드, 요청의 목적, 종류를 알리는 수단. get, post 방식이 대표적. get은 주소창 입력이다.
 * '/' = 라우팅, 경로 선택 프로세스 example.com/about 같은 주소에서의 그 /이다. /만 쓰면 루트 주소
 *  a(b()) = 콜백함수, 함수를 순차적으로 사용할 때 유용함. a(b()) 이면 a함수를 실행하고 b함수를 실행 (call-back) 한다. 동기성, 비동기성과 관련 있음
 * ex) setTimeout(func(), time) = time(ms)가 지난 뒤에 func()를 실행
 * 즉 app.get('/', function(req, res) { ... } -> get으로 첫번째 파라미터 주소에(여기서는 '/' 루트주소) 라우팅 되었을 때 function으로 응답한다. req=리퀘스트 요청, res=리스폰스 응답
 * listen은 서버가 켜져있는 한 항상 하고있는중
 */