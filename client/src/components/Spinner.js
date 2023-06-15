import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && navigate('/login', {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location])

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "100vh", fontSize: "25px" }}>
                <h1 className='Text-center pb-2'>Redirecting to you in {count} seconds</h1>
                <div className='spinner-border' role="status" style={{ width: "4.3rem", height: "4.3rem" }}>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
