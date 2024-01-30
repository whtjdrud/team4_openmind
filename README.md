## 코드잇 프론트엔드 부트캠프 1기 기초 프로젝트

## 📜 프로젝트 개요

익명 질문 서비스 App

## 👉🏻 멤버 소개

| <img width="100"  alt="image" src="https://avatars.githubusercontent.com/u/102002013?v=4"> | <img width="100" alt="image" src="https://media.discordapp.net/attachments/1187367966237532240/1201753397985030164/ee7ae933e1fc9f16.jpg?ex=65caf711&is=65b88211&hm=096f35503d96fb647a710e6f888e08d94828d872a51efb6e1a8c53c85ec5872c&=&format=webp"> | <img width="100" alt="image" src='https://avatars.githubusercontent.com/u/135799803?v=4'> | <img width="100"  alt="image" src="https://github.com/mingzzi96/js-deep-dive-study/assets/134386378/49168e9e-0162-49a6-b80e-95a52b60eb45"> | <img width="100" alt="image" src="https://avatars.githubusercontent.com/u/126558640?v=4"> |
| :-: | :-: | :-: | :-: | :-: |
| [박건호](https://github.com/pgunoya) | [박지용](https://github.com/jiyong0106) | [이윤성](https://github.com/yunsunglee2) | [조성경](https://github.com/whtjdrud) | [조현진](https://github.com/ahrrrl) |

### 🔗 [배포 사이트](https://mokoko-openmind.netlify.app/)

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

## 🔧구현 방법 🦖🦕🐳🐬🐊🐷

### 1. 홈페이지

> HomePage, [LoginToggleLogic](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fuzqq2%2FbtsEa9YIkYU%2FERbMQ0Q6tB9yvg8YzdRNDK%2Fimg.png) Component
  - Api를 조회해서 inputvalue값이 result.name과 같으면 result.name으로 로그인을 하고 새로운 정보는 post 요청 후 로그인 하도록 했습니다. 
  - 데이터를 localStorage에 저장해 브라우저가 꺼져도 데이터가 남으며 다른 페이지에서도 사용할 수 있도록 했습니다. 
  - useEffect 훅을 이용해서 페이지가 렌더링될 때 localStorage에 저장된 로그인 정보를 확인하고 유지되도록 설정했습니다. 

### 2. 리스트 페이지

> LocalProfile Component

- localstorage의 ID값을 이용해 특정 JSON 데이터를 받아와 로그인 유저의 이름과 사진을 표시하게 했습니다.

> button Component

- 버튼을 호버하면 반응하게 css처리를 하였고 클릭하면 Link로 답변하기 페이지로 이동합니다.
- localstorage에 아이디가 없다면 버튼이 보이지 않도록하였습니다.

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

> QuestionModal Component

- props를 이용하여 질문대상의 data를 전달받아 질문대상의 정보를 나타냈으며 textarea의 내용을 해당data에 있는 id로 POST하게 했습니다.

### 4. 답변하기 페이지

### 5. NotFound 페이지

> NotFound Component

- URL에 없는 주소를 입력했을 경우 나오는 페이지를 만들었습니다.
