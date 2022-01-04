// 状态
const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';
// 类
class MyPromise {
  // 构造函数
  constructor (executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 每个promise，都有自己的执行器 —— 有自己的resolve，reject
    // 更改状态
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }  
    }
    // 更改状态
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    }

    // 捕获异常
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then (onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
}

module.exports = MyPromise;