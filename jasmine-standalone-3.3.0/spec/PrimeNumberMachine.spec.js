describe("PrimeNumberMachineTest", function() {
  it("should determine 2 is a prime number", function() {
    expect(findPrime(2)).toBeTruthy();
  });
  it("should determine 104681 is a prime number", function() {
    expect(findPrime(104681)).toBeTruthy();
  });
  it("should determine 6 is not a prime number", function() {
    expect(findPrime(6)).toBeFalsy();
  });
  it("should determine 37,120,123 is not a prime number", function() {
    expect(findPrime(37120123)).toBeFalsy();
  });
  it("should determine -1 is not a prime number", function() {
    expect(findPrime(-1)).toBeFalsy();
  });
  it("should determine 0 is not a prime number", function() {
    expect(findPrime(0)).toBeFalsy();
  });
  it("should determine 1 is not a prime number", function() {
    expect(findPrime(1)).toBeFalsy();
  });
  it("should determine a space is not a prime number", function() {
    expect(findPrime(" ")).toBeFalsy();
  });
  it("should determine a non numeric character is not a prime number", function() {
    expect(findPrime("test")).toBeFalsy();
  });
  it("should determine a blank field is not a prime number", function() {
    expect(findPrime()).toBeFalsy();
  });
});