const router = require("express").Router();
const trainerService = require("../services/trainers.service");

//1. Get all trainers
router.get("/trainers", (req, res) => {
  const queryData = req.query;

  try {
    const trainers = trainerService.getTrainersData(queryData);
    res.send(trainers);
  } catch (error) {
    res.sendStatus(500);
  }
});
//2. Get trainer by id
router.get("/trainers/:id", (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = trainerService.getTrainerById(trainerId);
    res.status(200).send(trainer);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
//3. Add new trainer
router.post("/trainers/add", (req, res) => {
  const newTrainerData = req.body;

  try {
    const createdTrainer = trainerService.addTrainer(newTrainerData);
    res.status(201).send(createdTrainer);
  } catch (error) {
    res.sendStatus(500);
  }
});

//4. Update trainer info
router.patch("/trainers/:id/update", (req, res) => {
  const trainerUpdates = req.body;
  const trainerId = req.params.id;
  try {
    const updatedTrainer = trainerService.updateTrainer(
      trainerId,
      trainerUpdates
    );

    res.status(200).send(updatedTrainer);
  } catch (error) {
    if (error.message === "Trainer not found") {
      res.status(404).send(error.message);
    } else if (error.message === "Id can't be changed") {
      res.status(400).send(error.message);
    } else {
      res.sendStatus(500);
    }
  }
});

//5. Delete a trainer
router.delete("/trainers/:id", (req, res) => {
  const trainerId = req.params.id;
  try {
    trainerService.deleteTrainer(trainerId);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

//5. Delete all trainer
router.delete("/trainers", (req, res) => {
  try {
    trainerService.deleteAllTrainers();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
