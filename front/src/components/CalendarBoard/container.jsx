import { connect } from "react-redux";
import { createCalendar } from "../../service/calendar";
import CalendarBoard from "./presentation";
import {　addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/actions";
import { setSchedules } from "../../service/schedule";
import { currentScheduleSetItem, currentScheduleOpenDialog } from "../../redux/currentSchedule/actions";

const mapStateToProps = state => ({ 
    calendar: state.calendar,
    schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog());
        dispatch(addScheduleSetValue({date: d}))
    },
    openCurrentScheduleDialog: (schedule, e) => {
        // 他のイベントが発火するのをキャンセル
        e.stopPropagation();
        dispatch(currentScheduleSetItem(schedule));
        dispatch(currentScheduleOpenDialog());
    }

})

const mergeProps = (stateProps, dispatchProps)  => {

    const {
        calendar: month,
        schedules: { items: schedules }
    } = stateProps;

    const calendar = setSchedules(createCalendar(month), schedules);

    return {
        ...stateProps,
        ...dispatchProps,
        calendar,
        month
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CalendarBoard);

