
//Lar meg klikke men kommer på neste side, ikke dropdown meny 
let dropMenu = document.querySelector("a[href='/studentliv']")
dropMenu.dispatchEvent(new MouseEvent('click'));

//    < a href = "https://www.ntnu.no/studentliv/gjovik" > Student i Gjøvik</a>
let studGjovik = document.querySelector("a[href='https://www.ntnu.no/studentliv/gjovik']")
studGjovik.dispatchEvent(new MouseEvent('click'));

