const Joi = require('joi');
const mongoose = require('mongoose');

const Rental= mongoose.model('Rental', new mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            },
            isGold: {
                type: Boolean,
                required: true
            },
            phone: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 15
            }
        }),
        required: true
    },
    movie:{ 
        type: new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 255
        },
        dailyRentalRate: {
            type: Number,
            required: true,
            min: 0,
            max: 225,
            trim: true
        }
    }),
    required: true
    },
    dateOut: { 
        type: Date, 
        required: true,
        default: Date.now
      },
      dateReturned: { 
        type: Date
      },
      rentalFee: { 
        type: Number, 
        min: 0
      }
}));


function validateRental(rental) {
    const schema = Joi.object({
        customerId: Joi.string().required(),
        movieId: Joi.string().required()
    });
  
    return schema.validate(rental);
  }

exports.validate = validateRental;
exports.Rental = Rental;    