function myFunction() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}


function filterFunction() 
{
    var input, filter, ul, li, option, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    option = div.getElementsByTagName("option");
    for (i = 0; i < option.length; i++) {
      txtValue = option[i].textContent || option[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        option[i].style.display = "";
      } else {
        option[i].style.display = "none";
      }
    }
  }



  document.querySelectorAll("option").forEach(li => {


    li.addEventListener('click', function () {
        var clone = this.cloneNode(true);
        clone.style.backgroundColor = "rgb(178, 236, 255)";
        clone.addEventListener('click', function () {
            this.remove();
        })


        var flag = true;
        document.querySelector(".selected-list").childNodes.forEach(ch => {
          
          if (ch.innerText == this.innerText)
          {
            flag = false;
          }
        })

        if (flag) {
          document.querySelector(".selected-list").append(clone);
        }
    });
});

function sortList(ul) {
    var ul = document.getElementById(ul);

    Array.from(ul.getElementsByTagName("option") )
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => ul.appendChild(li));
}