function gradeCalculator(score){
    if (score<0 ||score >100) {
      console.log('Enter score from 1 to 100 ');
        
    } 
    if (score>=90){
        console.log("A");
    } else if (score>=80) {
        console.log("B")
    } else if (score>=70) {
        console.log("C")
    }   else if (score>=60) {
        console.log("D");
        
    }  else if (score<60){
        console.log("F")
    }

} 

gradeCalculator(91)
gradeCalculator(60)
gradeCalculator(59)