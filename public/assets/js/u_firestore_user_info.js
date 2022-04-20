// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBz0YYlahECUXWOFquWJRBgO2xoCvolZ08',
    authDomain: 'realbidasia-2fae7.firebaseapp.com',
    projectId: 'realbidasia-2fae7'
});
var db = firebase.firestore();
// var stripe = Stripe("pk_test_51HwhmEBaXV37jGgvZZzQr8UuUO9uSx851Qu7oqjeE8pDtnPPF8430NyWCJauQBLXrQWoxHPZjp6csDuyoNeJvQNU00yAcf9Pf6");

// var _requestID = "{{_requestID}}";
// var _userID = "{{_userID}}";
// let url = $(location).attr('href');
// let arr = url.split('/');
// let userid = arr[4]
// let requestid = arr[5]
var language = 'eng'
loadData()



if (window.location.href.indexOf('propertyForRent') > 0 || window.location.href.indexOf('propertyForSale') > 0 || window.location.href.indexOf('propertyForRent-zh') > 0 || window.location.href.indexOf('propertyForSale-zh') > 0) {
    console.log("rent sale");
    $('.hideStartNow').attr('style', 'display:none !important');
}
if (window.location.href.indexOf('home-zh') > 0) {
    console.log("zh");
    language = 'zh'
    $(".zh").show();
    $(".eng").hide();
} else if (window.location.href.indexOf('propertyForRent-zh') > 0 || window.location.href.indexOf('propertyForSale-zh') > 0) {
    language = 'zh'
} else if (window.location.href.indexOf('friendly-tip-zh') > 0) {
    console.log("friendly zh");
    language = 'zh'
    $(".zh").show();
    $(".eng").hide();
    $('.hideStartNow').attr('style', 'background-color: #00aeef; color: #fff;');
} else if (window.location.href.indexOf('friendly-tip') > 0) {
    console.log("friendly eng");
    $(".zh").hide();
    $(".eng").show();
    $('.hideStartNow').attr('style', 'background-color: #00aeef; color: #fff;');

} else if (window.location.href.indexOf('market-tip-zh') > 0) {
    console.log("market zh");
    language = 'zh'
    $(".zh").show();
    $(".eng").hide();
} else if (window.location.href.indexOf('problem-owner-facing-zh') > 0) {
    console.log("problem zh");
    language = 'zh'
    $(".zh").show();
    $(".eng").hide();
} else if (window.location.href.indexOf('why-us-zh') > 0) {
    console.log("why zh");
    language = 'zh'
    $(".zh").show();
    $(".eng").hide();
    $('.hideStartNow').attr('style', 'background-color: #00aeef; color: #fff;');
} else if (window.location.href.indexOf('why-us') > 0) {
    console.log("why eng");
    $(".zh").hide();
    $(".eng").show();
    $('.hideStartNow').attr('style', 'background-color: #00aeef; color: #fff;');
} else {
    console.log("eng");
    $(".zh").hide();
    $(".eng").show();
}
if (window.location.href.indexOf('propertyForRent') > 0) {
    console.log("propertyForRent");
    $(".rentPart").show();
    // $("#packages-tab").prop("disabled", true);
    // $("#payment-tab").prop("disabled", true);
    // $("#uploadDocument-tab").prop("disabled", true);
    // $("#agreement-tab").prop("disabled", true);
} else {
    $(".salePart").show();
    // $("#packages-tab").prop("disabled", true);
    // $("#payment-tab").prop("disabled", true);
    // $("#uploadDocument-tab").prop("disabled", true);
    // $("#agreement-tab").prop("disabled", true);
};

