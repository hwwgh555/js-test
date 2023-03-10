const { Command } = require('commander')
const program = new Command();

program
  .name('string-util')
  .description('CLI to JS string utilities')
  .version('0.0.0')

program.command('split')
  .description('Split a string')
  .argument('<string>', 'string to split')
  .option('-s --separator <char>', 'separator charactor', ',')
  .action((str, options) => {
    console.log(str, options)
  })

program.command('subcommand1')
  .description('multi commands test')
  .argument('<string>', 'string')
  .action((str, options) => {
    console.log(str, options)
  })

program.parse()
/*
<string> 里面的string有特殊作用吗？ TODO:

执行命令的最常形式
```
command xx -option1 xx -options2
```


*/