exports.calculateSIP = (req,res) => {

    try{
   const {principal,time,rate} = req.body;
   if(principal==undefined || time==undefined || rate==undefined){
     return res.status(412).json({message: "Some parametrs are missing"})
   }
   if(principal<500){
    return res.status(412).json({message: "Minimum value allowed is 500"})
   }
   if(time<1 || rate<1){
    return res.status(412).json({message: "Minimum value allowed is 1"})
   }
   let timeInMonth = time*12;
   let i = rate/(100*12);

   let FV = Math.round(principal*[Math.pow(1+i,timeInMonth)-1]*(1+i)/i);
   const formattedNumber = FV.toLocaleString("en-IN");
   let invested_amount = (principal*timeInMonth).toLocaleString("en-IN");
   let estimated_return = (FV-(principal*timeInMonth)).toLocaleString("en-IN");

   let result = {

   invested_amount,
   estimated_return,
   total_value : formattedNumber
   }

   console.log(formattedNumber)
   return res.status(200).json({message:"SIP calculated ",result})
    }catch(err){
        throw err;
    }
}

