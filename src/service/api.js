// export const API_URL = 'http://essntls.jetbrackets.com'
export const API_URL = 'https://essntls.jetbrackets.com/api'

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + '/v1/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export const ACTIVE_DRIVERS = (token) => {
  return {
    url: API_URL + '/admin/v1/dashboard',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const ORDERS = (token) => {
  return {
    url: API_URL + '/admin/v1/orders',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const RESTOCK_ORDERS = (token) => {
  return {
    url: API_URL + '/admin/v1/restock-orders',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const GET_CUSTOMERS = (token) => {
  return {
    url: API_URL + '/admin/v1/customers',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const GET_DRIVERS = (token) => {
  return {
    url: API_URL + '/admin/v1/drivers',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const BLOCK_USER = (token, id) => {
  return {
    url: `${API_URL}/admin/v1/user/block/${id}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const APPROVE_USER = (token, id) => {
  return {
    url: `${API_URL}/admin/v1/user/approve/${id}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}
