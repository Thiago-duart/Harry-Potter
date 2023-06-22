
import { createCard } from "./createCard.js";
import { houseHogwarts, receivApi } from "./request.js";
const convert = await receivApi()

createCard(convert)
houseHogwarts()
