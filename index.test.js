const Validator = require('./index.js');

describe('🔷 VALIDATE', () => {
  let validator;
  beforeEach(() => {
    validator = new Validator();
  });

  // 이메일
  describe('🔹 isEmail()', () => {
    // 타입
    it('Email should be only STRING type', () => {
      expect(validator.isEmail('ozotask@naver.com')).toBe(true);
      expect(validator.isEmail(undefined)).toBe(false);
      expect(validator.isEmail(123)).toBe(false);
      expect(validator.isEmail(null)).toBe(false);
      expect(validator.isEmail(NaN)).toBe(false);
    });

    it('isEmail has own specific condition', () => {
      expect(validator.isEmail('🔥**!!@djadk')).toBe(false);
      expect(validator.isEmail('안녕하세요')).toBe(false);
      expect(validator.isEmail('ozzdadsfjklasdjfklajdsfksdjfkadsfjklajdfklasjdfklajsdflkjasldfj@adsjfkslajdfklajsfdklasjfklasjdflkasjdflkasdjflksajdfkl.asdjfklsdfjklsadfjklsadjfklsadfj')).toBe(false);
    });
  });

  // 핸드폰
  describe('🔹 isPhone()', () => {
    // 타입
    it('Phone number should be only NUMBER type', () => {
      expect(validator.isPhone(1096329321)).toBe(true);
      expect(validator.isPhone(undefined)).toBe(false);
      expect(validator.isPhone('01012341234')).toBe(false);
      expect(validator.isPhone(null)).toBe(false);
      expect(validator.isPhone(NaN)).toBe(false);
    });

    it('isPhone has own specific condition', () => {
      expect(validator.isPhone(99912939192)).toBe(false);
      expect(validator.isPhone(101)).toBe(false);
      expect(validator.isPhone(123890130120382090891210832913092810389203980138903189301829102893083018239089138)).toBe(false);
    });
  });

  // BirthDate
  describe('🔹 isDate()', () => {
    // 타입
    const sampleDate = new Date();
    it('Email should be only STRING type', () => {
      expect(validator.isDate(sampleDate)).toBe(true);
    });
  });
})