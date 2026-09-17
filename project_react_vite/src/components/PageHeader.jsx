import backIcon from "@/assets/icons/back.svg";

const PageHeader = () => {
  return (
    <header className="flex h-[65px] w-full items-center justify-center bg-white px-[263px]">
      <div className="flex w-full max-w-[751px] items-center gap-2">
        <img src={backIcon} />
        <h1 className="text-base font-medium text-black">목록으로</h1>
      </div>
    </header>
  );
};

export default PageHeader;
