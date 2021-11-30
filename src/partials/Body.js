import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Widgets from './Widgets'

function Body() {
    return (
        <div className="h-full grid grid-cols-12 gap-8 px-9" style={{ background: "#FAFAF9" }}>
            <Sidebar className="col-span-3"/>
            <Feed className="col-span-5"/>
            <Widgets className="bg-white rounded-lg border col-span-4"/>
        </div>
    )
}

export default Body
