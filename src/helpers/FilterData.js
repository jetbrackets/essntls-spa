const FilterData = (value, select, text) => {
  return value.filter(
    (value) =>
      value.status
        .toLocaleLowerCase()
        .includes(`${select === 'all'.toLocaleLowerCase() ? '' : select}`) &&
      value.customer.name
        .toLocaleLowerCase()
        .includes(text.toLocaleLowerCase()) |
        value.delivery_address
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase()) |
        (value.id === parseInt(text, 10)) |
        (value.driver
          ? value.driver.name
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase())
          : value)
  )
}

export default FilterData
