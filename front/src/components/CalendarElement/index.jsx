import React from "react";

import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../service/calendar";
import Schedule from "../Schedule/index";
import { style } from "@material-ui/system";

const CalendarElement = ({ day, month, schedules, ...props }) => {
    const format = isFirstDay(day) ? "M月D日" : "D";

    //本日場合色分け
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const today = dayjs();
    const isToday = isSameDay(day, today);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    return (
        <div className={styles.element}>
        <Typography className={styles.date} align="center" variant="caption" component="div" color={textColor}>
            <span className={isToday ? styles.today: ""}>
                {day.format(format)}
            </span>
        </Typography>
        <div className={styles.schedules}>
            {schedules.map(e =>(
                <Schedule key={e.id} schedule={e} {...props} />
            ))}
        </div>
        </div>
    );
};

export default CalendarElement;