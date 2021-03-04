import TranslateCard from "../components/TranslateCard";
import { useTranslateText } from "../customHooks/useTranslateText";
import TextField from "./TextField";

const Shakespeare = () => {
  const [translatedContent, dispatch] = useTranslateText("shakespeare");
  return (
    <div>
      <TextField dispatch={dispatch} />
      <div>
        {translatedContent.translated !== "" ? (
          <TranslateCard {...translatedContent} />
        ) : null}
      </div>
    </div>
  );
};
export default Shakespeare;
