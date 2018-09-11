/*
 * AARole reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
    GET_ROLES_REQUEST,
    GET_ROLES_SUCCESS,
    GET_ROLES_FAILURE,  
    SHOW_ADDROLE_MODAL,
    HIDE_ADDROLE_MODAL,
    QUERY_ALL_ROLETYPES_REQUEST,
    QUERY_ALL_ROLETYPES_SUCCESS,
    QUERY_ALL_ROLETYPES_FAILURE,
    SHOW_DELETEROLE_MODAL,
    HIDE_DELETEROLE_MODAL,
    ADD_ROLE_REQUEST,
    ADD_ROLE_SUCCESS,
    ADD_ROLE_FAILURE,
    UPDATE_ROLE_REQUEST,
    UPDATE_ROLE_SUCCESS,
    UPDATE_ROLE_FAILURE,
    DELETE_ROLE_REQUEST,
    DELETE_ROLE_SUCCESS,
    DELETE_ROLE_FAILURE,
    SET_CURRENT_PAGE,
    SET_FORM_DATA,
  } from './constants';
  
  // The initial state of the account
  const initialState = {
    formData: {},
    roleAuthorities: {
        '类型管理': {
          read: 13,
          write: 11,
        },
        '模板管理': {
          read: 14,
          write: 12,
        },
        '投放计划管理': {
          read: 24,
          write: 21,
        },
        '投放素材管理': {
          read: 25,
          write: 22,
        },
        '投放审核管理': {
          read: 26,
          write: 23,
        },
        'license管理': {
          read: 32,
          write: 31,
        },
        '数据信息管理': {
          read: 42,
          write: 41,
        }
      },
  };
  
  function aaRoleReducer(state = initialState, action) {
    switch(action.type) {
      case GET_ROLES_REQUEST:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_ROLES_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          roleResult: action.payload.roleInfoList || [],
          total: action.payload.totalRecord
        });
      case GET_ROLES_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
        });
      case QUERY_ALL_ROLETYPES_REQUEST:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case QUERY_ALL_ROLETYPES_SUCCESS:
        return Object.assign({}, state, {
          roleTypes: action.payload,
          isLoading: false,
        });
      case QUERY_ALL_ROLETYPES_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
        });
      case ADD_ROLE_REQUEST:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case ADD_ROLE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
        });
      case ADD_ROLE_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
        });
      case UPDATE_ROLE_REQUEST:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case UPDATE_ROLE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
        });
      case UPDATE_ROLE_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
        });
      case DELETE_ROLE_REQUEST:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case DELETE_ROLE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
        });
      case DELETE_ROLE_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
        });
      case SHOW_ADDROLE_MODAL:
      case HIDE_ADDROLE_MODAL:
        return Object.assign({}, state, {
          record: action.payload,
          shouldAddRoleModalOpen: action.shouldOpen,
        });
      case SHOW_DELETEROLE_MODAL:
      case HIDE_DELETEROLE_MODAL:
        return Object.assign({}, state, {
          record: {roleId: action.payload && action.payload.roleId || ''},
          shouldDeleteRoleModalOpen: action.shouldOpen,
        });
      case SET_CURRENT_PAGE:
        return {...state, currentPage: action.payload.currentPage};
      case SET_FORM_DATA:
        const payload = action.payload;
        if (typeof payload === 'object') {
          if (Object.keys(payload).length === 0) {
            state.formData = payload;
          } else {
            Object.keys(payload).forEach(key => {
              state.formData[key] = payload[key];
            });
          }
        }
        return Object.assign({}, state);  
      default:
        return state;    
    }  
  }
  
  export default aaRoleReducer;