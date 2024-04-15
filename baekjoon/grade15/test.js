/**
 * -  숫자나 문자와 같은 객체가 아닌 기본형(primitive) 값을 비교할 때 사용
 * test("테스트 설명", () => {
  expect("검증 대상").toXxx("기대 결과");
});

- 객체 검증 시
test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

- 예외 발생여부 테스트
test("throw when id is non negative", () => {
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow("Invalid ID");
});

- 배열 테스트
test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3); - 배열의 길이 체크
  expect(colors).toContain("Yellow"); - 특정 원소가 배열에 들어있는지
  expect(colors).not.toContain("Green"); - 함수가 불만족하는지
});
 */
