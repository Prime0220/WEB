var grade;
var score = prompt("점수를 입력해주세요", 100);

if(score >= 90)
    grade = "A";
else if (score >= 80)
    grade = "B";
else if (score >= 70)
    grade = "C";
else if (score >= 60)
    grade = "D";
else 
    grade = "F";
document.write("등급은 " + grade + "입니다.<br>")
