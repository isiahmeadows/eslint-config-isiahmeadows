"use strict"

// Simple utility to merge two rules together.

var hasOwn = Object.prototype.hasOwnProperty

function copySingle(dest, src, prop) {
    var value = src[prop]

    if (value == null) {
        delete dest[prop]
    } else {
        dest[prop] = src[prop]
    }
}

function copyObject(dest, src, key) {
    if (!hasOwn.call(src, key)) return
    if (!hasOwn.call(dest, key)) dest[key] = {}

    src = src[key]
    dest = dest[key]

    for (var prop in src) {
        if (hasOwn.call(src, prop)) {
            copySingle(dest, src, prop)
        }
    }
}

function copyArray(dest, src, key) {
    if (!hasOwn.call(src, key)) return
    if (!hasOwn.call(dest, key)) dest[key] = []
    if (!Array.isArray(dest[key])) dest[key] = [dest[key]]
    dest[key] = dest[key].concat(src[key])
}

function copy(dest, src, key) {
    if (hasOwn.call(src, key)) {
        copySingle(dest, src, key)
    }
}

function merge(ret, config) {
    copyArray(ret, config, "extends")
    copy(ret, config, "parser")
    copyObject(ret, config, "parserOptions")
    copyArray(ret, config, "plugins")
    copyObject(ret, config, "settings")
    copyObject(ret, config, "env")
    copyObject(ret, config, "globals")
    copyObject(ret, config, "rules")
}

module.exports = function () {
    var ret = {}

    for (var i = 0; i < arguments.length; i++) {
        merge(ret, arguments[i])
    }

    return ret
}
