import express from "express";
import { GetSkins } from "../application/GetSkins";
import { SkinsRepositoryInMemory } from "../infra/SkinsRepository";

const app = express();
app.use(express.json());

// DI
const skinsRepository = new SkinsRepositoryInMemory();
const getSkins = new GetSkins(skinsRepository);

app.get("/skins", async (req, res) => {
  const skins = await getSkins.execute();
  return res.json(skins);
});

app.listen(3000);
