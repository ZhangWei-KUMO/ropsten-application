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

### 编写智能合约

进入`contracts`文件夹中，我们创建第一个基于`openzepplin`的合约。编写一个简单的存储功能的智能合约。

```bash
npx hardhat compile
```

### 部署合约

部署合约的命令行如下：
```bash
npx hardhat run --network ropsten scripts/deploy.js
```