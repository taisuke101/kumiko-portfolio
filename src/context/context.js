import React, { useState } from 'react'

import sublinks from '../constants/links';

const GatsbyContext = React.createContext()

const GatsbyProvider = ({children}) => {
    const [isSidebarOpen, SetIsSidebarOpen] = useState(false);

    const [links, setLinks] = useState(sublinks);

    const showSidebar = () => {
        SetIsSidebarOpen(true)
    }

    const hideSidebar = () => {
        SetIsSidebarOpen(false)
    }

    return (
        <GatsbyContext.Provider
            value={isSidebarOpen, links}
        >
            {children}
        </GatsbyContext.Provider>
    )
}

export default GatsbyProvider