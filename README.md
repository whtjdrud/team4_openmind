# 코드잇 프론트엔드 부트캠프 1기 기초 프로젝트

## 📜 프로젝트 개요

익명 질문 서비스 App <br>

## 👉🏻 멤버 소개

| <img width="100"  alt="image" src="https://avatars.githubusercontent.com/u/102002013?v=4"> | <img width="100" alt="image" src="https://media.discordapp.net/attachments/1187367966237532240/1201753397985030164/ee7ae933e1fc9f16.jpg?ex=65caf711&is=65b88211&hm=096f35503d96fb647a710e6f888e08d94828d872a51efb6e1a8c53c85ec5872c&=&format=webp"> | <img width="100" alt="image" src='https://avatars.githubusercontent.com/u/135799803?v=4'> | <img width="100"  alt="image" src="https://github.com/mingzzi96/js-deep-dive-study/assets/134386378/49168e9e-0162-49a6-b80e-95a52b60eb45"> | <img width="100" alt="image" src="https://avatars.githubusercontent.com/u/126558640?v=4"> |
| :-: | :-: | :-: | :-: | :-: |
| [박건호](https://github.com/pgunoya) | [박지용](https://github.com/jiyong0106) | [이윤성](https://github.com/yunsunglee2) | [조성경](https://github.com/whtjdrud) | [조현진](https://github.com/ahrrrl) |

<br>

### 🔗 [배포 사이트](https://mokoko-openmind.netlify.app/)

<br>

## 🖥️ 프론트엔드 Tech

<div style="display:flex"> 
    <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  	<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=Styledcomponents&logoColor=white"/>
    <img src="https://img.shields.io/badge/React router-CA4245?style=for-the-badge&logo=Reactrouter&logoColor=white"/> 
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> 
    <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
    <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
    <img src="https://img.shields.io/badge/axios-DA291C?style=for-the-badge&logo=axios&logoColor=white">
</div>

<br>

## 🖼 실행 영상

- 질문 ![질문](https://cdn.discordapp.com/attachments/1187367966237532240/1201748609880838194/13fa6793b0916a27.gif?ex=65caf29c&is=65b87d9c&hm=8f2df412415aed5bd0021e248512f291d7aff39726c1db16efa5fd7df0a66f1d&)
- 답변 ![답변](https://cdn.discordapp.com/attachments/1187367966237532240/1201749117877878835/7e9b8530b624d5e4.gif?ex=65caf315&is=65b87e15&hm=d841960acd59b97a6c56bf7047bc10416e2c29a498503f44d2a9187dc2f9a89a&)

<br>

## 🎄 프로젝트 트리

```
src
 ┣ api          // 프로젝트에 사용된 api들
 ┣ assets       // image 파일
 ┣ components   // 공통으로 사용하는 컴포넌트
 ┣ pages        // 페이지
 ┣ style        // 전역 style
 ┣ util         // 시간 관련 함수
```

<br>

## 📍 Getting Started / 어떻게 시작하나요?

1. Repository 클론

```sh
$ git clone https://github.com/whtjdrud/team4_openmind
```

2. Dependencies 설치

```sh
$ npm install
```

3. Run 실행

```sh
$ npm start
```

<br>

## 🔧구현 방법 🦖🦕🐳🐬🐊🐷

### 1. 홈페이지

> HomePage, [LoginToggleLogic](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fuzqq2%2FbtsEa9YIkYU%2FERbMQ0Q6tB9yvg8YzdRNDK%2Fimg.png) Component

- Api를 조회해서 input값이 JSON데이터와 같으면 로그인을 하고 새로운 정보는 post 요청 후 로그인 하도록 했습니다.
- 데이터를 localStorage에 저장해 브라우저를 닫아도 데이터가 남으며 다른 페이지에서도 사용할 수 있도록 했습니다.
- useEffect 훅을 이용해서 페이지가 렌더링될 때 localStorage에 저장된 로그인 정보를 확인하고 유지되도록 설정했습니다.

### 2. 리스트 페이지

> LocalProfile Component

- localstorage의 ID값을 이용해 특정 JSON 데이터를 받아와 로그인 유저의 이름과 사진을 표시하게 했습니다.

> button Component

- 버튼을 호버하면 반응하게 css처리를 하였고 클릭하면 Link로 답변하기 페이지로 이동합니다.
- localstorage에 아이디가 없다면 버튼이 보이지 않도록하였습니다.

> ListHeader Component

- ReactRouter의 Link를 활용하여 페이지간 이동을 구현했습니다. useEffect의 dependency array에 빈 배열을 넣어 화면 초기 렌더링이 끝나면 localStorage에서 'userId'를 취득했습니다. 취득한 값은 useState의 localId 변수에 담아주어 삼항 연사자를 통해 Link 경로를 설정해 localId가 있으면 그 id 소유자의 '답변하기'페이지로 이동, 아닐 경우 홈 화면은 돌아가게 설정했습니다. 

> ListSection Component

- DropDown, UserCardList, Pagination의 상태가 서로 상호작용하므로 상위컴포넌트인 ListSection에서 상태관리를 했습니다.
- 정렬상태와 페이지상태에 따라 해당하는 유저카드 data를 fetch를 통해 가져옵니다.

> DropDown Component

- props를 이용하여 List에 필요한 정렬상태를 전달할 수 있게 했습니다.
- 각 정렬버튼에 `<Link to='/list/index?page=1&sort=name'>`를 넣어 정렬버튼을 누를시 1페이지로 돌아가게 했습니다.

> PagiNation Component

- props를 이용하여 List에 필요한 페이지상태를 전달할 수 있게 했습니다.
- Link의 query를 이용하여 해당하는 정렬과 페이지로 이동하게 하였습니다.

> UserCardList Component

- props를 이용하여 data를 전달받고 map으로 다시 각각의 Usercard에 data를 내려주어 유저카드들을 나타나게 했습니다.

### 3. 질문하기 페이지

> AskPage Component

- ReactRouter의 useParams()를 활용해 id 값을 props로 전달받아 서버에 특정 사용자의 정보를 GET 요청할 수 있게 개발했습니다. 
- API서버에서 GET요청을 통해 받은 데이터의 questionCount 값을 useState의 questionCount라는 변수로 관리해주었다. questionCount가 0이면 '질문이 없다' 페이지를 보여주고 값이 존재한다면 FeedCards Component를 출력해주는 조건부 렌더링을 활용해 개발했습니다. 
- 서버에서 받아온 데이터를 useState의 questionCount 변수에 할당하여 대상에게 남겨진 질문의 갯수가 몇개인지 나타내주는 기능을 추가하였습니다.   

> QuestionModal Component

- props를 이용하여 질문대상의 data를 전달받아 질문대상의 정보를 나타냈으며 textarea의 내용을 해당data에 있는 id로 POST하게 했습니다.

### 4. 답변하기 페이지
> AnswerKebab, KebabMenuList, FeedCard/Buttons Component
- 케밥 메뉴 추가 및 버튼 추가(답변 거절, 답변 삭제, 질문 삭제)했습니다.
- 답변 거절 기능 추가했습니다.

> Reaction Component

- 좋아요, 싫어요 버튼 누를때마다 setTimeout을 사용하여 색상 변경하게 하였고 숫자는 누를때마다 올라가는 방식으로 구현했습니다.

> AnswerPage Component

- ReactRouter의 useParams()를 활용해 id 값을 props로 전달받아 서버에 특정 사용자의 정보를 GET 요청할 수 있게 개발했습니다. 
- localStorage에서 취득한 'userId' 와 useParams로 전달받은 id가 동일해야만 '답변하기' 페이지로 이동할 수 있도록 개발했습니다.
- API서버에서 GET요청을 통해 받은 데이터의 questionCount 값을 useState의 questionCount라는 변수로 관리해주었다. questionCount가 0이면 '질문이 없다' 페이지를 보여주고 값이 존재한다면 FeedCards Component를 출력해주는 조건부 렌더링을 활용해 개발했습니다. 
- 서버에서 받아온 데이터를 useState의 questionCount 변수에 할당하여 대상에게 남겨진 질문의 갯수가 몇개인지 나타내주는 기능을 추가하였습니다.

> FeedCards Component

- 상위 컴포넌트인 AnswerPage Component에서 전달받은 useParams()의 id 값을 전달받아 API서버에서 특정 대상에게 남겨진 질문 배열을 불러옵니다. 불러온 배열들을 map()을 이용해 화면에 한번에 출력해줍니다. 
- 질문 더 불러오기: API 서버 뒷부분에 querystring 변수로 offset과 limit의 값을 관리한다. 기본 출력 질문 갯수는 6개로 LIMIT이라는 변수에 6을 할당해 사용했다. 더보기 버튼을 클릭하여 Offset값을 변경해주어 화면의 질문을 더 보여주게 만들었다. useState의 offset 변수를 통해 상태를 관리해 주었고 버튼 클릭시 GET요청을 보낸다. 질문은 offset 값이 0이 아니면 기존의 피드에 이어서 추가해주고 setOffset을 통하여 추가된 데이터의 길이 만큼 더해준다.
- Badge: useState의 answer 변수에서 답변상태를 관리해주고 조건부 렌더링으로 '답변완료', '미답변' 뱃지를 화면에 출력해준다. 
- Kebab: useState를 활용해 케밥 창의 화면 출력 유무를 관리해주었고 질문하기 페이지에서는 사용되는 FeedCard Component에서는 케밥이 보이지 않게 하기 위해서 isAskPage 라는 props를 생성해 isAskPage가 값이 있으면 케밥을 렌더링 하지 않게 개발했다. (컴포넌트의 재사용성을 위해) 
- 질문내용과 시간은 상위 컴포넌트에서 Props로 내려주는 qusetionContent와 createdAt을 받아 내용을 출력해준다. 
- 인풋의 내용은 Content라는 변수로 상태를 관리해주고 온체이니지 이벤트가 일어날때 마다 setContent를 통해 인풋의 value를 최신화한다.
- 버튼의 disable 프로퍼티를 useState의 변수인 content로 관리해주었다. 버튼이 disable상태이면 비활성화 상태를 표시해주기 위해 css로 백그라운드 색상을 변경해주었다. 버튼 클릭시 form태그의 handleSubmit 함수를 달아주어 서버에 답변을 post요청하고 답변 상태를 최신화 할수 있게 setAnswer을 props로 받아 부분 렌더링으로 화면을 출력해준다.

> Dropdown Component

- useState의 order 변수를 통해 질문의 정렬 상태를 관리합니다. 초기값은 'createdAt'으로 최근에 남겨진 질문 순으로 화면에 보여줍니다. 
- 질문순, 최신순: order 값을 onClick 이벤트를 통해 setOrder합니다. order 값이 '질문순'이고 filter 값이 없으면 질문순으로 정렬된 sortedItems를 반환하여 map() 통해 화면에 출력합니다. API서버에서 질문을 받아오는 함수를 관리해주는 useEffect의 의존성 배열에 order를 추가하여 order값이 바뀔때 마다 질문을 다시 받아와 재렌더링을 해줍니다. 
- 답변완료, 미답변: useState의 filter 변수를 통해 질문 상태를 관리합니다. 초기값은 ''이고 onClick이벤트를 통하여 setFilter 해줍니다. filter값이 존재하면 filteredItems를 반환하여 화면에 출력해줍니다. filter는 API서버에서 질문을 받아오는 함수를 관리해주는 useEffect의 의존성 배열에 추가하지 않아 기존 등록돼있던 질문에서 필터링된 질문들을 화면에 보여줍니다. 


### 5. NotFound 페이지

> NotFound Component

- URL에 없는 주소를 입력했을 경우 나오는 페이지를 만들었습니다.
