# 이미지, 어디에 둬야 할까? — `src/assets` vs `public`, 그리고 `@/` alias

> **정정 공지**
> 지난 세션에서 "이미지는 전부 `public/`에 넣고 `/images/photo.png`처럼 절대경로로 쓰세요"라고 설명했는데, **이건 잘못된 설명이었습니다.**
> 대부분의 이미지는 `src/assets/`에 두고 `import`해서 써야 합니다.
> 왜 그런지, 어떻게 바꾸는지를 우리 실습 코드(`project_react_vite`)로 직접 확인해봅니다.

---

## 1. 우리 코드는 어땠나

```
project_react_vite/
├── public/
│   ├── icons/        ← svg 5개
│   └── images/       ← png 2개
└── src/
    └── components/Toast.jsx   → <img src="/icons/check.svg" />
```

7개 이미지를 전부 `public/`에 넣고, JSX에서 `"/icons/back.svg"` 같은 **문자열**로 참조했습니다.
동작은 합니다. 문제는 **"동작한다"와 "제대로 한다"는 다르다**는 것.

---

## 2. 왜 이러면 안 되는가

### 이유 ①  오타·누락을 아무도 안 잡아준다 (가장 치명적)

우리 레포에 이미 사고가 나 있었습니다. `index.html`을 보면:

```html
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
```

그런데 **`public/vite.svg`는 존재하지 않습니다.** 그런데도

- `npm run dev` → 에러 없음
- `npm run build` → 경고 하나 없이 **성공**
- `dist/index.html` → 죽은 링크가 그대로 배포됨

즉 **아무도 모르는 채로 배포까지 나갑니다.** 브라우저 콘솔의 404를 직접 열어보기 전까지는 아무 신호가 없어요.

`public`의 경로는 그냥 **문자열**입니다. 번들러 입장에서 `"/icons/back.svg"`는
`"안녕하세요"`와 똑같은 글자 뭉치라서, 파일이 실제로 있는지 확인할 방법이 없습니다.

반면 `import`는 다릅니다:

```jsx
import backIcon from "../assets/icons/back.svg";
```

파일이 없거나 경로에 오타가 있으면 **빌드가 그 자리에서 실패**합니다.
배포 후 사용자가 발견하는 대신, 내 터미널에서 30초 만에 발견합니다.

> **핵심 개념**: `src/assets`는 코드가 이미지에 **의존**한다고 선언하는 것이고,
> `public`은 "어딘가 이 주소에 파일이 있을 거야"라고 **믿는** 것입니다.

---

### 이유 ②  캐시 무효화(cache busting)가 안 된다

브라우저는 한 번 받은 이미지를 URL 기준으로 캐싱합니다.
`/images/photo.png`는 내용이 바뀌어도 **URL이 그대로**입니다.

그래서 디자이너가 이미지를 새로 주고, 우리가 파일을 갈아끼워 배포해도

> "저는 아직 예전 이미지 보이는데요?"

이런 제보가 옵니다. 브라우저가 캐시된 옛날 파일을 그대로 쓰기 때문입니다.
해결하려면 사용자에게 강력 새로고침을 시키거나, `?v=2` 같은 걸 손으로 붙여야 합니다.

`src/assets`로 `import`하면 Vite가 **내용 기반 해시**를 파일명에 박아줍니다:

```
dist/assets/photo-Bq8X3hhO.png
                 ^^^^^^^^ 파일 내용이 바뀌면 이 값도 바뀜
```

이미지를 수정하면 파일명 자체가 달라지므로 브라우저는 **무조건 새로 받습니다.**
동시에, 안 바뀐 이미지는 파일명이 그대로라 **캐시를 계속 재활용**합니다. 양쪽 다 이득이에요.

---

### 이유 ③  빌드 최적화를 하나도 못 받는다

`public/`의 파일은 Vite가 **손대지 않고 그대로 복사**만 합니다. 최적화 대상이 아니에요.

