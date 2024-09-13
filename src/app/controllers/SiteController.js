const Course = require('../../models/Course')


class SiteController {

    // [Get] path: /
    async index(req, res, next) {
        Course.find({})
            .lean()
            .then(courses => {
                // courses = courses.map(course => course.toObject())
                res.render('home', { courses })
            })
            .catch(next)
    }

    search(req, res) {
        res.send("Seach")
    }

}

module.exports = new SiteController;