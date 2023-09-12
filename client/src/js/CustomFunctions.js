export function calculateYearsMonthsFromDate(dateString) {
  let parts = dateString.split(" ");

  let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let startMonth = monthNames.indexOf(parts[0]);
  let startYear = parseInt(parts[1]);

  let startDate = new Date(startYear, startMonth, 1);
  let endDate = new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--
    months += 12
  }

  return { years, months }
}