import {mongoose} from 'mongoose';

var ProductSchema =new mongoose.Schema({
    ProductId:String,
    ProductCode:String,
    ProductName:String,
    Images:Array,
    Description:String,
    Category:{
        Id:String,
        Name:String,
        Description:String,
    },
    Pricing:{
        Price:Number,
        LowestPrice:Number,
        HighestPrice:Number,
    },
    Status:String,
    ProductType:String,
    DeleteStatus:Boolean,
    CreatedBy:String,
    CreatedAt:Date,
    ModifiedBy:String,
    ModifiedDate:Date
});