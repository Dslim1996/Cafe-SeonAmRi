const funcs = {
  isEmpty: val => {
    return (
      val === '' ||
      val === null ||
      val === undefined ||
      (val !== null && typeof val === 'object' && !Object.keys(val).length)
    );
  },
  isEmail: val => {
    const regExp = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,5})$/i,
    );
    return regExp.test(val);
  },
};

export default funcs;
