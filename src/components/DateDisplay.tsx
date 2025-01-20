

// CSS
import "../assets/css/clock_date.css"

const DateDisplay = () => {
  const currentDate = new Date();

  return (
    <div className="App">
      <p className="date_text">
        {currentDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default DateDisplay;