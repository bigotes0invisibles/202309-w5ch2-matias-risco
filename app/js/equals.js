const strictEquals = (valueA, valueB) => {
  if (
    (Object.is(valueA, -0) && Object.is(valueB, 0)) ||
    (Object.is(valueA, 0) && Object.is(valueB, -0))
  ) {
    return true;
  }

  if (Object.is(valueA, NaN) || Object.is(valueB, NaN)) {
    return false;
  }

  return Object.is(valueA, valueB);
};

export default strictEquals;
