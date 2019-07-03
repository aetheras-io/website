import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SHARED_STYLES } from "../utils/shared-styles";
import { usingClasses } from "../utils/utils";
import { injectIntl, FormattedMessage } from 'react-intl';

const Product = props => {
    const { classes } = props;
    return (
        <section className={usingClasses(classes, 'section')}>
            <div id="product" className={usingClasses(classes, 'anchor')} />
            <div className={usingClasses(classes, 'container')}>
                <span className={usingClasses(classes, 'titleText')}>
                    <FormattedMessage
                        id="product_title"
                        defaultMessage={'Products'}
                    />
                </span>
                <span className={usingClasses(classes, 'subTitleText')}>
                    <FormattedMessage
                        id="product_sub_title"
                        defaultMessage={'Our Goal is to Sed ut perspiciatis unde omnis iste'}
                    />
                </span>
                <img src="/images/products_ill.svg" alt="'products_ill" className={usingClasses(classes, 'illImg')} />
            </div>
        </section>
    );
};

const styles = Object.assign({ ...SHARED_STYLES }, {
    section: Object.assign({ ...SHARED_STYLES.section }, {
       padding: '160px 10% 80px 10%' 
    }),
});

export default withStyles(styles)(injectIntl(Product));
