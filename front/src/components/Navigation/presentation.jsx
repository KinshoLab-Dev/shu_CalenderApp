import React from "react";
import {IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import DateRangeIcon from '@material-ui/icons/DateRange';

const StyledToolbar = withStyles({
    root: { padding: "0" }
})(Toolbar);

const StyledTypography = withStyles({
    root: { margin: "0 30px 0 10px" }
})(Typography);

const Navigation = () => {
    return(
        <StyledToolbar>
        <IconButton>
            <DehazeIcon />
        </IconButton>
        <DateRangeIcon/>
        <StyledTypography color="textSecondary" variant="h5" component="h1">
            カレンダー
        </StyledTypography>
        <IconButton size="small">
            <ArrowBackIos/>
        </IconButton>
        <IconButton size="small">
            <ArrowForwardIos/>
        </IconButton>
    </StyledToolbar>
    );
};

export default Navigation;

