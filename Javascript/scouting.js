function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/U20YWbdyS9VZZRCv/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}
