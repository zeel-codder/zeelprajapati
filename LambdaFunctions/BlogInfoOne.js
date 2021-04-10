const DataBase=require('./DataBaseOperationsBlogInfo');

exports.handler = async function(event, context) {

    const {name}=JSON.parse(event.body);
    console.log(name);
    // your server-side functionality
    await DataBase.ONConnections();
    const data=await DataBase.GetBlogInfoOne(name);
    return{
      statusCode: 200,
      body: JSON.stringify({
        message: JSON.stringify(data)
      })
    };
    };