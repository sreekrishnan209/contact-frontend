import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='bg-light'>
            <div className="container">
              <div className="row">
                <div className="col-6">
                <h1 className='text-center m-5'>Talk N Talk</h1>
              <h4 className='text-center' style={{textAlign:'justify-content'}}>The most popular contact app for smart phones</  h4>
              <div className='text-center'>
                <Link to={'/list'}>
                <button className='btn btn-md text-dark rounded-pill shadow m-4 p-2' style={{backgroundColor:'green'}}>Get Start</button>
                </Link>
              <p style={{textAlign:'justify-content'}}>Intuitive contact management for individuals, teams & small businesses.</p>
            </div>
            <div>
              <p>The best contact apps stand at the ready to implement some order on your disorganized address book. All those duplicate entries cluttering up your contacts will be a thing of the past, and that's just the start of what a good contact app can do for you.

</p>
        <Link style={{textDecoration:'none'}}> 
          <h5 className='m-5'>Download Talk N Talk:
          <a className='m-2'>Android, iOS</a>
          </h5>
        </Link>
            </div>

                </div>
                <div className="col-6 mb-5">
                  <img className='m-4' width={'100%'} height={'500px'} src="https://1.bp.blogspot.com/-aDrVxEdmcIs/WIeaIKwq5RI/AAAAAAAAB1I/ARRVV5rzIi4SQOyRWHuqSAfwhdlecR1qgCLcB/s1600/best-contact.jpg" alt="" />
                </div>

                <h1 className='text-center mt-5 text-dark'>Explore The Contact App</h1>

                <div className='row p-5 m-2'>
                <div className="col-6 mt-2 p-3">
                <h1 className='mb-4'>Access the Contact Anywhere</h1>
                <p>Besides that level of basic tidying up, the best contact apps let you create groups for easier messaging, manage sales relationships and keep important info at the ready. Some of these apps even have their own dialer so that you can make a call without having to jump back to the phone app on your handset.</p>
                <p>In other words, the best contact apps offer more than what you'll get from the native Contacts app on your Android device or from the iPhone's Contacts offering. We've searched through both Google Play and the iOS App Store — here are the best choices for organizing your contacts that we've found.</p>
                </div>
                <div className="col-6 mt-4">
                  <img width={'100%'} height={'400px'} src="https://www.skillovation.com/wp-content/uploads/2022/02/image_processing20191206-27141-1umtru2.gif" alt="" />
                </div>
                </div>

                <div className="row">
                  <div className="col-4 text-center">
                    <h2 className='mt-4 p-3'>Combination</h2>
                    <p>Talk N Talk combines the App and Full Contact mobile apps into a single contacts management powerhouse. The result is one of the best contacts apps for your smartphone.
</p>
                  </div>
                  <div className="col-4 text-center">
                    <h2 className='mt-4 p-3'>Tracking</h2>
                    <p>Talk N Talk can help you keep track of friends, family and professional contacts while keeping your address book uncluttered. The app uses a cloud-based system that can sync with Gmail, Outlook and iCloud, automatically pulling data from your connected accounts. It can then suggest deleting duplicates, making updates and enriching contacts with photos, company info, social media activity, and more. 

</p>
                  </div>
                  <div className="col-4 text-center">
                    <h2 className='mt-4 p-3'>Linking</h2>
                    <p>The free tier of Talk N Talk allows for one linked account and 1,000 contacts, while premium tiers starting at $1.99 a month can include more linked accounts, improved contacts syncing, business card scanning and no ads.

</p>
                  </div>
                </div>

              </div>
            </div>
    </div>
  )
}

export default Home