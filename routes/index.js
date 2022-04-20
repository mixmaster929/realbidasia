// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').load()
// }

const stripeSecretKey = process.env.stripeSecretKey || 'sk_test_51HwhmEBaXV37jGgvJ3Y6XHOxWywQiCEg1bWAnVjvka7TkBAQAx9cEPFpJhlmTeVToOu6DyEJ3Bnr14u13GsnAzrP009qPwVMbj'
const stripePublicKey = process.env.stripePublicKey || 'pk_test_51HwhmEBaXV37jGgvZZzQr8UuUO9uSx851Qu7oqjeE8pDtnPPF8430NyWCJauQBLXrQWoxHPZjp6csDuyoNeJvQNU00yAcf9Pf6'
const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const YOUR_DOMAIN = process.env.YOUR_DOMAIN || 'http://localhost:3000'

var express = require('express');
var router = express.Router();
const Firestore = require('@google-cloud/firestore');
const firebase = require('firebase');
const admin = require('firebase-admin');
const multer = require('multer');
const multerGoogleStorage = require("../custom_library/multer-google-storage");
const stripe = require('stripe')(stripeSecretKey)


const {
  app
} = require('firebase');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBz0YYlahECUXWOFquWJRBgO2xoCvolZ08',
  authDomain: 'realbidasia-2fae7.firebaseapp.com',
  projectId: 'realbidasia-2fae7'
});

var db = firebase.firestore();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/home', function (req, res, next) {
  res.render('home/en/top-home', {
    layout: 'homeLayout',
    title: 'Real Bid Asia | Home'
  });
});

router.get('/test', function (req, res, next) {
  res.render('test', {
    layout: false,
    title: 'Real Bid Asia | Home'
  });
});

router.get('/friendly-tip', function (req, res, next) {
  res.render('home/en/friendly-tip', {
    layout: 'homeLayout',
    title: 'Friendly Tip'
  });
});

router.get('/market-tip', function (req, res, next) {
  res.render('home/en/market-tip', {
    layout: 'homeLayout',
    title: 'Real Bid Asia | Market Tip',
    isWhite: true
  });
});

router.get('/problem-owner-facing', function (req, res, next) {
  res.render('home/en/problem-owner-facing', {
    layout: 'homeLayout',
    title: 'Real Bid Asia | Problem Owners Facing'
  });
});

router.get('/why-us', function (req, res, next) {
  res.render('home/en/why-us', {
    layout: 'homeLayout',
    title: 'Real Bid Asia | Why Us?'
  });
});

//zh home page
router.get('/home-zh', function (req, res, next) {
  res.render('home/zh/top-home-zh', zhModule('亚洲产拍 | 主页', 'homeLayout'));
});

router.get('/friendly-tip-zh', function (req, res, next) {
  res.render('home/zh/friendly-tip-zh', zhModule('亚洲产拍 | 温馨提示', 'homeLayout'));
});

router.get('/market-tip-zh', function (req, res, next) {
  let param = zhModule('亚洲产拍 | 困境提示', 'homeLayout')
  param.isWhite = true
  res.render('home/zh/market-tip-zh', param);
});

router.get('/problem-owner-facing-zh', function (req, res, next) {
  res.render('home/zh/problem-owner-facing-zh', zhModule('亚洲产拍 | 业者面对情况', 'homeLayout'));
});

router.get('/why-us-zh', function (req, res, next) {
  res.render('home/zh/why-us-zh', zhModule('亚洲产拍 | 为何采用亚洲产拍', 'homeLayout'));
});


/* GET property info page. */
router.get('/propertyForRent/:userID/:requestID', function (req, res, next) {
  res.render('propertyInfo', {
    title: 'Real Bid Asia | Property For Rent',
    _requestID: req.params.requestID,
    _userID: req.params.userID,
    _stripePublicKey: stripePublicKey
  });
});
router.get('/propertyForSale/:userID/:requestID', function (req, res, next) {
  res.render('propertyInfo', {
    title: 'Real Bid Asia | Property For Sale',
    _requestID: req.params.requestID,
    _userID: req.params.userID,
    _stripePublicKey: stripePublicKey
  });
});

/* GET about us page. */
router.get('/about-us', function (req, res, next) {
  res.render('about-us', {
    title: 'Real Bid Asia | About Us'
  });
});

