/*
 * AARole Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import { Feedback } from '@icedesign/base';
import * as api from './api';
import {
  GET_ROLES_REQUEST,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAILURE,
  SHOW_ADDROLE_MODAL,
  HIDE_ADDROLE_MODAL,
  ADD_ROLE_REQUEST,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  QUERY_ALL_ROLETYPES_REQUEST,
  QUERY_ALL_ROLETYPES_SUCCESS,
  QUERY_ALL_ROLETYPES_FAILURE,
} from './constants';

let addRoleModalSwitch = false;

const showAddRoleModal = () => {
  return {
    type: SHOW_ADDROLE_MODAL,
    shouldOpen: true,
  }
};

const hideAddRoleModal = () => {
  return {
    type: HIDE_ADDROLE_MODAL,
    shouldOpen: false,
  }
};

const getRolesRequest = () => {
  return {
    type: GET_ROLES_REQUEST,
    isLoading: true,
  }
};

const getRolesSuccess = (payload) => {
  return {
    type: GET_ROLES_SUCCESS,
    payload,
    isLoading: false,
  }
};

const getRolesFail = () => {
  return {
    type: GET_ROLES_FAILURE,
    isLoading: false,
  }
};

const addRoleRequest = () => {
  return {
    type: ADD_ROLE_REQUEST,
    isLoading: true,
  }
};

const addRoleSuccess = (payload) => {
  return {
    type: ADD_ROLE_SUCCESS,
    payload,
    isLoading: false,
  }
};

const addRoleFailure = () => {
  return {
    type: ADD_ROLE_FAILURE,
    isLoading: false,
  }
};

const queryAllRoleTypesRequest = () => {
  return {
    type: QUERY_ALL_ROLETYPES_REQUEST,
    isLoading: true,
  };
};

const queryAllRoleTypesSuccess = (payload) => {
  return {
    type: QUERY_ALL_ROLETYPES_SUCCESS,
    payload,
    isLoading: true,
  };
};

const queryAllRoleTypesFailure = () => {
  return {
    type: QUERY_ALL_ROLETYPES_FAILURE,
    isLoading: true,
  };
};

export const getRoles = (params = {
  currentPage: 1,
  pageSize: 20,
}) => {
  return async (dispatch) => {
    dispatch(getRolesRequest());
    try {
      const response = await api.getAaRoles(params);

      if (response.status === 200 && response.data.resCode === '00') {

        dispatch(getRolesSuccess(response.data));
      } else {
        dispatch(getRolesFail(response.data));
        Feedback.toast.error(response.data && response.data.resMsg);
      }

      return response.data;
    } catch(error) {
      dispatch(getRolesFail(error));
    }
  }  
};

export const addRoleModalToggle = () => {
  return (dispatch) => {
    addRoleModalSwitch = !addRoleModalSwitch;
    if (addRoleModalSwitch) {
      dispatch(showAddRoleModal());
    } else {
      dispatch(hideAddRoleModal());
    }
  }
};

export const addRole = (params) => {
  return async (dispatch) => {
    dispatch(addRoleRequest());
    try {
      const response = await api.addAaRole(params);

      if (response.status === 200 && response.data.resCode === '00') {

        dispatch(addRoleSuccess(response.data));
      } else {
        dispatch(addRoleFailure(response.data));
        Feedback.toast.error(response.data && response.data.resMsg);
      }

      return response.data;
    } catch(error) {
      dispatch(addRoleFailure(error));
    }
  };
};

export const queryAllRoleTypes = (params) => {
  return async (dispatch) => {
    dispatch(queryAllRoleTypesRequest());
    try {
      const response = await api.queryAllRoleTypes(params);

      if (response.status === 200 && response.data.resCode === '00') {

        dispatch(queryAllRoleTypesSuccess(response.data && response.data.roleInfoList));
      } else {
        dispatch(queryAllRoleTypesFailure(response.data));
        Feedback.toast.error(response.data && response.data.resMsg);
      }

      return response.data;
    } catch(error) {
      dispatch(queryAllRoleTypesFailure(error));
    }
  }  
};