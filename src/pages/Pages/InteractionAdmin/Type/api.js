import axios from 'axios';
import qs from 'querystring';

import config from 'config';
import { getAuthority } from 'utils/authority';

const { OS_API } = config;

export async function getIaTypes(params) {
  return axios({
    headers: {
      token: getAuthority(),
    },
    url: `${OS_API}/interactionType/queryByPage?${qs.stringify(params)}`,
    method: 'get',
    data: params,  
  })  
};

export async function deleteType(params) {
  return axios({
    headers: {
      token: getAuthority(),
    },
    url: `${OS_API}/interactionType/delete`,
    method: 'post',
    data: params,
  })
};

export async function addType(params) {
  return axios({
    headers: {
      token: getAuthority(),
    },
    url: `${OS_API}/interactionType/add`,
    method: 'post',
    data: params,
  })
};

export async function updateType(params) {
  return axios({
    headers: {
      token: getAuthority(),
    },
    url: `${OS_API}/interactionType/modify`,
    method: 'post',
    data: params,
  })
};