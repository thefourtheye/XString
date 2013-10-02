var XString = require("../XString"),
	should = require("should");

describe("commonSubstrings", function () {

	describe("Happy Cases", function () {

		it("should return an empty object when strings have nothing in common", function () {
			var xString = XString("Google"),
				result  = xString.commonSubstrings("Cat");
			result.should.not.be.okay;
		})

		it("should return an object, with size 1 when strings have two characters in common", function () {
			var xString = XString("Google");
				result  = xString.commonSubstrings("Get");
			should(result).have.property("1");
			should(result).have.property("1").eql(["G", "e"]);
		})

		it("should return values only once, even when the same string occurs more than once", function () {
			var xString = XString("AB");
				result  = xString.commonSubstrings("ABAB");
			console.log(result);
			should(result).have.property("1");
			should(result).have.property("1").eql(["A"]);
			should(result).have.property("2");
			should(result).have.property("2").eql(["AB"]);
		})

		it("should return an empty object when both the strings are empty", function () {
			var xString = XString("");
				result  = xString.commonSubstrings("");
			result.should.not.be.okay;
		})

		it("should return an empty object when XString is initialized with null", function () {
			var xString = XString(null),
				result  = xString.commonSubstrings("Cat");
			result.should.not.be.okay;
		})

		it("should return an empty object when XString is initialized with undefined", function () {
			var xString = XString(undefined),
				result  = xString.commonSubstrings("Cat");
			result.should.not.be.okay;
		})

	});

	describe("Failure Cases", function () {

		it("should return null when string to be compared is null", function () {
			var xString = XString("Google"),
				result  = xString.commonSubstrings(null);
			should.not.exist(result);
		})

		it("should return null when string to be compared is undefined", function () {
			var xString = XString("Google"),
				result  = xString.commonSubstrings(undefined);
			should.not.exist(result);
		})

		it("should return null when string to be compared is not passed", function () {
			var xString = XString("Google"),
				result  = xString.commonSubstrings();
			should.not.exist(result);
		})

		it("should return null when string to be compared is a number", function () {
			var xString = XString("Google"),
				result  = xString.commonSubstrings(1);
			should.not.exist(result);
		})

	});

});