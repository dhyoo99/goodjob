import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './SignUpSelectTypeModal.css';

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
const SignUpSelectTypeModal = ({ open, handleClose }) => {
  const history = useHistory();
  const onClickSignUpBusiness = () => {
    history.push('/business-signup');
    handleClose();
  };
  const onClickSignUpIndividual = () => {
    history.push('/individual-signup');
    handleClose();
  };
  return (
    <ModuleWrapper>
      <Dialog fullWidth onClose={handleClose} maxWidth="sm" open={open}>
        <DialogTitle id="modal-title">Select Your Type!</DialogTitle>
        <DialogContent id="modal-content">
          <Button id="business-select-button" onClick={onClickSignUpBusiness}>
            Business
          </Button>
          <Button
            id="individual-select-button"
            onClick={onClickSignUpIndividual}
          >
            Individual
          </Button>
        </DialogContent>
      </Dialog>
    </ModuleWrapper>
  );
};

export default SignUpSelectTypeModal;
