const { program } = require('commander')


program
  .option('--flag')
  .option('-i --input <char>', '输入内容', '输入默认值')

program.parse()

const options = program.opts()
console.log(options)
/*
默认支持的命令：
node xx.js -h
node xx.js --helper

node xx.js -f -i inputValue
*/