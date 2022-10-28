var numFlag = 0; // =1 num received a value / =2 is about to received a value / =0 both are ready to receive a value and and next opr is =
var strNum = "";
var num1 = 0;
var num2 = 0;
var operator = 0; //operatorToNumber = 0 - "+", 1 - "-", 2 - "/", 3 - "*"
var solveEq = 0;

function inputDis(number) {
  strNum += number;
  document.getElementById("result").value = strNum;
}

function oprAction(opr) {
  // פונקציה שמטפלת ברגע שלוחצים על אופרטור
  if (strNum != "" && numFlag === 0) {
    //בדיקה האם המספר הראשון ריק ומחכה להשמה, אם כן נכנסים לתוכו, במידה ולא עוברים לבדיקה נוספת
    numFlag = 1; //אם נכנסנו אז מעדכנים ערך במספר הראשון ומסמנים זאת בדגל
    num1 = parseInt(strNum);
    strNum = "";
  }
  if (numFlag === 2) {
    //דגל שמראה שהמספר השני ריק והוא הבא בתור להשמה
    num2 = parseInt(strNum);
    strNum = "";
    numFlag = 0;
  }
  if (opr != "=") {
    //אחרי שלחצנו = או אם לחצנו על כמה אופרטורים- נקח את האחרון
    operator = arithmetic(opr); // פונקציה שמקבלת את האופרטור ומחזירה את הסמן המספרי שלו(1,2,3,4)
    numFlag = 2;
  }
  if (opr == "=") {
    numFlag = 0; // מוכנים לקבל ערכים חדשים לשני המשתנים
    if (operator === 1) {
      console.log(num1, num2, operator, numFlag);
      solveEq = num1 + num2;
      console.log(num1, num2, operator, numFlag, solveEq);
    } else if (operator === 2) {
      solveEq = num1 - num2;
    } else if (operator === 3) {
      solveEq = num1 / num2;
    } else if (operator === 4) {
      solveEq = num1 * num2;
    } //לחצנו על = בלי שלחצנו על אופרטור לפני
    else {
      solveEq = num1;
    }
    document.getElementById("result").value = solveEq;
    num1 = solveEq;
  }
  strNum = "";
}

function arithmetic(opr) {
  var actionNumber = 0;
  if (opr == "+") {
    actionNumber = 1;
  } else if (opr == "-") {
    actionNumber = 2;
  } else if (opr == "/") {
    actionNumber = 3;
  } else if (opr == "*") {
    actionNumber = 4;
  }
  return actionNumber;
}

function clearAll() {
  //איפוס הנתונים והכנה לתרגילים נוספים
  strNum = "";
  numFlag = 0;
  num1 = num2 = solveEq = 0;
  document.getElementById("result").value = 0;
}
