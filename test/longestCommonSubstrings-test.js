var XString = require("../XString"),
	should = require("should");

describe("longestCommonSubstrings", function () {

	describe("Happy Cases", function () {

		it("should return an empty array when strings have nothing in common", function () {
			var xString = XString("Google"),
				result  = xString.longestCommonSubstrings("Cat");
			result.should.be.empty;
		})

		it("should return an array of size two when strings have two characters in common", function () {
			var xString = XString("Google");
				result  = xString.longestCommonSubstrings("Get");
			result.should.have.lengthOf(2);
			result.should.eql(["G", "e"]);
		})

		it("should return values only once, even when the same string occurs more than once", function () {
			var xString = XString("AB");
				result  = xString.longestCommonSubstrings("ABAB");
			result.should.have.lengthOf(1);
			result.should.eql(["AB"]);
		})

		it("should return an empty array when both the strings are empty", function () {
			var xString = XString("");
				result  = xString.longestCommonSubstrings("");
			result.should.be.empty;
		})

		it("should return an empty array when XString is initialized with null", function () {
			var xString = XString(null),
				result  = xString.longestCommonSubstrings("Cat");
			result.should.be.empty;
		})

		it("should return an empty array when XString is initialized with undefined", function () {
			var xString = XString(undefined),
				result  = xString.longestCommonSubstrings("Cat");
			result.should.be.empty;
		})

	});

	describe("Failure Cases", function () {

		it("should return null when string to be compared is null", function () {
			var xString = XString("Google"),
				result  = xString.longestCommonSubstrings(null);
			should.not.exist(result);
		})

		it("should return null when string to be compared is undefined", function () {
			var xString = XString("Google"),
				result  = xString.longestCommonSubstrings(undefined);
			should.not.exist(result);
		})

		it("should return null when string to be compared is not passed", function () {
			var xString = XString("Google"),
				result  = xString.longestCommonSubstrings();
			should.not.exist(result);
		})

		it("should return null when string to be compared is a number", function () {
			var xString = XString("Google"),
				result  = xString.longestCommonSubstrings(1);
			should.not.exist(result);
		})

	});

});