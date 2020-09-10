// src/server.ts

import app from "./app";
import { PORT } from "./constants/mongoose.constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));