const express = require('express');
const sprintRouter = express.Router();

sprintRouter.get('/', async (req,res)=>{
    res.send({
        boards:[
            {
              userID: 1,
              title: "Something",
              createTime: new Date().toLocaleDateString(),
              isActive: true,
            },
            {
              userID: 1,
              title: "Need to improve",
              createTime: new Date().toLocaleDateString(),
              isActive: true,
            },
            {
              userID: 1,
              title: "Need to improve",
              createTime: new Date().toLocaleDateString(),
              isActive: true,
            },
          ]
    })
});



module.exports = sprintRouter;