function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    time: 'short',
  }
  const dateObj = new Date(date)
  const formattedDate = new Intl.DateTimeFormat('en-GB', options)
  return formattedDate.format(dateObj)
}

export default formatDate
