const { cosmiconfigSync } = require('cosmiconfig')

// const explorerSync = cosmiconfigSync('license', {packageProp: 'dependencies.license'})
// TODO: packageProp配置项无效
const explorerSync = cosmiconfigSync('license')

const searchedFor = explorerSync.search()

console.log(searchedFor)
/*
注意：默认查找的内容
* package.json
* 以.开头的文件，或.config的文件夹
* 无点时 module.config.js 或 module.config.cjs
*/