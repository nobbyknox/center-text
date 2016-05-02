var centerText = require('../index.js');

var assert = require('assert');
var path = require('path');

describe(path.basename(__filename), function() {

    it('should pad as expected', function() {
        assert.equal(' abc', centerText('abc', 5));
        assert.equal('  abc', centerText('abc', 6));
        assert.equal('  abc', centerText('abc', 7));
        assert.equal('   abc', centerText('abc', 8));
        assert.equal('   abc', centerText('abc', 9));
        assert.equal('    abc', centerText('abc', 10));
        assert.equal('    abc', centerText('abc', 11));
    });

    it('should return original string when longer than width', function() {
        assert.equal('abc', centerText('abc', 3));
        assert.equal('abc', centerText('abc', 2));
        assert.equal('abc', centerText('abc', 1));
        assert.equal('abc', centerText('abc', 0));
        assert.equal('abc', centerText('abc', -1));
    });

    it('should return empty on undefined', function() {
        assert.equal('', centerText(undefined, 5));
    });

    it('should return empty on null', function() {
        assert.equal('', centerText(null, 5));
    });

});
