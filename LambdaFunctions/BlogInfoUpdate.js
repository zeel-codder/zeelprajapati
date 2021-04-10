const DataBase=require('./DataBaseOperationsBlogInfo');

exports.handler = async function(req, context) {
    // your server-side functionality
    const body=JSON.parse(req.body);
    const filter=body.filter;
    const update=body.update;

    console.log(filter,update);
    // console.log('strat');
    await DataBase.ONConnections();
    await DataBase.GetBlogInfoAndUpDate(filter,update);
    // await DataBase.OffDatabase();
    return{
      statusCode: 200,
      body: JSON.stringify({
        message: `Blog Update`
      })
    };
    };