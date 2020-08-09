//reducer では action が実行されたときにどのような状態になるのかを定義する場所です
import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./constants";
import { formatMonth } from "../../service/calendar";

const day = dayjs();

const init = formatMonth(day);

export const calendarReducer = (state = init, {type, payload}) => {
    switch(type){
        case CALENDAR_SET_MONTH:
            return payload;
        default:
            return state;
    }
}

export default calendarReducer;
