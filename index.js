/**
 * 정확한 기획 규정이 없으므로 현재 정규식은 임시 형태임.
 */

// default regex
// 추가 인자로 받은것 regex


class Validator {
  constructor ({
    email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    phone = /^(\+\d{1,3}[- ]?)?\d{10}$/,
    name = /^[ㄱ-ㅣ가-힣a-zA-Z\s,.'-\pL]+$/,
    date
  } = {}) {
    this.email = email;
    this.phone = phone;
    this.name = name;
    this.date = date;
  }

  isEmail(string) {
    return this.email.test(string);
  }

  isPhone(number) {
    return this.phone.test(number);
  }

  isDate(date) {
    if (date instanceof Date) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Validator;