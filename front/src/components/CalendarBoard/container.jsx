import { connect } from "react-redux";
import { createCalendar } from "../../service/calendar";
import CalendarBoard from "./presentation";

const mapStateToProps = state => ({ calendar: state.calendar});

const mergeProps = stateProps => ({
    calendar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);

