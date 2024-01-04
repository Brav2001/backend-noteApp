import cors from "cors";

const corsMiddleware = () =>
  cors({
    origin: (origin, callback) => {
      const Accepted_origins = [
        "http://localhost",
        "http://localhost:5173",
        "https://note-app-brav.vercel.app",
      ];

      if (Accepted_origins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  });

export default corsMiddleware;
