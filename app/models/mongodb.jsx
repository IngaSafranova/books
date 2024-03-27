import mongoose, { Schema } from "mongoose";

// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').load()
// }

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', ()=> console.log('Connected to Mongoose'))
mongoose.Promise = global.Promise


const bookSchema = new Schema({
    author: String,
    title: String,
    description: String,
    category: String,
    // series: Boolean,
    // seriesNumber: Number,
},
    {
    timestamps: true
    })

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema)
    
export default Book