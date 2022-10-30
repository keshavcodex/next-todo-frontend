const router = require("express").Router();
let Task = require("../models/task.model");

//Get all Task
router.route("/").get((req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add a new task
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const imageLink = req.body.imageLink;
  const currentProgress = Number(req.body.currentProgress);
  const totalRequiredWork = Number(req.body.totalRequiredWork);
  const deadline = Date.parse(req.body.deadline);

  const newTask = new Task({
    title,
    imageLink,
    currentProgress,
    totalRequiredWork,
    deadline,
  });

  newTask
    .save()
    .then(() => res.json("Task Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Get a particular task by id
router.route("/:id").get((req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Delete a particular task by id
router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task Deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Update a particular task by id
router.route("/update/:id").post((req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      task.title = req.body.title;
      task.imageLink = req.body.imageLink;
      task.currentProgress = Number(req.body.currentProgress);
      task.totalRequiredWork = Number(req.body.totalRequiredWork);
      task.deadline = Date.parse(req.body.deadline);

      task
        .save()
        .then(() => res.json("Task Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
