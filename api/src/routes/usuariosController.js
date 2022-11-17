const express = require('express');
const router = express.Router();

router.get("/:id",(req,resp)=>{
    const {id} = req.params;

    resp.json(id+" usuarios");
});
router.post("/",(req,resp)=>{
    resp.json("post")
});

router.delete('/:id',(req,resp)=>{
    const {id} = req.params;

    resp.json(id);
});

module.exports = router;