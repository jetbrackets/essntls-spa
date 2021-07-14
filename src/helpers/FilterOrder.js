const FilterOrder = (value, select, text) => {
  return value.filter(
    (value) =>
      value.status
        .toLowerCase()
        .includes(`${select === 'all'.toLowerCase() ? '' : select}`) &&
      value.customer.name.toLowerCase().includes(text.toLowerCase()) |
        value.delivery_address.toLowerCase().includes(text.toLowerCase()) |
        (value.id === parseInt(text, 10)) |
        (value.driver
          ? value.driver.name.toLowerCase().includes(text.toLowerCase())
          : value)
  )
}

export default FilterOrder
