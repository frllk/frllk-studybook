// 状态
const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';
// 类
class MyPromise {
  // 构造函数
  constructor (executor) {
    this.status = PENDING;  // 设置初始状态
    this.value = undefined; // value与reason值不明确，初始为undefined
    this.reason = undefined;

    // 设置两个容器，收集成功或者失败的回调
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    // 每个promise，都有自己的执行器 —— 有自己的resolve，reject。ES6中，如果在外面定义方法，实际上是定义在prototype上面了
    /**
     * @description 定义函数resolve：更改状态
     */    
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 发布
        this.onFulfilledCallbacks.forEach(fn => fn())
      }  
    }
    /**
     * @description 定义函数reject：更改状态
     */    
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 发布
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    // 捕获异常,如果有异常，直接执行rejected
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // onFulfilled执行条件
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    // onRejected执行条件
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    if (this.status === PENDING) {
      // 收集所有的成功的回调、或者是收集所有的失败的回调
      // 这里要用到发布订阅模式
      // 订阅的过程
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value);
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
    }
  }
}
// commonjs规范
module.exports = MyPromise;