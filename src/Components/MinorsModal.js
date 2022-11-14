import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MinorsModal({title, description, courses, note}) {
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
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
            {title}
          </Typography>
          <Typography id="modal-modal-title" variant="subtitle2" component="h2" align="center">
            {description}
          </Typography>
          <hr/>
          <Typography id="modal-modal-title" variant="body1" component="h2" align="center">
            {courses.map((x) =>
                <div>{x}</div>
            )}
          </Typography>
          <hr/>
          <Typography id="modal-modal-title" variant="caption" component="h4" align="center">
            {note}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}