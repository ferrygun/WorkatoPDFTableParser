var pdf_table_extractor = require("pdf-table-extractor");
var fs = require('fs');

const myFunction = async (input) => {
    const output = {};

    var input_pdf;


    const pdfParser = (input) => new Promise(((resolve, reject) => {
        input_pdf = input.input_pdf;
        

        function success(result) {
            resolve(JSON.stringify(result));
        }
 
        //Error
        function error(err) {
           resolve('Error: ' + err);
        }
        
        //console.log(input_pdf)
        pdf_table_extractor(input_pdf,success,error);

    }));


    output.response = await pdfParser(input);
    return output;
}

exports.main = async (input) => {
    return await myFunction(input);
}




const myFunction1 = async () => {
    let fileInputName = 'test1.pdf';
    var pdf = fs.readFileSync(fileInputName);
    //console.log(pdf)

    const input = {};
    const buff = Buffer.from(pdf);
    //const base64 = buff.toString('base64');

    input.input_pdf = buff;


    var res = await myFunction(input);
    console.log("Result:")
    console.log(res)
};


myFunction1();