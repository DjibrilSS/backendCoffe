const Drink = require("../models/Drink.model");

module.exports.drinksController = {
  getDrinks: async function (req, res) {
    try {
      const drink = await Drink.find({}, { name: 1, price: 1 });
      res.json(drink);
    } catch (e) {
      res.json("произошла ошибка при поиске напитков");
    }
  },
  addDrink: function (req, res) {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      isCoffe: req.body.isCoffe,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then(() => {
        res.json("напиток добавлен");
      })
      .catch(() => {
        res.json("произошла ошибка при добавлении напитка");
      });
  },
  getInStock: async function (req, res) {
    try {
      const drink = await Drink.find(
        { inStock: "true" },
        { name: 1, price: 1 }
      );
      res.json(drink);
    } catch (e) {
      res.json("произошла ошибка при поиске напитков");
    }
  },
  getDrinkId: async function (req, res) {
    try {
      const drink = await Drink.find({ _id: req.params.id });
      res.json(drink);
    } catch (e) {
      res.json("произошла ошибка при поиске напитков");
    }
  },
  deleteDrinkId: async function (req, res) {
    try {
      await Drink.findByIdAndDelete(req.params.id);
      res.json("напиток был удален");
    } catch (e) {
      res.json("произошла ошибка при попытке удалить напиток");
    }
  },
  patchDrink: async function (req, res) {
    try {
      await Drink.findByIdAndUpdate(req.params.id, req.body);
      res.json("напиток был изменен");
    } catch (e) {
      res.json("произошла ошибка при попытке удалить напиток");
    }
  },
};
