function greeting(){
    let userName = "ana";
    console.log(userName);

    if(userName=== "ana"){
        console.log(`hello ${userName}`)
    }

}
greeting();
console.log(userName) // no permite el acceso ya que la variable "username" es local y no global 