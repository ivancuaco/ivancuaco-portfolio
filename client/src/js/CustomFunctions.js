export function calculateYearsMonthsFromDate(dateString) {
  const parts = dateString.split(" ");

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const startMonth = monthNames.indexOf(parts[0]);
  const startYear = parseInt(parts[1]);

  const startDate = new Date(startYear, startMonth, 1);
  const endDate = new Date();

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--
    months += 12
  }

  console.log({ years, months })
  return { years, months }
}