/* GET faq page. */
router.get('/faq', function (req, res, next) {
  res.render('faq', {
    title: 'Real Bid Asia | Frequently Asked Questions'
  });
});

/* GET contact us page. */
router.get('/contact-us', function (req, res, next) {
  res.render('contact-us', {
    title: 'Real Bid Asia | Contact Us'
  });
});

/* GET home zh page. */
router.get('/home-zh', function (req, res, next) {
  res.render('home-zh', zhModule(
    '亚洲产拍 | 主页'
  ))
});

/* GET property info zh page. */
router.get('/propertyForRent-zh/:userID/:requestID', function (req, res, next) {
  let param = zhModule('亚洲产拍 | 出租产业')
  param["_requestID"] = req.params.requestID
  param["_userID"] = req.params.userID
  param["_stripePublicKey"] = stripePublicKey
  res.render('propertyInfo-zh', param)
});
router.get('/propertyForSale-zh/:userID/:requestID', function (req, res, next) {
  let param = zhModule('亚洲产拍 | 售卖产业')
  param["_requestID"] = req.params.requestID
  param["_userID"] = req.params.userID
  param["_stripePublicKey"] = stripePublicKey
  res.render('propertyInfo-zh', param)
});

/* GET about us zh page. */
router.get('/about-us-zh', function (req, res, next) {
  res.render('about-us-zh', zhModule('亚洲产拍 | 关于我们'))
});

/* GET faq page. */
router.get('/faq-zh', function (req, res, next) {
  res.render('faq-zh', zhModule(''))
});

/* GET contact us zh page. */
router.get('/contact-us-zh', function (req, res, next) {
  res.render('contact-us-zh', zhModule('亚洲产拍 | 联系我们'))
});

router.post('/addUser/:type', function (req, res, next) {
  let args1 = req.body
  args1["type"] = req.params.type
  //args1["language"] = req.params.language

  console.log("args1.mobile=>", args1.mobile)

  Promise.all([
      firebaseGetWhere2("user", "mobile", "==", args1.mobile, null)
    ]).then((result) => {
      console.log(result[0])
      if (result[0].length == 0) {
        firebaseAdd("user", args1).then((user_ID) => {
          let args2 = {
            userID: user_ID,
            type: req.params.type,
            ...args1
          }

          Promise.all([
              firebaseAdd("request", args2)
            ]).then((request_ID) => {
              req.session.userID = user_ID
              req.session.requestID = request_ID[0]
              res.json({
                status: "ok",
                userID: user_ID,
                requestID: request_ID
              })
            })
            .catch(function (error) {
              res.status(500).json(error)
              console.log(error)
            });
        })
      } else {
        console.log("Same mobile")
        console.log(result[0][0].id)
        let args2 = {
          userID: result[0][0].id,
          ...args1
        }

        Promise.all([
            firebaseAdd("request", args2)
          ]).then((request_ID) => {
            console.log(result[0][0].id)
            req.session.userID = result[0][0].id
            req.session.requestID = request_ID[0]
            res.json({
              status: "ok",
              userID: result[0][0].id,
              requestID: request_ID
            })
          })
          .catch(function (error) {
            res.status(500).json(error)
            console.log(error)
          });
      }
    })
    .catch(function (error) {
      res.status(500).json(error)
      console.log(error)
    });

})

router.post('/request/:requestType', function (req, res, next) {
  let args = req.body
  args["requestType"] = req.params.requestType

  firebaseUpd("request", args.requestID, args).then((id) => {
    res.json({
      status: "ok",
      requestID: id
    })
  })
})

router.post('/getTAC', function (req, res, next) {
  let args = req.body
  console.log(args.userID)
  // console.log(Firestore.FieldPath.documentId())
  Promise.all([
    getOnce("user", args.userID)
  ]).then((result) => {
    console.log(result)
    res.json({
      status: "ok",
      mobile: result[0].mobile
    })
  })
})

router.post('/request/:requestType/:requestID', function (req, res, next) {
  let args = req.body
  //args["requestType"] = req.params.requestType
  //args["userID"] = req.session.userID

  firebaseUpd("request", req.params.requestID, args).then((id) => {
    //req.session.requestID = id
    res.json({
      status: "ok",
      requestID: id
    })
  })
})

