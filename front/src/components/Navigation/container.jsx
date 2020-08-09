import Navigation from "./presentation";

import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth, getMonth, formatMonth } from "../../service/calendar";
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
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
    },
    setMonth: dayObj => {
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);

