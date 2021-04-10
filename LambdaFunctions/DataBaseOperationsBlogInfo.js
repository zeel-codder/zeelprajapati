const mongoose = require('mongoose');
const BlogSchema = require('./DataBaseConnection');


console.log(process.env.BLOG_INFO);
const BlogInfo = mongoose.model(process.env.BLOG_INFO, BlogSchema.Blog);

const DemoData = {
    name: 'Html4SimpleTageszeel',
    title: '4 Basic And Important Tags for Beginner in web development',
    img: 'https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    url: '/Blog/Html4SimpleTages',
    like: 10,
    topic: 'Html'
}
// console.log(DemoData);


const AddNewBlog=async ()=>{

    add(DemoData);

}


const add = async (data) => {

    // console.log('i am call');



    const name = data.name;
    await BlogInfo.findOne({ name }, (err, value) => {
        if (err) return console.log(err);
        console.log(value);
        if (value === null) {

            const document = new BlogInfo(data);

            document.save((err, data) => {
                if (err) return console.log(err);
                // console.log("added");
            });


        }
        // return data;
    });

}


const GetBlogInfo = async () => {

    // return 
    try{
        const data = await BlogInfo.find({});
        return data;
    }catch{
        return 'Error';
    }

}



const GetBlogInfoOne = async ( name) => {

    // return 
    try{

        const data = await BlogInfo.findOne({ name });
        return data.data;
    }catch{
        return 'Error';
    }

}



const GetBlogInfoAndUpDate = async (filter, Update) => {

    const { name } = filter;

    // console.log({ name }, Update);

    try{
        const doc = await BlogInfo.findOne({ name });
        
        await BlogInfo.deleteOne({ _id: doc._id });
    
        // console.log('zeel');
        add(Update);

        return {'update':'update'};
    }catch{
        return 'Error'
    }
}


const OffConnections=async()=>{
    console.log('Disconnect');
    await BlogSchema.mongoose.connection.close();

}

const ONConnections= async()=>{
    // console.log('Disconnect');
    await BlogSchema.Connect();

}

exports.add = add;
exports.GetBlogInfo = GetBlogInfo;
exports.GetBlogInfoOne = GetBlogInfoOne;
exports.GetBlogInfoAndUpDate = GetBlogInfoAndUpDate;
exports.AddNewBlog =  AddNewBlog;
exports.OffDatabase=OffConnections;
exports.ONConnections=ONConnections;
