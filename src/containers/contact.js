import React from 'react';
import config from '../config';
import ContractForm from '../components/forms/contactForm';
import { withFormik } from 'formik';


class ContactContainer extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.status && !this.props.status) {
            if (nextProps.status.error) {
                console.log(nextProps.status);
                return;
            } else {
                console.log(nextProps.status)
                console.log(this.props);
            }
        }

        //reload based on reclicking the same route?
        //this.getData(nextProps.location.pathname);
    }

    render() {
        const { isSubmitting } = this.props;
        return (
            <section className='mw5 mw7-ns center pa3 ph5-ns'>
                {isSubmitting ?
                    <div>submitting...</div>
                    :
                    <ContractForm {...this.props} />
                }
            </section>
        )
    }
}


export default withFormik({
    mapPropsToValues: props => {
        return {
            inquiry: 'I would like...',
            email: ''
        }
    },
    validate: values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    },
    handleSubmit: async (values, formikbag) => {
        const { setSubmitting, setStatus } = formikbag;
        if (values.hiddenhp) {  //if hidden form filled up
            return;
        }

        setSubmitting(true);
        // console.log('sleeping');
        // await utils.sleep(5000);
        // console.log('finished sleeping');
        try {
            values.formGoogleSheetName = 'responses';
            var encoded = Object.keys(values).map(k => {
                return encodeURIComponent(k) + '=' + encodeURIComponent(values[k])
            }).join('&');
            console.log('encoded:', encoded);
            const response = await fetch(config.googleForm, {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: encoded,
            });
            const json = await response.json();
            console.log(JSON.stringify(json.data));
            setStatus(json);
        } catch (e) {
            setStatus({ result: e })
        }
        setSubmitting(false);
    },
    displayName: 'ContactFormik', // helps with React DevTools
})(ContactContainer);
