import React from 'react';
// import { Link } from 'react-router-dom';

export default props => {
    return (
        <div>
            <div id="cover" className="cover bg-left bg-center-l" style={{ background: 'url(/images/background.png) 50%'  }}  >
                <h1 style={{marginRight: 'auto', marginLeft: 'auto'}}>
                    <img src="/images/title.png" alt='Logo' style={{display: 'block', width: '75vw', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}} />
                </h1>                                
            </div>
            <article className="bg-white">
                <div className="ph4 ph5-m ph6-l">
                    <div className="pv5 f4 f2-ns measure center">
                        <h1 className="ph2 pb4 fw6 f1 fl w-100 black-70 mt0 mb3 avenir">Make the world more flexible with blockchain technology</h1>
                        <p className="ph2 pb4 db lh-copy black-70 serif fw1 mv0 f3 baskerville">
                        Aetheras aims to create software to improve lives, whether through solving problems, providing entertainment, or both.
                        </p>
                        <p className="ph2 pb4 db lh-copy black-70 serif fw1 mv0 f3 baskerville">
                        Our first project is a blockchain developed in house to service the gaming industry’s trading market.   The project's research and development will enable us to build applications for many more verticals in the future.
                        </p>
                        <p className="ph2 pb4 db lh-copy black-70 serif fw1 mv0 f3 baskerville">
                        We believe blockchain technology, with its ability to promote transparency and fairness, offers the world huge opportunities for innovation.
                        </p>
                    </div>
                    
                </div >
            </article >
            <section className="cf mt5 pv5 bt b--black-05 ph6-l">
            <div className="pv5 f4 f2-ns measure center">
                <h1 className="tc f2 ttu fw6 tracked mb4 avenir">We are Hiring!</h1>
                <p className="ph2 pb4 db lh-copy black-70 serif fw1 mv0 f3 baskerville">
                We are currently hiring for various roles at our Taipei office.  Please visit our <a href="https://www.104.com.tw/jobbank/custjob/index.php?r=cust&j=48524a733c3e466f383a426b40463e2193131312f483e527109j56&jobsource=checkc">104 page</a> for details.
                </p>
                </div>
            </section>
        </div >
    );
}