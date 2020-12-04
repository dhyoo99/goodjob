import axios from '../../service/axios-backend';

import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from './types';

export const login = ({ email, password }) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios({
      url: 'api/auth/login',
      method: 'POST',
      data: body
    });
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const individualRegister = ({
  first_name,
  last_name,
  email,
  username,
  password,
  birth_date,
  agreement,
  gender
}) => async (dispatch) => {
  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    username,
    password,
    birth_date,
    agreement,
    gender
  });
  try {
    const res = await axios({
      url: 'api/auth/i-register',
      method: 'POST',
      data: body
    });
    // console.log(res.data);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: REGISTER_FAILED });
  }
};

export const corporateRegister = ({
  first_name,
  last_name,
  email,
  password,
  company_registration_number,
  company_name,
  agreement
}) => async (dispatch) => {
  const body = JSON.stringify({
    email,
    password,
    first_name,
    last_name,
    company_registration_number,
    company_name,
    agreement
  });
  try {
    console.log(body);
    const res = await axios({
      url: 'api/auth/c-register',
      method: 'POST',
      data: body
    });
    console.log(res.data);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: REGISTER_FAILED });
  }
};
