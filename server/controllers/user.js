//bcrypt used to hash the password for security
import bcrypt from 'bcryptjs';
//to store the user in a browser for some time as a token
import jwt from 'jsonwebtoken';

//import user model
import User from '../models/user.js';

//secret string for token
const secret = 'test';

//signin controller
export const signin = async (req, res) => {
    //get email and password from the frontend post request available in req.body
    const { email, password } = req.body;

    //try/catch because function is async
    try {
        //if sigining in, need to find the user (by email)
        const existingUser = await User.findOne({ email });

        //if there is no user with the email, return 404 error
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

        //need to check if the password matches the hashed password of the existing user
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        //if password incorrect return 400 error
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        //if email and password match successfully, get the users token
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" });

        //now have the token, need to return it with the user
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        //if token creation was not successful
        res.status(500).json({ message: "Something went wrong with token" });
    }
}

//signup controller
export const signup = async (req, res) => {
    //get email, password, confirmPassword, firstName, lastName from the frontend post request available in req.body
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    //try/catch because function is async
    try {
        //if sigining up, need to find the user (by email) in the db
        const existingUser = await User.findOne({ email });

        //if there a user with the email, return 400 error
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        //if the passwords do not match, return 400 error
        if(password != confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

        //hash password for security - (2nd param) salt is level of difficulty used to hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        //if no existing user and passwords match, a new user can be created
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        //if user created successfully, create the users token
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        //now have the token, need to return it with the new user
        res.status(200).json({ result: result, token });
    } catch (error) {
        //if token creation was not successful
        res.status(500).json({ message: "Something went wrong with token" });
        console.log(error);
    }
}