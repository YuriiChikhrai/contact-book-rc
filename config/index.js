module.exports = Object.assign({
    enablePoweredBy: false,
}, require(`./${process.env.NODE_ENV}.js`));
