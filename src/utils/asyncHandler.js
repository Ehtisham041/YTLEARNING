// const asyncHandler = ()=>{} 

// export {asyncHandler}

//async handler aik higher order function ha
// const asyncHandler =(fn)=>async(req , res ,next )=>{
//     try {
//         await fn(req , res , next)
//         {

//         }
//     }
//     catch(error){res.status(err.code || 500).json({success : false, message : err.message })}
// }

// export{asyncHandler};














const asyncHandler = (requestHnadler)=>{
    (req,res,next)=>{

        Promise.resolve(requestHnadler(req,res,next)).
        catch((error)=>next(error))
    }

}

export {asyncHandler};


