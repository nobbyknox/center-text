'use strict';

module.exports = function(text, width) {

    if (!text) {
        return '';
    }

    if (text.length >= width) {
        return text;
    }

    let str = '';

    for (let i = 0; i < ((width - text.length) / 2); i++) {
        str += ' ';
    }

    str += text;
    return str;
};
