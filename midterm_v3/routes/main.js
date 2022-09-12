const { query } = require('express');
const express = require('express');
const { append, render } = require('express/lib/response');
const mysql = require('mysql');
const path = require('path');
const router = express.Router();

// config the database connection

const pool = mysql.createPool({
    connectionLimit : 100,
    host : "localhost",
    user : "root",
    password : "",
    database : "devices"
});


// redirect to the index page 

router.get('/',(req,res) => {

    res.render('index');
});

// redirect to the about page 

router.get('/about',(req,res) => {

    res.render('about');
});

// redirect to the dashboard page 

router.get('/dashboard',(req,res) => {

    pool.getConnection((err,connection) => {

        let query = "SELECT * FROM devices";

        connection.query(query,(err,rows)=>{

            connection.release();

            if(!err)
            {
                res.render('dashboard',{rows});
            }
            else 
            {
                console.log("error");
            }
        });
    });
});

// redirect to the add-device page for chosing the a specific device to add 

router.get('/add-device',(req,res) => {

    let message = "";

    res.render('add-device',{message});
});

// redirect to the show-device page to check the device status

router.get('/show-device',(req,res) => {

    pool.getConnection((err,connection) => {

        let query = "SELECT * FROM devices";

        connection.query(query,(err,rows)=>{

            connection.release();

            if(!err)
            {
                res.render('show-device',{rows});
            }
            else 
            {
                console.log("error");
            }
        });
    });
});

// redirect to the update-device page for chosing the a specific device to update 

router.get('/update-device',(req,res) => {

    pool.getConnection((err,connection) => {

        let query = "SELECT * FROM devices";
        let message = "";

        connection.query(query,(err,rows)=>{

            connection.release();

            if(!err)
            {
                res.render('update-device',{rows,message});
            }
            else 
            {
                console.log("error");
            }
        });
    });
});

// update the data posted by the form 

router.post('/update-device',(req,res) => {

    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log("connected : "+connection.threadId);
    
        let device_id = req.body.device_id;

        let name = req.body.dev_name;
        let onoff = req.body.onof;
        let device_type = req.body.type;

        let openclose = req.body.openclose;
        if(openclose === undefined) openclose = 0;

        let temp = req.body.temp;
        if(temp === undefined) temp = 0;

        let bright = req.body.bright;
        if(bright === undefined) bright = 0;

        let speed = req.body.speed;
        if(speed === undefined) speed = 0;

        let volume = req.body.volume;
        if(volume === undefined) volume = 0;

        let color = req.body.color;
        if(color === undefined) color = 0;

        let location = req.body.location;

        let channel = req.body.channel;
        if(channel === undefined) channel = 0;

        let message = "";
    
        // update the device data with the giving device id collected from form

        if(device_id !== undefined)
        {
            let query = "UPDATE devices SET name=?,on_of=?,open_close=?,temperature=?,volume=?,brightness=?,speed=?,channel=?,color=?,location=?,type=? WHERE id=?";
            
            connection.query(query,[name,onoff,openclose,temp,volume,bright,speed,channel,color,location,device_type,device_id],(err)=>{
                
                if(err) throw err;
                message = "Device Successfully Updated !";
            });
        }

        let query = "SELECT * FROM devices";

        connection.query(query,(err,rows)=>{

            connection.release();

            if(!err)
            {
                res.render('update-device',{rows,message});
            }
            else 
            {
                console.log("error");
            }
        });
    });
});

// redirect to the update-device-form page to fill the form with the device data we want to update 

router.get('/update-device-form',(req,res) => {

    pool.getConnection((err,connection) => {

        if(err) throw err;
        console.log("connected : "+connection.threadId);
        
        let device_id = req.query.device_id;
        let message = "";
            
        if(device_id !== undefined)
        {
            let query = "SELECT * FROM devices WHERE id = ?";
                
            connection.query(query,[device_id],(err,data)=>{

                let row = data[0];
                    
                if(err) throw err;
                res.render("update-device-form",{row});
            });
        }
    });
});

// redirect to the delete-device page

router.get('/delete-device',(req,res) => {
   
    pool.getConnection((err,connection) => {

        if(err) throw err;
    
        let device_id = req.query.device_id;
        let message = "";
    
        // delete device by the giving device id collected

        if(device_id !== undefined)
        {
            
            let query = "DELETE FROM devices WHERE id = ?";
            
            connection.query(query,[device_id],(err,result)=>{
                
                if(err) throw err;
                message = "Device Successfully Deleted !";
            });
        }
            
        let query = "SELECT * FROM devices";

        connection.query(query,(err,rows)=>{

            connection.release();

            if(!err)
            {
                res.render('delete-device',{rows,message});
            }
            else 
            {
                console.log("error");
            }
        });
    });
});

// add the device by posting data with the specific form

router.post('/add-device',(req,res)=>{

    pool.getConnection((err,connection) => {
        if(err) throw err;
        console.log("connected : "+connection.threadId);

        let name = req.body.dev_name;
        let onoff = req.body.onof;
        let device_type = req.body.type;

        let openclose = req.body.openclose;
        if(openclose === undefined) openclose = 0;

        let temp = req.body.temp;
        if(temp === undefined) temp = -1;

        let bright = req.body.bright;
        if(bright === undefined) bright = -1;

        let speed = req.body.speed;
        if(speed === undefined) speed = -1;

        let volume = req.body.volume;
        if(volume === undefined) volume = -1;

        let color = req.body.color;
        if(color === undefined) color = -1;

        let location = req.body.location;

        let channel = req.body.channel;
        if(channel === undefined) channel = -1;

        let query = "INSERT INTO devices(name,on_of,open_close,temperature,volume,brightness,speed,channel,color,location,type) VALUES(?,?,?,?,?,?,?,?,?,?,?)"

        // add a new device by inserting data in the devices table 

        connection.query(query,[name,onoff,openclose,temp,volume,bright,speed,channel,color,location,device_type],(err,result)=>{

            connection.release();

            if(err) throw err;
        });
    });

    let message = "New Device Successfully Added !";

    res.render("add-device",{message});
});

module.exports = router;