import {mongoose} from 'mongoose';

var OrderSchema = new mongoose.Schema({
    UserId:String,
    ProductId:String,
    Quantity:Number,
    Amount:Number,
    Discount:Number,
    OrderDate:Date,
    OrderBy:String,
    OrderStaus:String
});