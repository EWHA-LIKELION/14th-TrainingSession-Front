const PageHeader = () => {
  const title = "목록으로";

  return (
    <header className="flex w-full items-center bg-white py-3.75 pl-60">
      <img src="/icons/back.svg" alt="back" />
      <h1 className="flex items-center pl-3 text-[20px] font-normal text-black">
        {title}
      </h1>
    </header>
  );
};

export default PageHeader;
