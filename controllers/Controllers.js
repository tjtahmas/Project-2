const Post = require('../models/Post');

exports.getMyGrps = async (req, res, next) => {
    try {
        // const [posts, _] = await Post.findAll();
        // res.status(200).json({ count: posts.length, posts });
        console.log('get from "/user_name": get all groups');
        res.send('controller working');

    } catch (error) {

        console.log(error);
        next(error);
    }
}

exports.createGroup = async (req, res, next) => {
    try {

        // let {title, body} = req.body;
        // let post = new Post(title, body);
        // post = await post.save();
        // res.status(200).json({ message: "Post Created" });
        console.log('post from "/user_name": creating a group works to');
        res.send('controller working  creating a post works to');

    } catch (error) {

        console.log(error);
        next(error);
    }
}

exports.getPostById = async (req, res, next) => {
    try {

        // let postId = req.params.id;
        // let [post, _] = await Post.findById(postId);
        // res.status(200).json({ post: post[0]})
        console.log('get from "/:id": get something by id');
        res.send('controller working this is gettin a post by id');

    } catch (error) {

        console.log(error);
        next(error);
    }
}

exports.getGroup = async (req, res, next) => {
    try {

        // let postId = req.params.id;
        // let [post, _] = await Post.findById(postId);
        // res.status(200).json({ post: post[0]})
        console.log('get from "/userName": get all group members ');
        res.send('controller working this is gettin a post by id');

    } catch (error) {

        console.log(error);
        next(error);
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });
        const users = userData.map((project) => project.get({ plain: true }));
        res.render('homepage', { users });
    } catch (error) {
        res.status(500).json(err);
        console.log(error);
        next(error);
    }
}