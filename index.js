'use strict'

const supportsColor = require('supports-color')
const style = require('ansi-styles')

if (supportsColor) {
    console.log('Supports color: '  + style.green.open + true + style.green.close)
} else {
    console.log('Supports color: ' + style.red.open + false + style.red.close)
}
