import { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext()

const ScreensizeProvider = (props) => {
    const [screenSize, setScreenSize] = useState(null)
    const [activeMenu, setActiveMenu] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)

    }, [])
    useEffect(() => {
        if (screenSize >= 968) {
            setActiveMenu(true)
            setMobileMenu(true)
        } else {
            setActiveMenu(false)
            setMobileMenu(false)
        }
    }, [screenSize])

    return (
        <ScreenContext.Provider value={{ activeMenu, screenSize, setActiveMenu, mobileMenu, setMobileMenu }}>
            {props.children}
        </ScreenContext.Provider>
    )
}

export default ScreensizeProvider;