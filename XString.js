"use strict";

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function XString(inputString) {
    var nativeString = inputString;

    if (typeof inputString !== "string") {
        nativeString = "";
    }

    this.getString = function () {
        return nativeString;
    };

    this.resetString = function (inputString) {
        if (typeof inputString !== "string") {
            nativeString = "";
        } else {
            nativeString = inputString;
        }
        return this;
    };
}

XString.prototype.countOf = function (stringToBeMatched) {
    var i, len, result = 0, nativeString = this.getString(), len1 = stringToBeMatched ? stringToBeMatched.length : 0;
    if (typeof stringToBeMatched === "string" && stringToBeMatched !== "") {
        for (i = 0, len = nativeString.length - len1; i <= len; i += 1) {
            if (nativeString.substr(i, len1) === stringToBeMatched) {
                result += 1;
            }
        }
    }
    return result;
};

XString.prototype.frequencyCounter = function () {
    var nativeString = this.getString();

    return (function () {
        var items = {}, sortableItems = [], i, len, element;

        function leastCommon(n) {
            var leastCommonItems;
            if (isNumber(n)) {
                leastCommonItems = sortableItems.slice(-n);
            } else {
                leastCommonItems = sortableItems.slice().reverse();
            }
            return leastCommonItems;
        }

        function mostCommon(n) {
            var mostCommonItems;
            if (isNumber(n)) {
                mostCommonItems = sortableItems.slice(0, n);
            } else {
                mostCommonItems = sortableItems;
            }
            return mostCommonItems;
        }

        for (i = 0, len = nativeString.length; i < len; i += 1) {
            if (items.hasOwnProperty(nativeString[i])) {
                items[nativeString[i]] += 1;
            } else {
                items[nativeString[i]] = 1;
            }
        }

        for (element in items) {
            if (items.hasOwnProperty(element)) {
                sortableItems.push([element, items[element]]);
            }
        }

        sortableItems.sort(function (first, second) {
            return second[1] - first[1];
        });

        return {mostCommon: mostCommon, items: items, leastCommon: leastCommon};
    }());
};

XString.prototype.longestCommonSubstrings = function (inputString) {
    var nativeString = this.getString(),
        result = [],
        i,
        j,
        len = nativeString.length,
        len1 = inputString ? inputString.length : 0,
        previousRow = Array.apply(null, {length: len1}).map(Number.prototype.valueOf, 0),
        currentRow  = Array.apply(null, {length: len1}).map(Number.prototype.valueOf, 0),
        longestLength = 0,
        tempString;

    if (typeof inputString === "string") {

        for (i = 0; i < len; i += 1) {
            for (j = 0; j < len1; j += 1) {
                if (nativeString[i] === inputString[j]) {
                    if (i === 0 || j === 0) {
                        currentRow[j] = 1;
                    } else {
                        currentRow[j] = previousRow[j - 1] + 1;
                    }
                }
                if (currentRow[j] > longestLength) {
                    longestLength = currentRow[j];
                    result.length = 0;
                    result.push(nativeString.substring(i - (longestLength - 1), i + 1));
                } else if (currentRow[j] === longestLength && longestLength) {
                    tempString = nativeString.substring(i - (longestLength - 1), i + 1);
                    if (result.indexOf(tempString) === -1) {
                        result.push(nativeString.substring(i - (longestLength - 1), i + 1));
                    }
                }
            }
            previousRow = currentRow.slice();
            currentRow = currentRow.map(Number.prototype.valueOf, 0);
        }

    } else {
        result = null;
    }
    return result;
};

module.exports = function (inputString) {
    return new XString(inputString);
};