우리 프로젝트를 실제로 리팩터링하고 빌드한 결과를 비교해봅시다.

| | Before (`public/`) | After (`src/assets/`) |
|---|---|---|
| SVG 아이콘 5개 | `dist/icons/*.svg` 파일 5개 | **파일 0개** — JS 번들에 인라인 |
| PNG 2개 | `dist/images/*.png` (해시 없음) | `dist/assets/photo-Bq8X3hhO.png` (해시 있음) |
| JS 번들 | 279.3 KB | 284.9 KB (+5.6 KB) |
| **이미지 HTTP 요청 수** | **7개** | **2개** |

Vite는 **4KB 미만의 파일을 base64로 JS에 인라인**해버립니다(`build.assetsInlineLimit` 기본값 4096 bytes).
우리 SVG 5개는 전부 650~1550 bytes라 조건에 맞아서 통째로 번들 안에 들어갔습니다:

```js
// dist/assets/index-Bz0xIBjJ.js 안에서 실제로 발견됨
data:image/svg+xml,%3csvg%20width='24'%20height='24'%20vie...
```

번들이 5.6KB 늘어난 대신 **HTTP 요청 5개가 사라졌습니다.**
작은 파일은 전송량보다 요청 왕복 비용이 훨씬 큽니다. 특히 느린 모바일 네트워크에서요.

`public/`에 두면 이 최적화를 **선택할 기회조차 없습니다.**

---

### 이유 ④  배포 경로(base)가 바뀌면 전부 깨진다

GitHub Pages처럼 하위 경로에 배포하면 `vite.config.js`에 이렇게 설정합니다:

```js
export default defineConfig({ base: "/14th-TrainingSession-Front/" });
```

이때 Vite는 `import`한 이미지의 URL을 **자동으로 `/14th-.../assets/photo-xxx.png`로 고쳐줍니다.**

하지만 JSX 안의 `src="/images/photo.png"`는 그냥 JS 문자열이라 Vite가 건드리지 않습니다.
→ 브라우저는 `/images/photo.png`를 찾고, 실제 파일은 `/14th-.../images/photo.png`에 있고, **전부 404.**

이미지 7개를 손으로 다 고쳐야 합니다. 그것도 배포해보고 깨진 걸 확인한 다음에요.

---

### 이유 ⑤  안 쓰는 이미지가 계속 쌓인다

`public/`은 쓰든 안 쓰든 **전부** `dist/`에 복사됩니다.
디자인이 바뀌어서 안 쓰게 된 아이콘도 계속 배포되고, "이거 지워도 되나?"를 판단할 방법이 없어서
아무도 못 지우고 몇 년씩 쌓입니다.

`src/assets`는 `import`가 곧 사용 증거라, 전역 검색 한 번으로 안 쓰는 파일을 확인하고 지울 수 있습니다.

---

## 3. 그럼 `public/`은 왜 있는 건가

`public/`이 나쁜 게 아니라 **용도가 다릅니다.**
`public/`의 유일한 장점은 **"URL이 내가 정한 그대로 유지된다"**는 것이고,
이게 반드시 필요한 경우에만 씁니다.

### 판단 기준

**질문 하나만 던지세요: "이 파일의 URL을, 내가 아닌 다른 누군가가 알고 있어야 하나?"**

| | `src/assets/` | `public/` |
|---|---|---|
| 참조 방법 | `import`해서 변수로 | `/파일명` 절대경로 문자열 |
| 최종 파일명 | 해시 붙음 (`photo-Bq8X3hhO.png`) | 원본 그대로 (`favicon.svg`) |
| 없는 파일이면 | **빌드 에러** ✅ | 조용히 404 ❌ |
| 4KB 미만 | 자동 인라인 | 그대로 별도 파일 |
| 캐시 무효화 | 자동 | 수동 |
| `base` 대응 | 자동 | 수동 |

**`public/`에 넣어야 하는 것 (URL이 고정돼야 하는 것)**

