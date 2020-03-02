let  productsList=["IphoneX","SamSung Galaxy S10","Xiao Mi A2 Lite","Dell Precision 7510","Power Bank Yobaoo 10000mAh","Google Pixel 9"];
console.table(productsList);
let html="";
function displayList(){
        refreshList();
        for(let index=0; index<productsList.length; index++){
            html += "<tr>";
            html += "<td>"+(index+1)+"</td>";
            html += "<td>"+productsList[index]+"</td>"
            html += "<td><button id='"+index+"' onclick='update(this.id)'>Update</button><button id='"+index+"' onclick='remove(this.id)'>Delete</button></td>"
            html += "</tr>";
        }
        document.getElementById("mainTable").innerHTML = html;
}
function refreshList(){
               html="";
}
function create(){
        let addedStudentName = document.getElementById("txtAddNewValue").value;
        productsList.push(addedStudentName);
        console.table(productsList);
        displayList();
}
function remove(idToRemove){
        if(confirm("Are you sure?")){
            productsList.splice(idToRemove,1);
            displayList();
        }
}
function update(idToUpdate){
        let newInfoToUpdate = prompt("Enter new information to update:");
        if(confirm("Are you sure?")){
            productsList.splice(idToUpdate,1,newInfoToUpdate);
            displayList();
        }
}


