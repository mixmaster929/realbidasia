var DropzoneExample = function () {
    var DropzoneDemos = function () {
        Dropzone.options.dropzonePropertyImage = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/PropertyImage",
                // addRemoveLinks: true,
                // removedfile: function(file) {
                //     alert("delete")
                // },
                init: function () {
                    this.addRemoveLinks = true;
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);
                        console.log(file)

                    })
                    this.on("queuecomplete", function (file, responseText) {
                        console.log(file)
                    });
                }
            },
            Dropzone.options.dropzoneSalePurchaseAgreement = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/SalePurchaseAgreement",
                // addRemoveLinks: true,
                // removedfile: function(file) {
                //     x = confirm('Do you want to delete?');
                //     if(!x)  return false;
                // },
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);
                        // alert("??");
                        // console.log(file)
                        // $("#dropzoneSalePurchaseAgreement").prev().append(`<br/><a href="#">${file.name}</a>`)
                    })
                    this.on("queuecomplete", function (file, responseText) {

                    })
                    
                }
            },
            Dropzone.options.dropzoneStrataTitle = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/StrataTitle",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
         
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            },
            Dropzone.options.dropzoneOwnerIC = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/OwnerIC",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            },
            Dropzone.options.dropzoneCompanyOwnership = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/CompanyOwnership",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            },
            Dropzone.options.dropzoneAssessmentBill = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/AssessmentBill",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            },
            Dropzone.options.dropzoneQuitRentBill = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/QuitRentBill",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            },
            Dropzone.options.dropzoneLoanRepayment = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/LoanRepayment",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            },
            Dropzone.options.dropzonePropertyImage2 = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/PropertyImage2",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            },
            Dropzone.options.dropzoneAddDoc1 = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/AddDoc1",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            },
            Dropzone.options.dropzoneAddDoc2 = {
                paramName: "file",
                maxFiles: 10,
                maxFilesize: 10,
                url: "/uploadDocuments/AddDoc2",
                init: function () {
                    this.on("sending", function (file, xhr, formData) {
                        formData.append("requestID", _requestID);
                        formData.append("userID", _userID);
                    })
                    this.on("error", function (file, responseText) { $(file.previewElement).addClass("dz-error").find('.dz-error-message').text("Fail to upload");

                    })
                    this.on("success", function (file, responseText) { this.removeFile(file);

                    })
                    this.on("queuecomplete", function (file, responseText) {

                    });
                }
            }
    }
    return {
        init: function () {
            DropzoneDemos();
        }
    };
}();
DropzoneExample.init();