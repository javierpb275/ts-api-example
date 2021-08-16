import createServer from "./server";

createServer().listen(3000, () => {
    console.log('listening to port 3000');
})