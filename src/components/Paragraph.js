import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SHARED_STYLES } from "../utils/SharedStyles";
import { usingClasses } from "../utils/utils";

const Paragraph = props => {
    const { classes, messages } = props;
    const msgValues = Object.values(messages);
    console.log(msgValues);
    if (!msgValues || msgValues.length === 0) {
        return null;
    }

    return msgValues.map((msg, idx) => (
        <p className={usingClasses(classes, 'bodyText')} key={idx}>
            {msg}
        </p>
    ));
};

const styles = SHARED_STYLES;

export default withStyles(styles)(Paragraph);
