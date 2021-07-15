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

export const ORDERS = (token, pageNumber) => {
  return {
    url: `${API_URL}/admin/v1/orders?page=${pageNumber}`,
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

export const GET_PRODUCTS = (token) => {
  return {
    url: API_URL + '/admin/v1/product',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const GET_PRODUCT = (token, id) => {
  return {
    url: `${API_URL}/admin/v1/product/edit/${id}`,
    options: {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export const ADD_PRODUCT = (body, token) => {
  return {
    url: API_URL + '/admin/v1/product/store',
    options: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(body)
    }
  }
}

export const EDIT_PRODUCT = (token, body, id) => {
  return {
    url: `${API_URL}/admin/v1/product/update/${id}`,
    options: {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(body)
    }
  }
}
