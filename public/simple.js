var msg = document.getElementById('messages');
var input = ['name','reps','weight','date','lbs'];
var newhead = ['name','reps','weight','date','lbs','action'];
var update = ['u-name', 'u-reps','u-weight','u-date','u-lbs'];
var type = ['string', 'number', 'number', 'string', 'number'];
var body = ['id','name','reps','weight','date','lbs'];
var ph = ['name of exercise', '# of times', 'weight',
		'YYYY-MM-DD','1-lbs 0-kgs' ];
//
// Following constructor were borrowed from editablegrid project
// source and modified
//
var valid = [ new StringValidator(), 
		new NumberCellValidator("integer"), 
		new NumberCellValidator("integer"), 
		new DateCellValidator(), 
		new NumberCellValidator("integer")
		];

/****************************************
// Create New Item entry form in the 'userform' div section
// use 'newhead' id name
// create 'Add item' button
****************************************/
document.addEventListener('DOMContentLoaded', function(){
	var userdiv = document.getElementById('userinput');
	addForm( userdiv, newhead );
	var input = document.createElement('input');
	input.type = "submit";
	input.name = "Add Item";
	input.value = "Add Item";
	input.id = "addNew";
	document.getElementById('userform').appendChild(input);
});

/****************************************
// create generic input fields filled with 'row' or empty
// id = 'userform' or id = 'updateform'
// row data to populate the input fields
****************************************/
function addForm(divfield,head,row){
	var form = document.createElement('form');
	form.method = "post";
	if ( row ) 
		form.id = "updateform"
	else
		form.id = "userform";
	//form.setAttribute('method',"post");
	if ( row )
		var current = row.firstChild;
	for ( var i = 0; i < 5; i++ ) {
		var input = document.createElement("input");
		//assign type to classname to format input width
		input.className = type[i];
		input.type = "text";
		input.id = head[i];
		input.placeholder = ph[i];
		//assign validator function to each input field
		input.check = valid[i];
		if (row) {
			input.value = current.textContent;
			current = current.nextSibling;
		}
		form.appendChild(input)
	}
	divfield.appendChild(form);
}

/****************************************
// create table header and assign class name to each column
****************************************/
var cols = ['one','two','three','four','five','six'];
var table = document.createElement('table');
var row = document.createElement('tr');
for( var i = 0; i < 6; ++i ) {
	var cell = document.createElement('th');
	cell.textContent = newhead[i];
	cell.className = cols[i];
	row.appendChild(cell);
}
table.appendChild(row);


/****************************************
 * async call to retrive data from server
 * and populate the table
****************************************/
document.addEventListener('DOMContentLoaded', bindButton);
function bindButton(){
	var req = new XMLHttpRequest();
	req.open("GET", "http://52.36.73.75:3030/show", true);
	req.addEventListener('load',function(){
		if ( req.status >= 200 && req.status < 400 ) {
			var xhr = JSON.parse(req.responseText);
			//console.log(xhr);
			addRow(xhr);
			var msg = document.getElementById('messages');
			msg.textContent = "workouts loaded";
		}
		else{ console.log('Error',+ req.statusText);
		var msg = document.getElementById('messages');
		msg.textContent = req.statusText;}
	});
	req.send(null);
};

/****************************************
 * create each row elements
****************************************/
function addRow(xhr){
	for ( var i = 0; i < xhr.results.length; i++ ) {
		var row = document.createElement('tr');
		row.setAttribute('id',xhr.results[i].id);
		var name = document.createElement('td');
		name.textContent = xhr.results[i].name;
		row.appendChild(name);
		var reps = document.createElement('td');
		reps.textContent = xhr.results[i].reps;
		row.appendChild(reps);
		var weight = document.createElement('td');
		weight.textContent = xhr.results[i].weight;
		row.appendChild(weight);
		var date = document.createElement('td');
		date.textContent = xhr.results[i].date.slice(0,10);
		row.appendChild(date);
		var lbs = document.createElement('td');
		lbs.textContent = xhr.results[i].lbs;
		row.appendChild(lbs);
		// delete button, edit button, hidden key forms
		var dcell = document.createElement('td');
		var form = document.createElement('form');
		var button = document.createElement('button');
		button.textContent = "X";
		form.appendChild(button);
		var button2 = document.createElement('button');
		button2.textContent = "edit";
		form.appendChild(button2);
		var key = document.createElement('input');
		key.type = "hidden";
		key.value = xhr.results[i].id;
		form.appendChild(key);
		dcell.appendChild(form);
		row.appendChild(dcell);
		// add to table but also attach event function to buttons
		table.appendChild(row);
		button.addEventListener('click', function(e) {removeRow(e);});
		button2.addEventListener('click',function(e){ createForm(e);});
	}
	document.getElementById("tablecontent").appendChild(table);
}


/****************************************
 * Create form for editing data in the 'update' section
 * only one edit at the same time, remove if needed
 * retrieve row id data to the "update' button
****************************************/
function createForm(event){
	var updatediv = document.getElementById('update');
	if ( updatediv.firstChild ){
		updatediv.removeChild(updatediv.firstChild);
	}
	var row = event.target.parentNode.parentNode.parentNode;
	console.log(row);
	addForm( updatediv, update, row );
	var input = document.createElement('input');
	input.type = "submit";
	input.name = "Update";
	input.value = "Update";
	//input.id = "updateRow";
	input.id = event.target.parentNode.lastChild.value;
	var msg = document.getElementById('messages');
	msg.textContent = "Fill in the change and click update";
	//console.log(input.id);
	input.addEventListener('click', function(e) {updateRow(e)});
	updatediv.firstChild.appendChild(input);
	event.preventDefault();
}

