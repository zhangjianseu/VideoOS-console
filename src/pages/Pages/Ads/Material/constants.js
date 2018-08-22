/*
 * Material Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const SHOW_ADD_MATERIAL = 'OS/SHOW_ADD_MATERIAL';
export const HIDE_ADD_MATERIAL = 'OS/HIDE_ADD_MATERIAL';

export const SHOW_NEW_MATERIAL_DROPDOWN = 'OS/SHOW_NEW_MATERIAL_DROPDOWN';
export const HIDE_NEW_MATERIAL_DROPDOWN = 'OS/HIDE_NEW_MATERIAL_DROPDOWN';

export const GET_AD_METERIALS_REQUEST = 'OS/GET_AD_METERIALS_REQUEST';
export const GET_AD_METERIALS_SUCCESS = 'OS/GET_AD_METERIALS_SUCCESS';
export const GET_AD_METERIALS_FAILURE = 'OS/GET_AD_METERIALS_FAILURE';

export const GET_IATYPE_BYID_REQUEST = 'OS/GET_IATYPE_BYID_REQUEST';
export const GET_IATYPE_BYID_FAILURE = 'OS/GET_IATYPE_BYID_FAILURE';
export const GET_IATYPE_BYID_SUCCESS = 'OS/GET_IATYPE_BYID_SUCCESS';

export const QUERY_ALL_MODELTYPES_REQUEST = 'OS/QUERY_ALL_MODELTYPES_REQUEST';
export const QUERY_ALL_MODELTYPES_SUCCESS = 'OS/QUERY_ALL_MODELTYPES_SUCCESS';
export const QUERY_ALL_MODELTYPES_FAILURE = 'OS/QUERY_ALL_MODELTYPES_FAILURE';

export const GET_AD_METERIAL_BYID_REQUEST = 'OS/GET_AD_METERIAL_BYID_REQUEST';
export const GET_AD_METERIAL_BYID_SUCCESS = 'OS/GET_AD_METERIAL_BYID_SUCCESS';
export const GET_AD_METERIAL_BYID_FAILURE = 'OS/GET_AD_METERIAL_BYID_FAILURE';

export const ADD_METERIAL_REQUEST = 'OS/ADD_METERIAL_REQUEST';
export const ADD_METERIAL_SUCCESS = 'OS/ADD_METERIAL_SUCCESS';
export const ADD_METERIAL_FAILURE = 'OS/ADD_METERIAL_FAILURE';

export const DELETE_METERIAL_REQUEST = 'OS/DELETE_METERIAL_REQUEST';
export const DELETE_METERIAL_SUCCESS = 'OS/DELETE_METERIAL_SUCCESS';
export const DELETE_METERIAL_FAILURE = 'OS/DELETE_METERIAL_FAILURE';

export const UPDATE_METERIAL_REQUEST = 'OS/UPDATE_METERIAL_REQUEST';
export const UPDATE_METERIAL_SUCCESS = 'OS/UPDATE_METERIAL_SUCCESS';
export const UPDATE_METERIAL_FAILURE = 'OS/UPDATE_METERIAL_FAILURE';

export const ADD_MATERIAL_FILE_REQUEST = 'OS/ADD_MATERIAL_FILE_REQUEST';
export const ADD_MATERIAL_FILE_SUCCESS = 'OS/ADD_MATERIAL_FILE_SUCCESS';
export const ADD_MATERIAL_FILE_FAILURE = 'OS/ADD_MATERIAL_FILE_FAILURE';

export const UPDATE_FORM_SCHEMA = 'OS/UPDATE_FORM_SCHEMA';
