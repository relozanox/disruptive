import app from "./app.js";
import connectDb from "./db.js";
import { PORT } from "./config.js";

const main = async()=>{
    try {
        await connectDb();
        app.listen(PORT);
        console.log(`Server on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
}

main();
