import Button from "components/Button/Button";
import Title from "../Title/Title";
import EmojiWarning from "../emoji/EmojiWarning";
const OddParent = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title>
        <EmojiWarning /> OddParent
      </Title>
      <Button />
    </div>
  );
};

export default OddParent;
