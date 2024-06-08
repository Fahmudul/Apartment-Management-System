import "./StatisticCard.css";
const StatisticCard = ({text, value}) => {
  return (
    <div>
      <div className="outer">
        <div className="dot"></div>
        <div className="cardi">
          <div className="ray"></div>
          <div className="texti">{text}</div>
          <div className="text-xl textColor">{value}</div>
          <div className="linee topl"></div>
          <div className="linee leftl"></div>
          <div className="linee bottoml"></div>
          <div className="linee rightl"></div>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
