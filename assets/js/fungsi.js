function aktifkan(){
    document.getElementById("buttonTimbul").style.animation= "muncul 0.5s ease-in";
    document.getElementById("buttonTimbul").style.animationFillMode= "forwards";
    
    document.getElementById("dalamTag").style.animation= "hilang 0.5s ease-in";
    document.getElementById("dalamTag").style.animationFillMode= "forwards";
    
    document.getElementById("harusMuncul").style.animation= "muncul 0.5s ease-in";
     document.getElementById("harusMuncul").style.animation= "muncul 0.5s ease-in";
    document.getElementById("harusMuncul").style.animationFillMode= "forwards";
}
function matikan(){
    document.getElementById("buttonTimbul").style.animation= "hilang 0.5s ease-in";
    document.getElementById("buttonTimbul").style.animationFillMode= "forwards";
    
    document.getElementById("dalamTag").style.animation= "muncul 0.5s ease-in";
    document.getElementById("dalamTag").style.animationFillMode= "forwards";
    
    document.getElementById("harusMuncul").style.animation= "hilang 0.5s ease-in";
    document.getElementById("harusMuncul").style.animationFillMode= "forwards";
}

function munculAku(){ 
     document.getElementById("kita").style.animation= "hilang 0s ease-in";
    document.getElementById("kita").style.animationFillMode= "forwards";
    document.getElementById("aku").style.animation= "muncul 0.7s ease-in-out";
    document.getElementById("a ku").style.animationFillMode= "forwards";
    
    document.getElementById("deskrip1").style.animation= "muncul 0.7s ease-in-out";
    document.getElementById("deskrip1").style.animationFillMode= "forwards";
    
    document.getElementById("punyaku1").style.animation= "muncul 0.7s ease-in-out";
    document.getElementById("punyaku1").style.animationFillMode= "forwards";
    
   
}
function hilangAku(){
    document.getElementById("kita").style.animation= "muncul 0.5s ease-in";
    document.getElementById("kita").style.animationFillMode= "forwards";
    
    document.getElementById("aku").style.animation= "hilang 0s ease-in";
    document.getElementById("aku").style.animationFillMode= "forwards";
    document.getElementById("deskrip1").style.animation= "hilang 0s ease-in";
    document.getElementById("deskrip1").style.animationFillMode= "forwards";
    document.getElementById("punyaku1").style.animation= "hilang 0s ease-in";
    document.getElementById("punyaku1").style.animationFillMode= "forwards";
}

function munculKamu(){ 
    document.getElementById("kita").style.animation= "hilang 0s ease-in-out";
    document.getElementById("kita").style.animationFillMode= "forwards";
    document.getElementById("kamu").style.animation= "muncul 0.7s ease-in";
    document.getElementById("kamu").style.animationFillMode= "forwards";
    document.getElementById("deskrip2").style.animation= "muncul 0.7s ease-in";
    document.getElementById("deskrip2").style.animationFillMode= "forwards";
    document.getElementById("punyaku2").style.animation= "muncul 0.7s ease-in";
    document.getElementById("punyaku2").style.animationFillMode= "forwards";
    
    
}
function hilangKamu(){
    document.getElementById("kita").style.animation= "muncul 0.5s ease-in";
    document.getElementById("kita").style.animationFillMode= "forwards";
    
    document.getElementById("kamu").style.animation= "hilang 0s ease-in";
    document.getElementById("kamu").style.animationFillMode= "forwards";
    document.getElementById("deskrip2").style.animation= "hilang 0s ease-in";
    document.getElementById("deskrip2").style.animationFillMode= "forwards";
    document.getElementById("punyaku2").style.animation= "hilang 0s ease-in";
    document.getElementById("punyaku2").style.animationFillMode= "forwards";
    
}

function geserKiri1(){
    document.getElementById("newsPs").style.animation= "kiri 1.5s ease-in";
    document.getElementById("newsPs").style.animationFillMode= "forwards";
    document.getElementById("newsPs").style.filter="none";
}

