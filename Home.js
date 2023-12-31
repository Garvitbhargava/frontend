import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
  <>
  <section className='home-wrapper-1 py-5'>
    <div className='container-xxl'>
      <div className='row'>
      <div className='col-6'>
        <div className='main-banner py-3  position-relative'></div>
        <img src='images/main-banner-1.jpg' 
        className='img-fluid rounded-3' 
        alt='main-banner'/>
        <div className='main-banner-content position-relative'>
          <h4>SUPERCHARGED FOR PROS.</h4>
          <h5>iPad S13+ Pro.</h5>
          <p>From $999.00 or $41.62/mo.</p>
          <Link className='button'> BUY NOW </Link>
        </div>
      </div>
      <div className='col-6'>
        <div className='row'>
          <div className='col-6'>
          <div className='d-flex flex-wrap  justify-content-between aling-items-center'>
            <div className='small-banner  position-relative p-3'></div>
            <img src='images/catbanner-01.jpg' 
            className='img-fluid rounded-3' 
            alt='main-banner'/>
            <div className='small-banner-content position-relative'>
              <h4>Best Sales.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $999.00 <br/>or $41.62/mo.</p>
        
            </div>  
            </div>
          </div>
          <div className='col-6'>
          <div className='d-flex flex-wrap  justify-content-between aling-items-center'>
            <div className='small-banner position-relative p-3'></div>
            <img src='images/catbanner-01.jpg' 
            className='img-fluid rounded-3' 
            alt='main-banner'/>
            <div className='small-banner-content position-relative '>
              <h4>Best Sales.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $999.00 <br/>or $41.62/mo.</p>
        
            </div>  
            </div>
          </div>
          <div className='col-6'>
          <div className='d-flex flex-wrap  justify-content-between aling-items-center'>
            <div className='small-banner  position-relative p-3'></div>
            <img src='images/catbanner-01.jpg' 
            className='img-fluid rounded-3' 
            alt='main-banner'/>
            <div className='small-banner-content position-relative'>
              <h4>Best Sales.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $999.00 <br/>or $41.62/mo.</p>
        
            </div>  
            </div>
          </div>
          <div className='col-6'>
          <div className='d-flex flex-wrap justify-content-between aling-items-center'>
            <div className='small-banner position-relative p-3'></div>
            <img src='images/catbanner-01.jpg' 
            className='img-fluid rounded-3' 
            alt='main-banner'/>
            <div className='small-banner-content position-relative'>
              <h4>Best Sales.</h4>
              <h5>iPad S13+ Pro.</h5>
              <p>From $999.00 <br/>or $41.62/mo.</p>
        
            </div>  
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Home