function firebaseUpd(table, id, args) {
  return new Promise(function (resolve, reject) {
    //update data into firebase
    args["last_update_timestamp"] = new Date()
    db.collection(table).doc(id).update(args)
      .then(function (docRef) {
        console.log("Document successfully updated!");
        //passUserID(docRef.id);
        //res.status(200).json("ok");
        resolve(id)
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
        //res.status(500).json(error)
        reject(error)
      });
  })
}

function validateRecaptcha(request) {
  return new Promise((resolve, reject) => {
    var Request = require("request");
    const RECAPTCHA_SECRET = "6LeHF2EaAAAAAEyTlU5fn9sVdmMdriqsX-2j9jA-"
    var recaptcha_url = "https://www.google.com/recaptcha/api/siteverify?";
    recaptcha_url += "secret=" + RECAPTCHA_SECRET + "&";
    recaptcha_url += "response=" + request.body["g-recaptcha-response"] + "&";
    recaptcha_url += "remoteip=" + request.connection.remoteAddress;
    Request(recaptcha_url, function(error, resp, body) {
        body = JSON.parse(body);
        if(body.success !== undefined && !body.success) {
            reject("Recaptcha failed")
        }
        resolve("ok")
    });
  })
}

function sendEmail(to, subject, message, template, replyTo = null, isCCadmintrue = false) {
  return new Promise(function (resolve, reject) {
    // create reusable transporter object using the default SMTP transport
    let infoEmail = "info@realbid.asia"
    let admin_email = "kenny.koay+realbid@globalconnect.com.my" || process.env.infoEmail
    let smtpTransport = nodemailer.createTransport({
      host: "mail.realbid.asia",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "info@realbid.asia", // generated ethereal user
        pass: "nr0@7Fd8", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // let smtpTransport = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         type: "OAuth2",
    //         user: "info.smebo@gmail.com", //require to change
    //         clientId: "304040508181-c4dj374971igir5n16ji7l4i2kaujnu5.apps.googleusercontent.com",
    //         clientSecret: "4rrbiBfTaVfzaKrb1vSvz_Vs",
    //         refreshToken: "1//04KnbOnixaaiiCgYIARAAGAQSNwF-L9IrHjpgKF_QtDEZrLSMwofs2Cv8D3Dr-okVVhyy-DxICzdRfwoELpYb7K5vPgLSrHsJapQ", //require to change
    //         accessToken: accessToken
    //     }
    //     // auth: {
    //     //     type: "OAuth2",
    //     //     user: "eugene+dev@globalconnect.com.my", //require chg to client email
    //     //     clientId: "304040508181-c4dj374971igir5n16ji7l4i2kaujnu5.apps.googleusercontent.com",
    //     //     clientSecret: "4rrbiBfTaVfzaKrb1vSvz_Vs",
    //     //     refreshToken: "1//040jFdhiRxjriCgYIARAAGAQSNwF-L9Ir2SY6fhh9Ooc3ebRHYvOjAKkNIpqXEv91d1AM81f3u3VMWGO42AZppcQLnmMsbNe8I6A", //require to chg
    //     //     accessToken: accessToken
    //     // }
    // });
    // Open template file
    // let source = fs.readFileSync(path.join(__dirname, `email_templates/${template}.html`), 'utf8');
    let source = fs.readFileSync(path.join(__dirname, `../views/email_templates/${template}.hbs`), 'utf8');
    // Create email generator
    let templateData = Handlebars.compile(source, message);

    // const handlebarOptions = {
    //     viewEngine: {
    //         extname: '.hbs',
    //         partialsDir: __dirname+'/views/email_templates',
    //         layoutsDir: __dirname+'/views/email_templates',
    //     //   defaultLayout: 'email.hbs',
    //     },
    //     viewPath: path.join(__dirname, 'views/email_templates/'),
    //     extname: '.hbs'
    //   };

    // smtpTransport.use('compile', hbs(handlebarOptions));
    // Handlebars.compile(__dirname + `/views/email_templates/${template}`, message , function (err, data) {
    // setup email data with unicode symbols
    let mailOptions = {
      from: infoEmail, // sender address
      replyTo: replyTo == null ? to : replyTo,
      to: `${to}`, // list of receivers
      subject: `${subject}`, // Subject line
      //text: 'Hello world?', // plain text body
      // template: template,
      // context: message
      html: templateData(message) // html body
    };
    // if (replyTo != null) {
    //     mailOptions.replyTo = replyTo
    // }
    if (isCCadmintrue == true) {
      mailOptions.bcc = admin_email
    }

    smtpTransport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        reject(error)
      } else {
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        resolve('Message sent: %s', info.messageId)

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }

    });
    // })
  })

}

