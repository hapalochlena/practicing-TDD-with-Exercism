export const EXPECTED_MINUTES_IN_OVEN = 40;

export const remainingMinutesInOven = (actualMinutesInOven) => {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
};

export const preparationTimeInMinutes = (numberOfLayers) => {
  return numberOfLayers * 2;
};

export const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => {
  if (numberOfLayers != 0) {
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
  } else {
    return 0;
  };
};
