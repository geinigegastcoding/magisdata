export function calculateAutomationSavings({ people, hoursPerWeek, hourlyRate }) {
  const safePeople = Math.max(0, Number(people) || 0);
  const safeHours = Math.max(0, Number(hoursPerWeek) || 0);
  const safeRate = Math.max(0, Number(hourlyRate) || 0);
  const weeklyHours = safePeople * safeHours;
  const weeklyValue = weeklyHours * safeRate;

  return {
    weeklyHours,
    weeklyValue,
    annualValue: weeklyValue * 52
  };
}
