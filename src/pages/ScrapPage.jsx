import React from 'react'
import { Download, Original, Scraped } from '../components'
import { useSelector } from 'react-redux';

function ScrapPage() {
    const content = JSON.stringify(useSelector((state)=>state.auth.content));
  return (
    <section>
        <div className='py-4 px-4'>
            <div>
                {/* <Original title={'Scraped Content :'}/> */}
                <Scraped/>
            </div>
            {/* <div>
                <Download textContent={content}/>
            </div> */}
        </div>
    </section>
  )
}

export default ScrapPage