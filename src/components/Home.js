import React from 'react';
import Loader from './Loader';
import '../footer.css';
function Home() {

  return (
    <>
    <Loader></Loader>
    <div className='container'>
    <div class="card text-center mt-5">
        <div class="card-header bg-success ">
        <span className='text-white' style={{fontSize:"20px"}}>Blood Donation and Tracker</span>  
        </div>
        <div class="card-body">
          <h5 class="card-title">Download You Android .apk file here and install <span><div class="blink">Download Available</div>
</span></h5>
         <a href="https://drive.google.com/uc?export=download&id=1YallFQrFC39CDMY955-oVv7P2SXn5rlM" class="btn btn-primary">Download</a>
   

        </div>
        <div class="card-footer text-muted">
         Updated on 25/04/2023        </div>
      </div>
      </div>

      
    </>
  );
}

export default Home
