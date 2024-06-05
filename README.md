<div align="center">
  <h1>Yelp Camp : 전 세계 캠핑 리뷰사이트</h1>
</div>

<br>
캠핑인들을 위한 전 세계 캠핑 정보를 확인하고 리뷰를 쓸 수 있는 사이트<br/>
<br>

## 개발기간

2023.03 ~ 2023.04

## 배포주소

https://yelpcamp-n42p.onrender.com

## 테스트 계정

```
ID : test
PW : 1111
```

## 개발환경

- 프론트엔드
  <img alt="Static Badge" src="https://img.shields.io/badge/HTML-%23E34F26?style=flat-square&logo=HTML5&logoColor=white">
  <img alt="Static Badge" src="https://img.shields.io/badge/CSS-%231572B6?style=flat-square&logo=CSS3&logoColor=white">
  <img alt="Static Badge" src="https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img alt="Static Badge" src="https://img.shields.io/badge/Mapbox-%23000000?style=flat-square&logo=Mapbox&logoColor=white">
  <img alt="Static Badge" src="https://img.shields.io/badge/EJS-%23B4CA65?style=flat-square&logo=ejs&logoColor=black">

- 백엔드
  <img src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js"/> <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img alt="Static Badge" src="https://img.shields.io/badge/Passport-%2334E27A?style=flat-square&logo=passport&logoColor=white">
  <img alt="Static Badge" src="https://img.shields.io/badge/Cloudinary-%233448C5?style=flat-square&logo=Cloudinary&logoColor=white">

## 상세 기능

- Flash 메세지를 통해 성공 혹은 실패 여부를 사용자에게 전달합니다.
- 캠핑장 및 리뷰 CRUD
- Mapbox를 사용한 위치 정보 제공
- Cloudinary를 통한 이미지 업로드 관리

### 페이지 별 기능

- **홈페이지** <br>
  간단한 네비게이션 바가 있습니다.
- **메인 페이지** <br>
  `mapbox`를 활용해서 세계 지도를 띄웠습니다. 마커 기능을 활용해서 캠핑장 위치를 표시했으며 클릭 시, 간단한 정보를 띄웁니다.
  지도 아래엔 유저들이 등록한 캠핑장이 띄워집니다.
- **상세 페이지** <br>
  해당 캠핑장을 id로 조회하고 리뷰와 작성자 데이터를 populate합니다. 미니맵 역시 `mapbox`를 사용했고 각 유저들은 해당 게시글에 별점을 포함한 리뷰를 등록할 수 있습니다.
- **캠핑장 추가 및 수정 페이지** <br>
  추가 페이지에선 캠핑장을 등록할 수 있습니다. 이때 등록한 사진은 `cloudinary`에 등록됩니다. 위치는 `mapbox`의 지오코딩 API를 호출해 좌표 데이터를 가져옵니다. 수정 페이지에선 해당 캠핑장을 수정할 수 있습니다. 삭제할 이미지가 있는 경우 `cloudinary`에서도 삭제합니다.
- **로그인 및 등록 페이지** <br>
  `passport`을 사용해 로그인 및 등록을 합니다.

## 특이점

1. `Joi` 라이브러리를 사용해 유효성 검사를 실시했습니다. 예시로 입력칸에 HTML을 적는다면 HTML태그를 자동으로 지우는 기능을 사용했습니다.
2. **커스텀 오류처리**: ExpressError 이라는 클래스를 사용해 커스텀 오류 메세지와 상태 코드를 던집니다.
3. `Helmet` 모듈을 사용해 보안작업을 했습니다. 예시로 다양한 외부소스에 대한 CSP설정을 통해 특정 URL에서만 스크립트, 스타일, 이미지 등을 로드하도록 허용했습니다. 또한 `express-mongo-sanitize`을 통해 데이터 베이스 쿼리에 악의적인 코드가 주입되지 않도록 했습니다.

4. **개발 환경과 프로덕션 환경을 구분**해서 환경변수를 설정했습니다. 개발 환경에서만 .env파일을 사용하고 프로덕션 환경에선 시스템 환경 변수를 사용하도록 했습니다.
5. **세션 관리**: 세션 데이터를 관리하기 위해 **express-session**을 사용했습니다. 또한 쿠키 설정을 통해 클라이언트에서 JavaScript로 쿠키에 접근하지 못하게 하고 HTTPS 연결에서만 쿠키를 전송하도록 설정했습니다.

## 화면 구성

- 반응형 웹을 적용하여 태블릿 및 모바일 환경에서는 다르게 보일 수 있음

| 홈페이지                                                                                                   | 메인페이지                                                                                                   | 추가 및 수정페이지                                                                                                   |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| ![홈페이지](https://github.com/yeonguk0201/YelpCamp/assets/105638310/d804a3a3-b459-4294-90fb-01c726dc7c4b) | ![메인페이지](https://github.com/yeonguk0201/YelpCamp/assets/105638310/c2b8a164-70a3-4478-9a91-d23e332ba52d) | ![추가 및 수정페이지](https://github.com/yeonguk0201/YelpCamp/assets/105638310/e420945e-1390-4d74-b26d-3b0b9a184cb5) |

| 상세페이지 |     |     |
| ---------- | --- | --- |

| ![상세페이지](https://github.com/yeonguk0201/YelpCamp/assets/105638310/95b49506-41c5-442d-953d-a2039ae0e833)
