const PageHeader = () => {
  return (
    // fixed: 상단 고정, w-full: 가로 꽉 차게, z-10: 다른 요소들보다 위에 배치
    // y/pl/pr: 패딩
    // flex items-center: 내부 요소들을 가로로 배치하고 수직 중앙 정렬
    <header className="fixed top-0 w-full z-10 h-[65px] bg-white py-[15px] pl-66 pr-66.5 flex items-center gap-2">
      <img
        src="/icons/back.svg"
        alt="back"
        className="w-6 h-6 cursor-pointer"
      />

      {/* font-normal은 글자 두께!! */}
      <h1 className="text-xl font-normal text-black cursor-pointer">
        목록으로
      </h1>
    </header>
  );
};

export default PageHeader;
