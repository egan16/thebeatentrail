import jwt, { decode } from 'jsonwebtoken';

//example of middleware if successful
//user clicks like button => auth middleware (NEXT) => like controller...

const secret = 'test';

const auth = async (req, res, next) => {
    //to check is the users token valid
    try {
        //get token from the frontend (token is in the first position in the array after its split)
        const token = req.headers.Authorization.split(" ")[1];
        //is token the applications token or googles Oauth token (apps token is less then 500)
        const isCustomAuth = token.length < 500;

        //variable created for data gotten from the token itself
        let decodedData;

        //if applications token is valid gets users id
        if(token && isCustomAuth) {
            //data (username and id) of each specific token of logged in user
            decodedData = jwt.verify(token, secret);
            //store logged in users id in req.userId
            req.userId = decodedData?.id;
        } else {
            //if googles Oauth token is valid gets users id
            decodedData = jwt.decode(token);
            //store logged in users id in req.userId (sub is googles version of id for every google user)
            req.userId = decodedData?.sub;
        }
        //if auth middleware successful pass action onto the next task
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;