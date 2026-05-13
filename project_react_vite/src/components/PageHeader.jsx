const PageHeader = () => {
  const title = "목록으로";

  return (
    <header className="flex items-center gap-2 bg-green-500 p-4 text-white">
      <img src="/icons/back.svg" alt="back" />
      <h1 className="text-[25px] font-semibold">{title}</h1>
    </header>
  );
};

export default PageHeader;