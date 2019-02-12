const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose')
const axios = require('axios')
const cheerio = require('cheerio')
const nodemailer = require('nodemailer');
const E0 = process.env.E0
const E1 =  process.env.E1 
const faker = require("faker");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;


app.get('env')

// let config = {
//   apiKey: "AIzaSyD77mctAdWz2fsM-IQ56aSxwrYtK-ZKiW4",
//   authDomain: "runeskype-111.firebaseapp.com",
//   databaseURL: "https://runeskype-111.firebaseio.com",
//   projectId: "runeskype-111",
//   storageBucket: "runeskype-111.appspot.com",
//   messagingSenderId: "47881621290"
// };
// firebase.initializeApp(config);


//   let storageRef = firebase.storage().ref();

//   let imageStorage = storageRef.child('images')




// // Create a root reference
// var storageRef = firebase.storage().ref();

// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false

if(process.env.NODE_ENV === "development") { // Configuration for development environment
    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpackConfig = require("./webpack.config.js");
    const webpackCompiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(webpackCompiler));
    app.use(express.static(path.join(__dirname, "app")));
} else if(process.env.NODE_ENV === "production") { // Configuration for production environment
    app.use(express.static(path.join(__dirname, "dist")));
}




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// let transport = {
//   host: 'smtp.gmail.com',
//   auth: {
//     user: E0,
//     pass: E1
//   }
// }

// let transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });



// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

// }


// const mm = mongoose.connect(process.env.MONGODB_URI || "mongodb://testaccount:fakepassword1@ds241493.mlab.com:41493/deploytest", { useNewUrlParser : true});


// app.post('/sendmail', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${message} `

//   console.log(req.body.message)

//   var mail = {
//     from: name,
//     to: process.env.E0 || 'happylizardman22@gmail.com',  //Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   }
//   );

// });

// app.get('/token', function(req, res) {
//   var identity = faker.name.findName();

//   let token = new AccessToken(

//     proccess.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_API_KEY,
//     process.env.TWILIO_API_SECRET


//   );

//   token.identity = identity;

//   const grant = new VideoGrant();

//   token.addGrant(grant);

//   console.log(token)
//   console.log(token.toJwt())


//   res.send({
//     identity:identity,
//     token: token.toJwt()
//   });




// })


// app.get("/get/friends", function(req, res) {

//   let energytype = "";
//   let orgtype = "";
//   let dectype = "";
//   let inftype = ""

//   if (req.body.En === 'E') {
//     energytype = "Extrovert"
//   } else {
//     energytype = "Introvert"
//   }
  
//   if (req.body.In === 'N') {
//     inftype = "Intuition"
//   } else {
//     inftype = "Sense"
//   }
  
//   if (req.body.Org === 'J') {
//     orgtype = "Judging"
//   } else {
//     orgtype = "Perceiving"
//   }
  
//   if (req.body.Dec === 'E') {
//     dectype = "Thinking"
//   } else {
//     dectype = "Feeling"
//   }



//   db.friendFinder
//       .find({ Energy : [energytype],
//         Decision : [dectype],
//         Information : [inftype],
//         Organization : [orgtype]})
//       .then(function(dbModel) {
//         res.json(dbModel)
//       });



// })

// app.get("/scrape/current", function(req, res) {
//   // First, we grab the body of the html with axios

//   db.Article
//         .find({'time' : 'current'})
//         .sort({ date: -1 }).then(function(dbModel) {
//           res.json(dbModel)
//         })


//   axios.get("https://www.gosugamers.net/events/list?type=current&").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);

    

  
//     // Now, we grab every h2 within an article tag, and do the following:
//     $("div.event.columns").each(function(i, element) {
//       // Save an empty result object

//       let result = [];

//       console.log(i)

 
     
//          result.title = $(this).children('div.right')
//     .children('h3')
//     .children('a')
//     .text();
//     result.link = $(this).children('div.left')
//               .children('a')
//                 .attr("href");
//                 result.banner = $(this).children('div.left')
//               .children('a')
//               .children('img')
//               .attr("src");

