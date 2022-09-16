/**
 * 정확한 기획 규정이 없으므로 현재 정규식은 임시 형태임.
 */

// default regex
// 추가 인자로 받은것 regex


export default class Validator {
    constructor ({
        email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        phone = /^(\+\d{1,3}[- ]?)?\d{10}$/,
        name = /^[ㄱ-ㅣ가-힣a-zA-Z\s,.'-\pL]+$/,
        birthDate = /(\d{4})(\d{2})(\d{2})/g
    } = {}) {
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.birthDate = birthDate;
    }

    isEmail(string) {
        return this.email.test(string);
    }

    isPhone(number) {
        return this.phone.test(number);
    }

    isBirthDate(date) {
        return this.birthDate.test(date);
    }

    isName(string) {
        return this.name.test(string);
    }
}