- `favicon.svg`, `apple-touch-icon.png` — 브라우저가 정해진 위치를 찾음
- `robots.txt`, `sitemap.xml` — 검색엔진 크롤러가 고정 주소로 요청
- `og-image.png` — 카카오톡·슬랙 공유 미리보기. 크롤러가 HTML의 `<meta>` URL을 읽고 직접 가져가므로 주소가 안정적이어야 함
- 아주 큰 파일(수십 MB 영상 등) — 번들 파이프라인을 굳이 태울 이유가 없을 때

**`src/assets/`에 넣어야 하는 것 (나머지 전부)**

- 아이콘, 로고, 일러스트, 배경 이미지, 목업 사진 — **컴포넌트가 화면에 그리는 모든 이미지**
- 폰트 파일, 컴포넌트가 읽는 JSON 등

**둘 다 아닌 것**

- 서버 API로 받아온 이미지 URL(프로필 사진, 게시글 첨부 등)은 그냥 그 URL을 그대로 쓰면 됩니다.
  ```jsx
  <img src={user.profileImageUrl} />
  ```

---

## 4. 어떻게 바꾸나

### Step 1. 파일 옮기기

```bash
git mv public/icons  src/assets/icons
git mv public/images src/assets/images
```

```
src/
├── assets/
│   ├── icons/    alert.svg  back.svg  check.svg  comment.svg  like.svg
│   └── images/   photo.png  profile.png
└── components/

public/
├── favicon.svg   ← URL이 고정돼야 하는 것만 남김
└── robots.txt
```

### Step 2. 문자열 → import 로 바꾸기

**Before**

```jsx
const PageHeader = () => {
  return (
    <header>
      <img src="/icons/back.svg" alt="back" />
      {/* ↑ 그냥 문자열. 오타 나도 아무도 안 알려줌 */}
    </header>
  );
};
```

**After**

```jsx
import backIcon from "../assets/icons/back.svg";
//     ↑ 이미지도 "모듈"이다. import하면 Vite가 번들에 포함시키고
//       최종 URL 문자열(해시 포함)을 돌려준다

const PageHeader = () => {
  return (
    <header>
      <img src={backIcon} alt="back" />
      {/* ↑ 문자열이 아니라 변수. 중괄호 {} 주의 */}
    </header>
  );
};
```

여러 개일 때도 똑같습니다:

```jsx
import profileImage from "../../assets/images/profile.png";
import photoImage from "../../assets/images/photo.png";
import likeIcon from "../../assets/icons/like.svg";
import commentIcon from "../../assets/icons/comment.svg";

<img src={profileImage} alt="profile" />
<img src={photoImage} alt="photo" />
```

> `../../assets/...`가 눈에 거슬리죠? 맞습니다. 이건 **6장에서 `@/assets/...`로 정리**합니다.
> 지금은 "문자열 → import"라는 변화 하나에만 집중하세요.

> **`import backIcon from "..."`이 실제로 주는 값이 뭔가요?**
> 그냥 **문자열**입니다. `console.log(backIcon)`을 찍어보세요.
> - 개발 중: `/src/assets/icons/back.svg`
> - 빌드 후: `data:image/svg+xml,%3csvg...` (인라인된 경우) 또는 `/assets/back-a1b2c3.svg`
>
> 우리가 손으로 쓰던 경로 문자열을 **Vite가 대신 계산해주는 것**이고,
> 그 과정에서 검증·해시·인라인이 따라오는 겁니다.

### Step 3. 확인

```bash
npm run build
```

- 빌드가 통과하면 → 모든 이미지 경로가 실제로 존재한다는 뜻 (Before에는 없던 보장)
- `dist/` 안에 `icons/`, `images/` 폴더가 사라지고 `assets/` 아래 해시 파일만 남으면 성공

---

## 5. 자주 하는 실수

### ❌ 실수 1 — `src/assets` 파일을 절대경로로 참조

```jsx
<img src="/src/assets/icons/back.svg" />
```

