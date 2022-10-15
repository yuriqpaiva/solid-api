import swaggerUI from "swagger-ui-express";

import { app } from ".";
import swaggerJson from "./swagger.json";

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.listen(3333, () => console.log("Server is running!"));
