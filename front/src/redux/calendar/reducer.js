//reducer では action が実行されたときにどのような状態になるのかを定義する場所です
import dayjs from "dayjs";
import {CALENDAR_SET_MONTH} from "./constants"

const day = dayjs();

const init = {
    year: day.year(),
    month: day.month()+1
};

export const calendarReducer = (state = init, {type, payload}) => {
    switch(type){
        case CALENDAR_SET_MONTH:
            return payload;
        default:
            return state;
    }
}

export default calendarReducer;
