const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    res.send('Post Section');
    // try{
    //  const posts = await Post.find(); 
    //  resizeTo.json(posts);
    // } catch(err){
    //    res.json({message: err})
    // }
    });

router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    // try{
    //    const savedPost = await post.save();
       
    //     // .then(data => {
    //     //     res.json(data);
    //     // })
    //     // .catch(err => {
    //     //     res.json({ message: err });
    //     // })
    //     res.json(savedPost);
    // }catch(err) {
    //     res.json({ message: err });
    // }

       post.save()
         .then(data => {
             res.json(data);
         })

         .catch(err => {
             res.json({message: err});
         });
});

    
 module.exports = router;   

 