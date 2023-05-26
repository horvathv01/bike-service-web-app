// https://www.telerik.com/blogs/react-calendar-vs-react-scheduler-whats-difference-when-use
// https://mdbootstrap.com/docs/react/forms/datepicker/

import { Calendar } from "@progress/kendo-react-dateinputs";
import { useEffect, useRef, useState } from "react";

const times = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
];

function BookSlot(props) {
  const [bookingDate, setBookingDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [bookingTimes, setBookingTimes] = useState([]);
  const timeSlotCacheRef = useRef(new Map());

  useEffect(() => {
    // Bail out if there is no date selected
    if (!bookingDate) return;

    // Get time slots from cache
    let newBookingTimes = timeSlotCacheRef.current.get(
      bookingDate.toDateString()
    );

    // If we have no cached time slots then pick new ones
    if (!newBookingTimes) {
      /* newBookingTimes = pickSlotTimes(times); */
      newBookingTimes = times;
      // Update cache with new time slots for the selected date
      timeSlotCacheRef.current.set(bookingDate.toDateString(), newBookingTimes);
    }

    setBookingTimes(newBookingTimes);
  }, [bookingDate]);

  const onDateChange = e => {
    //setSelectedTimeSlot(null);
    setBookingDate(e.value);
  };

  return (
    <div className="k-my-8">
      <div className="k-mb-4 k-font-weight-bold">Book appointment slot</div>

      <div className="k-flex k-display-flex k-mb-4">
        <Calendar value={bookingDate} onChange={onDateChange} />
        <div className="k-ml-4 k-display-flex k-flex-col">
          {bookingTimes.map(time => {
            return (
              <button

                key={time}
                className="k-button k-mb-4"
                onClick={e => {
                  e.preventDefault()
                  setSelectedTimeSlot(time)
                  props.setPreButtonText(`${bookingDate.toDateString()} at ${time}`);
                }}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      {bookingDate && selectedTimeSlot ? (
        <div>
          Selected slot: {bookingDate.toDateString()} at {selectedTimeSlot}
        </div>
      ) : null}
    </div>
  );
};

export default BookSlot;