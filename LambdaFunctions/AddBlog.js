const DataBase=require('./DataBaseOperationsBlogInfo');

exports.handler = async function(event, context) {
    // your server-side functionality

    // console.log('strat');
    await DataBase.ONConnections();
    await DataBase.AddNewBlog();
    // await DataBase.OffDatabase();
    return{
      statusCode: 200,
      body: JSON.stringify({
        message: `Blog Added`
      })
    };
    };