if (language == 'eng') {
    console.log("modal eng");

    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption-img");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = '/images/how_does_it_work.jpeg';
        //captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-img")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
} else if (language == 'zh') {
    console.log("modal zh");

    var modalzh = document.getElementById("myModal-zh");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var imgzh = document.getElementById("myImg-zh");
    var modalImgzh = document.getElementById("img01-zh");
    var captionTextzh = document.getElementById("caption-img");
    imgzh.onclick = function () {
        modalzh.style.display = "block";
        modalImgzh.src = '/images/how_does_it_work_zh.png';
        //captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var spanzh = document.getElementsByClassName("close-img-zh")[0];

    // When the user clicks on <span> (x), close the modal
    spanzh.onclick = function () {
        modalzh.style.display = "none";
    }
}

function isNotBlank(value) {
    if (value != undefined && value != "") {
        return true
    }
    return false
}

function loadData() {
    if (requestid != undefined && requestid != null && requestid != '') {
        console.log("loaddata")
        firebaseGetWhere_subscription('files', 'requestID', requestid, (doc) => {
            console.log(doc)
            if ($("#listFile" + doc.documentType).length == 0) {
                $("#dropzone" + doc.documentType).before("<ul id='listFile" + doc.documentType + "'></ul>")
            }
            $("#listFile" + doc.documentType).append(`<li id="file_${doc.id}"><a href="${doc.link}">${doc.link.replace(/^.*[\\\/]/, '')}</a> - <button onclick="return DeleteFile('${doc.id}')">Delete</button></li>`)
        })


        get('request', requestid, (result) => {
            console.log("??")
            console.log(result)
            // console.log(result.address)
            
            if (isNotBlank(result.address)) {
                $("#inputAddress").val(result.address)
            }
            if (isNotBlank(result.city)) {
                $("#inputCity").val(result.city)
            }
            if (isNotBlank(result.propertyType)) {
                $("#inputCity").val(result.propertyType)
            }
            if (isNotBlank(result.otherType)) {
                $("#inputCity").val(result.otherType)
            }
            if (isNotBlank(result.lift)) {
                $("#inputCity").val(result.lift)
            }
            if (isNotBlank(result.selectSize)) {
                $("#inputCity").val(result.selectSize)
            }
            if (isNotBlank(result.size)) {
                $("#inputCity").val(result.size)
            }
            if (isNotBlank(result.tenure)) {
                $("#inputCity").val(result.tenure)
            }
            if (isNotBlank(result.otherInfo)) {
                $("#inputCity").val(result.otherInfo)
            }
            if (isNotBlank(result.monthlyRental)) {
                $("#inputCity").val(result.monthlyRental)
            }
            if (isNotBlank(result.agentCode)) {
                $("#inputCity").val(result.agentCode)
            }
            
            // $("#selectType").val(result.propertyType)
            // $("#inputOtherType").val(result.otherType)
            // $("#selectLift").val(result.lift)
            // $("#selectSize").val(result.selectSize)
            // $("#inputSize").val(result.size)
            // $("#selectTenure").val(result.tenure)
            // $("#inputOtherInfo").val(result.otherInfo)
            // $("#inputMonthlyRental").val(result.monthlyRental)
            // $("#inputAgentCode").val(result.agentCode)
            //$("#inputSMSCode").val(result.smsCode)

            focusTab = "#propertyInfo-tab"


            if (result.smsCode != undefined && result.smsCode != '') {
                $("#packages-tab").removeClass("tab-disabled");
                focusTab = "#packages-tab"
            }
            if (result.package != undefined) {
                $("#payment-tab").removeClass("tab-disabled");
                
                focusTab = "#payment-tab"
            }

            if (result.paid != undefined && result.paid == true) {
                // $("#payment-tab").removeClass("tab-disabled");
                $("#uploadDocument-tab").removeClass("tab-disabled");
                focusTab = "#uploadDocument-tab"
            }

            if (result.declaration != undefined && result.declaration == "true") {
                // $("#payment-tab").removeClass("tab-disabled");
                $("#agreement-tab").removeClass("tab-disabled");
                focusTab = "#agreement-tab"

            }


            if (result.SalePurchaseAgreement != undefined && result.SalePurchaseAgreement != '') {



                $("#reconfirmAddress").val(result.reconfirmAddress)
                $("#sellingPoint").val(result.sellingPoint)
                $("#remark").val(result.remark)
            }
            if (result.commencementDate != undefined && result.commencementDate != '') {
                $("#agreement-tab").removeClass("tab-disabled");

                $("#tenancyPeriod").val(result.tenancyPeriod)
                $("#commencementDate").val(result.commencementDate)
                $("#switch-1").val(result.isRenew)
                $("#securityDeposit").val(result.securityDeposit)
                $("#utilityDeposit").val(result.utilityDeposit)
                $("#otherDeposit1").val(result.otherDeposit1)
                $("#otherDepositAmount1").val(result.otherDepositAmount1)
                $("#otherDeposit2").val(result.otherDeposit2)
                $("#otherDepositAmount2").val(result.otherDepositAmount2)
                $("#agreementRemark").val(result.agreementRemark)
            }

            $(focusTab).click()
        })
    }
}

function get(table, docId, trigger) {
    // return new Promise(function (resolve, reject) {
    let docRef = db.collection(table).doc(docId);
    let getDoc = docRef.onSnapshot(doc => {
        console.log("changes")
        if (!doc.exists) {
            console.log('No such document!');
            //resolve("false");
        } else {
            let temp = doc.data();
            temp.id = doc.id;
            // console.log('Document data:', temp);
            trigger(temp)
        }
    })
    // });
}
// $("#switch-1").on("change", function (e) {
//     const isOn = e.currentTarget.checked;
//     if (isOn) {
//         console.log(isOn);
//         $("#renewOption").show();
//     } else {
//         console.log(isOn);
//         $("#renewOption").hide();
//     }
// });
$("#selectType").on("change", function (e) {
    const selected = $("#selectType :selected").val();
    console.log(selected);
    if (selected != "Other") {
        $("#otherType").hide();
    } else {
        $("#otherType").show();
    };
});
$("#securityDeposit").on("change", function (e) {
    const selected = $("#securityDeposit :selected").val();
    console.log(selected);
    if (selected != "3") {
        $("#otherSecurityDeposit").hide();
    } else {
        $("#otherSecurityDeposit").show();
    };
});
$("#utilityDeposit").on("change", function (e) {
    const selected = $("#utilityDeposit :selected").val();
    console.log(selected);
    if (selected != "2") {
        $("#otherUtilityDeposit").hide();
    } else {
        $("#otherUtilityDeposit").show();
    };
});
// $(".about-us").click(function () {
//     window.location.href = "about-us"
// });
// $("#submitRentAgreement").click(function () {
//     $("#congratulation").modal("show");
// });
// $("#submitSaleAgreement").click(function () {
//     $("#congratulation").modal("show");
// });
$("#okCongratulate").click(function () {
    window.location.href = "/"
});
// $("#propertyInfoSubmit").click(function () {
//     if ($('#address').val() == '' || $('#city').val() == '' || $('#type').val() == '' || $('#type').val() ==
//         null) {
//         $("#requiredFieldModal").modal("show");

//     } else if ($('#job-agree').prop("checked") == true) {
//         $("#congratulationPropertyInfo").modal("show");

//     } else {
//         $("#pleaseCheck").modal("show");
//     }
// });
// $("#congratulationPropertyInfoSubmit").click(function () {
//     $("#congratulationPropertyInfo").modal("hide");
//     $("#packages-tab").removeClass("tab-disabled");
//     $("#payment-tab").removeClass("tab-disabled");
//     $("#packages-tab").click();
//     var scrollTo;
//     var container = $('html,body');
//     container.animate({
//         scrollTop: 0
//     });
// });

// $("#closeCheckModal").click(function () {
//     $("#pleaseCheck").modal("hide");
// });
// $("#closeRequiredFieldModal").click(function () {
//     $("#requiredFieldModal").modal("hide");
// });

// $("#basicPackageSubmit").click(function () {
//     $("#payment-tab").click();
//     var scrollTo;
//     var container = $('html,body');
//     container.animate({
//         scrollTop: 0
//     });
// });
// $("#powerPackageSubmit").click(function () {
//     $("#payment-tab").click();
//     var scrollTo;
//     var container = $('html,body');
//     container.animate({
//         scrollTop: 0
//     });
// });
// $("#submitPayment").click(function () {
//     $("#uploadDocument-tab").removeClass("tab-disabled");
//     $("#uploadDocument-tab").click();
//     var scrollTo;
//     var container = $('html,body');
//     container.animate({
//         scrollTop: 0
//     });
// });
// $("#submitDocument").click(function () {
//     $("#agreement-tab").tab("show");
//     var scrollTo;
//     var container = $('html,body');
//     container.animate({
//         scrollTop: 0
//     });
// });

function showTAndC() {
    $("#tandcform").show();
}
//POST Property for Rent START
function propertyToRentClick(e) {
    //$(document).on('click', '#propertyForRentButton', function(e){
    // let userInfoForm = document.getElementById('userInfoForm')
    let userInfoForm = $("#userInfoForm")[0];
    let userData = {
        name: $("#inputName").val(),
        mobile: $("#phoneCountryCode").val() + $("#inputMobile").val(),
        email: $("#inputEmail").val(),
        language: language
    }
    console.log(userData);
    //preventDefault();
    //stopPropagation();

    if (userInfoForm.checkValidity() === false) {
        userInfoForm.classList.add('was-validated');
    } else {
        $.ajax({
            type: 'POST',
            url: '/addUser/rent',
            data: userData,
            cache: false,
            success: function (result) {
                console.log(result);
                //window.location.href = "propertyForRent";
                if (language == "eng") {
                    window.location.href = "propertyForRent/" + result.userID + "/" + result.requestID;

                } else {
                    window.location.href = "propertyForRent-zh/" + result.userID + "/" + result.requestID;

                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    //show error if fail
                } else {
                    console.log('Unexpected error.');
                }
            }
        });
        // e.preventDefault()
    }
    //});
}
//Property for Rent END



//POST Property for Sale START
function propertyToSaleClick() {
    //$(document).on('click', '#propertyForRentButton', function(e){
    // let userInfoForm = document.getElementById('userInfoForm')
    let userInfoForm = $("#userInfoForm")[0];
    let userInfo = {
        name: $("#inputName").val(),
        mobile: $("#phoneCountryCode").val() + $("#inputMobile").val(),
        email: $("#inputEmail").val(),
    }
    console.log(userInfo);
    //e.preventDefault();
    //e.stopPropagation();

    if (userInfoForm.checkValidity() === false) {
        userInfoForm.classList.add('was-validated');
    } else {
        $.ajax({
            type: 'POST',
            url: '/addUser/sale',
            data: userInfo,
            cache: false,
            success: function (result) {
                //window.location.href = "propertyForSale";
                if (language == "eng") {
                    window.location.href = "propertyForSale/" + result.userID + "/" + result.requestID;

                } else {
                    window.location.href = "propertyForSale-zh/" + result.userID + "/" + result.requestID;

                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    //show error if fail
                } else {
                    console.log('Unexpected error.');
                }
            }
        });
    }
    //});
}
//Property for Sale END
function submitRentPropertyInfoClick() {
    
    let propertyInfoForm = $("#propertyInfoForm")[0];
    console.log("propertyInfoForm=>", propertyInfoForm);
    if (propertyInfoForm.checkValidity() === false) {
        propertyInfoForm.classList.add('was-validated');
    } else {
        Promise.all([
            sendSMSCodeClick()
        ]).then((result) => {
            console.log("test result=>",result)
            $("#congratulationPropertyInfo").modal();
            $("#lblcodeError").hide();
        });
    }
}

function submitRentPropertyInfoClick2() {

    Promise.all([
        verifySMSCodeClick()
    ]).then((result) => {
        console.log(result)
        //$("#congratulationPropertyInfoSubmit").prop("disabled", true);
        // let propertyInfoForm = $("#propertyInfoForm")[0];
        let propertyData = {
            address: $("#inputAddress").val(),
            city: $("#inputCity").val(),
            propertyType: $("#selectType").val(),
            otherType: $("#inputOtherType").val(),
            lift: $("#selectLift").val(),
            selectSize: $("#selectSize").val(),
            size: $("#inputSize").val(),
            tenure: $("#selectTenure").val(),
            otherInfo: $("#inputOtherInfo").val(),
            // propertyImage: $("#dropzonePropertyImage2").val(),
            monthlyRental: $("#inputMonthlyRental").val(),
            // sellingPrice: $("#inputSellingPrice").val(),
            agentCode: $("#inputAgentCode").val(),
            smsCode: $("#inputSMSCode").val(),
            userID: userid,
            requestID: requestid
        }
        $.ajax({
            type: 'POST',
            url: '/request/rent',
            data: propertyData,
            cache: false,
            success: function (result) {
                requestID = result.requestID
                console.log(result)
                $("#congratulationPropertyInfoSubmit").prop("disabled", false);
                $("#congratulationPropertyInfo").modal("hide");
                $("#packages-tab").removeClass("tab-disabled");
                // $("#payment-tab").removeClass("tab-disabled");
                $("#packages-tab").click();
                var scrollTo;
                var container = $('html,body');
                container.animate({
                    scrollTop: 0
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    //show error if fail
                    alert(textStatus)
                    $("#congratulationPropertyInfo").modal("hide");
                } else {
                    alert('Unexpected error.' + textStatus)
                    console.log('Unexpected error.');
                    $("#congratulationPropertyInfo").modal("hide");
                }
            }
        });
    })
}

function packageClick(type, amount) {
    console.log(type)
    console.log(userid)
    console.log(requestid)
    let propertyData = {
        package: type,
        packageAmount: amount,
        requestID: requestid
    }
    if (type == "basic") {
        $("#txtPackageSelected").html("DIY BASIC REALBID [RM388]");
    } else {
        $("#txtPackageSelected").html("POWER REALBID [RM688]");
    }
    $.ajax({
        type: 'POST',
        url: '/request/rent',
        data: propertyData,
        cache: false,
        success: function (result) {
            console.log(result)
            $("#payment-tab").removeClass("tab-disabled");
            $("#payment-tab").click();
            var container = $('html,body');
            container.animate({
                scrollTop: 0
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 500) {
                //show error if fail
                alert(textStatus)
                $("#congratulationPropertyInfo").modal("hide");
            } else {
                alert('Unexpected error.' + textStatus)
                console.log('Unexpected error.');
                $("#congratulationPropertyInfo").modal("hide");
            }
        }
    });
}
// var stripeHandler = StripeCheckout.configure({
//     key: stripePublicKey,
//     locale: 'auto',
//     token: function (token) {
//         var items = [{
//             id:1,
//             quantity:1
//         }]
//         // fetch('/purchase', {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         'Accept': 'application/json'
//         //     },
//         //     body: JSON.stringify({
//         //         stripeTokenId: token.id,
//         //         items: items,
//         //         requestID: requestid
//         //     })
//         // }).then(function (res) {
//         //     return res.json()
//         // }).then(function (data) {
//         //     alert(data.message)
//         // }).catch(function (error) {
//         //     console.error(error)
//         // })
//         $.ajax({
//             type: 'POST',
//             url: '/purchase',
//             data: ({
//                 stripeTokenId: token.id,
//                 requestID: requestid
//             }),
//             cache: false,
//             success: function (result) {
//                 // alert(result.message)
//                 $("#uploadDocument-tab").removeClass("tab-disabled");
//                 $("#uploadDocument-tab").click();
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 alert(errorThrown)
//             }
//         });
//     }
// })

function continuePayment() {
    var stripe = Stripe("pk_test_51HwhmEBaXV37jGgvZZzQr8UuUO9uSx851Qu7oqjeE8pDtnPPF8430NyWCJauQBLXrQWoxHPZjp6csDuyoNeJvQNU00yAcf9Pf6");
    fetch("/create-checkout-session/" + userid + "/" + requestid, {
            method: "POST",
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (session) {
            return stripe.redirectToCheckout({
                sessionId: session.id
            });
        })
        .then(function (result) {
            // If redirectToCheckout fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using error.message.
            if (result.error) {
                alert(result.error.message);
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
}

// function continuePayment() {
//     Promise.all([
//         getOnce("request", requestid)
//     ]).then((result) => {
//         stripeHandler.open({
//             amount: result[0].packageAmount * 100,
//         })
//     })


// }

function submitSalePropertyInfoClick() {
    let propertyInfoForm = $("#propertyInfoForm")[0];
    if (propertyInfoForm.checkValidity() === false) {
        propertyInfoForm.classList.add('was-validated');
    } else {
        Promise.all([
            sendSMSCodeClick()
        ]).then((result) => {
            console.log(result)
            $("#congratulationPropertyInfo").modal();
        });
    }
}

function submitSalePropertyInfoClick2() {
    Promise.all([
        verifySMSCodeClick()
    ]).then((result) => {
        // let propertyInfoForm = $("#propertyInfoForm")[0];
        let propertyData = {
            address: $("#inputAddress").val(),
            city: $("#inputCity").val(),
            propertyType: $("#selectType").val(),
            otherType: $("#inputOtherType").val(),
            lift: $("#selectLift").val(),
            selectSize: $("#selectSize").val(),
            inputSize: $("#inputSize").val(),
            tenure: $("#selectTenure").val(),
            otherInfo: $("#inputOtherInfo").val(),
            // propertyImage: $("#inputPropertyImage").val(),
            sellingPrice: $("#inputSellingPrice").val(),
            agentCode: $("#inputAgentCode").val(),
            smsCode: $("#inputSMSCode").val(),
            userID: userid,
            requestID: requestid
        }

        $.ajax({
            type: 'POST',
            url: '/request/sale',
            data: propertyData,
            cache: false,
            success: function (result) {
                requestID = result.requestID
                console.log(result)
                $("#congratulationPropertyInfo").modal("hide");
                $("#packages-tab").removeClass("tab-disabled");
                // $("#payment-tab").removeClass("tab-disabled");
                $("#packages-tab").click();
                var scrollTo;
                var container = $('html,body');
                container.animate({
                    scrollTop: 0
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    //show error if fail
                } else {
                    console.log('Unexpected error.');
                }
            }
        });
    })
}

var requestID = null


function stripePaymentClick() {
    let paymentType = {
        masterCard: $('input[id="masterCard"]:checked').val(),
        visa: $('input[id="visa"]:checked').val(),
        fpx: $('input[id="fpx"]:checked').val()
    }
    console.log(paymentType);

    // $.ajax({
    //     type: 'POST',
    //     url: '/addPaymentType',
    //     data: paymentType,
    //     cache: false,
    //     success: function (result) {
    //         //window.location.href = "propertyForRent";
    //     },
    //     error: function (jqXHR, textStatus, errorThrown) {
    //         if (jqXHR.status == 500) {
    //             //show error if fail
    //         } else {
    //             console.log('Unexpected error.');
    //         }
    //     }
    // });
}

function submitDocumentClick(e) {
    var container = $('html,body');

    let dzList = [
        "SalePurchaseAgreement",
        // "StrataTitle",
        "OwnerIC",
        // "CompanyOwnership",
        "AssessmentBill",
        "QuitRentBill",
        // "LoanRepayment",
        "PropertyImage2",
        // "AddDoc1",
        // "AddDoc2"
    ]
    let error = "ok"
    let once = false

    dzList.forEach((item) => {
        if ($('#listFile' + item + ' li').length == 0 && error == "ok") {

            $('html, body').animate({
                scrollTop: $("#dropzone" + item).offset().top - 50
            }, 500, () => {
                if (once == false) {
                    once = true
                    $("#dropzone" + item).effect("shake",{times:3}, 1000);
                    alert("Please upload file as its required")
                }
                
            });
            error = "Please upload require picture or files"
    
        }    
    })


    let onceB = false 
    if ($("#uploadDeclaration").is(':checked') == false) {
        $('html, body').animate({
            scrollTop: $("#uploadDeclaration").offset().top - 50
        }, 500, () => {
            if (onceB == false) {
                onceB = true
                $("#uploadDeclaration").effect("shake",{times:3}, 1000);
                alert("Please accept to continue")
            }
            
        });
        error = "Declaration is missing"
    }
/*
    if (document.getElementById('dropzoneSalePurchaseAgreement').childNodes.length < 4) {

        $('html, body').animate({
            scrollTop: $("#dropzoneSalePurchaseAgreement").offset().top
        }, 2000, () => {
            $("#dropzoneSalePurchaseAgreement").effect("highlight", {}, 3000);
        });
        

    } else if (document.getElementById('dropzoneStrataTitle').childNodes.length < 4) {

        document.getElementById('dropzoneStrataTitle').scrollIntoView()

    } else if (document.getElementById('dropzoneOwnerIC').childNodes.length < 4) {

        document.getElementById('dropzoneOwnerIC').scrollIntoView()

    } else if (document.getElementById('dropzoneCompanyOwnership').childNodes.length < 4) {

        document.getElementById('dropzoneCompanyOwnership').scrollIntoView()

    } else if (document.getElementById('dropzoneAssessmentBill').childNodes.length < 4) {

        document.getElementById('dropzoneAssessmentBill').scrollIntoView()

    } else if (document.getElementById('dropzoneQuitRentBill').childNodes.length < 4) {

        document.getElementById('dropzoneQuitRentBill').scrollIntoView()

    } else if (document.getElementById('dropzoneLoanRepayment').childNodes.length < 4) {

        document.getElementById('dropzoneLoanRepayment').scrollIntoView()

    } else if (document.getElementById('dropzonePropertyImage2').childNodes.length < 4) {

        document.getElementById('dropzonePropertyImage2').scrollIntoView()

    } else if (document.getElementById('dropzoneAddDoc1').childNodes.length < 4) {

        document.getElementById('dropzoneAddDoc1').scrollIntoView()

    } else if (document.getElementById('dropzoneAddDoc2').childNodes.length < 4) {

        document.getElementById('dropzoneAddDoc2').scrollIntoView()

    } else */


    if (error == "ok") {
        let uploadDocumentsForm = $("#uploadDocumentsForm")[0];
        let documents = {
            reconfirmAddress: $("#reconfirmAddress").val(),
            sellingPoint: $("#sellingPoint").val(),
            remark: $("#remark").val(),
            declaration: true
        }
        console.log(documents);
        console.log(requestid);


        $.ajax({
            type: 'POST',
            url: '/addDocumentsInfo/' + requestid,
            data: documents,
            cache: false,
            success: function (result) {
                // $("#agreement-tab").tab("show");
                $("#agreement-tab").removeClass("tab-disabled");
                $("#agreement-tab").click();

                container.animate({
                    scrollTop: 0
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    //show error if fail
                } else {
                    console.log('Unexpected error.');
                }
            }
        });

    }
    e.preventDefault();
    e.stopPropagation();


}

function submitRentAgreementClick() {
    let agreementForm = $("#agreementForm")[0];
    let rentAgreement = {
        tenancyPeriod: $("#tenancyPeriod").val(),
        commencementDate: $("#commencementDate").val(),
        isRenew: $("#switch-1").val(),
        // renewMonth: $("#renewMonth").val(),
        securityDeposit: $("#securityDeposit").val(),
        otherSecurityDeposit: $("#inputOtherSecurityDeposit").val(),
        utilityDeposit: $("#utilityDeposit").val(),
        otherUtilityDeposit: $("#inputOtherUtilityDeposit").val(),
        otherDeposit1: $("#otherDeposit1").val(),
        otherDepositAmount1: $("#otherDepositAmount1").val(),
        otherDeposit2: $("#otherDeposit2").val(),
        otherDepositAmount2: $("#otherDepositAmount1").val(),
        agreementRemark: $("#agreementRemark").val(),
        requestID: requestid
    }
    console.log(rentAgreement);

    if (agreementForm.checkValidity() === false) {
        agreementForm.classList.add('was-validated');
    } else {
        $("#txtsubmission").html(requestid);
        $.ajax({
            type: 'POST',
            url: '/addRentAgreement/' + requestid,
            data: rentAgreement,
            cache: false,
            success: function (result) {
                console.log(result)
                
                $("#congratulation").modal("show");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    //show error if fail
                } else {
                    console.log('Unexpected error.');
                }
            }
        });
    }
}

function submitSaleAgreementClick() {
    let error = "ok";


    if ($("#job-agree2").is(":checked") == false) {
        error = "Please press agree to continue"
    }

    if (error == "ok") {
        let agreementForm = $("#agreementForm")[0];
        let saleAgreement = {
            reservePrice: $("#reservePrice").val(),
            minDeposit: $("#minDeposit").val(),
        }
        console.log(saleAgreement);
        $("#txtsubmission").html(requestid);
        /*if (agreementForm.checkValidity() === false) {
            agreementForm.classList.add('was-validated');
        } else{*/
        $.ajax({
            type: 'POST',
            url: '/addSaleAgreement/' + requestid,
            data: saleAgreement,
            cache: false,
            success: function (result) {
                $("#congratulation").modal("show");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    //show error if fail
                } else {
                    console.log('Unexpected error.');
                }
            }
        });
    } else {
        alert(error)
    }
    
    //}
}



//Send SMS code START
function sendSMSCodeClick() {
    console.log("sms test=>")
    return new Promise(function (resolve, reject) {
        firebase.auth().useDeviceLanguage();
        $("#submitRentPropertyInfo").prop("disabled", true);
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("alek=>")
                onSignInSubmit();
            }
        });
        let url = $(location).attr('href');
        let arr = url.split('/');
        let userid = arr[4]
        let userData = {
            userID: userid
        }
        $.ajax({
            type: 'POST',
            url: '/getTAC',
            data: userData,
            cache: false,
            success: function (result) {

                $("#lblVerify").hide()
                // var phoneNumber = "+601110165247";
                var phoneNumber = result.mobile;
                var appVerifier = window.recaptchaVerifier;

                firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                    .then(function (confirmationResult) {
                        console.log("resut=>", result);
                        resolve(confirmationResult);
                        $("#lblVerify").hide()
                        var count = 119
                        window.timer = setInterval(function () {
                            $("#counter").html(count--);
                            if (count == -1) {
                                $("#lblVerify").show()
                                $("#counter").html(120);
                                clearInterval(window.timer);
                            }
                        }, 1000);
                        $("#submitRentPropertyInfo").prop("disabled", false);
                        //alert("Sent to:" + phoneNumber);
                        // SMS sent. Prompt user to type the code from the message, then sign the
                        // user in with confirmationResult.confirm(code).
                        window.confirmationResult = confirmationResult;
                    }).catch(function (error) {
                        $("#submitRentPropertyInfo").prop("disabled", false);
                        alert(error);
                        reject(error);
                        // resolve(error);
                        // Error; SMS not sent
                        // ...
                    });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {} else {
                    console.log('Unexpected error.');
                }
            }
        });
    });
}

function verifySMSCodeClick() {
    return new Promise(function (resolve, reject) {
        var smsCode = $("#inputSMSCode").val();
        if (smsCode == '') {
            $("#lblcodeError").show();
        } else {
            $("#lblcodeError").hide();
            $("#congratulationPropertyInfoSubmit").prop("disabled", true);
            confirmationResult.confirm(smsCode).then(function (result) {
                console.log(result);
                clearInterval(window.timer);
                $("#lblCode").html("<span style='color:#009b72;'>Verified!</span>");
                $("#verifySMSCode").prop("disabled", true);
                resolve(result);
            }).catch(function (error) {
                alert(error);
                $("#congratulationPropertyInfoSubmit").prop("disabled", false);
                // alert("The code is invalid!");
                reject(error);
            })
        }
    });

}

function DeleteFile(id) {

    firebaseDelete("files", id).then(() => {
        $("#file_" + id).animate({
            opacity: '0'
        }, {
            duration: 1000,
            complete: function() {
                $(this).remove();
            }
        });
    })
    return false;
}

function firebaseDelete(table, id) {
    return new Promise((resolve, reject) => {
        let docRef = db.collection(table).doc(id)
        docRef.get().then((docSnapshot) => {
            if (docSnapshot.exists) {

                docRef.delete()
                resolve(true)
            } else {
                reject(false)
            }
        })

    })
}

function firebaseGetWhere_subscription(table, where, where_value, gotDataFunction) {

    return new Promise(function (resolve, reject) {
        let docRef = db.collection(table);
        // console.log(docRef,id)
        docRef.where(where, '==', where_value).onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                let doc = change.doc
                let temp_data = JSON.parse(JSON.stringify(doc.data()))
                temp_data["id"] = doc.id
                if (change.type == "added") {
                    gotDataFunction(temp_data)
                }
                
            })


            //console.log(docX.data())
        })

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



function _get(table, where_JSON = {}, tableID = null, specificTable = null) {
    return new Promise(function (resolve, reject) {
        let docRef;
        if (specificTable != null) {
            docRef = mainDB.collection(table).doc(tableID).collection(specificTable);
        } else {
            docRef = mainDB.collection(table)
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
                                docRef = docRef.where(Firestore.FieldPath.documentId(), '==', where_JSON[item_name])

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