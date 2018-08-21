/*
 * Material Actions
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

import { push } from 'react-router-redux';
import { Feedback } from '@icedesign/base';
import * as api from './api';
import {
  SHOW_ADD_MATERIAL,
  HIDE_ADD_MATERIAL,
  SHOW_NEW_MATERIAL_DROPDOWN,
  HIDE_NEW_MATERIAL_DROPDOWN,
  GET_AD_METERIALS_REQUEST,
  GET_AD_METERIALS_SUCCESS,
  GET_AD_METERIALS_FAILURE,
  GET_AD_METERIAL_BYID_REQUEST,
  GET_AD_METERIAL_BYID_SUCCESS,
  GET_AD_METERIAL_BYID_FAILURE,
  ADD_METERIAL_REQUEST,
  ADD_METERIAL_SUCCESS,
  ADD_METERIAL_FAILURE,
  UPDATE_METERIAL_REQUEST,
  UPDATE_METERIAL_SUCCESS,
  UPDATE_METERIAL_FAILURE,
  DELETE_METERIAL_REQUEST,
  DELETE_METERIAL_SUCCESS,
  DELETE_METERIAL_FAILURE,
} from './constants';

let newMaterialDropDownSwitch = false;
let addMaterialSwitch = false;

const showNewMaterialDropDown = () => {
  return {
    type: SHOW_NEW_MATERIAL_DROPDOWN,
    shouldOpen: true,
  }
};

const hideNewMaterialDropDown = () => {
  return {
    type: HIDE_NEW_MATERIAL_DROPDOWN,
    shouldOpen: false,
  }
};

const showAddMaterial = (payload) => {
  return {
    type: SHOW_ADD_MATERIAL,
    payload,
    shouldOpen: true,
  }
};

const hideAddMaterial = () => {
  return {
    type: HIDE_ADD_MATERIAL,
    shouldOpen: false,
  }
};

const getAdMaterialsRequest = () => {
  return {
    type: GET_AD_METERIALS_REQUEST,
    isLoading: true,
  };
};

const getAdMaterialsSuccess = () => {
  return {
    type: GET_AD_METERIALS_SUCCESS,
    isLoading: false,
  };
};

const getAdMaterialsFailure = () => {
  return {
    type: GET_AD_METERIALS_FAILURE,
    isLoading: false,
  };
};

const getAdMaterialByIdRequest = () => {
  return {
    type: GET_AD_METERIAL_BYID_REQUEST,
    isLoading: true,
  };
};

const getAdMaterialByIdSuccess = () => {
  return {
    type: GET_AD_METERIAL_BYID_SUCCESS,
    isLoading: false,
  };
};
  
const getAdMaterialByIdFailure = () => {
  return {
    type: GET_AD_METERIAL_BYID_FAILURE,
    isLoading: false,
  };
};

const addMaterialRequest = () => {
  return {
    type: ADD_METERIAL_REQUEST,
    isLoading: true,
  };
};

const addMaterialSuccess = () => {
  return {
    type: ADD_METERIAL_SUCCESS,
    isLoading: false,
  };
};

const addMaterialFailure = () => {
  return {
    type: ADD_METERIAL_FAILURE,
    isLoading: false,
  };
};

const updateMaterialRequest = () => {
  return {
    type: UPDATE_METERIAL_REQUEST,
    isLoading: true,
  };
};

const updateMaterialSuccess = () => {
  return {
    type: UPDATE_METERIAL_SUCCESS,
    isLoading: false,
  };
};

const updateMaterialFailure = () => {
  return {
    type: UPDATE_METERIAL_FAILURE,
    isLoading: false,
  };
};

const deleteMaterialRequest = () => {
  return {
    type: DELETE_METERIAL_REQUEST,
    isLoading: true,
  };
};

const deleteMaterialSuccess = () => {
  return {
    type: DELETE_METERIAL_SUCCESS,
    isLoading: false,
  };
};

const deleteMaterialFailure = () => {
  return {
    type: DELETE_METERIAL_FAILURE,
    isLoading: false,
  };
};

export const getAdMaterials = (params = {
    currentPage: 1,
    pageSize: 20,
  }) => {
    return async (dispatch) => {
      dispatch(getAdMaterialsRequest());
      try {
        const response = await api.getAdMaterials(params);
  
        if (response.status === 200 && response.data.resCode === '00') {
  
          dispatch(getAdMaterialsSuccess(response.data));
        } else {
          dispatch(getAdMaterialsFailure(response.data));
          Feedback.toast.error(response.data && response.data.resMsg);
        }
  
        return response.data;
      } catch (error) {
        dispatch(getAdMaterialsFailure(error));
      }
    };
  };
  
  export const addMaterial = (params) => {
    return async (dispatch) => {
      dispatch(addMaterialRequest());
      try {
        const response = await api.addMaterial(params);
  
        if (response.status === 200 && response.data.resCode === '00') {
  
          dispatch(addMaterialSuccess(response.data));
          // dispatch(hideAddModelModal());
          dispatch(getAdMaterials());
          Feedback.toast.show(response.data && response.data.resMsg);
        } else {
          dispatch(addMaterialFailure(response.data));
          Feedback.toast.error(response.data && response.data.resMsg);
        }
  
        return response.data;
      } catch(error) {
        dispatch(addMaterialFailure());
      }
    };
  };
  
  export const updateMaterial = (params) => {
    return async (dispatch) => {
      dispatch(updateMaterialRequest());
      try {
        const response = await api.updateMaterial(params);
  
        if (response.status === 200 && response.data.resCode === '00') {
  
          dispatch(updateMaterialSuccess(response.data));
          // dispatch(hideAddModelModal());
          dispatch(getAdMaterials());
          Feedback.toast.show(response.data && response.data.resMsg);
        } else {
          dispatch(updateMaterialFailure(response.data));
          Feedback.toast.error(response.data && response.data.resMsg);
        }
  
        return response.data;
      } catch(error) {
        dispatch(updateMaterialFailure());
      }
    };
  };
  
  export const deleteMaterial = (params) => {
    return async (dispatch) => {
      dispatch(deleteMaterialRequest());
      try {
        const response = await api.deleteMaterial(params);
  
        if (response.status === 200 && response.data.resCode === '00') {
  
          dispatch(deleteMaterialSuccess(response.data));
          // dispatch(hideAddModelModal());
          dispatch(getAdMaterials());
          Feedback.toast.show(response.data && response.data.resMsg);
        } else {
          dispatch(deleteMaterialFailure(response.data));
          Feedback.toast.error(response.data && response.data.resMsg);
        }
  
        return response.data;
      } catch(error) {
        dispatch(deleteMaterialFailure());
      }
    };
  };

export const addMaterialToggle = (payload) => {
  return (dispatch) => {
    addMaterialSwitch = !addMaterialSwitch;
    if (addMaterialSwitch) {
      dispatch(showAddMaterial(payload));
    } else {
      dispatch(hideAddMaterial());
    }
  };
};  

export const newMaterialDropDownToggle = () => {
  return (dispatch) => {
    newMaterialDropDownSwitch = !newMaterialDropDownSwitch;
    if (newMaterialDropDownSwitch) {
      dispatch(showNewMaterialDropDown());
    } else {
      dispatch(hideNewMaterialDropDown());
    }
  };
};
    