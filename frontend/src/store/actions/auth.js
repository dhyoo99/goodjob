import axios from '../../service/axios-backend';

import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

export const login = ({ username, password }) => async (dispatch) => {
  const body = JSON.stringify({ username, password });
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
