"use client";

const Error = ({
  error,

  reset,
}: {
  error: Error;

  reset: () => void;
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
