const TranslateCard = (props) => {
  return (
    <div>
      <h1>Your Text: {props.text}</h1>
      <h1>Translated Text: {props.translated}</h1>
      <p>- Translated By: {props.translation}</p>
    </div>
  );
};

export default TranslateCard;
