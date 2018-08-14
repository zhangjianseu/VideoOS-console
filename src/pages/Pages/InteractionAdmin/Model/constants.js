/*
 * IAModalConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const GET_IAMODEL_REQUEST = 'OS/GET_IAMODEL_REQUEST';
export const GET_IAMODEL_FAILURE = 'OS/GET_IAMODEL_FAILURE';
export const GET_IAMODEL_SUCCESS = 'OS/GET_IAMODEL_SUCCESS';

export const SHOW_ADDMODEL_MODAL = 'OS/SHOW_ADDMODEL_MODAL';
export const HIDE_ADDMODEL_MODAL = 'OS/HIDE_ADDMODEL_MODAL';
