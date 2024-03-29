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
  p: 4
};

export default function BasicModal({ username, name, tagline, imagePath, title,
  interestArea, office, website, phone, email, twitter, facebook }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {tagline}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <img src={imagePath} alt="my pic" />
          {website &&
            <Typography sx={{ mt: 2 }}>
              <a href={website} target="_blank">Site!</a>
            </Typography>
          }
          {office &&
            <Typography sx={{ mt: 2 }}>
              Office: {office}
            </Typography>
          }
          {phone &&
            <Typography sx={{ mt: 2 }}>
              Phone: {phone}
            </Typography>
          }
          {email &&
            <Typography sx={{ mt: 2 }}>
              Email: {email}
            </Typography>
          }
          {twitter &&
            <Typography sx={{ mt: 2 }}>
              Twitter: {twitter}
            </Typography>
          }
          {facebook &&
            <Typography sx={{ mt: 2 }}>
              Facebook: {facebook}
            </Typography>
          }
        </Box>
      </Modal>
    </div>
  );
}


