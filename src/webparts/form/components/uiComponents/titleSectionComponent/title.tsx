/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { useState, useEffect } from "react";
import styles from "../../Form.module.scss";

interface TitleProps {
  itemId: any;
  
  statusOfRequest: string;
  propPaneformType: any;
  title: any;
}

const Title: React.FC<TitleProps> = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const formatWithZero = (value: number) => value < 10 ? `0${value}` : `${value}`;

const formattedDate: string = `${formatWithZero(currentDate.getDate())}-${
  formatWithZero(currentDate.getMonth() + 1)
}-${currentDate.getFullYear()} ${formatWithZero(currentDate.getHours())}:${
  formatWithZero(currentDate.getMinutes())}:${formatWithZero(currentDate.getSeconds())}`;

// console.log(formattedDate);
  return (
    <div style={{ flexGrow: 1, margin: "10 10px" }}>
      <div
        className={`${styles.noteTitle}`}
     
      >
        <div  className={`${styles.statusContainer}`}>
          {props.itemId ? (
            <p className={`${styles.status}`}>
              Status: {props.statusOfRequest}
            </p>
          ) : (
            ""
          )}
        </div> {/* Empty div to take up space on the left */}
        <h1 className={`${styles.title}`} style={{ textAlign: "center" }}>
          {props.propPaneformType === "BoardNoteNew"
            ? `Board Note - ${props.itemId ? props.title : "New"}`
            : `eCommittee Note - ${props.itemId ? props.title : "New"}`}
        </h1>
        <p
          className={`${styles.titleDate}`}
         
        >
          Date: {formattedDate}
        </p>
      </div>

      <span className={`${styles.field}`}>
        All fields marked "*" are mandatory
      </span>
    </div>
  );
};

export default Title;