`npm run dev`에서는 **동작합니다.** 그래서 더 위험해요.
빌드하면 `/src/` 경로 자체가 사라지므로 **배포에서만 404**가 납니다.
반드시 `import`하세요.

### ❌ 실수 2 — 경로를 동적으로 조립

```jsx
// 동작 안 함 — 번들러는 빌드 시점에 어떤 파일이 필요한지 알 수 없음
<img src={`../assets/icons/${iconName}.svg`} />
```

번들러는 코드를 **실행하지 않고 읽기만** 하므로, `iconName`에 뭐가 들어올지 알 수 없어서
어떤 파일을 번들에 포함시켜야 할지 판단하지 못합니다.

**해결 1 — 매핑 객체 (가장 명시적, 추천)**

```jsx
import checkIcon from "../assets/icons/check.svg";
import alertIcon from "../assets/icons/alert.svg";

const ICONS = { check: checkIcon, alert: alertIcon };

<img src={ICONS[type]} />
```

**해결 2 — 개수가 많으면 `import.meta.glob`**

```jsx
const icons = import.meta.glob("../assets/icons/*.svg", {
  eager: true,
  import: "default",
});

<img src={icons[`../assets/icons/${name}.svg`]} />
```

**해결 3 — `new URL` + `import.meta.url`**

```jsx
const src = new URL(`../assets/icons/${name}.svg`, import.meta.url).href;
```

### ❌ 실수 3 — CSS에서도 같은 착각

CSS의 `url()`도 똑같이 처리됩니다. 상대경로를 쓰면 Vite가 해석해줍니다.

```css
/* ✅ Vite가 경로를 해석하고 해시를 붙여줌 */
.hero { background-image: url("../assets/images/photo.png"); }

/* ❌ public 참조 — 검증도 최적화도 없음 */
.hero { background-image: url("/images/photo.png"); }
```

---

## 6. 이어서: `@/` alias — `../../` 지옥에서 벗어나기

`import`로 바꾸고 나니 새로운 불편함이 생겼습니다.

```jsx
// src/pages/post-detail/PostArticle.jsx
import profileImage from "../../assets/images/profile.png";
import photoImage from "../../assets/images/photo.png";
import likeIcon from "../../assets/icons/like.svg";
```

`../../`가 몇 개여야 맞는지 **매번 세어야 합니다.** 문제는 세 가지예요.

1. **세기 어렵다** — 폴더가 깊어질수록 `../../../`이 되고, 하나만 틀려도 에러
2. **파일을 옮기면 전부 깨진다** — `PostArticle.jsx`를 다른 폴더로 옮기는 순간 안의 모든 상대경로를 다시 계산해야 함
3. **읽어도 어디인지 모른다** — `"../../store/useToastStore"`를 보고 이게 어느 폴더인지 알려면, 지금 파일이 어디 있는지부터 확인해야 함

alias는 **"`@`는 언제나 `src` 폴더를 뜻한다"**고 약속하는 것입니다.

```jsx
import profileImage from "@/assets/images/profile.png";
import likeIcon from "@/assets/icons/like.svg";
import useToastStore from "@/store/useToastStore";
```

이제 이 파일이 어디 있든 경로가 **똑같습니다.** 파일을 옮겨도 안 깨지고, 읽는 순간 위치를 알 수 있어요.

### 설정은 두 군데에 해야 한다

여기가 제일 많이 막히는 지점입니다. **번들러와 에디터는 서로를 모릅니다.**
`@`가 뭔지 둘 다에게 각각 알려줘야 해요.

**① `vite.config.js` — 빌드할 때 Vite가 경로를 찾으라고**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // "@" 로 시작하는 import를 src 폴더의 절대경로로 바꿔준다
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

**② `jsconfig.json` (새 파일) — VSCode가 자동완성/Cmd+클릭 하라고**

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

