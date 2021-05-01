nameofstudentarray=[];
function submit(){
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    nameofstudentarray.push(name1);
    nameofstudentarray.push(name2);
    nameofstudentarray.push(name3);
    nameofstudentarray.push(name4);
    console.log(nameofstudentarray);
    document.getElementById("display1_name").innerHTML=nameofstudentarray;
    
}
function sorting(){
    nameofstudentarray.sort();
    console.log(nameofstudentarray);
    document.getElementById("sort_name").innerHTML=nameofstudentarray;
}
function show()
{
    document.getElementById("display_name").innerHTML=nameofstudentarray;
    document.getElementById("show_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";  
     
}
