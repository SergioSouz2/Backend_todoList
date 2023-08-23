const tasksModel = require('../models/tasksModel')



const getAll =  async (req,res) => {
    const tasks = await tasksModel.getAll(); 
    return res.status(200).json(tasks)
};

const createTask = async (req,res) => {
    const createdTasks = await tasksModel.createTasks(req.body)
    return res.status(201).json(createdTasks);
}

const deleteTask = async (req, res) =>{
    const { id } = req.params;
    await tasksModel.deleteTask(id);

    return res.status(204).json();
}

const updatedTesk = async (req, res) => {
    const { id } = req.params;
    await tasksModel.updatedTesk(id,req.body);
    return res.status(204).json();
};

module.exports  = {
    getAll,
    createTask,
    deleteTask,
    updatedTesk
};