import { useState } from 'react';

import E13 from '../assets/E13_2.png';
import E15 from '../assets/E15.png';
import E23 from '../assets/E23.png';
import Aeri from '../assets/Aeri.png'
import Flower from '../assets/flower.png'
import './app.css'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import { Info } from '@mui/icons-material';



export default function ImgLayout() {

    const [openDialogs, setOpenDialogs] = useState(Array(5).fill(false));
    const [openDialogIndex, setOpenDialogIndex] = useState(null);

    // const handleClickOpen = (index) => {
    //     setOpenDialogs(prevState => {
    //         const newState = [...prevState];
    //         newState[index] = true;
    //         return newState;
    //     });
    // };

    // const handleClose = (index) => {
    //     setOpenDialogs(prevState => {
    //         const newState = [...prevState];
    //         newState[index] = false;
    //         return newState;
    //     });
    // };

    const handleClickOpen = (index) => {
        setOpenDialogIndex(index);
    };

    const handleClose = () => {
        setOpenDialogIndex(null);
    };

    const images = [
        { src: E15, alt: 'img1', description: 'Description for image 1' },
        { src: E13, alt: 'img2', description: 'Description for image 2' },
        { src: E23, alt: 'img3', description: 'Description for image 3' },
        { src: Aeri, alt: 'img4', description: 'Description for image 4' },
        { src: Flower, alt: 'img5', description: 'Description for image 5' }
    ];

    return (
        <div className='containImg'>
            <div className='imgGrid'>
                {images.map((image, index) => (
                    <div key={index} className={`imgWrapper ${index === 0 ? 'grid-col-2' : ''}`}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className='match-height'
                            onClick={() => handleClickOpen(index)}
                        />
                        <Dialog open={openDialogIndex === index} onClose={handleClose}>
                            <DialogTitle>Image Detail</DialogTitle>
                            <DialogContent>
                                {/* Add description here */}
                                <img src={image.src} alt={image.alt} style={{ maxWidth: '100%', height: 'auto' }} />
                                <p>{image.description}</p>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                ))}
            </div>
        </div>

    );
}

