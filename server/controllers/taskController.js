
// Here we are going to follow the CRUD operations

const Task = require("../models/Task");

//POST /api/tasks

exports.createTask = async (req,res)=>{
	const task = await Task.create({ ...res.body, owner: req.user.id});
	res.json(task);

};

//GET /api/tasks

