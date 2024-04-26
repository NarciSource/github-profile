# Next.js / Github 프로필 페이지 클론코딩

> Github 프로필 페이지 클론코딩

## 🚩 목차

-   [🛠️ 기술 스택](#%EF%B8%8F-기술-스택)
-   [⚙️ 주요 기능](#%EF%B8%8F-주요-기능)
-   [🎨 UI](#-ui)
-   [📂 프로젝트 구조](#-프로젝트-구조)
-   [🚀 실행 방법](#-실행-방법)

## 🛠️ 기술 스택

-   [![Next.js](https://img.shields.io/badge/Next.js-v14.2.3-%23000000?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
-   ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![CSS](https://img.shields.io/badge/CSS3-%231572B6?style=flat-square&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=flat-square&logo=html5&logoColor=white) [![Axios](https://img.shields.io/badge/Axios-%235A29E4?style=flat-square&logo=axios)](https://axios-http.com/kr/docs/intro)
-   [![styled-components](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)](https://styled-components.com/)

## ⚙️ 주요 기능

-   깃헙의 프로필의 레포지토리 탭 만들기
    -   https://github.com/{유저이름}?tab=repositories
-   헤더에 유저이름으로 검색 기능
-   404 오류 페이지

## 🎨 UI

<img alt="홈페이지" src="https://github.com/NarciSource/github-profile/assets/26417221/e95f237b-cf83-4435-b4a0-1aa0318847c8" width="30%" /> 
<img alt="사용자페이지" src="https://github.com/NarciSource/github-profile/assets/26417221/8cfec002-3d96-4dfd-b815-5889bb042b86" width="30%" />
<img alt="오류페이지" src="https://github.com/NarciSource/github-profile/assets/26417221/51f04c0d-7e75-462c-ab6e-51d3d901cfbb" width="30%" />

## 📂 프로젝트 구조

```
github-profile
├─ .env.local
├─ .eslintrc.json
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.jsx
│  ├─ not-found.jsx
│  ├─ page.jsx
│  ├─ page.module.css
│  ├─ users
│  │  └─ [name]
│  │     ├─ layout.jsx
│  │     ├─ page.jsx
│  │     └─ _components
│  │        ├─ Profile.jsx
│  │        └─ Repositories.jsx
│  └─ _components
│     └─ Header.jsx
├─ jsconfig.json
├─ network
│  ├─ getProfile.js
│  └─ getRepos.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ 404-1.png
│  ├─ 404-2.png
│  ├─ 404-3.png
│  ├─ 404.jpg
│  ├─ frontdoor.png
│  ├─ next.svg
│  └─ vercel.svg
└─ README.md
```

## 🚀 실행 방법

### 추가 정보

.env 파일로 REACT_APP_GITHUB_AUTH에 [사용자 엑세스 토큰 추가](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#authentication)로 호출 횟수(시간 당 60회) 제한 해결

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
