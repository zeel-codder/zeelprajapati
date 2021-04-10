// const demo=require('./Demo');


exports.handler = async function(event, context) {
    // your server-side functionality
    console.log('zeel');
    // demo.zeel();
    return{
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello world ${Math.floor(Math.random() * 10)}`
      })
    };
    };