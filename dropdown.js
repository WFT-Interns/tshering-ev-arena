// function to create new div for filter menu
function createDiv(className, content) { 
  var newDiv = document.createElement("div"); 
  newDiv.setAttribute("class", className); 
  newDiv.innerHTML = content; 
  return newDiv; 
} 
 
// creating filtr menu for brand name
var menuBrandName = createDiv("filter-menu", 
                       `<select>
                            <option value="0">
                                <p>EV - Brand Name</p>
                            </option>
                            <option value="1">
                                <p>Tesla</p>
                            </option>
                            <option value="2">
                                <p>Porsche</p>
                            </option>
                            <option value="3">
                                <p>Audi</p>
                            </option>
                            <option value="4">
                                <p>BMW</p>
                            </option>
                        </select>`); 
// creating filter menu for ev range 
var menuEVRange = createDiv("filter-menu-range", 
                       `<select>
                            <option value="0">
                                <p>EV - Range</p>
                            </option>
                            <option value="1">
                                <p>95-195</p>
                            </option>
                            <option value="2">
                                <p>195-395</p>
                            </option>
                            <option value="3">
                                <p>395-495</p>
                            </option>
                            <option value="4">
                                <p>495-595</p>
                            </option>
                            <option value="4">
                            <p>595-695</p>
                        </option>
                        </select>`); 
// creating filter menu for year 
var menuYear = createDiv("filter-menu-year", 
                       `<select>
                            <option value="0">
                                <p>Year</p>
                            </option>
                            <option value="1">
                                <p>2020</p>
                            </option>
                            <option value="2">
                                <p>2021</p>
                            </option>
                            <option value="3">
                                <p>2022</p>
                            </option>
                            <option value="4">
                                <p>2023</p>
                            </option>
                        </select>`); 
// assigning above created divs to filter menu container div of ev finder html 
document.getElementById("filter-menu-container").appendChild(menuBrandName);  
document.getElementById("filter-menu-container1").appendChild(menuEVRange);
document.getElementById("filter-menu-container2").appendChild(menuYear);  

var filterMenu, i, j, l, ll, selElmnt, a, b, c;
let menuName=["filter-menu", "filter-menu-range", "filter-menu-year"];

for(let m=0; m<menuName.length; m++){
  filterMenu = document.getElementsByClassName(menuName[m]);
  l = filterMenu.length;

  for (i = 0; i < l; i++) {   
      selElmnt = filterMenu[i].getElementsByTagName("select")[0];

      ll = selElmnt.length;

      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      filterMenu[0].appendChild(a);

      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");

      for (j = 1; j < ll; j++) {
          /*for each option in the original select element,
          create a new DIV that will act as an option item:*/
          c = document.createElement("DIV");
          c.setAttribute("class", "options-text")
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function(e) {
              /*when an item is clicked, update the original select box,
              and the selected item:*/
              var y, i, k, s, h, sl, yl;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              sl = s.length;
              h = this.parentNode.previousSibling;
              for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  yl = y.length;
                  for (k = 0; k < yl; k++) {
                    y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
                }
              }
              h.click();
          });

          b.appendChild(c);
      }

      filterMenu[i].appendChild(b);
      a.addEventListener("click", function(e) {
          /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });

        function closeAllSelect(elmnt) {
          /*a function that will close all select boxes in the document,
          except the current select box:*/
          var filterMenu, y, i, xl, yl, arrNo = [];
          filterMenu = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = filterMenu.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              filterMenu[i].classList.add("select-hide");
            }
          }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
  }
}