/****************************************
 * async POST call, update the server
 * retrieve new data and refresh row data
****************************************/
function updateRow(e){
	var id = e.target.getAttribute('id');
	//console.log("updating row id: ",id);
	if ( updateCheck() ) {
		var msg = document.getElementById('messages');
		msg.textContent = "error, invalid input";
	}
	else{
	var req = new XMLHttpRequest();
	var payload = {
		"id":id,
		"name":document.getElementById("u-name").value,
		"reps":document.getElementById("u-reps").value,
		"weight":document.getElementById("u-weight").value,
		"date":document.getElementById("u-date").value,
		"lbs":document.getElementById("u-lbs").value
	};
	req.open('POST', "http://52.36.73.75:3030/update", true);
	//req.open('POST', "http://httpbin.org/post", true);
	req.setRequestHeader('Content-Type','application/json');
	req.addEventListener('load',function(){
		if ( req.status >= 200 && req.status < 400 ) {
			var xhr = JSON.parse(req.responseText);
			refreshRow(xhr);
			//console.log("updated result: ", xhr);
			var msg = document.getElementById('messages');
			msg.textContent = "Update succesful";
		}
		else{ console.log('Error',+ req.statusText);
			var msg = document.getElementById('messages');
			msg.textContent = req.statusText;
		}
	});
	req.send( JSON.stringify(payload) );
	}
	e.preventDefault();
}


/****************************************
 * Update row content
****************************************/
function refreshRow( xhr ) {
	var id = xhr.results[0].id;
	var row = document.getElementById(id);
	//console.log(row);
	var current = row.firstChild;
	current.textContent = xhr.results[0].name;
	current = current.nextSibling;
	current.textContent = xhr.results[0].reps;
	current = current.nextSibling;
	current.textContent = xhr.results[0].weight;
	current = current.nextSibling;
	current.textContent = xhr.results[0].date.slice(0,10);
	current = current.nextSibling;
	current.textContent = xhr.results[0].lbs;
	//remove update form
	var updatediv = document.getElementById('update');
	if ( updatediv.firstChild ){
		updatediv.removeChild(updatediv.firstChild);
	}
}


/****************************************
 * async GET call to remove data 
 * from server and from the table
****************************************/
function removeRow(event) {
	var target = event.target;
	var row = target.parentNode.parentNode.parentNode;
	var table = target.parentNode.parentNode.parentNode.parentNode;
	var id = row.getAttribute('id');
	//console.log("removing row id: ",id);
	var req = new XMLHttpRequest();
	req.open('GET', "http://52.36.73.75:3030/remove?id="+id, true);
	req.addEventListener('load',function(){
					if ( req.status >= 200 && req.status < 400 ) {
						var xhr = JSON.parse(req.responseText);
						//console.log(xhr);
						if ( xhr.results ){
							table.removeChild(row);
							var msg = document.getElementById('messages');
							msg.textContent = "Item removed";
						}
					}
					else{ console.log('Error',+ req.statusText);
						var msg = document.getElementById('messages');
						msg.textContent = req.statusText;
					}
	});
	req.send(null);
	event.preventDefault();
}

function updateCheck(){
				var c = document.getElementById("u-name");
				var d = document.getElementById("u-reps");
				var e = document.getElementById("u-weight");
				var f = document.getElementById("u-lbs");
				var g = document.getElementById('u-date');
				//if ( !document.getElementById("name").value ) {
				//if ( !c.check.isValid(c.value)) {
				if ( !c.check.isValid(c.value) || 
						!d.check.isValid(d.value) || 
						!e.check.isValid(e.value) || 
						!f.check.isValid(f.value) || 
						!g.check.isValid(g.value) ) {
							return 1;
						}
				return 0;
}

function addCheck(){
				var c = document.getElementById("name");
				var d = document.getElementById("reps");
				var e = document.getElementById("weight");
				var f = document.getElementById("lbs");
				var g = document.getElementById('date');
				//if ( !document.getElementById("name").value ) {
				//if ( !c.check.isValid(c.value)) {
				if ( !c.check.isValid(c.value) || 
						!d.check.isValid(d.value) || 
						!e.check.isValid(e.value) || 
						!f.check.isValid(f.value) || 
						!g.check.isValid(g.value) ) {
							return 1;
						}
				return 0;
}


/****************************************
 * async POST call to add
****************************************/
document.addEventListener('DOMContentLoaded', bindPost);
function bindPost(){
	document.getElementById('addNew').addEventListener('click', 
			function(event){
				if ( addCheck() ) {
					var msg = document.getElementById('messages');
					msg.textContent = "error, invalid input";
				}
				else{
					var req = new XMLHttpRequest();

					var payload = {
						"name":document.getElementById("name").value,
						"reps":document.getElementById("reps").value,
						"weight":document.getElementById("weight").value,
						"date":document.getElementById("date").value,
						"lbs":document.getElementById("lbs").value 
					};

					//console.log(payload);
					req.open('POST', "http://52.36.73.75:3030/add", true);
					//req.open('POST', "http://httpbin.org/post", true);
					req.setRequestHeader('Content-Type','application/json');
					req.addEventListener('load',function(){
						if ( req.status >= 200 && req.status < 400 ) {
							var xhr = JSON.parse(req.responseText);
							addRow(xhr);
							var msg = document.getElementById('messages');
							msg.textContent = "Item added to database";
							clearInput();
							//console.log(xhr);
						}
						else{ console.log('Error',+ req.statusText);
							var msg = document.getElementById('messages');
							msg.textContent = req.statusText;
						}
					});
					req.send( JSON.stringify(payload) );
				}
				event.preventDefault();
			});
};

function clearInput() {
	input.forEach( function(form) {
		document.getElementById(form).value = "";
	});
}



