$(#name).on("keyup", function () {
      var name = document.getElementById("name").value;
      var letters = /^[A-Za-z\s]+$/;
      if (!name.match(letters) && name != ""){
        document.getElementById('name_error').innerHTML = "Enter characters only";
      
      } else if (name.match(letters) && name.length < 3) {
        document.getElementById('name_error').innerHTML = "Your name must contain at least 3 Characters";
        
      } else if(name == "") {
        document.getElementById('name_error').innerHTML = "Enter your name";
      }else{
        document.getElementById('name_error').innerHTML = "";
      }
    })
    