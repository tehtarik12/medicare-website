
function validation(){
    let fullname = document.getElementById("fullname").value
    let email = document.getElementById("email").value
    let gender = ""
    let password = document.getElementById("password").value
    let password2 = document.getElementById("confirmpassword").value;  

    // menarik value gender
    if(document.getElementById("Male").checked){
        gender = document.getElementById("Male").value
    }
    else if(document.getElementById("Female").checked){
        gender = document.getElementById("Female").value
    }
    // menarik value gender


    // Nama
    if(fullname == ""){
        alert("Nama Wajib Diisi!")
        return false;
    }
    else if(fullname.length < 5){
        alert("Nama Wajib Lebih Dari 4 Huruf!")
        return false;
    }
    // Nama

    // Email
    if(email == ""){
        alert("Email Wajib Diisi!")
        return false;
    }

    else if(email.split("@").length > 2 || email.split("@").length == 1){
        alert("Masukan Format Input Email dengan benar dan hanya memiliki 1 buah tanda @ Contoh: medicare123@medi.com")
        return false
    }

    else if(!email.split("@")[1].includes(".")){
        alert("Masukan Format Input Email dengan benar dan diikuti titik setelah @ Contoh: medicare123@medi.com")
        return false
    }
    // Email

    // Gender
    if(gender == ""){
        alert("Silahkan memilih salah satu kotak pada Form Jenis Kelamin")
        return false
    }
    // Gender

    // Password
    if(password == "") {  
        alert("Silahkan memasukan Password Registrasi Anda")
       return false
    }  

    if(password.length < 8) {  
        alert("Silahkan memasukan Password dengan total lebih dari 8 digit/karakter")
       return false 
    } 

    if(password.search(/[0-9]/)==-1){
        alert("Silahkan masukan minimal 1 Angka pada password anda.")
        return false
    }

    if(password.search(/[A-Z]/)==-1){
        alert("Silahkan masukan minimal 1 Huruf Kapital pada password anda.")
        return false
    }

    if(password != password2)  
    {   
      alert("Silahkan memasukan Konfirmasi Password dengan benar")
      return false
    } else {  
      alert("Akun anda telah disubmit silahkan Login dengan menekan tombol di kanan atas.")
    } 
    // Password
}

function login(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if(email == ""){
        alert("Silahkan Masukan Email Yang Sudah Didaftar")
        return false;
    }

    if(password == "") {  
        alert("Silahkan Memasukan Password Yang Sudah Diregistrasi")
       return false
    }  
}