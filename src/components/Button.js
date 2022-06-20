import { BsCaretRight } from "react-icons/bs";
function button({ text, handleClick }) {
  return (
    <div className="btn">
      <button className="touch" onClick={() => handleClick()}>
        <span>{text}</span>
        <div className="toggle">
          <BsCaretRight />
        </div>
      </button>
    </div>
  );
}
export default button;
