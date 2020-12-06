# 前言

由于项目拆分，需要将公用的组件单独拆分成一个个小的npm包，使之满足业务开发，应用多项目。

# 需求

1.  目前数据层处理方案是 dva ,沿用dva方案去开发组件，但dva-cli该脚手架臃肿，默认生成方案是带完整路由 的产品，仅希望拥有dva核心数据处理，开发小的npm组件。

2. 希望能支持javascript和typescript开发。

3. 希望能拥有好的模块化，可以支持按需引入和整体模块导入例如：

    https://dian-lingxi.oss-cn-beijing.aliyuncs.com/2020-12-06/da2175ec5c83145823527d6e24bf3a6.png?Expires=1607246334&OSSAccessKeyId=LTAIiTOudd9oeHVo&Signature=iTdC%2FnE60%2FXZHJVWZ%2B89tCs6%2Bqg%3D 

   该文件目录为npm包的开发目录，称为A，其中/dist 和 /lib是通过打包编译出来的文件夹。

​       当A仅仅为组件不带其他功能。其他项目B中想直接引入A时：

```
import A from 'A/dist'
```

该方式 为全量引入。

当B中只想按需引入A中的某些功能:

```
import { func_a } from 'A'
```



# 实现

