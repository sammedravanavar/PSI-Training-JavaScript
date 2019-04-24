(function () {
    'use strict';
    var students,columnNames=[];
    students = [{
            name: "Kiran",
            age: 30,
            gender:"M"
        },
        {
            gender:"M",
            name: "John",
            age: 20,
           
        }
    ];
    

    function createElement(elementType) {
        return document.createElement(elementType);
    }

    function createHeaderRow() {
        var headerRow = createElement('tr');
        for (var i in students[0]) {
            var column = createElement('td');
            column.innerHTML = i;
            headerRow.appendChild(column);
            columnNames.push(i);
        }
        console.log(headerRow);
        return headerRow;
    }
    function createDataRow(x,columnNames,collection) {
            var dataRow = createElement('tr');
            for(var columns=0;columns<columnNames.length;columns++){
                var dataColumn = createElement('td');
                dataColumn.innerHTML = collection[x][columnNames[columns]];
                dataRow.appendChild(dataColumn);
            };
            var tdForButton = createElement('td');
            var button = createElement('button');
            button.className='btn btn-primary';
            button.rowNumber =x;
            button.innerText=x;
            tdForButton.appendChild(button);
            dataRow.appendChild(tdForButton);
        
        console.log(dataRow);
        return dataRow;
    }
    function createTable(){
        var tbl = document.getElementById('tblEmployees');
        tbl.className='table table-striped';
        tbl.appendChild(createHeaderRow());
        for(var x=0;x<students.length;x++){
          tbl.appendChild(createDataRow(x));
        };
        var buttons =document.getElementsByClassName('btn');
        for(var r=0;r<buttons.length;r++){
            buttons[r].addEventListener('click',function(){
                console.log(x['rowNumber']);
                console.log(this['rowNumber'])
                this.parentNode.parentNode.remove();
            })
        }
    }

    var newArray = students.filter(function(a,index){
        return a.age>20;
    });
    createTable();
})();



var  x=10;
function testme(){
    let x=20;
    if(true){
       let x=30;
       console.log(x);
    }
  console.log(x);
}
testme()
console.log(x);








