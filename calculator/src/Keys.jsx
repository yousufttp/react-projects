import "./App.css";

const Keys = ({content, setdisplay, className}) => {
  return (
    <button type="button" className={`button ` + className} onClick={() => setdisplay(content)}>
      {content}
    </button>
  );
};

export default Keys;
