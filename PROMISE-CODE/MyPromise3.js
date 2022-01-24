// 状态
const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'

/**
 * @description 判单x是否是一个promise，如果是promise，需要进行特殊的处理，如果不是，需要resolve，reject
 * @param {*} promise2
 * @param {*} x
 * @param {*} resolve
 * @param {*} reject
 * @return {*}
 */  
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('TypeError: Chaining cycle detected for promise #<MyPromise>'))
  }

  let called = false; // 是否调用

  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then // throw error
      // 通过判断then是不是一个function来判断是否是promise
      if (typeof then === 'function') { // promise
        then.call(x, (y) => {
          if (called) return
          called = true
          // 递归调用，处理一直resolve新的promise实例
          resolvePromise(promise2, y, resolve, reject) // 处理问题1
        }, (r) => {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        resolve(x) // 如果不是一个promise，直接resolve
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}
// 类
class MyPromise {
  // 构造函数
  constructor (executor) {
    this.status = PENDING // 设置初始状态
    this.value = undefined // value与reason值不明确，初始为undefined
    this.reason = undefined

    // 设置两个容器，收集成功或者失败的回调
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    // 每个promise，都有自己的执行器 —— 有自己的resolve，reject。ES6中，如果在外面定义方法，实际上是定义在prototype上面了
    /**
     * @description 定义函数resolve：更改状态
     */

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        // 发布
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }
    /**
     * @description 定义函数reject：更改状态
     */

    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        // 发布
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    // 捕获异常,如果有异常，直接执行rejected
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  // x有可能是普通值或者是promise, 需要对x进行处理
  then(onFulfilled, onRejected) {
    // onFulfilled, onRejected是可选参数，如果不传的话，需要处理
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    let promise2 = new MyPromise((resolve, reject) => {
      // onFulfilled执行条件
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            // promise2的成功或者失败，函数中是不知道的, 需要把promise2传过去
            // new Promise的resolve和reject在外界的函数中是拿不到的,所以也需要传过去
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0); // 设置成0也是大于等于4毫秒的，具体查看mdn
      }
      // onRejected执行条件
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0);
      }

      if (this.status === PENDING) {
        // 收集所有的成功的回调、或者是收集所有的失败的回调
        // 这里要用到发布订阅模式
        // 订阅的过程
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return promise2
  }

  catch(errorCallback) {
    return this.then(null, errorCallback)
  }
}
// commonjs规范
module.exports = MyPromise
