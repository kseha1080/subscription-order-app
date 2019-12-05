import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import modalPopupStyles from './modalPopupStyles';

const ModalPopup = ({
  classes,
  isOpen,
  closeModal,
  actionData,
  onActionClick,
  title,
  subTitle,
}) => {
  return (
    <div>
      <Modal
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        className={classes.modal}
        open={isOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h2 id='modal-title'>{title}</h2>
            <p id='modal-description'>{subTitle}</p>
            <div>
              <Button
                className={classes.modalButton}
                onClick={() => onActionClick(actionData)}
                color='primary'
                variant='contained'
                disableFocusRipple={true}
                disableRipple={true}
              >
                Delete
              </Button>
              <Button
                onClick={closeModal}
                color='primary'
                variant='outlined'
                disableFocusRipple={true}
                disableRipple={true}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default withStyles(modalPopupStyles)(ModalPopup);
