var XString = require("../XString"),
	should = require("should");

describe("countOf", function () {

	describe("Zero Cases", function () {

		it("should return 0 when strings have nothing in common", function () {
			var xString = XString("Google"),
				result  = xString.countOf("Cat");
			result.should.be.equal(0);
		})

		it("should return 0 when XString is initialized with empty string", function () {
			var xString = XString("");
				result  = xString.countOf("Get");
			result.should.be.equal(0);
		})

		it("should return 0 when countOf is called with empty string", function () {
			var xString = XString("Google");
				result  = xString.countOf("");
			result.should.be.equal(0);
		})

		it("should return 0 when both the strings are empty", function () {
			var xString = XString("");
				result  = xString.countOf("");
			result.should.be.equal(0);
		})

		it("should return 0 when countOf is called with null", function () {
			var xString = XString(""),
				result  = xString.countOf(null);
			result.should.be.equal(0);
		})

		it("should return 0 when countOf is called with undefined", function () {
			var xString = XString("undefined"),
				result  = xString.countOf(undefined);
			result.should.be.equal(0);
		})

		it("should return 0 when countOf is called with string bigger than the XString", function () {
			var xString = XString("Google"),
				result  = xString.countOf("Microsoft");
			result.should.be.equal(0);
		})

	});

	describe("Non-zero Cases", function () {

		it("should return 1 when string to be found is found only once", function () {
			var xString = XString("Google"),
				result  = xString.countOf("Google");
			result.should.be.equal(1);
		})

		it("should return 2 when string to be compared is found twice", function () {
			var xString = XString("GoogleoGoogle"),
				result  = xString.countOf("Google");
			result.should.be.equal(2);
		})

		it("should return 2 when 'gg' is searched in 'ggg'", function () {
			var xString = XString("ggg"),
				result  = xString.countOf("gg");
			result.should.be.equal(2);
		})

		it("should return 3 when 'g' is searched in 'ggg'", function () {
			var xString = XString("ggg"),
				result  = xString.countOf("g");
			result.should.be.equal(3);
		})

	});

});