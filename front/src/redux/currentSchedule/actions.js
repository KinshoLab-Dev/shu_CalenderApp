import { CURRENT_SCHEDULE_CLOSE_DIALOG, CURRENT_SCHEDULE_SET_ITEM, CURRENT_SCHEDULE_OPEN_DIALOG } from "./constants";

export const currentScheduleSetItem = payload => ({
    type: CURRENT_SCHEDULE_SET_ITEM,
    payload
});

export const currentScheduleOpenDialog = () => ({
    type: CURRENT_SCHEDULE_OPEN_DIALOG
});

export const currentScheduleCloseDialog = () => ({
    type: CURRENT_SCHEDULE_CLOSE_DIALOG
});