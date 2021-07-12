const Filter = (value, select, text) => {
  return value.filter(
    (value) =>
      value.status
        .toLocaleLowerCase()
        .includes(`${select === 'all'.toLocaleLowerCase() ? '' : select}`) &&
      value.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) |
        value.email.toLocaleLowerCase().includes(text.toLocaleLowerCase()) |
        (value.id === parseInt(text, 10)) |
        (value.address
          ? value.address.address
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase()) |
            value.address.city
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase()) |
            value.address.country
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase()) |
            value.address.state
              .toLocaleLowerCase()
              .includes(text.toLocaleLowerCase())
          : value)
  )
}

export default Filter
