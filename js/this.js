let  productsList=["IphoneX","SamSung Galaxy S10","Xiao Mi A2 Lite","Dell Precision 7510","Power Bank Yobaoo 10000mAh","Google Pixel 9"];
function displayList(){
        refreshList();
        for(let index=0; index<productsList.length; index++){
                let parentTable = document.getElementById("mainTable");
                let newProduct = document.createElement(`tr`);
                newProduct.className = "arrayInfoContainer";
                newProduct.innerHTML = "<td>"+(index+1)+"</td><td>"+productsList[index]+"</td>";
                parentTable.appendChild(newProduct);
        }
}
function refreshList(){
                document.getElementById("mainTable").innerHTML = ""
}
function create(){
       let addedStudentName = document.getElementById("txtInputInfo").value;
       productsList.push(addedStudentName);
       displayList();
}
function remove(){
        let needToRemoveItem = parseInt(document.getElementById("txtInputInfo").value) - 1;
        productsList.splice(needToRemoveItem,1);
        displayList();
}
function update(){
        let needToUpdateItem = parseInt(document.getElementById("txtInputInfo").value) - 1;
        let newInfoToUpdate = prompt("Dien vao gia tri moi");
        productsList.splice(needToUpdateItem,1,newInfoToUpdate);
        displayList();
}


