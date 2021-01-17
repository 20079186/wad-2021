import mongoose from 'mongoose';
import { genres } from '../../seedData/genres';


const Schema = mongoose.Schema;



    const GenresSchema = new Schema({
        value: { type: String},
        id: {type: String, required: true },
      });
      
      GenresSchema.statics.findByGenreId = function (genres) {
        return this.findOne({ id: genres});
      };


  
  export default mongoose.model('Genres', GenresSchema);
  