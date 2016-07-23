/* globals describe, it, expect, add, multiply, divide, lastValue, beforeEach */
"use strict";
describe("Calculator", function(){
  beforeEach(function() {
      lastValue = 0;
    });
  it("Mutiplies two numbers", function(){
    expect(multiply(2,4)).toBe(8);
    expect(multiply(62,2)).toBe(124);
  });
  it("Divides two numbers", function(){
    expect(divide(8,4)).toBe(2);
    expect(divide(62,2)).toBe(31);
  });
  it("Adds two numbers", function(){
    expect(add(2,4)).toBe(6);
    expect(add(62,2)).toBe(64);
  });
  it("Subtracts two numbers", function(){
    expect(add(2,4)).toBe(6);
    expect(add(62,2)).toBe(64);
  });
  it("Mutiplies the last calculated value with the new value", function(){
    expect(multiply(lastValue,4)).toBe(0);
    expect(multiply(4,4)).toBe(16);
    expect(multiply(lastValue,4)).toBe(64);
  });
});
