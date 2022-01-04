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