//               result.icon = $(this).children('div.right')
//               .children('p')
//               .children('img')
//               .attr('title');




       
//         if (true) {
//           // Insert the data in the scrapedData db
//           db.Article.create(
//             {
//             title: result.title,
//             link: result.link,
//             banner : result.banner,
//             icon : result.icon,
//             time : 'current'
//           },
//           function(err, inserted) {
//             if (err) {
//               // Log the error if one is encountered during the query
//               console.log(err);
//             }
//             else {
//               console.log(inserted)
//             }
//           });
//         }

//       });

//       dbModel = db.Article
//         .find()
//         .sort({ date: -1 })

//     }).catch(err => console.log(err));

//   })
 

//   app.get("/scrape/upcoming", function(req, res) {
//     // First, we grab the body of the html with axios
  
//     db.Article
//           .find({ 'time' : 'upcoming'})
//           .sort({ date: -1 }).then(function(dbModel) {
//             res.json(dbModel)
//           })
  
  
//     axios.get("https://www.gosugamers.net/events/list?type=upcoming&").then(function(response) {
//       // Then, we load that into cheerio and save it to $ for a shorthand selector
//       var $ = cheerio.load(response.data);
  
      
  
    
//       // Now, we grab every h2 within an article tag, and do the following:
//       $("div.event.columns").each(function(i, element) {
//         // Save an empty result object
//         let result = [];

//         console.log(i)
   
//           // Save the text and href of each link enclosed in the current element
//            result.title = $(this).children('div.right')
//       .children('h3')
//       .children('a')
//       .text();
//            result.link = $(this).children('div.left')
//                 .children('a')
//                   .attr("href");
//            result.banner = $(this).children('div.left')
//                 .children('a')
//                 .children('img')
//                 .attr("src");
  
//            result.icon = $(this).children('div.right')
//                 .children('p')
//                 .children('img')
//                 .attr('title');
  



//         // If this found element had both a title and a link
//         if (true) {
//           // Insert the data in the scrapedData db
//           db.Article.create(
//             {
//             title: result.title,
//             link: result.link,
//             banner : result.banner,
//             icon : result.icon,
//             time : 'upcoming'
//           },
//           function(err, inserted) {
//             if (err) {
//               // Log the error if one is encountered during the query
//               console.log(err);
//             }
//             else {
//             }
//           });
//         }

//       });

//       dbModel = db.Article
//         .find()
//         .sort({ date: -1 })

//     }).catch(err => console.log(err));


//   })

//   app.post("/post/friendfinder", function(req, res) {
//     console.log(req.body)
//     db.friendFinder
//     .create(
//       {
//       name: req.body.name,
//       Extrovert:  req.body.E,
//       Introvert :  req.body.I,
//       Intuitive :  req.body.N,
//       Sensor :  req.body.S,
//       Thinker :  req.body.T,
//       Feeler :  req.body.F,
//       Judger :  req.body.J,
//       Perceiver :  req.body.P,
//     },
//     function(err, inserted) {
//       if (err) {
//         // Log the error if one is encountered during the query
//         console.log(err);
//       }
//       else {
//       }
//     });


//     console.log(req.body)
//   });

//   app.post("/scrape/NYT", function(topic, startYear, endYear) {

  
//     axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8f4f6746cba3492392355e72c21ed34d&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101").then(function(req, res) {
       

    
//       console.log("Adding saved artice to the db");
//       console.log("req.body: ", req.body);
//       db.NYT.create(req.body).then(function(doc) {
//         res.json(doc);
//         console.log("doc: ", doc);
//       }).catch(function(err) {
//         res.json(err);
//       });



//     })

//       console.log("Gathering saved articles from the db");
//       db.NYT.find().then(function(doc) {
//         res.json(doc);
//       }).catch(function(err) {
//         res.json(err);
//       });
 
  

//   })




// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});