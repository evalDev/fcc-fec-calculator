/* globals describe, it, expect, add, multiply */
"use strict";
describe("Calculator", function(){
  it("Mutiplies two numbers", function(){
    expect(multiply(2,4)).toBe(8);
    expect(multiply(62,2)).toBe(124);
  });
  it("Adds two numbers", function(){
    expect(add(2,4)).toBe(6);
    expect(add(62,2)).toBe(64);
  });
});
