// // // import * as React from 'react';
// // // import Box from '@mui/material/Box';
// // // import Slider from '@mui/material/Slider';

// // // const marks = [
// // //   {
// // //     value: 0,
// // //     label: '0°C',
// // //   },
// // //   {
// // //     value: 20,
// // //     label: '20°C',
// // //   },
// // //   {
// // //     value: 37,
// // //     label: '37°C',
// // //   },
// // //   {
// // //     value: 100,
// // //     label: '100°C',
// // //   },
// // // ];

// // // function valuetext(value) {
// // //   return `${value}°C`;
// // // }

// // // export default function DiscreteSliderMarks() {
// // //   return (
// // //     <Box sx={{ width: 300,marginLeft:'20px' }}>
// // //       <Slider
// // //         aria-label="Custom marks"
// // //         defaultValue={20}
// // //         getAriaValueText={valuetext}
// // //         step={10}
// // //         valueLabelDisplay="auto"
// // //         marks={marks}
// // //       />
// // //     </Box>
// // //   );
// // // }
// // import * as React from 'react';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';

// // export default function MediaCard() {
// //   return (
// //     <Card sx={{ maxWidth: 345 }}>
// //       <CardMedia
// //         sx={{ height: 140 }}
// //         image="/static/images/cards/contemplative-reptile.jpg"
// //         title="green iguana"
// //       />
// //       <CardContent>
// //         <Typography gutterBottom variant="h5" component="div">
// //           Lizard
// //         </Typography>
// //         <Typography variant="body2" color="text.secondary">
// //           Lizards are a widespread group of squamate reptiles, with over 6,000
// //           species, ranging across all continents except Antarctica
// //         </Typography>
// //       </CardContent>
// //       <CardActions>
// //         <Button size="small">Share</Button>
// //         <Button size="small">Learn More</Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// export default function BasicRating() {
//   const [value, setValue] = React.useState(2);

//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 2 },
//       }}
//     >
//       <Typography component="legend">Controlled</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//       <Typography component="legend">Read only</Typography>
//       <Rating name="read-only" value={value} readOnly />
//       <Typography component="legend">Disabled</Typography>
//       <Rating name="disabled" value={value} disabled />
//       <Typography component="legend">No rating given</Typography>
//       <Rating name="no-value" value={null} />
//     </Box>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
