// 이메일
export const checkEmail = (email) => {
  const reg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return reg.test(email);
};

// 8자리 이상 비밀번호
export const checkPassword = (password) => {
  const reg1 = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
  return reg1.test(password);
};
