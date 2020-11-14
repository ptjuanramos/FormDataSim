const FormDataElements = [
    "input",
    "textArea",
    "select"
];

function getFormElements(form) {
    var concatenatedFormElements = FormDataElements.join(", ");
    var elements = form.find(concatenatedFormElements);
    var resultArray = [];
    
    /* elements.each((i, e) => )
    resultArray[] */
}