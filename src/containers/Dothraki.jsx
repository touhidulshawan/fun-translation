import TranslateCard from "../components/TranslateCard";
import { useTranslateText } from "../customHooks/useTranslateText";
import TextField from "./TextField";

const Dothraki = () => {
  const [translatedContent, dispatch] = useTranslateText("dothraki");
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
export default Dothraki;
