## 安装和项目初始化

本项目基于Hardhat生成基础项目框架并通过`openzepplin`进行代码编写。

```bash
# install hardhat
npm install --save-dev hardhat
# install openzeppelin/contracts
npm install --save-dev @openzeppelin/contracts
```

```bash
# 初始化
npx hardhat
# 选择 
Create an advanced sample project
```

### 编写智能合约&&部署合约

进入`contracts`文件夹中，我们创建第一个基于`openzepplin`的合约。我们创建一个`First.js`文件编写一个简单的存储功能的智能合约。

```bash
# 执行编译
npx hardhat compile
```

在编译之后在终端控制台会打印出这份合约的地址，如`0xBbEf28c201Da8Ba38A175041283fe375cDb44987`。那么现在问题来了，这份合约被编译到哪里去了呢？答岸就是`artifacts/contracts/First.sol`这个文件夹中。其中`First.json`文件中包含的了各类配置文件和编译好的`bytecode`。

部署合约的命令行如下：
```bash
npx hardhat run --network ropsten scripts/deploy.js
```

### 与智能合约进行交互

创建一个文件`scripts/interact.js`,我们开始编写交互代码。

```bash
npx hardhat run scripts/interact.js
```