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
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function ResearchModal({facultyName, citations}) {
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
        <Box sx={style} style={{ width: '750px', height:'300px', overflowY: 'scroll'}}>
          <Typography id="modal-modal-title" variant="h5" component="h2" align="center">
            {facultyName}
          </Typography>
          <hr/>
          <Typography id="modal-modal-description" variant="caption" component="h2">
            {citations.map((x) =>
                <li>{x}</li>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}