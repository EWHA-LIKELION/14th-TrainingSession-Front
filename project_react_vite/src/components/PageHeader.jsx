import Back from "@/assets/icons/back.svg";

const PageHeader = () => {
  const title = "목록으로";
  return (
    <header className="flex h-[4.0625rem] w-full items-center justify-center bg-white py-[0.9375rem]">
      <div className="flex w-[46.9375rem] items-center">
        <div className="flex h-[2.1875rem] w-[6.6875rem] shrink-0 items-center justify-between">
          <img
            src={Back}
            alt="back"
            className="aspect-square h-6 w-6 shrink-0"
          />
          <h1 className="font-pretendard text-center text-xl leading-6 font-normal text-black">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