> **검색하면 나오는 `"baseUrl": "."`는 왜 없나요?**
> 예전에는 `paths`를 쓰려면 `baseUrl`이 **반드시** 있어야 했습니다. 그래서 블로그 글 대부분에 같이 적혀 있어요.
> 하지만 TypeScript 4.1부터 `baseUrl` 없이도 `paths`를 쓸 수 있고,
> 이때 경로는 **이 설정 파일이 있는 폴더 기준**으로 해석됩니다. `"./src/*"`가 곧 `프로젝트루트/src/*`인 거죠.
>
> 게다가 `baseUrl`은 **폐기(deprecated)됐습니다.** 최신 에디터에서 넣으면 이런 경고가 뜹니다.
>
> ```
> 'baseUrl' 옵션은 더 이상 사용되지 않으며 TypeScript 7.0에서 작동하지 않습니다.
> ```
>
> 옛날 자료를 복붙하면 만나게 되는 경고이니, **`baseUrl`은 넣지 마세요.**
> (`baseUrl`이 위험했던 이유: `src`를 기준으로 잡아버리면 `import x from "store/useToastStore"`처럼
> **`@` 없이도** import가 되는데, 이러면 npm 패키지 이름인지 내 폴더인지 구분이 안 갑니다.
> `paths`만 쓰면 `@/`로 시작할 때만 동작하니 이런 혼동이 없어요.)

> **하나만 하면 어떻게 되나요?**
> - `vite.config.js`만 → **빌드는 성공하는데** VSCode가 `@/...`를 못 찾아서 빨간 줄이 뜨고, Cmd+클릭·자동완성이 안 됩니다
> - `jsconfig.json`만 → **에디터는 조용한데** 빌드가 이렇게 **실패**합니다
>   ```
>   [vite]: Rollup failed to resolve import "@/pages/post-detail/PostDetailPage"
>   from "src/App.jsx".
>   ```
>
> 둘은 완전히 별개의 프로그램이라, 한쪽 설정이 다른 쪽에 전달되지 않습니다. 반드시 둘 다.

> **`fileURLToPath(new URL(...))`는 뭔가요?**
> alias 값은 **절대경로**여야 해서 "이 설정 파일이 있는 폴더 + `/src`"를 계산하는 코드입니다.
> 예전 방식인 `path.resolve(__dirname, "./src")`를 쓰고 싶을 수 있는데,
> 우리 `package.json`에 `"type": "module"`이 있어서 이 파일은 ESM이고 **ESM에는 `__dirname`이 없습니다.**
> 그래서 대신 `import.meta.url`(현재 파일의 위치)을 기준으로 계산합니다. Vite 공식 문서 방식이에요.

### 언제 `@/`를 쓰고, 언제 `./`를 쓰나

**폴더를 벗어나면 `@/`, 같은 폴더 안이면 `./`**

```jsx
// src/pages/post-detail/CommentSection.jsx

import CommentItem from "./CommentItem";              // ✅ 같은 폴더 형제 → 상대경로
import useToastStore from "@/store/useToastStore";    // ✅ 폴더 벗어남 → alias
import profileImage from "@/assets/images/profile.png"; // ✅ 폴더 벗어남 → alias
```

같은 폴더 파일까지 `@/pages/post-detail/CommentItem`으로 쓰면 오히려 길고, "이 둘은 한 세트"라는 정보가 사라집니다.

> **기억할 규칙 하나: 코드에 `../`가 보이면 `@/`로 바꿀 신호입니다.**

### alias는 결과물을 바꾸지 않는다

실제로 확인해봤습니다. alias 적용 **전과 후의 빌드 결과**입니다.

```
적용 전:  dist/assets/index-Bz0xIBjJ.js   284.91 kB
적용 후:  dist/assets/index-Bz0xIBjJ.js   284.91 kB
```

**해시까지 완전히 같습니다.** 번들 내용이 1바이트도 안 바뀌었다는 뜻이에요.

alias는 빌드 시점에 `@/assets/...`를 `/실제/경로/src/assets/...`로 **글자만 바꿔치기**하고 끝납니다.
성능과는 아무 상관이 없고, 순수하게 **사람이 읽고 쓰기 편하려고** 하는 설정입니다.

