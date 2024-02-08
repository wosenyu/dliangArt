import Title from "./Title"
import AllLinks from "./AllLinks"
import AllButton from "./AllButton"
import ImgLayout from "./ImgLayout"
import E13 from '../assets/E13_2.png';
import './about.css'
import { Button, IconButton, Divider } from "@mui/material";
import { Mail, Instagram, LinkedIn } from '@mui/icons-material';

export default function About() {
    return (
        <>
            <Title />
            <AllLinks />

            <div className="container">
                <div className="content">
                    <img src={E13} alt='img2' className="small-img" />
                    <div className="text">
                        <h1>HI!</h1>
                        <p>
                            I'm Dennis, a vis-dev artist based in SoCal.
                            <br />
                            <br />
                            I’m currently working as a background designer at Marvel Studios.
                            <br />
                            <br />
                            If you think I might be a good fit for your project, or if you’d <br />like to view my Professional Work please email me at <br /> <b>aaliceyyang@gmail.com!</b>
                        </p>
                    </div>
                </div>

            </div>
            <div className="btn">
                <Button variant="contained" sx={{ color: 'WHITE', backgroundColor: 'BLACK' }}>Resume</Button>

                <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ color: 'black', }}>
                        <Mail />
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ color: 'black', }}>
                        <Instagram />
                    </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{ color: 'black', }}>
                        <LinkedIn />
                    </IconButton>
                </a>
            </div>
            <div style={{ width: '60%', margin: '0 auto' }}>
                <Divider />
            </div>



        </>
    )
}