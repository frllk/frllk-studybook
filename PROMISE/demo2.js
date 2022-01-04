/*
 * @Author: your name
 * @Date: 2022-01-04 23:18:40
 * @LastEditTime: 2022-01-04 23:47:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \frllk-studybook\PROMISE\demo2.js
 */

// 回调地狱
const fs = require('fs')
let uid = 3
fs.readFile('./data/user.json', 'utf-8', function (err, data) {
  const userData = JSON.parse(data),
        userInfo = userData.filter(item => item.id === uid)[0];
  fs.readFile('./data/userCourse.json', 'utf-8', function (err, data) {
    const userCourseData = JSON.parse(data), userId = userInfo.id,
          userCourse = userCourseData.filter(item => item.uid === uid)[0];
      fs.readFile('./data/course.json', 'utf-8', function (err, data) {
        const courseData = JSON.parse(data), userCourses = userCourse.courses
        let _arr = []
        userCourses.map(id => {
          courseData.map(item => {
            if (item.id === id) {
              _arr.push(item)
            }
          })
        })
        const userCourseInfo = {
          username: userInfo.username,
          courses: _arr
        }
        fs.writeFileSync(`./data/${userCourseInfo.username}.json`, JSON.stringify(userCourseInfo))
      })
  })
})
