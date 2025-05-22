const RenderData = ({ day, conditions, time }) => {
  return (
    <div>
      <h2>{day}</h2>
      <p>
        <span>Conditions: {conditions} </span>
      </p>
      <p>
        <span>Time: {time}</span>
      </p>
    </div>
  );
};

export default RenderData;
