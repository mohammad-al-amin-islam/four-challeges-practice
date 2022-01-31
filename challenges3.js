function gradeObtained(marks){
    if (marks>=80){
        console.log('Obtained A+');
        return true;
    }
    else if(marks<= 79 && marks>=70){
        console.log('Obtained A');
        return true;
    }
    else if(marks<= 69 && marks>=60){
        console.log('Obtained A-');
        return true;
    }
    else if(marks<= 59 && marks>=50){
        console.log('Obtained B');
        return true;
    }
    else if(marks<= 49 && marks>=40){
        console.log('Obtained C');
        return true;
    }
    else if(marks<= 39 && marks>=33){
        console.log('Obtained D');
        return true;
    }
    else{
        console.log('fail');
        return true;
    }
}

const result = gradeObtained(25);
console.log(result);