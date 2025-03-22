import  jwt  from "jsonwebtoken";

export default async function handler(req,res){
    try {
        const token = req.query.token;
        console.log(token);
        const decodedToken = jwt.verify(token,process.env.SECRET);
        res.json({authenticated: decodedToken.authenticated});
    } catch(e) {
        console.log('error in jwt verify');
        console.log(e);
        res.json({authenticated:false});
    }

}