import TranslateCard from "../components/TranslateCard";
import { useTranslateText } from "../customHooks/useTranslateText";
import TextField from "./TextField";

const Valyrian = () => {
  const [translatedContent, dispatch] = useTranslateText("valyrian");
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
export default Valyrian;
