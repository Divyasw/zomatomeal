var express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT||9000;
const dotenv = require('dotenv')
dotenv.config()
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const cors = require('cors')
// to receive data from form
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())

//const mongourl = "mongodb://localhost:27017"
const mongourl = "mongodb+srv://divya_123:divya123@cluster0.pbtgo.mongodb.net/zomato?retryWrites=true&w=majority"

var db;

//get
app.get('/',(req,res) => {
    res.send("Welcome to Node Api2")
})

//list of cities
app.get('/location',(req,res) =>{
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//list of restaurant
app.get('/restaurants',(req,res) =>{
    db.collection('restaurants').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


// query example
app.get('/restaurant',(req,res) =>{
    var query = {}
    if(req.query.stateId){
        query={state_id:Number(req.query.stateId)}
    }else if(req.query.mealtype_id){
        query={"mealTypes.mealtype_id":Number(req.query.mealtype_id)}
        console.log(query)
    }
    db.collection('restaurants').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//list of QuickSearches
app.get('/quicksearch',(req,res) =>{
    db.collection('mealtype').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//filterapi
app.get('/filter/:mealtype',(req,res) => {
    var sort = {cost:1}
    var skip = 0;
    var limit = 100000000000;
    var mealtype = req.params.mealtype;
    var query = {"mealTypes.mealtype_id":Number(mealtype)};
    if(req.query.sortkey){
        sort = {cost:req.query.sortkey}
    }
    if(req.query.skip && req.query.limit){
        skip = Number(req.query.skip);
        limit = Number(req.query.limit)
    }
    var mealtype = Number(req.params.mealtype);
    var query = {"mealTypes.mealtype_id":Number(mealtype)};
    if(req.query.cuisine && req.query.lcost && req.query.hcost){
        query={
            $and:[{cost:{$gt:Number(req.query.lcost),$lt:Number(req.query.hcost)}}],
            "cuisines.cuisine_id":req.query.cuisine,
            "mealTypes.mealtype_id":mealtype
        }
    }
    else if(req.query.cuisine){
        query = {"mealTypes.mealtype_id":mealtype,"cuisines.cuisine_id":req.query.cuisine }
    }
    else if(req.query.lcost && req.query.hcost){
        var lcost = Number(req.query.lcost);
        var hcost = Number(req.query.hcost);
        query={$and:[{cost:{$gt:lcost, $lt:hcost}}],"mealTypes.mealtype_id":Number(mealtype)}
    }
    db.collection('restaurants').find(query).sort(sort).skip(skip).limit(limit).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// restaurants Details
app.get('/details/:id',(req,res) => {
    var id = req.params.id
    db.collection('restaurants').find({restaurant_id:Number(id)}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//menu Details on basis of restaurant
app.get('/menu/:id',(req,res) => {
    var id = req.params.id
    console.log(id)
    db.collection('menu').find({restaurant_id:Number(id)}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.post('/menuItem',(req,res) => {
    console.log(req.body)
    db.collection('menu').find({menu_id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// place order
app.post('/placeOrder',(req,res) => {
    console.log(req.body)
    db.collection('orders').insert(req.body,(err,result) =>{
        if(err) throw err;
        res.send("Order Placed")
    })
})

// view order
app.get('/viewOrder',(req,res) => {
    var query = {}
    if(req.query.email){
        query = {email:req.query.email}
    }
    db.collection('orders').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/viewOrder/:id',(req,res) => {
    var id = mongo.ObjectId(req.params.id);
    db.collection('orders').find({_id:id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


//delete Order
app.delete('/deleteOrder',(req,res) => {
    db.collection('orders').remove({},(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.put('/updateOrder/:id',(req,res) => {
    var id = Number(req.params.id);
    var status = req.body.status?req.body.status:"Pending"
    db.collection('orders').updateOne(
        {id:id},
        {
            $set:{
                "date":req.body.date,
                "bank_status":req.body.bank_status,
                "bank":req.body.bank,
                "status":status
            }
        }
    )
    res.send('data updated')
})


//update Order
app.put('/updateStatus/:id',(req,res) => {
    var id = mongo.ObjectId(req.params.id);
    var status = 'Pending';
    var statuVal =2
    if(req.query.status){
        statuVal = Number(req.query.status)
        if(statuVal == 1){
            status = 'Accepted'
        }else if (statuVal == 0){
            status ='Rejected'
        }else{
            status = 'Pending'
        }
    }
    db.collection('orders').updateOne(
        {_id:id},
        {
            $set:{
                "status": status
            }
        }, (err,result) => {
            if(err) throw err;
            res.send(`Your order status is ${status} `)
        }
    )
})

MongoClient.connect(mongourl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('zomato');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    });
})