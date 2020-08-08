import React from "react";

import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay } from "../../service/calendar";


const CalendarElement = ({ day }) => {
    const format = isFirstDay(day) ? "M月D日" : "D";

    //本日場合色分け
    const today = dayjs();
    const isCurrentMonth = isSameMonth(day, today);
    const isToday = isSameDay(day, today);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";


    return (
        <div className={styles.element}>
        <Typography className={styles.date} align="center" variant="caption" component="div" color={textColor}>
            <span className={isToday ? styles.today: ""}>
                {day.format(format)}
            </span>
        </Typography>
        </div>
    );
};

export default CalendarElement;