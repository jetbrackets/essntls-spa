const Filter = (value, select, text) => {
  return value.filter(
    (items) =>
      items.status
        .toLowerCase()
        .includes(`${select === 'all'.toLowerCase() ? '' : select}`) &&
      items.name.toLowerCase().includes(text.toLowerCase()) |
        items.email.toLowerCase().includes(text.toLowerCase()) |
        (items.id === parseInt(text, 10))
  )
}

export default Filter
