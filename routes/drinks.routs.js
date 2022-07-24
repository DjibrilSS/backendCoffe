const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controllers");
const router = Router();
router.get("/drinks", drinksController.getDrinks);
router.get("/drinks/in-stock", drinksController.getInStock);
router.get("/drinks/:id", drinksController.getDrinkId);
router.post("/drinks", drinksController.addDrink);
router.delete("/drinks/:id", drinksController.deleteDrinkId);
router.patch("/drinks/:id", drinksController.patchDrink);

module.exports = router;
