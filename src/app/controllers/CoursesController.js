const Course = require('../../models/Course')


class CoursesController {
    // [Get] path: /courses:slug    
    create(req, res, next) {
        res.render('create')
    }

    // [POST] path: /courses/create
    createPost(req, res, next) {
        const small = new Course(req.body);
        small.save()
            .then(() => res.redirect('/courses/list-todo'))
    }

    // [Get] path: /courses/listTodo
    listTodo(req, res, next) {
        Promise.all([Course.find({}).lean(), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([items, countDeleted]) => res.render('courses/list-todo', { items, countDeleted }))

    }

    //[get] path :/courses/:id
    editCourse(req, res, next) {
        console.log(req.params.id)
        Course.findOne({ _id: req.params.id })
            .then(course => res.render('edit', { course: course.toObject() }))
            .catch(next)
    }
    //[Post] path :/courses/:id
    submitEdit(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/courses/list-todo'))
    }

    //[Post] path :/courses/delete/:id
    submitDelete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
    }

    // [Get] path: /courses:slug
    slug(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(courses => res.render('courses/courseDetail', { courses: courses.toObject() }))
            .catch(next)
    }

    // [Get] path: /trash
    trash(req, res, next) {
        Course.findDeleted({})
            .lean()
            .then((items) => res.render('courses/trash', { items }))
            .catch(next)
    }

    //[Post] path /courses/restore/:id
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
    }

    //[Post] path /trashDelete/:id
    trashDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
    }
    //[Post] path /courses/checkAllSubmit
    checkAllSubmit(req, res, next) {
        console.log(req.body.action)
        switch (req.body.action) {
            case 'Xoa':
                Course.delete({ _id: { $in: req.body.coursesId } })
                    .then(() => res.redirect('back'))
                break;

            default:
                res.json("action is invalid")
                break;
        }
    }
}

module.exports = new CoursesController;