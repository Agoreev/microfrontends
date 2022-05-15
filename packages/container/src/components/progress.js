import {createStyles, LinearProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from 'react';

const useStyles = makeStyles((theme) => {
    return createStyles({
        bar: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    });
});

export const Progress = () => {
    const classes = useStyles();

    return (
        <div className={classes.bar}>
            <LinearProgress />
        </div>
    )
};