function firebaseAdd(table, args) {
  return new Promise(function (resolve, reject) {
    //insert data into firebase
    console.log(table)
    console.log(args)
    args["created_timestamp"] = new Date()
    args["last_update_timestamp"] = new Date()
    db.collection(table).add(args)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        //passUserID(docRef.id);
        //res.status(200).json("ok");
        resolve(docRef.id)
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        //res.status(500).json(error)
        reject(error)
      });
  })
}

function firebaseGetWhere(table, where, where_value, limit) {
  return new Promise(function (resolve, reject) {
    let docRef = db.collection(table);
    // console.log(docRef,id)
    let query = docRef.where(where, '==', where_value).limit(limit).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          resolve([]);
          // return;
        } else {
          let companyList = [];
          snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            let temp = doc.data();
            temp.id = doc.id;
            companyList.push(temp)
          });
          // console.log('Document data:', companyList);
          resolve(companyList);
        }

      })
      .catch(err => {
        console.log('Error getting documents', err);
        reject(err);
      });
  });
}

function firebaseGetWhere2(table, where, where_condition, where_value, limit) {
  return new Promise(function (resolve, reject) {
    let docRef = db.collection(table);
    let query;
    // console.log(docRef,id)
    if (limit !== null) {
      query = docRef.where(where, where_condition, where_value).limit(limit)
    } else {
      query = docRef.where(where, where_condition, where_value)
    }
    query.get().then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          resolve([]);
          // return;
        } else {
          let dataList = [];
          snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            let temp = doc.data();
            temp.id = doc.id;
            dataList.push(temp)
          });
          // console.log('Document data:', companyList);
          resolve(dataList);
        }
      })
      .catch(err => {
        console.log('Error getting documents', err);
        reject(err);
      });
  });
}

function getOnce(table, docId) {
  return new Promise(function (resolve, reject) {
    let docRef = db.collection(table).doc(docId);
    let getDoc = docRef.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
          resolve("false");
        } else {
          let temp = doc.data();
          temp.id = doc.id;
          // console.log('Document data:', temp);
          resolve(temp);
        }
      }).catch(err => {
        console.log('Error getting document', err);
        reject(err);
      });
  });
}

function _get(table, where_JSON = {}, tableID = null, specificTable = null) {
  return new Promise(function (resolve, reject) {
    let docRef;
    if (specificTable != null) {
      docRef = db.collection(table).doc(tableID).collection(specificTable);
    } else {
      docRef = db.collection(table)
    }
    // let docRef = mainDB.collection(table)
    Object.keys(where_JSON).forEach((item_name) => {
      switch (item_name) {
        case "orderBy":
          docRef = docRef.orderBy(where_JSON[item_name])
          break;
        case "orderByDesc":
          docRef = docRef.orderBy(where_JSON[item_name], 'desc')
          break;
        case "limit":
          docRef = docRef.limit(where_JSON[item_name])
          break;
        default:
          let new_field = item_name.substring(0, item_name.length - 3)
          let keyword = item_name.substring(item_name.length - 3)
          switch (keyword) {
            case "gte":
              docRef = docRef.where(new_field, ">=", where_JSON[item_name])
              break;
            case "lte":
              docRef = docRef.where(new_field, "<=", where_JSON[item_name])
              break;
            case "_in":
              docRef = docRef.where(new_field, "array-contains", where_JSON[item_name])
              break;
            default:
              if (item_name == "ID") {
                docRef = docRef.where(admin.firestore.FieldPath.documentId(), '==', where_JSON[item_name])
              } else {
                docRef = docRef.where(item_name, "==", where_JSON[item_name])
              }

              break;
          }
          break;

      }
    })
    docRef.get().then((snapshot) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        resolve([]);
      } else {
        let dataList = [];
        snapshot.forEach(doc => {
          // console.log(doc.id, '=>', doc.data());
          let temp = doc.data();
          temp.id = doc.id;
          dataList.push(temp)
        });
        // console.log('Document data:', companyList);
        resolve(dataList);
      }
    })
  })
}

