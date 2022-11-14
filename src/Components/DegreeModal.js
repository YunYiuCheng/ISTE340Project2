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

export default function DegreeModal({title, description, concentrations}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Click to see more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" align="center">
            {title}
          </Typography>
          <Typography id="modal-modal-title" variant="subtitle1" component="h2" align="center">
            Concentrations
          </Typography>
          <hr/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {concentrations.map((x) =>
                <p>{x}</p>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}