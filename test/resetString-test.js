var XString = require("../XString"),
	should = require("should");

describe("resetString", function () {

	describe("Happy Cases", function () {

		it("should return an empty string when resetString is called with an empty string", function () {
			var xString = XString("").resetString("");
				result  = xString.getString();
			result.should.equal("");
		})

		it("should return an empty string when resetString is called with null", function () {
			var xString = XString("").resetString(null),
				result  = xString.getString();
			result.should.equal("");
		})

		it("should return an empty string when resetString is called with undefined", function () {
			var xString = XString("").resetString(undefined),
				result  = xString.getString();
			result.should.equal("");
		})

		it("should return Google when resetString is called with Google", function () {
			var xString = XString("").resetString("Google"),
				result  = xString.getString();
			result.should.equal("Google");
		})

	});

});