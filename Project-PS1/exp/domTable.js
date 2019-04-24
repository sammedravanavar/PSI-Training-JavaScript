//create an array of five elements each with name and age
(function(){
    'use strict';
    var elements = [{ name: "moon", age: 24},
                { name: "star", age: 22},
                { name: "earth", age: 25},
                { name: "sun", age: 27},
                { name: "mars", age: 26},
                { name: "moon", age: 24},
                { name: "star", age: 22},
                { name: "earth", age: 25},
                { name: "sun", age: 27},
                { name: "mars", age: 26}]

// for ( var i in elements){
//     console.log(i)
// }

// for ( var i of elements){
//     console.log(i.name+i.age)
// }

// for (var i in elements[0].name){
//     console.log(i)
// }
    // function reload(){
        var numberOfColumns = [];
        function createElement(elementType){
            return document.createElement(elementType)
        }
        
        function createHeaderRow(){
            var headerRow = createElement('tr')
            for(var i in elements[0]){
                var column = createElement('th')
                column.innerHTML = i;
                headerRow.appendChild(column);
                numberOfColumns.push(i);
            }
            console.log(headerRow)
            return headerRow
        }
        function createDataRow(i){
            // for(var i=0; i<elements.length;i++){
                var dataRow = createElement('tr') 
                switch(i%3) {
                    case 0: dataRow.className = "bg-primary" ; break
                    case 1: dataRow.className = "bg-success" ; break
                    default: dataRow.className = "bg-warning" 
                }
                for(var columns=0; columns<numberOfColumns.length; columns++){
                    var dataColumn = createElement('td')
                    // dataColumn.className = "text-danger"
                    dataColumn.innerHTML = elements[i][numberOfColumns[columns]]
                    dataRow.appendChild(dataColumn);
                    // console.log(dataRow)
                }
                var btnColumn = createElement('td')
                var btn = createElement('button');
                btn.className = "btn btn-danger"
                btn.innerHTML = "Delete"
                btn.id = 'btn'+i;
                // btn.onclick = function(){window.alert('clicked '+this.id)}
                btn.addEventListener('click',function(){ 
                                                var id = this.id;
                                                id = id.slice(3);
                                                elements.splice(Number(id),1)
                                                // console.log(elements)
                                                // this.parentNode.parentNode.parentNode.previousSibling.remove()
                                                this.parentNode.parentNode.remove()
                                                // reload()
                                                console.log(elements)
                                            })
                btnColumn.appendChild(btn)
                dataRow.appendChild(btnColumn)
                console.log(dataRow)
                return dataRow
            // }
        }
        function createTable(){
            var tbl = document.getElementById('tblElements')
            tbl.className = "table table-striped table-bordered table-dark"
            var thead = createElement('thead')
            thead.appendChild(createHeaderRow())
            tbl.appendChild(thead)
            var tbody = createElement('tbody')
            for(var i=0; i<elements.length;i++){
                tbody.appendChild(createDataRow(i))
            }
            tbl.appendChild(tbody)
            // var buttons = document.getElementsByClassName('btn')
            // for(var r=0; r<buttons.length;r++){
            //     buttons[r].addEventListener('click',function(){
            //         this.parentNode.parentNode.remove()
            //     })
            // }
            console.log(tbl)
        }
        createTable()
    // }
    // reload()
    // console.log(elements[0])
    // console.log(elements[0][numberOfColumns[1]])
})()
