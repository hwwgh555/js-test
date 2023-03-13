const fs = require('fs/promises');
const path = require('path');

(async function() {
  const fileContent = await fs.readFile(path.join(__dirname, './mock.json'), {
    encoding: 'utf8'
  });

  await fs.writeFile(path.join(__dirname,'./mock1.json'), fileContent);
  await fs.writeFile(path.join(__dirname,'./mock1.json'), fileContent);
})()

/*
注意：
node的调试设置断点：
1. debugger 关键字
2. 在列号的左侧，点击 小红点
*/
/*
##方式一：chrome调试
### 步骤1：
命令行:
```
node --inspect-brk ./debugger.js
```
Debugger listening on ws://127.0.0.1:9229/0ed48909-0ae9-4771-954e-5369fb13c41c
For help, see: https://nodejs.org/en/docs/inspector

以上启了一个调试的服务端

说明：
* --inspect-brk，其中brk表示，首先暂停
* 命令行中信息的9229，会用于chrome调试配置
* launch.json
```
{
  "configurations": [
    {
      "name": "Attach",
      "port": 9229,
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    }
  ]
}
```

### 步骤2：
打chrome浏览器，在url中输入
`chrome://inspect/#devices`

Discover network targets中，点击‘Configs’，选择 9929 端口，保存

Remote Target下列中，显示 刚才配置的文件
点击 'inspect'，弹出调试框，后续与 一般JS完全类似
*/

/*
##方式二：直接在 IDE 调试

### step1
点击IDE的纵向主菜单的Debugger图标
从选项中，选择 "create a launch.json"
该文件存在预配置，在该文件点击选择 'Node.js: Attach'

形成一个.vscode的目录，并生成launch.json文件
// 也可以自己创建文件夹，vscode也会识别到

### step2
在终端，输入以下，并执行
```
node --inspect-brk ./debugger.js
```

点击 绿色图标箭头，进入debugger

---
以上总是要输命令，比较麻烦，可以在launch.json中直接配置
{
  "configurations": [
    {
      "name": "Launch Program",
      "program": "${workspaceFolder}/node-debugger/debugger.js",
      "request": "launch",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    },
    {
      "name": "Attach",
      "port": 9229,
      "request": "attach",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    }
  ]
}
*/

