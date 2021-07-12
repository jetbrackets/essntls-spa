const FilterRestockOrder = (value, select, text) => {
  return value.filter(
    (search) =>
      search.status.includes(`${select === 'all' ? '' : select}`) &&
      search.shipping_address
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase()) |
        (search.driver
          ? search.driver.email
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase())
          : value) |
        (search.id === parseInt(text, 10)) |
        (search.driver
          ? search.driver.name
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase())
          : value)
  )
}

export default FilterRestockOrder
