import React from 'react';

export default props => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <div className='pa4-l'>
            <form className='bg-light-green mw7 center pa4 br2-ns ba b--black-10' onSubmit={handleSubmit}>
                <fieldset className='cf bn ma0 pa0'>
                    <legend className='pa0 f5 f4-ns mb4 black-80'>Contact Us</legend>
                    <div className='cf'>
                        <input className='dn' id='hiddenhp' type='text' name='hiddenhp' value='' />
                        <label className='f6 db mb1' htmlFor='inquiry'>Inquiry</label>
                        <textarea
                            id='inquiry'
                            name='inquiry'
                            className='db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2'
                            rows='10'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.inquiry}
                        />
                        <label className='clip' htmlFor='email-address'>Email Address</label>
                        <input
                            className='f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'
                            placeholder='Your Email Address'
                            type='text'
                            name='email'
                            id='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <input
                            className='f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns'
                            type='submit'
                            value='Submit'
                        />
                        {touched.email && errors.email && <div>{errors.email}</div>}
                    </div >
                </fieldset >
            </form >
        </div >
    );
}