let uploadHandler = multer({
  storage: multerGoogleStorage.storageEngine({
    keyFilename: "./realbidasia-2fae7-firebase-adminsdk-7o24g-38a8f07807.json",
    bucket: "gs://realbidasia-2fae7.appspot.com",
    projectId: "realbidasia-2fae7",
    acl: 'publicRead',
    filename: function (req, res, cb) {
      let path = `documents/${req.body.userID}/${req.body.requestID}/${req.params.type}/${res.originalname}`
      //let path = `documents/${req.session.userID}/${req.params.type}/${res.originalname}`
      req.body.imgPath = path
      cb(null, path)
    }
  })
});

function zhModule(page_title, layout = '') {
  let param = {
    layout: layout,
    title: page_title,
    isZH: true
  }
  return param
}
// router.post('/uploadDocuments/:type', uploadHandler.any(), function (req, res) {
//   let link = `https://storage.googleapis.com/realbidasia.appspot.com/${req.body.imgPath}`

//   let args = {
//     propertyImage: link
//   }

//   firebaseUpd("request", req.session.requestID, args).then((id) => {
//     res.json({
//       status: "ok",
//       requestID: id
//     })
//   })

//   // addData('documents', data).then((result) => {
//   //   res.status(200).json("ok");
//   // }).catch(function (error) {
//   //   res.status(500).json(error.message);
//   // })
// })


router.post('/forms/smtp.php', function (req, res) {
  let args = req.body
  //console.log(req.params.requestID)
  //console.log(req.body.requestID)
  // firebaseUpd("request", req.params.requestID, args).then((id) => {
  // Promise.all([
  //   getOnce("request", req.params.requestID)
  // ]).then(async (result) => {

  // console.log(id)
  console.log(args)
  validateRecaptcha(req).then(() => {
    sendEmail("info@realbid.asia", "New enquiry receive", args, "enquiry", null, true)
    res.status(200).json({
      status: "success",
      message: "Thank you, a member of our team will be in touch shortly."
    })
  }).catch((err) => {
    res.status(500).json("Bad recaptcha receive")
  })
  
  

  // })

  // })
})

//POST Propety Images
router.post('/uploadDocuments/:type', uploadHandler.any(), function (req, res) {
  let link = `https://storage.googleapis.com/realbidasia.appspot.com/${req.body.imgPath}`
  let args = {
    link: link,
    userID: req.body.userID,
    requestID: req.body.requestID,
    documentType: req.params.type
  }
  let documentType2 = req.params.type
  let argsRequest = {
    userID: req.body.userID,
    requestID: req.body.requestID,
  }
  argsRequest[documentType2] = link
  firebaseUpd("request", req.body.requestID, argsRequest).then((id) => {})
  firebaseAdd("files", args).then((id) => {
    res.status(200).json({
      status: "ok",
      fileID: id,
      link: link
    })
  })

})

//POST documents
router.post('/addDocumentsInfo/:requestID', function (req, res, next) {
  let args = {
    reconfirmAddress: req.body.reconfirmAddress,
    sellingPoint: req.body.sellingPoint,
    remark: req.body.remark,
    declaration: req.body.declaration
  }

  firebaseUpd("request", req.params.requestID, args).then((id) => {
    res.json({
      status: "ok",
      requestID: id
    })
  })
})

//POST sale agreement
router.post('/addSaleAgreement/:requestID', function (req, res, next) {
  let args = {
    reservePrice: req.body.reservePrice,
    minDeposit: req.body.minDeposit
  }

  firebaseUpd("request", req.params.requestID, args).then((id) => {
    res.json({
      status: "ok",
      requestID: id
    })
  })
})

