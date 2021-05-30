import { Router } from "express";
import { FoodModel } from "./database";

export const router = Router();

router.get(".", async (req, res) => {
  const pizzas = await FoodModel.query();
  res.json(pizzas);
});

router.post(".", async (req, res) => {
  const { name } = req.body;
  const pizza = await FoodModel.query()
    .insert({
      name,
    })
    .returning("*");
  res.json(pizza);
});