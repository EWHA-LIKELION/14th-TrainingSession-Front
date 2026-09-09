const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;

if (!API_DOMAIN) {
  throw new Error("NEXT_PUBLIC_API_DOMAIN을 .env에 설정해주세요?");
}

export { API_DOMAIN };
