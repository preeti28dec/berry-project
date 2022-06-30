import React from 'react'
import Header from './header'
import LeftSideBar from './leftSideBar'
import RightSideBar from './rightSideBar'

function Dashboard() {
    return (
        <>
            <div className='main'>
                <Header />
                <div className='left-right-container'>
                    <div className='left-side-bar   '>
                        <LeftSideBar />
                    </div>
                    <div className='right-side-bar bg-blue-100 '>
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
