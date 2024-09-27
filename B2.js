function information1(name, id, phone, address){
    this.name = name;
    this.id = id;
    this.phone = phone;
    this. address = address;
};
let information = new information1("Nguyễn Văn A", 12345, 198303310, "Đà Nẵng");
delete information.address;
information.email = "abc123@gmail.com";
console.log(information);
