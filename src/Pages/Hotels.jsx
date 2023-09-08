import React,{useState} from 'react';
import {Card,Typography,Modal,Box,CardMedia,Button,Rating,CardContent,CardActions} from '@mui/material';
import img1 from '../Assets/jaipur1.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import img2 from '../Assets/jaipur2.jpg'
import img3 from '../Assets/jaipur3.jpg'
import Itinerary from '../Components/Itinerary/Itinerary';
import {MdOutlineTravelExplore} from 'react-icons/md'



function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const Hotels = () => {

    const [open, setOpen] = useState(false);
    
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
//   const modalStyle = {
//     position: 'absolute',
//     top: '10%',
//     left: '10%',
//     overflow: 'scroll',
//     height: '70%', // Adjust the height as needed
//     width: '80%', // Adjust the width as needed
//     backgroundColor: 'white',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     padding: '20px',
//   };

  const stylemodal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 600,
    overflow:'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    const Data = [
        {
        id:1,
        imgSrc: img1,
        destTitle: 'Park Hotel',
        location: 'Jaipur',
        price: '700',
        description: 'The epitome of romance, Park Hotel is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ' 
        },
      
      
        {
        id:2,
        imgSrc: img2,
        destTitle: 'Regenta Central',
        location: 'Jaipur',
        price: '600',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.' 
        },
      
      
        {
        id:3,
        imgSrc: img3,
        destTitle: 'Whispering Palms',
        location: 'Jaipur',
        price: '700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is ‘lavish’ and ‘beauty’. Always interesting to be in this place'  
        }
    ]
    const [itineraryEnabled, setItineraryEnabled] = useState(Array(Data.length).fill(false));

    const handleModalOpen = () => {

    }

    const handleClick = async(index) => {
        
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    
            if (!res) {
                alert('Razorpay SDK failed to load. Are you online?')
                return
            }
    
            const data = await fetch('http://localhost:5000/razorpay', { method: 'POST' }).then((t) =>
                t.json()
            )
    
            console.log(data)
    
            const options = {
                key:'rzp_test_T9hgdBwhGxqcxx',
                currency: data.currency,
                amount: data.amount.toString(),
                order_id: data.id,
                name: 'Booking',
                description: 'Thank you for nothing. Please give us some money',
                image: 'htt',
                handler: function (response) {

                  const updatedItineraryEnabled = [...itineraryEnabled];
                  updatedItineraryEnabled[index] = true; // Use 'value' to enable or disable the button
                  setItineraryEnabled(updatedItineraryEnabled);
                    // alert(response.razorpay_payment_id)
                    // alert(response.razorpay_order_id)
                    // alert(response.razorpay_signature)
                    alert('Success')
                },
                prefill: {
                    name:'Vaishnavi',
                    email: 'vaishnavi@gmail.com',
                    phone_number: '9899795929'
                },
                theme: {
                    color: "#3399cc"
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        

    }
      


    return (

        <div style={{padding:'100px'}}>
        <h1>Hotels</h1>
        <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={stylemodal}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Itinerary for the period
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Itinerary />
        </Box>
      </Modal>
        </div>
        
        <div style={{display:'flex',gap:25,flexWrap:'wrap',margin:'10px'}}>

        {Data?.map((i,index) => {

            return (

                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={i.imgSrc}
                  title={i.destTitle}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    <HiOutlineLocationMarker/>{i.destTitle} 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {i.description}
                  </Typography>
                  <div style={{textAlign:'right',marginTop:'5px'}}>
                  Price:  ₹{i.price}<span style={{fontSize:'12px',fontColor:'grey'}}>(per night)</span>
                  <br />
                  <Rating name="read-only" value={4} readOnly />
                  </div>
                </CardContent>
                <CardActions>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                        <div>
                        <Button size="small" onClick={handleOpen} disabled={!itineraryEnabled[index]} >Itinerary</Button>
                        <Button size="small">Learn More</Button>
                        </div>
                        <div>
                        <Button size="medium" variant='contained' onClick={() => handleClick(index)}>Book Now</Button>
                        </div>
                    </div>
                  
                  
                </CardActions>
              </Card>

            )
        })}
       
    </div>

    </div>
        


    )
}

export default Hotels