function geserKanan1(){
    document.getElementById("newsPs").style.animation= "kanan 0.8s ease-in";
    document.getElementById("newsPs").style.animationFillMode= "forwards";
    document.getElementById("newsPs").style.filter="grayscale(1)";
}

function geserKiri2(){
    document.getElementById("newsPd").style.animation= "kiri 1.3s ease-in";
    document.getElementById("newsPd").style.animationFillMode= "forwards";
    document.getElementById("newsPd").style.filter="none";
}

function geserKanan2(){
    document.getElementById("newsPd").style.animation= "kanan 0.7s ease-in";
    document.getElementById("newsPd").style.animationFillMode= "forwards";
    document.getElementById("newsPd").style.filter="grayscale(1)";
}

function geserKiri3(){
    document.getElementById("newsPt").style.animation= "kiri 1.4s ease-in";
    document.getElementById("newsPt").style.animationFillMode= "forwards";
    document.getElementById("newsPt").style.filter="none";
}

function geserKanan3(){
    document.getElementById("newsPt").style.animation= "kanan 0.6s ease-in";
    document.getElementById("newsPt").style.animationFillMode= "forwards";
    document.getElementById("newsPt").style.filter="grayscale(1)";
}
function geserKiri4(){
    document.getElementById("newsPe").style.animation= "kiri 1.6s ease-in";
    document.getElementById("newsPe").style.animationFillMode= "forwards";
    document.getElementById("newsPe").style.filter="none";
}

function geserKanan4(){
    document.getElementById("newsPe").style.animation= "kanan 0.85s ease-in";
    document.getElementById("newsPe").style.animationFillMode= "forwards";
    document.getElementById("newsPe").style.filter="grayscale(1)";
}

function tombolEar1muncul(){
    document.getElementById("ear1").style.animation= "muncul 0.85s ease-in";
    document.getElementById("ear1").style.animationFillMode= "forwards";
}
function tombolEar1hilang(){
    document.getElementById("ear1").style.animation= "hilang 0.1s ease-in";
    document.getElementById("ear1").style.animationFillMode= "forwards";
}

function tombolEar2muncul(){
    document.getElementById("ear2").style.animation= "muncul 0.85s ease-in";
    document.getElementById("ear2").style.animationFillMode= "forwards";
}
function tombolEar2hilang(){
    document.getElementById("ear2").style.animation= "hilang 0.1s ease-in";
    document.getElementById("ear2").style.animationFillMode= "forwards";
}

function tombolEar3muncul(){
    document.getElementById("ear3").style.animation= "muncul 0.85s ease-in";
    document.getElementById("ear3").style.animationFillMode= "forwards";
}
function tombolEar3hilang(){
    document.getElementById("ear3").style.animation= "hilang 0.1s ease-in";
    document.getElementById("ear3").style.animationFillMode= "forwards";
}

function tombolEar4muncul(){
    document.getElementById("ear4").style.animation= "muncul 0.85s ease-in";
    document.getElementById("ear4").style.animationFillMode= "forwards";
}
function tombolEar4hilang(){
    document.getElementById("ear4").style.animation= "hilang 0.1s ease-in";
    document.getElementById("ear4").style.animationFillMode= "forwards";
}

function tombolEar5muncul(){
    document.getElementById("ear5").style.animation= "muncul 0.85s ease-in";
    document.getElementById("ear5").style.animationFillMode= "forwards";
}
function tombolEar5hilang(){
    document.getElementById("ear5").style.animation= "hilang 0.1s ease-in";
    document.getElementById("ear5").style.animationFillMode= "forwards";
}

function tombolEar6muncul(){
    document.getElementById("ear6").style.animation= "muncul 0.85s ease-in";
    document.getElementById("ear6").style.animationFillMode= "forwards";
}
function tombolEar6hilang(){
    document.getElementById("ear6").style.animation= "hilang 0.1s ease-in";
    document.getElementById("ear6").style.animationFillMode= "forwards";
}

$(".btn, .btn-1, .btn-1e").click(function(){
    $(".popUp").css("display","block");
    $("body").css("overflow-y","hidden");
});

$(".closePop").click(function(){
    $(".popUp").css("display","none");
    $("body").css("overflow","scroll");
});


