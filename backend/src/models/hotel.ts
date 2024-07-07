import mongoose from "mongoose";

export type HotelType={
    _id:string;
    userId:string;
    name:string;
    city:string;
    country:string;
    description:string;
    type:string;
    adultCount:number;
    childCount:number;
    fecilities:string[];
    pricePerNight:number;
    starRating:number;
    imageUrl:string[];
    lastUpdated:Date;
}

const hotelSchema = new mongoose.Schema <HotelType>({
    userId:{type:String, required:true},
    name:{type:String , require:true},
    city:{type:String , require:true},
    country:{type:String , require:true},
    description:{type:String , require:true},
    type:{type:String , require:true},
    adultCount:{type:Number, require:true},
    childCount:{type:Number, require:true},
    fecilities:[{type:String, require:true}],
    pricePerNight:{type:Number, required:true},
    starRating:{type:Number, required:true, min:1, max:5},
    imageUrl:[{type:String, required:true}],
    lastUpdated:{type:Date, required:true}
   


})

const Hotel  = mongoose.model<HotelType>("Hotel",hotelSchema)

export default Hotel