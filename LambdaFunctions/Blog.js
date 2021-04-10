const DataBase=require('./DataBaseOperationsBlogInfo');

exports.handler = async function(event, context) {
    // your server-side functionality

    const data=DataBase.AddNewBlog();
    return{
      statusCode: 200,
      body: JSON.stringify({
        message: JSON.stringify(data)
      })
    };
    };