function nampilinPop1(){
    $(".popUp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
    document.getElementById("pop1").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop1").style.animationFillMode= "forwards";
}
function hilanginPop1(){
    $(".popUp").css("display","none");
    document.getElementById("pop1").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop1").style.animationFillMode= "forwards";
    
    document.getElementById("popup").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
}

function nampilinPop2(){
    $(".popUp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
    document.getElementById("pop2").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop2").style.animationFillMode= "forwards";
}
function hilanginPop2(){
    $(".popUp").css("display","none");
    document.getElementById("pop2").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop2").style.animationFillMode= "forwards";
    
    document.getElementById("popup").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
}

function nampilinPop3(){
    $(".popUp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
    document.getElementById("pop3").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop3").style.animationFillMode= "forwards";
}
function hilanginPop3(){
    $(".popUp").css("display","none");
    document.getElementById("pop3").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop3").style.animationFillMode= "forwards";
    
    document.getElementById("popup").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
}

function nampilinPop4(){
    $(".popUp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
    document.getElementById("pop4").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop4").style.animationFillMode= "forwards";
}
function hilanginPop4(){
    $(".popUp").css("display","none");
    document.getElementById("pop4").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop4").style.animationFillMode= "forwards";
    
    document.getElementById("popup").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
}

function nampilinPop5(){
    $(".popUp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
    document.getElementById("pop5").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop5").style.animationFillMode= "forwards";
}
function hilanginPop5(){
    $(".popUp").css("display","none");
    document.getElementById("pop5").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop5").style.animationFillMode= "forwards";
    
    document.getElementById("popup").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
}

function nampilinPop6(){
    $(".popUp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
    document.getElementById("pop6").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop6").style.animationFillMode= "forwards";
}
function hilanginPop6(){
    $(".popUp").css("display","none");
    document.getElementById("pop6").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop6").style.animationFillMode= "forwards";
    
    document.getElementById("popup").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards";
}

/*slideshow*/
$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
},  3000);

/*slideshow*/
$("#slideshow1 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
},  3000);

/*slideshow*/
$("#slideshow3 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow3 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow3');
},  3000);

/*slideshow*/
$("#slideshow4 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow4 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow4');
},  3000);

var bla=1;
var hitung;
function tambah(){
    bla++;  
}
function kurang(){
    bla--;  
}


$("#kanan").click(function(){
    tambah();
    
    if(bla%4==0){
        hitung=4;
    }else{
        hitung=bla%4;
    }
    if(hitung==1){ document.getElementById("artikel1").style.animation= "munculPanah 0.1s ease-in"; 
    document.getElementById("artikel1").style.animationFillMode= "forwards";
                  
    document.getElementById("artikel2").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel2").style.animationFillMode= "forwards";
    document.getElementById("artikel3").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel3").style.animationFillMode= "forwards";
    document.getElementById("artikel4").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel4").style.animationFillMode= "forwards";
    }
    
    if(hitung==2){ document.getElementById("artikel2").style.animation= "munculPanah 0.1s ease-in";
    document.getElementById("artikel2").style.animationFillMode= "forwards";
                  
    document.getElementById("artikel1").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel1").style.animationFillMode= "forwards";
    document.getElementById("artikel3").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel3").style.animationFillMode= "forwards";
    document.getElementById("artikel4").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel4").style.animationFillMode= "forwards";
    }
    
    if(hitung==3){ document.getElementById("artikel3").style.animation= "munculPanah 0.1s ease-in";
    document.getElementById("artikel3").style.animationFillMode= "forwards";
                  
    document.getElementById("artikel2").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel2").style.animationFillMode= "forwards";
    document.getElementById("artikel1").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel1").style.animationFillMode= "forwards";
    document.getElementById("artikel4").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel4").style.animationFillMode= "forwards";
    }
    
    if(hitung==4){ document.getElementById("artikel4").style.animation= "munculPanah 0.1s ease-in";
    document.getElementById("artikel4").style.animationFillMode= "forwards";
                  
    document.getElementById("artikel2").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel2").style.animationFillMode= "forwards";
    document.getElementById("artikel3").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel3").style.animationFillMode= "forwards";
    document.getElementById("artikel1").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel1").style.animationFillMode= "forwards";
    }
});

$("#kiri").click(function(){
    kurang();
    var hitung;
    if(bla%4==0){
        hitung=bla=4;
    }else{
        hitung=bla;
    }
    if(hitung==1){ document.getElementById("artikel1").style.animation= "munculPanah 0.1s ease-in";
    document.getElementById("artikel1").style.animationFillMode= "forwards";
                  
    document.getElementById("artikel2").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel2").style.animationFillMode= "forwards";
    document.getElementById("artikel3").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel3").style.animationFillMode= "forwards";
    document.getElementById("artikel4").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel4").style.animationFillMode= "forwards";
    }
    
    if(hitung==2){ document.getElementById("artikel2").style.animation= "munculPanah 0.1s ease-in";
    document.getElementById("artikel2").style.animationFillMode= "forwards";
                  
    document.getElementById("artikel1").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel1").style.animationFillMode= "forwards";
    document.getElementById("artikel3").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel3").style.animationFillMode= "forwards";
    document.getElementById("artikel4").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel4").style.animationFillMode= "forwards";
    }
    
    if(hitung==3){ document.getElementById("artikel3").style.animation= "munculPanah 0.1s ease-in";
    document.getElementById("artikel3").style.animationFillMode= "forwards";
                  
    document.getElementById("artikel2").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel2").style.animationFillMode= "forwards";
    document.getElementById("artikel1").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel1").style.animationFillMode= "forwards";
    document.getElementById("artikel4").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel4").style.animationFillMode= "forwards";
    }
    
    if(hitung==4){ document.getElementById("artikel4").style.animation= "munculPanah 0.1s ease-in";
    document.getElementById("artikel4").style.animationFillMode= "forwards";
                  
    document.getElementById("artikel2").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel2").style.animationFillMode= "forwards";
    document.getElementById("artikel3").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel3").style.animationFillMode= "forwards";
    document.getElementById("artikel1").style.animation= "hilangPanah 0.1s ease-in";
    document.getElementById("artikel1").style.animationFillMode= "forwards";
    }
});

function aktif2(){ 
     $(".popUpp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam, 0.1s ease-in";
    document.getElementById("slideshow2").style.animation= "hehe 0.4s ease-in";
  
    document.getElementById("popup").style.animationFillMode= "forwards"; document.getElementById("slideshow2").style.animationFillMode= "forwards";
        document.getElementById("jelas2").style.animation= "tulis 1s ease-in";
    document.getElementById("jelas2").style.animationFillMode= "forwards";
    document.getElementById("tutup2").style.animation= "buka 0.4s ease-in";
    document.getElementById("tutup2").style.animationFillMode= "forwards";
        
    }
    function mati2(){
   $(".popUpp").css("display","none");
    document.getElementById("popup").style.animation= "hilanginHitam, 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards"; document.getElementById("tutup2").style.animation= "tup 0.4s ease-in";
    document.getElementById("tutup2").style.animationFillMode= "forwards";
    document.getElementById("slideshow2").style.animation= "haha 0.4s ease-in";
    document.getElementById("slideshow2").style.animationFillMode= "forwards";
    document.getElementById("jelas2").style.animation= "hapustulis 0.4s ease-in";
    document.getElementById("jelas2").style.animationFillMode= "forwards";
    }

function aktif1(){ 
     $(".popUpp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam, 0.1s ease-in";
    document.getElementById("slideshow1").style.animation= "hehe 0.4s ease-in";
  
    document.getElementById("popup").style.animationFillMode= "forwards"; document.getElementById("slideshow1").style.animationFillMode= "forwards";
        document.getElementById("jelas1").style.animation= "tulis 1s ease-in";
    document.getElementById("jelas1").style.animationFillMode= "forwards";
    document.getElementById("tutup2").style.animation= "buka 0.4s ease-in";
    document.getElementById("tutup2").style.animationFillMode= "forwards";
        
    }

    function mati1(){
   $(".popUpp").css("display","none");
    document.getElementById("popup").style.animation= "hilanginHitam, 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards"; document.getElementById("tutup2").style.animation= "tup 0.4s ease-in";
    document.getElementById("tutup2").style.animationFillMode= "forwards";
    document.getElementById("slideshow1").style.animation= "haha 0.4s ease-in";
    document.getElementById("slideshow1").style.animationFillMode= "forwards";
    document.getElementById("jelas1").style.animation= "hapustulis 0.4s ease-in";
    document.getElementById("jelas1").style.animationFillMode= "forwards";
    }

function aktif3(){ 
     $(".popUpp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam, 0.1s ease-in";
    document.getElementById("slideshow3").style.animation= "hehe 0.4s ease-in";
  
    document.getElementById("popup").style.animationFillMode= "forwards"; document.getElementById("slideshow3").style.animationFillMode= "forwards";
        document.getElementById("jelas3").style.animation= "tulis 1s ease-in";
    document.getElementById("jelas3").style.animationFillMode= "forwards";
    document.getElementById("tutup2").style.animation= "buka 0.4s ease-in";
    document.getElementById("tutup2").style.animationFillMode= "forwards";
        
    }

    function mati3(){
   $(".popUpp").css("display","none");
    document.getElementById("popup").style.animation= "hilanginHitam, 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards"; document.getElementById("tutup2").style.animation= "tup 0.4s ease-in";
    document.getElementById("tutup2").style.animationFillMode= "forwards";
    document.getElementById("slideshow3").style.animation= "haha 0.4s ease-in";
    document.getElementById("slideshow3").style.animationFillMode= "forwards";
    document.getElementById("jelas3").style.animation= "hapustulis 0.4s ease-in";
    document.getElementById("jelas3").style.animationFillMode= "forwards";
    }

function aktif4(){ 
     $(".popUpp").css("display","block");
    document.getElementById("popup").style.animation= "nampilinHitam, 0.1s ease-in";
    document.getElementById("slideshow4").style.animation= "hehe 0.4s ease-in";
  
    document.getElementById("popup").style.animationFillMode= "forwards"; document.getElementById("slideshow4").style.animationFillMode= "forwards";
        document.getElementById("jelas4").style.animation= "tulis 1s ease-in";
    document.getElementById("jelas4").style.animationFillMode= "forwards";
    document.getElementById("tutup2").style.animation= "buka 0.4s ease-in";
    document.getElementById("tutup2").style.animationFillMode= "forwards";
        
    }

    function mati4(){
   $(".popUpp").css("display","none");
    document.getElementById("popup").style.animation= "hilanginHitam, 0.1s ease-in";
    document.getElementById("popup").style.animationFillMode= "forwards"; document.getElementById("tutup2").style.animation= "tup 0.4s ease-in";
    document.getElementById("tutup2").style.animationFillMode= "forwards";
    document.getElementById("slideshow4").style.animation= "haha 0.4s ease-in";
    document.getElementById("slideshow4").style.animationFillMode= "forwards";
    document.getElementById("jelas4").style.animation= "hapustulis 0.4s ease-in";
    document.getElementById("jelas4").style.animationFillMode= "forwards";
    }

$("#banyak1, #banyak2").change(function(){
    var harga1= $("#subtotal1").val(); //ambil harga satuan
    var harga2= $("#subtotal2").val();
    
    var banyaknya1 = $("#banyak1").val(); //ambil jumlah
    var banyaknya2 =$("#banyak2").val();
    harga1= harga1.split("Rp. ").join(""); //hilangim rp2an nya
    harga1= harga1.split(".").join("");
    harga1= harga1.split(",-").join("");
    
    harga2= harga2.split("Rp. ").join("");
    harga2= harga2.split(".").join("");
    harga2= harga2.split(",-").join("");
    
    var total1= parseFloat(harga1)*parseFloat(banyaknya1); //hitung subtotal untuk 1 barang
    var total2= parseFloat(harga2)*parseFloat(banyaknya2);
    
    $("#totall1").val(total1);    
    $("#totall1").focus();
    $("#totall2").val(total2);//masukin harga perbarang
    $("#totall2").focus();
   
    var totalnya= total1+total2; //totalin semuanya
    
    $("#totalnya").val(totalnya); //masuk ke total
    $("#totalnya").focus();
    
});

$(document).ready(function($){
    
    $("#totalnya").priceFormat({
        prefix:'Rp. ', thousandsSeparator:'.', centsLimit:0
    });
    $("#totall1").priceFormat({
        prefix:'Rp. ', thousandsSeparator:'.', centsLimit:0
    });
    $("#totall2").priceFormat({
        prefix:'Rp. ', thousandsSeparator:'.', centsLimit:0
    });
});






function artikelaktif1(){ 
     $(".alas").css("display","block");
    $(".artikelPopUp").css("display","block");
    document.getElementById("popupa").style.animation= "nampilinHitam, 0.1s ease-in";
    document.getElementById("arc1").style.animation= "hehe 0.5s ease-in";
  
    document.getElementById("popupa").style.animationFillMode= "forwards"; document.getElementById("arc1").style.animationFillMode= "forwards";
    
    document.getElementById("hapuskan1").style.zIndex="12";
    
    document.getElementById("arc1").style.zIndex="10";
        
    }

    function artikelmati1(){
         var vid = document.getElementById("video1"); 
            vid.pause();
   $(".alas").css("display","none");
   $(".artikelPopUp").css("display","none");
        document.getElementById("popupa").style.animation= "hilanginHitam, 0.1s ease-in";
    document.getElementById("popupa").style.animationFillMode= "forwards";
       
    document.getElementById("arc1").style.animation= "haha 0.5s ease-in";
    document.getElementById("arc1").style.animationFillMode= "forwards";
        document.getElementById("hapuskan1").style.zIndex="0";
        document.getElementById("arc1").style.zIndex="-1";
    }

function artikelaktif2(){ 
     $(".alas").css("display","block");
   $(".artikelPopUp").css("display","block");
    document.getElementById("popupa").style.animation= "nampilinHitam, 0.1s ease-in";
    document.getElementById("arc2").style.animation= "hehe 0.5s ease-in";
  
    document.getElementById("popupa").style.animationFillMode= "forwards"; document.getElementById("arc2").style.animationFillMode= "forwards";
    document.getElementById("hapuskan2").style.zIndex="12";
        document.getElementById("arc2").style.zIndex="10";
    }

    function artikelmati2(){
   $(".alas").css("display","none");
   $(".artikelPopUp").css("display","none");
        document.getElementById("popupa").style.animation= "hilanginHitam, 0.1s ease-in";
    document.getElementById("popupa").style.animationFillMode= "forwards";
       
    document.getElementById("arc2").style.animation= "haha 0.5s ease-in";
    document.getElementById("arc2").style.animationFillMode= "forwards";
        document.getElementById("hapuskan2").style.zIndex="0";
        document.getElementById("arc2").style.zIndex="-1";
    
    }

function artikelaktif3(){ 
     $(".alas").css("display","block");
   
    $(".artikelPopUp").css("display","block");
    document.getElementById("popupa").style.animation= "nampilinHitam, 0.1s ease-in";
    document.getElementById("arc3").style.animation= "hehe 0.5s ease-in";
  
    document.getElementById("popupa").style.animationFillMode= "forwards"; document.getElementById("arc3").style.animationFillMode= "forwards";
        
    document.getElementById("hapuskan3").style.zIndex="12";
    document.getElementById("arc3").style.zIndex="10";
    }

    function artikelmati3(){
   $(".alas").css("display","none");
   $(".artikelPopUp").css("display","none");
        document.getElementById("popupa").style.animation= "hilanginHitam, 0.1s ease-in";
    document.getElementById("popupa").style.animationFillMode= "forwards";
       
    document.getElementById("arc3").style.animation= "haha 0.5s ease-in";
    document.getElementById("arc3").style.animationFillMode= "forwards";
        document.getElementById("hapuskan3").style.zIndex="0";
        document.getElementById("arc3").style.zIndex="-1";
    }

function artikelaktif4(){
     $(".alas").css("display","block");
   $(".artikelPopUp").css("display","block");
    document.getElementById("popupa").style.animation= "nampilinHitam, 0.1s ease-in";
    document.getElementById("arc4").style.animation= "hehe 0.5s ease-in";
  
    document.getElementById("popupa").style.animationFillMode= "forwards"; document.getElementById("arc4").style.animationFillMode= "forwards";
        document.getElementById("hapuskan4").style.zIndex="12";
    document.getElementById("arc4").style.zIndex="10";
    
    }

    function artikelmati4(){
        var vid = document.getElementById("video2"); 
            vid.pause();
        
   $(".alas").css("display","none");
   $(".artikelPopUp").css("display","none");
        document.getElementById("popupa").style.animation= "hilanginHitam, 0.1s ease-in";
    document.getElementById("popupa").style.animationFillMode= "forwards";
       
    document.getElementById("arc4").style.animation= "haha 0.5s ease-in";
    document.getElementById("arc4").style.animationFillMode= "forwards";
        document.getElementById("hapuskan4").style.zIndex="-1";
        document.getElementById("arc4").style.zIndex="-1";
    }

function nampilinPop1a(){
    $(".popUp").css("display","block");
    document.getElementById("popUpz").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popUpz").style.animationFillMode= "forwards";
    document.getElementById("pop1").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop1").style.animationFillMode= "forwards";
}
function hilanginPop1a(){
    $(".popUp").css("display","none");
    document.getElementById("pop1").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop1").style.animationFillMode= "forwards";
    
    document.getElementById("popUpz").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popUpz").style.animationFillMode= "forwards";
}

function nampilinPop2a(){
    $(".popUp").css("display","block");
    document.getElementById("popUpz").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popUpz").style.animationFillMode= "forwards";
    document.getElementById("pop2").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop2").style.animationFillMode= "forwards";
}
function hilanginPop2a(){
    $(".popUp").css("display","none");
    document.getElementById("pop2").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop2").style.animationFillMode= "forwards";
    
    document.getElementById("popUpz").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popUpz").style.animationFillMode= "forwards";
}

function nampilinPop3a(){
    $(".popUp").css("display","block");
    document.getElementById("popUpz").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popUpz").style.animationFillMode= "forwards";
    document.getElementById("pop3").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop3").style.animationFillMode= "forwards";
}
function hilanginPop3a(){
    $(".popUp").css("display","none");
    document.getElementById("pop3").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop3").style.animationFillMode= "forwards";
    
    document.getElementById("popUpz").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popUpz").style.animationFillMode= "forwards";
}

function nampilinPop4a(){
    $(".popUp").css("display","block");
    document.getElementById("popUpz").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("popUpz").style.animationFillMode= "forwards";
    document.getElementById("pop4").style.animation= "nampilinPop 0.85s ease-in";
    document.getElementById("pop4").style.animationFillMode= "forwards";
}
function hilanginPop4a(){
    $(".popUp").css("display","none");
    document.getElementById("pop4").style.animation= "hilanginPop 0.1s ease-in";
    document.getElementById("pop4").style.animationFillMode= "forwards";
    
    document.getElementById("popUpz").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("popUpz").style.animationFillMode= "forwards";
}

function bayarlah(){
    $("#nutupinAja").css("display","block");
    $("#maubayar").css("display","block");
    document.getElementById("nutupinAja").style.animation= "nampilinHitam 0.1s ease-in";
    document.getElementById("nutupinAja").style.animationFillMode= "forwards";
    document.getElementById("maubayar").style.animation= "bayardong 0.85s ease-in";
    document.getElementById("maubayar").style.animationFillMode= "forwards";
}
function gamaubayar(){
    $("#nutupinAja").css("display","none");
    $("#maubayar").css("display","none");
    document.getElementById("maubayar").style.animation= "gakbayardong 0.1s ease-in";
    document.getElementById("maubayar").style.animationFillMode= "forwards";
    
    document.getElementById("nutupinAja").style.animation= "hilanginHitam 0.1s ease-in";
    document.getElementById("nutupinAja").style.animationFillMode= "forwards";
}

/*smoth scrolling w3school*/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}