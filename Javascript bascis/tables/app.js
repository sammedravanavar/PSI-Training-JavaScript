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

    function createDataRow(x) {
            var dataRow = createElement('tr');
            for(var columns=0;columns<columnNames.length;columns++){
                var dataColumn = createElement('td');
                dataColumn.innerHTML = students[x][columnNames[columns]];
                dataRow.appendChild(dataColumn);
            }
        
        console.log(dataRow);
        return dataRow;
    }
    function createTable(){
        var tbl = document.getElementById('tblEmployees');
        tbl.appendChild(createHeaderRow());
        for(var x=0;x<students.length;x++){
          tbl.appendChild(createDataRow(x));
        };
    }
    createTable();
})();