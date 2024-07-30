import jwt from 'jsonwebtoken'

const Auth = (req, res, next) => {
    const token = req.cookies.access_token; // Get the token from the cookies
    if (!token) return res.status(401).send('No token, authorization denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT); // Verify the token
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Token is not valid');
    }
};

export default Auth;