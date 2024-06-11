import mongoose, { Schema } from "mongoose";

// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').load()
// }

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));
mongoose.Promise = global.Promise;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.models.Author || mongoose.model("Author", authorSchema);

export default Author;
