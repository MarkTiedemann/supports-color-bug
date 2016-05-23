
# supports-color-bug

**Demonstrates bug where `chalk/supports-color` is `false` even though colors can be displayed with `chalk/ansi-styles` in NPM scripts in Git Bash for Windows.**

## Code

```javascript
const supportsColor = require('supports-color')
const style = require('ansi-styles')

if (supportsColor) {
    console.log('Supports color: ' + style.green.open + true + style.green.close)
} else {
    console.log('Supports color: ' + style.red.open + false + style.red.close)
}
```

## Result

![](https://raw.githubusercontent.com/MarkTiedemann/supports-color-bug/master/git-bash.png)

As the screenshot shows, `false` is red, so colors are actually supported.

## Status

This is a `wontfix`: [https://github.com/chalk/supports-color/issues/36](https://github.com/chalk/supports-color/issues/36).

## Workaround

Set the environment variable `FORCE_COLOR=1`:

```
FORCE_COLOR=1 npm test
```

Or add the `--color` CLI flag:

```
npm test -- --color
```
