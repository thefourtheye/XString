var XString = require("../XString"),
	should = require("should");

describe("frequencyCounter", function () {

	function testFrequencyCounter(inputString) {
		var xString     = XString(inputString),
			result      = xString.frequencyCounter(),
			mostCommon  = result.mostCommon(),
			leastCommon = result.leastCommon(),
			mostCommonNegativeIndex  = result.mostCommon(-1),
			leastCommonNegativeIndex = result.leastCommon(-1);
		result.should.be.instanceOf(Object);
		result.items.should.be.instanceOf(Object);
		mostCommon.should.be.instanceOf(Array);
		leastCommon.should.be.instanceOf(Array);
		mostCommonNegativeIndex.should.be.instanceOf(Array);
		leastCommonNegativeIndex.should.be.instanceOf(Array);
		return result;
	}

	describe("Happy Cases", function () {

		it("should return mostCommon and leastCommon the same", function () {
			var result = testFrequencyCounter("A");
			result.mostCommon().should.be.with.lengthOf(result.leastCommon().length);
			result.leastCommon().should.be.with.lengthOf(1);
			result.items.should.be.eql({"A": 1});
		})

		it("should return mostCommon '3' and leastCommon '1' when XString is initialized with 'AAAB'", function () {
			var result = testFrequencyCounter("AAAB");
			result.mostCommon(1).should.be.eql([["A", 3]]);
			result.leastCommon(1).should.be.eql([["B", 1]]);
			result.items.should.be.ok;
		})

	});

	describe("Negative Cases", function () {

		it("should return nothing when XString is initialized with empty string", function () {
			var result = testFrequencyCounter("");
			result.mostCommon().should.be.with.lengthOf(0);
			result.leastCommon().should.be.with.lengthOf(0);
			result.items.should.be.ok;
		})

		it("should return nothing when XString is initialized with null", function () {
			var result = testFrequencyCounter(null);
			result.mostCommon().should.be.with.lengthOf(0);
			result.leastCommon().should.be.with.lengthOf(0);
			result.items.should.be.ok;
		})

		it("should return nothing when XString is initialized with undefined", function () {
			var result = testFrequencyCounter(undefined);
			result.mostCommon().should.be.with.lengthOf(0);
			result.leastCommon().should.be.with.lengthOf(0);
			result.items.should.be.ok;
		})

	});

});