//     const callUrl=async (url)=>{
//       $("#loadingCharge").css("visibility","visible");
//       $("#loadingSpinner").css("visibility","visible");
//           const data=await fetch(url)
//           const dataHtml=await data.text()
//             renderPage(dataHtml,url)      
//           if(renderPage){

//               $("#loadingCharge").css("visibility","hidden");
//               $("#loadingSpinner").css("visibility","hidden");

//           }

//     }
//      const renderPage=(html,url)=>{
//       var parser = new DOMParser();
//       var doc = parser.parseFromString(html, 'text/html');
//       var img = doc.querySelector('.ListProducts');
//       document.getElementById("ListProducts").innerHTML=""
//       document.getElementById("ListProducts").appendChild(img)
//       window.history.pushState({page: "another"}, "another page", url)


//     }

//     const removeParam = (key, sourceURL) => {
//         var rtn = sourceURL.split("?")[0],
//         param,
//         params_arr = [],
//         queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
//         if (queryString !== "") {
//         params_arr = queryString.split("&");
//         for (var i = params_arr.length - 1; i >= 0; i -= 1) {
//             param = params_arr[i].split("=")[0];
//             if (param === key) params_arr.splice(i, 1);    
//         }
//         rtn = rtn + "?" + params_arr.join("&");
//         }
//         return rtn.replace(/%2C/g, ",");
//     };

// document.querySelectorAll(".marca") .forEach(element => {
//     element.addEventListener("click",function(){
//         oldURL = window.location.href;
//         var url = new URL(oldURL);
//         url.searchParams.set("brand",element.value); // setting your param
//         var newUrl = url.href;
//         newUrl2 = removeParam("page", newUrl);
//         callUrl(newUrl2.replace(/%2C/g, ","))


//     })
// });
let a = 0
Array.from(document.getElementsByClassName("subcatCheck")).forEach(element=>{
  let inp=element.closest(".tree").querySelector("input")
  Array.from(inp).forEach(element2=>{
    if (element2.getAttribute("checked")) {
      element2.setAttribute("checked",this.checked)
      document.getElementById("cleanCheckFilter").setAttribute("disabled",false)
    }
  })
})
Array.from(document.getElementsByClassName("custom-control-input")).forEach(element=>{
  if (element.getAttribute("checked")) {
    document.getElementById("cleanFilter").setAttribute("disabled",false)

  }
})

let addCart=(url)=>{
fetch(url,{method:"POST",headers:{
  "Content-Type":"application/json",
  "X-CSRFToken":csrftoken
}}).then(response=>response.json()).then(data=>console.log(data))
}
function addevent() {
  let postComment=()=>{
    document.getElementById("postComment").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("postComment").innerHTML = ""
      let form = document.querySelector("#commentForm")
      let dataForm = new FormData(form)
      let parent = document.createElement("div")
      let loader = document.createElement("span")
      loader.style.marginRight = "2px"
      loader.classList.add("spinner-border", "spinner-border-sm")
      loader.setAttribute("role", "status")
      loader.setAttribute("aria-hidden", "true")
      parent.appendChild(loader)
    
      loader.after("Publicando...")
    
      console.log(parent)
      document.getElementById("postComment").appendChild(parent)
      document.getElementById("postComment").disabled = true
      fetch(form.getAttribute("action"), { method: "POST", body: dataForm }).then(() => {
        document.getElementById("postComment").innerHTML = ""
        document.getElementById("postComment").textContent = "Publicado"
    
        document.getElementById("postComment").disabled = false
      })
    
    
    });}
  }
document.addEventListener("DOMContentLoaded", addevent, false);