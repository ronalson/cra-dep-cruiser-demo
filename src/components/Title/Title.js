const Title = ({ title, children }) => {
  return (
    <>
      <h4>{title || children}</h4>
    </>
  );
};

export default Title;
