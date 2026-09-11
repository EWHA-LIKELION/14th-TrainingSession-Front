"use client"; // error UI는 클라이언트 컴포넌트 여야 함!

const Error = ({
  error,

  reset,
}: {
  error: Error;

  reset: () => void; // return 값이 없는 함수로 지정/ error props는 에러 객체 / reset props는 다시 렌더링 시도 함수
}) => {
  return (
    <main>
      <h2>{error.name}</h2>

      <p>{error.message}</p>

      <button onClick={reset}>Reset</button>
    </main>
  );
};

export default Error;
