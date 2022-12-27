const decode = (encoded, grade, year) => {
  let key = parseInt(process.env.NEXT_PUBLIC_MEMBER_KEY)
  let length = encoded.slice(-1)
  encoded = encoded.slice(length, -1)
  let roll = parseInt(encoded) / (grade * key * (year%100))
  return roll;
};

export default decode;