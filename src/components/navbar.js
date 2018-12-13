import React from 'react';

import { Link } from 'react-router-dom'

export default props => {
    return (
        <nav className='db dt-l w-100 border-box pa3'>
            <div className='w-33' >
                <Link to='/' className='grow f6 fw4 no-underline black-70 dn dib-ns pv2 ph3' href='#' title='Logo' style={{backgroundColor: 'rgb(250, 250, 250)'}}>                
                    <img src='/images/logo.png' className='v-mid db-m h2 br-100' alt='Aetheras' />
                </Link>
            </div>
            <div className='db dtc-l f5 v-mid w-66 w-75-l tc tr-l'>
                <Link to='/' className="fw4 no-underline black-70 dn dib-ns pv2 ph3" href='#' title='Home'>Home</Link>
                {/* <Link to='/careers' className="fw4 no-underline black-70 dn dib-ns pv2 ph3" href='#' title='Careers'>Careers</Link>
                <Link to='/contact' className="fw4 no-underline black-70 dn dib-ns pv2 ph3" href='#' title='Contact'>Contact</Link> */}
            </div>
        </nav >
    )
}
