    var num = 10;
    let name = "ARM";
    age =20;
    const year = 2003;

    console.log(year);

    fruit = ["banana","apple","orange"];

    console.log(fruit[1]);                                                                                                                                                                                                                                                                                                                                                                                                                                                       

    Plant = { fruit:"banana",car: "nissan", color: "orange" };
    dataJson = 
    {
    employee: [{name: "ARM"}, { age:20 }, { year:2003 }],
    };

    console.log(dataJson.employee[0].name);
     
    let msg = name +  " " + year;
    msg = `${name} ${year}` ; 

    console.log(msg);

    document.getElementById('title').innerHTML=msg;

    $(function () {
        $("#title").html(msg + " jQuery")
        .addClass("red");
    });
