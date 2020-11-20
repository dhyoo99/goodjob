import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import './LoginSelectTypeModal.css';

const ModuleWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 130px;
  margin-bottom: 130px;

  @media (max-width: 650px) {
    width: 90%;
  }
`;

// eslint-disable-next-line
const LoginSelectTypeModal = ({ open, handleClose }) => {
  const history = useHistory();
  const onClickLogin = () => {
    history.push('/login');
    handleClose();
  };
  return (
    <ModuleWrapper>
      <Dialog fullWidth onClose={handleClose} maxWidth="sm" open={open}>
        <DialogTitle id="modal-title">Select Your Type!</DialogTitle>
        <DialogContent id="modal-content">
          <Button id="business-select-button" onClick={onClickLogin}>
            Business
          </Button>
          <Button id="individual-select-button" onClick={onClickLogin}>
            Individual
          </Button>
        </DialogContent>
      </Dialog>
    </ModuleWrapper>
  );
};

export default LoginSelectTypeModal;
