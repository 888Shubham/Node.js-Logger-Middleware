// Please don't change the pre-written code
// Import the necessary modules here
import fs from "fs";
const fsPromise = fs.promises;


export const loggerMiddleware = async (req, res, next) => {

  try {
     const logData = `\n${new Date().toString()}` + `\n req URL: ${req.url}` + `\n req Body: ${JSON.stringify(req.body)}`;
    await fsPromise.appendFile('log.txt', logData);
    next();
  } catch (error) {
    console.log(error);
    
  }

};
export default loggerMiddleware;
