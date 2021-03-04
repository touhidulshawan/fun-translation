import TranslateCard from "../components/TranslateCard";
import { useTranslateText } from "../customHooks/useTranslateText";
import TextField from "./TextField";

const Yoda = () => {
  const [translatedContent, dispatch] = useTranslateText("yoda");
  console.log(translatedContent);
  return (
    <div>
      <TextField dispatch={dispatch} />
      {Object.keys(translatedContent).length !== 0 ? (
        <TranslateCard {...translatedContent} />
      ) : null}
    </div>
  );
};
export default Yoda;
