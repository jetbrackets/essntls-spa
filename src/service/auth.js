export const API_URL = 'http://essntls.jetbrackets.com'

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + '/api/admin/v1/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}
