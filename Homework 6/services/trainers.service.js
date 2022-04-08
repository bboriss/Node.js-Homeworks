const { json } = require("body-parser");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const trainersPath = path.join(__dirname, "..", "data", "trainers.json");

// 1. Get trainers data
const getTrainersData = (queryData) => {
  const triners = JSON.parse(
    fs.readFileSync(trainersPath, { encoding: "utf-8" })
  );

  let updatedTrainers = [...trainers];

  if (queryData?.isCurrentlyTeaching) {
    if (queryData?.isCurrentlyTeaching === "true") {
      updatedTrainers = updatedTrainers.filter(
        (trainer) =>
          trainer.isCurrentlyTeaching === queryData.isCurrentlyTeaching
      );
    }
  }

  if (updatedTrainers.length <= 0) throw new Error("No trainers found");

  return updatedTrainers;
};
// 2. Save trainers data
const saveTrainersData = (trainers) =>
  fs.writeFileSync(trainersPath, JSON.stringify(trainers));

// 3. Add new trainer
const addTrainer = (newTrainerData) => {
  const trainers = getTrainersData();
  const newTrainer = {
    id: uuid(),
    ...newTrainerData,
  };
  const updatedTrainer = [...trainers, newTrainer];
  saveTrainersData(updatedTrainer);
  return newTrainer;
};

//4.Get trainer by id
const getTrainerById = (trainerId) => {
  const trainers = getTrainersData();

  const foundTrainer = trainers.find((trainer) => trainer.id === trainerId);

  if (!foundTrainer) throw new Error("Trainer Not Found");

  return foundTrainer;
};

// 5. Updating trainer info
const updateTrainer = (trainerId, trainerUpdateData) => {
  if (trainerUpdateData.id) throw new Error("Id can't be changed");

  const trainers = getTrainersData();
  const foundTrainerIndex = trainers.findIndex(
    (trainer) => trainer.id === trainerId
  );
  //If trainer index is not found
  if (foundTrainerIndex < 0) throw new Error("Trainer not found");

  const updatedTrainerData = {
    ...trainers[foundTrainerIndex],
    ...trainerUpdateData,
  };

  trainers[foundTrainerIndex] = updatedTrainerData;

  saveTrainersData(trainers);
  return updatedTrainerData;
};

// 6. Deleting a trainer
const deleteTrainer = (trainerId) => {
  const trainers = getTrainersData();

  const updatedTrainerData = trainers.filter(
    (trainer) => trainer.id !== trainerId
  );

  saveTrainersData(updatedTrainerData);
};

// 7. Deleting all trainers
const deleteAllTrainers = () => saveTrainersData([]);

module.exports = {
  getTrainersData,
  addTrainer,
  getTrainerById,
  updateTrainer,
  deleteTrainer,
  deleteAllTrainers,
};
