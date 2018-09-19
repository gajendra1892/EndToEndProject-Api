import {mongoose} from 'mongoose';


var UserSchema =new mongoose.Schema({
    UserId:String,
    UserName :{
        type :String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:30,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        minlength:6
    },
    UserType:String,
    Role:Array,
    Tokens:[{
        Authorization:{
            type:String,
            required:true
        },
        Token:{
            type:String,
            required:true
        }
    }],
    Profile:{
        FirstName:String,
        LastName:String,
        Gender:String,
        Age:Number,
        DateOfBirth:Date,
        Phone:Number,
        Email:{
            type :String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:30,
            unique:true,
            validate:{
                validator:validator.isEmail,
                message:'{VALUE} is not a valid username'
            }
        },
        Address:{
            Street1:String,
            Street2:String,
            City:String,
            State:String,
            Country:String,
            Pincode:String
        },
        DeleteStatus:Boolean,
        CreatedBy:String,
        CreatedAt:Date,
        ModifiedBy:String,
        ModifiedDate:Date
    }
});