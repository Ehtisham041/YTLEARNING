import mongoose , {Schema}from "mongoose";
import mongooseAggregatepaginate from "mongoose-aggregate-paginate-v2"
const VideoSchema = new Schema(
{
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
        },
        description:{
            type:String,
            required:true
            },
            views:{
                type:Number,
                default:0
                },
                duration:{
                    type:Number,
                    required:true
                },
                isPublished:{

                    type:Boolean,
                    default:false
                },
                owner:
                {
                    type: Schema.Types.ObjectId,
                    ref: 'User',

                }



},
{
    timestamps:true
})

export const Video = mongoose.model("Video",VideoSchema) 