const PageHeader = () => {
    return (
        <header className="flex items-center w-full h-[65px] px-[263px] justify-center bg-white">
            <div className="flex items-center gap-2 w-full max-w-[751px]">
                <img src="/icons/back.svg" alt="back" />
                <h1 className="text-black text-base font-medium">목록으로</h1>
            </div>
        </header>
    );
};

export default PageHeader;