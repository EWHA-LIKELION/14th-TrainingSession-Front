const PageHeader = () => {
  return (
    <header className="flex h-16.25 w-full items-center justify-center bg-white">
      <div className="flex w-full max-w-[751px] items-center px-4">
        <button className="flex items-center gap-2 text-xl text-black">
          <img src="/icons/back.svg" alt="back" className="h-4 w-4" />
          목록으로
        </button>
      </div>
    </header>
  );
};

export default PageHeader;
