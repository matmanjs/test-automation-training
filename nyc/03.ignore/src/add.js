

(function() {
    /* istanbul ignore if */
    if (process.env.test) {
        console.log(1);
    } else {
        console.log(2);
    }
    /* istanbul ignore else */
    if (true) {
        console.log(3);
    } else {
        console.log(4);
    }
})();

function add(x, y) {
    return x + y;
}

module.exports = add;
