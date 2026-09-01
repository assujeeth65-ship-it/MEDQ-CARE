import React from "react";
import "./TimeSlot.css";

const TimeSlot = ({
  time,
  selected,
  available = true,
  onSelect,
}) => {
  return (
    <button
      type="button"
      className={`time-slot ${
        selected ? "time-slot-selected" : ""
      } ${!available ? "time-slot-disabled" : ""}`}
      onClick={() => available && onSelect && onSelect(time)}
      disabled={!available}
    >
      <span className="time-icon">🕐</span>

      <span className="time-text">
        {time}
      </span>

      {selected && (
        <span className="selected-icon">
          ✓
        </span>
      )}

      {!available && (
        <span className="unavailable-text">
          Booked
        </span>
      )}
    </button>
  );
};

export default TimeSlot;