### 알아두면 좋은 것

- **`@`는 그냥 관례입니다.** 규칙이 아니에요. `~`를 쓰는 팀도 있고, `@components`, `@assets`처럼 폴더별로 여러 개를 만들기도 합니다. 다만 `@/`가 가장 흔하니 특별한 이유가 없으면 따라가면 됩니다.
- **npm 패키지와 헷갈리지 않나요?** `@tailwindcss/vite`처럼 `@`로 시작하는 패키지가 있죠. 하지만 우리 alias는 `@` **바로 뒤에 `/`**가 오는 형태(`@/...`)라 구분됩니다.
- **TypeScript 프로젝트라면** `jsconfig.json` 대신 `tsconfig.json`(정확히는 `tsconfig.app.json`)의 `compilerOptions.paths`에 똑같이 넣습니다. (`project_ts`에서 다시 볼 내용)
  - 참고로 TS에서는 이미지 import 시 `Cannot find module '@/assets/icons/back.svg'` 에러가 날 수 있는데, `src/vite-env.d.ts`의 `/// <reference types="vite/client" />` 한 줄이 `.svg`·`.png` 같은 파일의 타입 선언을 제공합니다. Vite 템플릿에 기본으로 들어있으니 **지우지 마세요.**
- **설정 후 VSCode가 여전히 못 찾으면** 창을 다시 열거나 명령 팔레트에서 `Developer: Reload Window`를 실행하세요. `jsconfig.json`은 에디터가 시작할 때 읽습니다. `npm run dev`도 재시작해야 합니다.

### 직접 해보기

1. `vite.config.js`에 `resolve.alias` 추가
2. 루트에 `jsconfig.json` 생성
3. `npm run dev` **재시작** (설정 파일은 실행 중에 다시 안 읽습니다)
4. 아무 파일에서 `../`로 시작하는 import를 `@/`로 바꿔보기
5. `@/`를 치는 순간 VSCode가 폴더 목록을 자동완성해주면 성공
6. `@/assets/icons/없는파일.svg`로 일부러 오타를 내고 빌드 → **에러가 나야 정상** (2장 이유 ① 복습)

---

## 7. 한 줄 요약

> **컴포넌트가 화면에 그리는 이미지는 전부 `src/assets`에 넣고 `import`한다.**
> **`public`은 "URL이 반드시 이 주소여야 하는 것"(favicon, robots.txt, og-image)만 넣는다.**
> **그리고 `../`가 보이면 `@/` alias로 바꾼다.**

`import`를 쓰는 진짜 이유는 편해서가 아니라,
**"이 이미지가 정말 존재하는가?"라는 질문에 컴퓨터가 대신 답하게 만들기 때문**입니다.
사람이 확인해야 하는 일을 하나 줄이는 것, 그게 번들러를 쓰는 이유입니다.

---

## 부록. 이번에 실제로 바뀐 파일

| 파일 | 변경 |
|---|---|
| `public/icons/` → `src/assets/icons/` | svg 5개 이동 |
| `public/images/` → `src/assets/images/` | png 2개 이동 |
| `public/favicon.svg`, `public/robots.txt` | 신규 — `public`의 올바른 용례 |
| `index.html` | 죽은 링크 `/vite.svg` → `/favicon.svg` |
| `src/components/Toast.jsx` | `check.svg`, `alert.svg` import |
| `src/components/PageHeader.jsx` | `back.svg` import |
| `src/pages/post-detail/PostArticle.jsx` | 이미지 2 + 아이콘 2 import |
| `src/pages/post-detail/CommentItem.jsx` | `profile.png` import |
| `src/pages/post-detail/CommentSection.jsx` | `profile.png` import |
| `vite.config.js` | `resolve.alias`로 `@` → `src` 등록 |
| `jsconfig.json` | 신규 — VSCode가 `@/`를 이해하도록 |
| `src/` 전체 | `../` 상대경로 import → `@/` alias로 전환 |
