import TranslateCard from "../components/TranslateCard";
import { useTranslateText } from "../customHooks/useTranslateText";
import TextField from "./TextField";

const Yoda = () => {
  const [translatedContent, dispatch] = useTranslateText("yoda");
  return (
    <div>
      <TextField dispatch={dispatch} />
      <div>
        {translatedContent.translated ? (
          <TranslateCard {...translatedContent} />
        ) : null}
      </div>
    </div>
  );
};
export default Yoda;
