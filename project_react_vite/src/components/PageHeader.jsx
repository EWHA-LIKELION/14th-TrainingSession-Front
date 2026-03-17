const PageHeader = () => {
  const title = "목록으로";
  const style = {
    display: "flex",
    backgroundColor: "green",
    color: "white",
    fontSize: "25",
  };
  return (
    <header style={style}>
      <img src="./icons/back.svg" alt="back" />
      <h1>{title}</h1>
    </header>
  );
};

export default PageHeader;
