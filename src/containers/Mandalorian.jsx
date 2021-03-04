import TranslateCard from "../components/TranslateCard";
import { useTranslateText } from "../customHooks/useTranslateText";
import TextField from "./TextField";

const Mandalorian = () => {
  const [translatedContent, dispatch] = useTranslateText("mandalorian");
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
export default Mandalorian;
