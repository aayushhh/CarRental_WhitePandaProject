import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import BestDeals from '../components/BestDeals'

export default function home() {
    return (
        <>
    <Hero>
    <Banner title="Renting Cars" subtitle ="Cars starting at 500rs">
    
    <Link to='/cars/' className='btn-primary'>Our Cars
       </Link>
    </Banner>
    </Hero>
<Services/>
<BestDeals/>
    </>
    );
}
