import TranslateCard from "../components/TranslateCard";
import { useTranslateText } from "../customHooks/useTranslateText";
import TextField from "./TextField";

const Minion = () => {
  const [translatedContent, dispatch] = useTranslateText("minion");
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
export default Minion;
