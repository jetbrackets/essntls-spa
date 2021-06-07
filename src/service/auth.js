// export const API_URL = 'http://essntls.jetbrackets.com'
export const API_URL = 'https://essntls.jetbrackets.com/'

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}
