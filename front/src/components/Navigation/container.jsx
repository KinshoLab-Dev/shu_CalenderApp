import Navigation from "./presentation";

import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth, createCalendar } from "../../service/calendar";
import { calenderSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = state => ({
    calendar: state.calendar
});

const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calenderSetMonth(month))
    }
});

const mergeProps = (stateProps,dispatchProps) => ({
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);

