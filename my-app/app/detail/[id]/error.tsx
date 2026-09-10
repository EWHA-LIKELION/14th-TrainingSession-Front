// 같은 경로에서 에러 발생 시 자동으로 렌더되는 Error UI
"use client"; // error.tsx는 반드시 Client Component여야 함
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <main>
      {" "}
      <h2>{error.name}</h2> <p>{error.message}</p>{" "}
      <button onClick={reset}>Reset</button>{" "}
    </main>
  );
};
export default Error;
