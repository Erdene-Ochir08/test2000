// if,else -> nuhtsul shalgah
// tentsuu bnu? ih bnu? baga bnu?
var age=15;
// >, <, >=, <=, ==, !=
if(age>=18){
	console.log("Ta nasand hursen baina");
}else{
	console.log("Ta nasand hureegui baina");
}
// 1. 2 тооны их багыг олох код бичнэ үү
var too1=25, too2=25;
if(too1>too2){
	console.log(too1+" ih bna."+too2+" baga bna");
}else if(too1==too2){
	console.log("2 too tentsuu bna");
}else{
	console.log(too2+" ih bna."+too1+" baga bna");
}
// 2. Тоог тэгш эсвэл сондгой эсэхийг олох код бичнэ үү
var too=5; // 5%2==1, 4%2==0 // != not equal/tentsuu bish
if(too%2==1){
	console.log("Sondgoi too");
}else{
	console.log("Tegsh too");
}
// 3. Тоог эерэг эсвэл сөрөг эсэхийг олох код бичнэ үү
if(too>0){
	console.log("Eyreg too");
}else{
	console.log("Surug too");
}
// && -> and/bas,   || -> or/esvel
var nas=25;
var huis="emegtei";
if(nas>17 && huis=="emegtei"){
	console.log("Nasand hursen bas emegtei");
}else if(nas<18 && huis=="emegtei"){
	console.log("Nasand hureegui bas emegtei");
}else{
	console.log("Nasand hureegui bas emegtei bish")
}
// 4. 3 тооны ихийг олох код бичнэ үү
var num1=25, num2=8, num3=20;
if(num1>num2 && num1>num3){
	console.log("too1 ih");
}else if(num2>num1 && num2>num3){
	console.log("too2 ih");
}else if(num3>num1 && num3>num2){
	console.log("too3 ih");
}else{
	console.log("Buh too tentsuu baina");
}
// || -> or/esvel
// 35 5 esvel 2-t huvaagdahu?
var number=35;
if(number%5==0 || number%2==0){
	console.log(number+" too 5 esvel 2t huvaagdana");
}else{
	console.log(number+" too 5 esvel 2t alind n ch huvaagdahgui");
}
// Гараас дүн/0-100/ оруулахад харгалзах үнэлгээг гаргаж ирэх код бичнэ үү. 0-59 F, 60-69 D, 70-79 C, 80-89 B, 90-100 A,  
// 0ээс бага 100-аас их дүн оруулвал тийм дүн байхгүй гэж гарч ирнэ
var dun=+prompt("dungee oruulna uu");
if(dun>=0 && dun<=59 ){
	console.log("F");
}
// alert,prompt,if,else
alert("Ta oid sersen. Gertee harih zamaa olvol ta hojno");
alert("Tanii zamd 2 salaa zam taarlaa. zuun/baruun ");
var choice = prompt("zuun/baruun ?");
if(choice=="zuun" || choice=="Zuun"){
	alert("Baavgai taarlaa. Ta zugtah uu esvel dairahuu?");
	var choice2=prompt("zugtah/dairah?");
	if(choice2=="zugtah"){
		alert("Ta zugtaaj gertee harilaa. Hojloo");
	}else if(choice2=="dairah"){
		alert("Ta baavgaid tsohiulj vhlee");
	}
}else if(choice=="baruun"){
	alert("Ta chono taaraad vhlee");
}else{
	console.log("Ta buruu zam oruulsan baina. Dahij ehelne uu");
}