//POST rent agreement
router.post('/addRentAgreement/:requestID', function (req, res, next) {
  let args = {
    tenancyPeriod: req.body.tenancyPeriod,
    commencementDate: req.body.commencementDate,
    isRenew: req.body.isRenew,
    // renewMonth: req.body.renewMonth,
    securityDeposit: req.body.securityDeposit,
    otherSecurityDeposit: req.body.otherSecurityDeposit,
    utilityDeposit: req.body.utilityDeposit,
    otherUtilityDeposit: req.body.otherUtilityDeposit,
    otherDeposit1: req.body.otherDeposit1,
    otherDepositAmount1: req.body.otherDepositAmount1,
    otherDeposit2: req.body.otherDeposit2,
    otherDepositAmount2: req.body.otherDepositAmount2,
    agreementRemark: req.body.agreementRemark
  }
  console.log(req.params.requestID)
  console.log(req.body.requestID)
  firebaseUpd("request", req.params.requestID, args).then((id) => {
    Promise.all([
      getOnce("request", req.params.requestID)
    ]).then(async (result) => {

      console.log(id)
      sendEmail(result[0].email, "Congratulations! You have COMPLETED the Submission to Bring New Hope to Your Property!", result[0], "finish", null, true)
      res.json({
        status: "ok",
        requestID: id
      })

    })

  })
})

//POST add sale user
router.post('/addSaleUser', function (req, res, next) {
  let args = {
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    isSale: true
  }

  //checkData(args.email);

  //if(checkData() == true){
  //insert data into firebase
  db.collection("users").add(args)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      res.status(200).json("ok");
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      res.status(500).json(error);
    });
  //}
})

router.post('/create-checkout-session/:customerID/:requestID', async (req, res) => {

  Promise.all([
    getOnce("request", req.params.requestID)
  ]).then(async (result) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      client_reference_id: req.params.customerID + '/' + req.params.requestID,
      line_items: [{
        price_data: {
          currency: 'myr',
          product_data: {
            name: `${result[0].package} package`,
            images: ['https://realbidasia.appspot.com/images/logo.png'],
          },
          unit_amount: result[0].packageAmount * 100,
        },
        quantity: 1,
      }, ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/payment_success/${req.params.requestID}/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${generateReturnLink(result[0])}?returnType=cancel`,
    });
    res.json({
      id: session.id
    });
  })

});

function generateReturnLink(request) {
  let typeOfSales = "Rent"
  if (request.type == "sale") {
    typeOfSales = "Sale"
  }
  return `${YOUR_DOMAIN}/propertyFor${typeOfSales}/${request.userID}/${request.id}`
}

router.get('/payment_success/:requestID/:sessionID', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.params.sessionID);
  Promise.all([
    getOnce("request", req.params.requestID)
  ]).then((result) => {
    if (session.payment_status == "paid") {
      result[0]["url_to_resume"] = generateReturnLink(result[0])
      let args = {
        paid: true,
        payment_data: session
      }
      firebaseUpd("request", req.params.requestID, args).then((id) => {
        sendEmail(result[0].email, "Thank You! You Are Almost There to Unleash Your Property Through realbid.asia!", result[0], "save_only", null, true)

        res.redirect(generateReturnLink(result[0]))
      })

    }
    //res.status(200).json(session)
  })

})

router.post('/purchase', function (req, res) {
  console.log(req.body)
  let args = {
    paid: true
  }
  Promise.all([
    getOnce("request", req.body.requestID)
  ]).then((result) => {

    // result[0]["url_to_resume"] = `https://realbidasia.appspot.com/propertyFor${typeOfSales}/${result[0].userID}/${result[0].id}`
    result[0]["url_to_resume"] = generateReturnLink(result[0])
    sendEmail(result[0].email, "Thank You! You Are Almost There to Unleash Your Property Through realbid.asia!", result[0], "save_only")
    var total = result[0].packageAmount
    console.log(total)
    stripe.charges.create({
      amount: total,
      source: req.body.stripeTokenId,
      currency: 'myr'
    }).then(function () {
      console.log('Charge Successful')
      // res.json({
      //   message: 'Successfully purchased items'
      // })
      firebaseUpd("request", req.body.requestID, args).then((id) => {

        res.json({
          status: "ok",
          requestID: id
        })
      })
    }).catch(function (error) {
      console.log('Charge Fail')
      console.log(error)
      res.status(500).end()
    })
  })


})
module.exports = router;