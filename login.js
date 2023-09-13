var mysql = require ("mysql");

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"login"
});

con.connect(function(error){
    if(error) throw error;
    console.log("connect");

    var sql = "INSERT INTO register (username,password,email) VALUES ?";
    var values = [
        ['nahar','1325436', 'nrsikder2@gmail.com']
    ]
    con.query(sql,[values], function(error, result){
        if(error) throw error;
        console.log("records:"+result);
    });

    con.query("SELECT * FROM register",function(error, result){
        if(error) throw error;
        console.log(result);
    });
});


var userEmail = document.querySelector("email_user");
var useraassword = document.querySelector("password");
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}
 
registerLink.addEventListener("click", () => {
    
    var obj = {
        email: userEmail.value,
        password: useraassword.value
    };
    
    fetch("/contact", {
        method: 'POST',
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(obj)
    });

})


/*const form = console.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefult();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);


    fetch('http://localhost:3000/loger',
    {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: jsonData
    } ).then(res => res.json())
    .then(result => console.log(result.data))
    .catch(err => console.log(err))
}*/



