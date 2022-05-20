import Button from "../Button/Button";
import Title from "../Title/Title";
const Parent = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title title="Parent" />
      <Button />
    </div>
  );
};

export default Parent;
