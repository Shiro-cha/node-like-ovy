import cors from "cors";

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
};

export default cors(corsOptions);
