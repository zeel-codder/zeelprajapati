const DataBase=require('./DataBaseOperationsBlogInfo');

exports.handler = async function(event, context) {
    // your server-side functionality
    await DataBase.ONConnections();
    const data=await DataBase.GetBlogInfo();
    return{
      statusCode: 200,
      body: JSON.stringify({
        message: JSON.stringify(data)
      })
    };
    };