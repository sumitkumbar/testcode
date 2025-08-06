const permit =(req,res,next)=>{
    const login = false;
    if(login){
        next();

    }
    else{
        res.json({
            message:"unathorised"
        })
    }
    
}

module.exports =permit;