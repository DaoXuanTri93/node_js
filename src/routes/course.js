const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CoursesController')

//create
router.get('/create', courseController.create)
router.post('/create', courseController.createPost)

//edit
router.get('/edit/:id', courseController.editCourse)
router.post('/edit/:id', courseController.submitEdit)

//delete
router.post('/delete/:id', courseController.submitDelete)

// all list
router.get('/list-todo', courseController.listTodo)

// thùng rác
router.get('/trash', courseController.trash)
router.post('/restore/:id', courseController.restore)
router.post('/trashDelete/:id', courseController.trashDelete)

//check all xử lí
// /courses/check-all-submit
router.post('/check-all-submit', courseController.checkAllSubmit)

router.get('/:slug', courseController.slug)

module.exports = router;