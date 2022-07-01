import React from 'react'
import Header from './header'
import LeftSideBar from './leftSideBar'
import RightSideBar from './rightSideBar'

function Dashboard() {
    return (
        <>
            <div className='main'>
                <Header />
                <div className='main_container'>
                    <div className='left-side-bar   '>
                        <LeftSideBar />
                    </div>
                    <div className='content_section'>
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
