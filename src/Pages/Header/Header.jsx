import React, { useState } from "react";
import styles from "./Header.module.css";
import {
  FaBed,
  FaCalendarDays,
  FaHotel,
} from "react-icons/fa6";
import { IoPersonAddOutline } from "react-icons/io5";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { SiGooglemaps } from "react-icons/si";
import { travelPlaces } from './../../Places/placces';


const Header = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const handleDateChange = (item) => {
    setDate([item.selection]);
    setOpenDate(false);
  };

  const handdleOption = (name, operation) => {
    setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1
        }
    })
  }

  return (
    <section className={styles.searchBar}>
      <div className={styles.headerSearch}>
          <div className={styles.headerSearchItem}>
            <SiGooglemaps className={styles.headerIcon} />
            <div className={styles.places}>
              <p>Select Place</p>
              <select>
                <option value="dhaka">Select a Place</option>
                {
                  travelPlaces.map(place => <option key={place} value={place}>{place}</option>)
                }
                
            </select>
            </div>
          </div>

          <div className={styles.headerSearchItem}>
            <FaCalendarDays className={styles.headerIcon} />
            <div className={styles.choseDate}>
              <p>Date From</p>
              <span
                onClick={() => setOpenDate(!openDate)}
                className={styles.headerSearchText}
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate || new Date(),
                  "MM/dd/yyyy"
                )}`}
              </span>
            </div>
            {openDate && (
              <DateRange
                editableDateInput={true}
                onChange={handleDateChange}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className={styles.date}
              />
            )}
          </div>

          <div className={styles.headerSearchItem}>
          <IoPersonAddOutline  className={styles.headerIcon}  />
            <div className="guests">
              <p>Guests</p>
              <span className={styles.headerSearchText}>
                {`${options.adults} adults - ${options.children} children - ${options.room} room`}
              </span>
            </div>
            <div className={styles.options}>
              <div className={styles.optionItem}>
                <span className={styles.openText}>Adults</span>
                <div className={styles.optionCounter}>
                  <button className={styles.optionCounterButton} disabled={options.adults < 1} onClick={() => handdleOption("adults", "d")}>-</button>
                  <span className={styles.optionCounterNumber}>{options.adults}</span>
                  <button className={styles.optionCounterButton} onClick={() => handdleOption("adults", "i")}>+</button>
                </div>
              </div>

              <div className={styles.optionItem}>
                <span className={styles.openText}>Children</span>
                <div className={styles.optionCounter}>
                  <button className={styles.optionCounterButton}  disabled={options.children < 1}  onClick={() => handdleOption("children", "d")}>-</button>
                  <span className={styles.optionCounterNumber}>{options.children}</span>
                  <button className={styles.optionCounterButton}  onClick={() => handdleOption("children", "i")}>+</button>
                </div>
              </div>

              <div className={styles.optionItem}>
                <span className={styles.openText}>Room</span>
                <div className={styles.optionCounter}>
                  <button className={styles.optionCounterButton}  disabled={options.room < 1} onClick={() => handdleOption("room", "d")}>-</button>
                  <span className={styles.optionCounterNumber}>{options.room}</span>
                  <button className={styles.optionCounterButton}  onClick={() => handdleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className={styles.searchBTN}>
            <FaHotel />
          </div>
        </div>
    </section>
  );
};

export default Header;
