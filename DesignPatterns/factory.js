function Factory() {
    this.createEmployee = function (type) {
       var employee; 
        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
	            employee = new PartTime();
	        } else if (type === "temporary") {
	            employee = new Temporary();
        } else if (type === "contractor") {
	            employee = new Contractor();
	        }
	 
	        employee.type = type;
	 
	        employee.say = function () {
	            log.add(this.type + ": rate " + this.hourly + "/hour");
	        }
	 
	        return employee;
	    }
	}
20.	 
21.	var FullTime = function () {
22.	    this.hourly = "$12";
23.	};
24.	 
25.	var PartTime = function () {
26.	    this.hourly = "$11";
27.	};
28.	 
29.	var Temporary = function () {
30.	    this.hourly = "$10";
31.	};
32.	 
33.	var Contractor = function () {
34.	    this.hourly = "$15";
35.	};
36.	 
37.	// log helper
38.	var log = (function () {
39.	    var log = "";
40.	 
41.	    return {
42.	        add: function (msg) { log += msg + "\n"; },
43.	        show: function () { alert(log); log = ""; }
44.	    }
45.	})();
46.	 
47.	function run() {
48.	    var employees = [];
49.	    var factory = new Factory();
50.	 
51.	    employees.push(factory.createEmployee("fulltime"));
52.	    employees.push(factory.createEmployee("parttime"));
53.	    employees.push(factory.createEmployee("temporary"));
54.	    employees.push(factory.createEmployee("contractor"));
55.	    
56.	    for (var i = 0, len = employees.length; i < len; i++) {
57.	        employees[i].say();
58.	    }
59.	 
60.	    log.show();
}
