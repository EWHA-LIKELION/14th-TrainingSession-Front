const PageHeader = () => {
   
    const title = "목록으로";
    return (
        <header className="flex items-center justify-center w-full h-[4.0625rem] px-[16.4375rem] py-[0.9375rem] bg-white">
            <div className="flex items-center w-[46.9375rem]">
                <div className="flex items-center justify-between w-[6.6875rem] h-[2.1875rem] shrink-0">
                    <img src="/icons/back.svg" alt="back" className="w-6 h-6 aspect-square shrink-0"/>
                    <h1 className="text-black text-center font-pretendard text-xl font-normal leading-6">{title}</h1>
                </div>
            </div>
        </header>
    
    );
}

export default PageHeader;