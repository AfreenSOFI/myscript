// document.write("welcome");
// let names = ["Anzalna","Aurooj","Ainain","Afreen"];
// document.write(names,"<br>");

// Q. output:index 0=Anzalna
         //  index 1=Aurooj
         //  index 2=Ainain
         //  index 3=Afreen

// for(i=0;i<4;i++){
//     document.write("index ",i,"=",names[i],"<br>");
// }


// Q. print all elements except Anzalna and Afreen.

// for(i=0;i<4;i++){
//     if(names[i]!="Afreen"&&names[i]!="Anzalna"){
//         document.write(names[i],"<br>");
//     }
// }


// another method of creating array
//  fruits = new Array();
//  fruits[0] = "Apple";
//  fruits[1] = "Mango";
//  fruits[2] = "Banana";
//  fruits[3] = "Orange";

// document.write(fruits);


// Q.Display only even no.s from the array of elements.

let numbers = [1,2,3,4,5,6,7,8,9,10];
// document.write(numbers);
for(i=0;i<10;i++){
    if(numbers[i]%2==0){
        document.write(numbers[i],"<br>");
    }
    
}









