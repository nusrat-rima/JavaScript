function calculateVAT(price) {
  if (typeof price !== 'number' || price < 0) {
    return 'Invalid';
  }
  return (price * 7.5) / 100;
}

function validContact(contact) {
  if (typeof contact !== 'string') {
    return 'Invalid';
  }
  if (
    contact.length === 11 &&
    contact.startsWith('01') &&
    !contact.includes(' ')
  ) {
    return true;
  }
  return false;
}

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return 'Invalid';
  }
  let passNumber = 0;
  let failNumber = 0;

  for (let mark of marks) {
    if (mark >= 50) {
      passNumber++;
    } else {
      failNumber++;
    }
  }
  return passNumber > failNumber;
}

function validProposal(person1, person2) {
  if (typeof person1 !== 'object' || typeof person2 !== 'object') {
    return 'invalid';
  }
  if (person1.gender === person2.gender) {
    return false;
  }

  if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  }
  return true;
}

function calculateSleepTime(times) {
  if (
    !Array.isArray(times) ||
    !times.every((time) => typeof time === 'number')
  ) {
    return 'Invalid';
  }

  let totalSeconds = 0;
  for (let time of times) {
    totalSeconds += time;
  }

  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds % 3600) / 60);
  let second = totalSeconds % 60;

  return { hour, minute, second };
}

