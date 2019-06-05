import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SHARED_STYLES } from "../../utils/shared-styles";
import { usingClasses } from "../../utils/utils";

const Paragraph = props => {
    const { classes, messages, type } = props;
    const msgValues = Object.values(messages);

    if (!msgValues || msgValues.length === 0) {
        return null;
    }

    return msgValues.map((msg, idx) => (
        <p className={usingClasses(classes, type)} key={idx}>
            {msg}
        </p>
    ));
};

Paragraph.defaultProps = {
    type: 'paragraph'
}

const styles = SHARED_STYLES;

export default withStyles(styles)(Paragraph);
