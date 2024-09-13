class NewsController {

    // [GET] /news
    index(req, res){
        res.send('news')
    }

    // [GET] :slug
    slug(req,res){
        res.send('slug')
    }

}

module.exports = new NewsController;