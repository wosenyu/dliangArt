import { Button, ButtonGroup } from '@mui/material'




function AllButton() {
    return (
        <div className='btn'>
            <Button variant="outlined" sx={{ color: 'black', borderColor: 'black', borderRadius: '20px', padding: '8px 16px', '&:hover': { borderColor: 'green' }, marginRight: '10px' }}>All</Button>
            <Button variant="outlined" sx={{ color: 'black', borderColor: 'black', borderRadius: '20px', padding: '8px 16px', '&:hover': { borderColor: 'green' }, marginRight: '10px' }}>BackGround</Button>
            <Button variant="outlined" sx={{ color: 'black', borderColor: 'black', borderRadius: '20px', padding: '8px 16px', '&:hover': { borderColor: 'green' }, marginRight: '10px' }}>Sketches</Button>
        </div>
    )
}
export default AllButton