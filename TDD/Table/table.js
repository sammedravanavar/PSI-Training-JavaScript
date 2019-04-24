(function(){
    'use strict';
    // var elements = [{ author: "Dan Brown", book: "The Da Vinci Code", date: "2003-03-01"},
    //                 { author: "J R R Tolkien", book: "The Lord of The Rings", date: "1954-07-25"}]

        var numberOfColumns = [];
        function createElement(elementType){
            return document.createElement(elementType)
        }
        
        function createHeaderRow(elements){
            var headerRow = createElement('tr')
            for(var i in elements[0]){
                var column = createElement('th')
                column.innerHTML = i.substring(0,1).toUpperCase()+i.substring(1);
                headerRow.appendChild(column);
                numberOfColumns.push(i);
            }
            console.log(headerRow)
            return headerRow
        }
        function createDataRow(elements,i){
            // for(var i=0; i<elements.length;i++){
                var dataRow = createElement('tr') 
                switch(i%3) {
                    case 0: dataRow.className = "bg-secondary" ; break
                    case 1: dataRow.className = "bg-success" ; break
                    default: dataRow.className = "bg-warning" 
                }
                for(var columns=0; columns<numberOfColumns.length; columns++){
                    var dataColumn = createElement('td')
                    // dataColumn.className = "text-danger"
                    dataColumn.innerHTML = elements[i][numberOfColumns[columns]]
                    // dataColumn.className = "bg-primary";
                    dataColumn.contentEditable = "true";
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
        function createTable(elements,tableId){
            // var tbl = document.getElementById('tblElements')
            var tbl = document.getElementById(tableId)
            tbl.className = "table table-striped table-bordered table-dark"
            var thead = createElement('thead')
            thead.appendChild(createHeaderRow(elements))
            tbl.appendChild(thead)
            var tbody = createElement('tbody')
            tbody.id = 'tBody';
            for(var i=0; i<elements.length;i++){
                tbody.appendChild(createDataRow(elements,i))
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
        function render(elements,tableId){
            createTable(elements, tableId)
        }
        let books = window.collection.getBooks()
        render(books,'tblElements')



        let add = document.getElementById('add');
        add.addEventListener('click',function(){
            let author = document.getElementById('author')
            let book = document.getElementById('book')
            let date = document.getElementById('date')
            
            window.collection.add(author.value,book.value,date.value)
            // elements.push({author:author.value, book: book.value, date: date.value})
            author.value=''; book.value=''; date.value=''
            // console.log(elements)
            // let tbody = document.getElementById('tBody')
            // tbody.appendChild(createDataRow(elements.length-1))
        })
})();
