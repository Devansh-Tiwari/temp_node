// // // console.log(module)
// import hello from "./first.js";
// // const arthmetic = require('./first');

// const solve = (name) => {
//     console.log(name);
// }

// solve('hello');
// hello();

// // const os =  require ('os');
// // const user = os.userInfo();

// // console.log(`this is the system up time : ${os.uptime() } ${user} seconds`)

import http from 'http'

const server = http.createServer((req , res )=>{
    
    if(req.url === '/'){
        res.end('hello to our home page ')
    }
    else if(req.url === '/about'){
        res.end('hello to our about page ')
    }
    else {
        res.end(
            `<h1>Opps !!!</h1>
            <p>page you are loking for does not exixts </p>
            <a href="/"> back home</a>`
        )
        }
} )

server.listen(5000)
