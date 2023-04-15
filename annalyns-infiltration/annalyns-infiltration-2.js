/**
 * @param {boolean} knightAwake indicates if the knight is awake
 * @return {boolean} `true` if the 'Fast Attack' action is available
 */
// version 1
export function canExecuteFastAttack(knightAwake) {
  return !knightAwake
}

// version 2
// export function canExecuteFastAttack(knightAwake) {
//   return knightAwake ? false : true
// }

/**
 * @param {boolean} knightAwake
 * @param {boolean} archerAwake
 * @param {boolean} prisonerAwake
 * @return
 */
// version 1
export function canSpy(knightAwake, archerAwake, prisonerAwake) {
  return (knightAwake || archerAwake || prisonerAwake)
}

// version 2
// export function canSpy(knightAwake, archerAwake, prisonerAwake) {
//   return (knightAwake || archerAwake || prisonerAwake) ? true : false
// }

// version 3
// export function canSpy(knightAwake, archerAwake, prisonerAwake) {
//   if (!knightAwake && !archerAwake && !prisonerAwake) {
//     return false
//   } else {
//     return true
//   }
// }


/**
 * @param {boolean} archerAwake
 * @param {boolean} prisonerAwake
 *
 * @returns {boolean}
 */
export function canSignalPrisoner(archerAwake, prisonerAwake) {
  return (!archerAwake && prisonerAwake)
}



/**
 * @param {boolean} dog
 * @param {boolean} knightAwake
 * @param {boolean} archerAwake
 * @param {boolean} prisonerAwake
 * @returns {boolean}
 */
export function canFreePrisoner(dog, knightAwake, archerAwake, prisonerAwake) {
  if (dog) {
    return archerAwake ? false : true
  } else {
    return (!knightAwake && !archerAwake && prisonerAwake) ? true : false
  }
}
