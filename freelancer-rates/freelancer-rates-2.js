export const dayRate = (hourlyRate) => {
  return hourlyRate * 8;
};

export const daysInBudget = (fixedBudget, hourlyRate) => {
  return Math.floor((fixedBudget / hourlyRate) / 8);
};

export const priceWithMonthlyDiscount = (hourlyRate, projectDays, discountRate) => {
  const numberOfMonths = Math.floor(projectDays / 22);
  const remainingDays = projectDays % 22;
  const costPerMonth = (hourlyRate * 8) * 22;
  const totalCostFloat = (costPerMonth * numberOfMonths) * (1 - discountRate) + (hourlyRate * 8) * remainingDays;
  return Math.ceil(totalCostFloat);
};
