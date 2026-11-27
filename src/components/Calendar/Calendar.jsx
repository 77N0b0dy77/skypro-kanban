function Calendar({ selectedDay = "8", period = "Выберите срок исполнения" }) {
  const days = [
    ["28", "other"], ["29", "other"], ["30", "other"], ["31", ""],
    ["1", ""], ["2", "weekend"], ["3", "weekend"],
    ["4", ""], ["5", ""], ["6", ""], ["7", ""], ["8", "current"],
    ["9", "weekend"], ["10", "weekend"], ["11", ""], ["12", ""], ["13", ""],
    ["14", ""], ["15", ""], ["16", "weekend"], ["17", "weekend"],
    ["18", ""], ["19", ""], ["20", ""], ["21", ""], ["22", ""],
    ["23", "weekend"], ["24", "weekend"], ["25", ""], ["26", ""],
    ["27", ""], ["28", ""], ["29", ""], ["30", "weekend"], ["1", "other weekend"]
  ];

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">Сентябрь 2023</div>
          <div className="nav__actions">
            <div className="nav__action" data-action="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div className="nav__action" data-action="next">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="calendar__content">
          <div className="calendar__days-names">
            {["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((day, index) => (
              <div className={`calendar__day-name ${index > 4 ? "-weekend-" : ""}`} key={day}>{day}</div>
            ))}
          </div>
          <div className="calendar__cells">
            {days.map(([day, type], index) => {
              const classes = [
                "calendar__cell",
                type.includes("other") ? "_other-month" : "_cell-day",
                type.includes("weekend") ? "_weekend" : "",
                type.includes("current") ? "_current" : "",
                day === selectedDay ? "_active-day" : ""
              ].filter(Boolean).join(" ");
              return <div className={classes} key={`${day}-${index}`}>{day}</div>;
            })}
          </div>
        </div>
        <input type="hidden" id="datepick_value" value={`0${selectedDay}.09.2023`} readOnly />
        <div className="calendar__period">
          <p className="calendar__p date-end">{period} <span className="date-control">{selectedDay === "9" ? "09.09.23" : ""}</span></p>
        </div>
      </div>
    </div>
  );
}
export default Calendar;
