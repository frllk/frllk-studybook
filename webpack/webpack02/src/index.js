import css from './style/index.less'
console.log('Hello webpack')


// chunk  chunks  chunkNames
// chunk  代码片段  一个module对应一个chunk
// chunks chunk组  {包含至少一个chunk(module)}

// bundle module

// 一个bundle对应一个chunkName(chunks)
// 一个chunksName(chunks)包含至少一个module（chunk）


// loader
// 假如我们知道webpack只会编译处理js json格式的模块，那么怎么集成样式，图片，vue，jsx等模块呢？

// 最流行的css处理工具之一


/**
 * 关于样式常见的场景：
 * 如何支持样式
 * 如何支持less sass
 * 如何支持postcss
 * 如何把样式处理成独立文件
 * css进行模块化
 */

/**
 * 实现自定义的loader
 * 
 */