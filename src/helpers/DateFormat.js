const dateFormat = (value) => {
  const result = value.replace('T', ' ').replace('.000000Z', '')

  return result
}

export default dateFormat
