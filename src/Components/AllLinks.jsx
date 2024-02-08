import { Link, Typography } from '@mui/material'
import './app.css'



export default function () {
    return (
        <div className='two'>
            <Link href="/" underline="none" color="#59798e">Work</Link>
            <Link href="/About" underline="none" color="#59798e">About</Link>
        </div>
    )
}