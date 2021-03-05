import TranslateCard from "../components/TranslateCard";
import { useTranslateText } from "../customHooks/useTranslateText";
import TextField from "./TextField";
import Layout from "../components/Layout";

const Minion = () => {
  const [translatedContent, dispatch] = useTranslateText("minion");
  return (
    <Layout>
      <TextField dispatch={dispatch} />
      {translatedContent.translated ? (
        <TranslateCard {...translatedContent} />
      ) : null}
    </Layout>
  );
};
export default Minion;
