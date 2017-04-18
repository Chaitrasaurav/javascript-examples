document.getElementById("addItem").addEventListener("click", function(){
	 var value = document.getElementById('item').value;
	 if(value){
		addItemTodo(value);
		document.getElementById('item').value = '';
	 }
});

function addItemTodo(text){

	var list = document.getElementById("todo");

	var item = document.createElement("li");
	item.innerText = text;

	var buttons = document.createElement("div");
	buttons.classList.add('buttons');

	var delet = document.createElement("button");
	delet.innerText = "delet";
	delet.classList.add('delet');

	delet.addEventListener("click", removeItem);

	var done = document.createElement("button");
	done.innerText = "done";
	done.classList.add('done');

	done.addEventListener("click", completeItem);

	buttons.appendChild(delet);
	buttons.appendChild(done);
	item.appendChild(buttons);
	list.insertBefore(item, list.childNodes[0]);
}

function removeItem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	parent.removeChild(item);
}

function completeItem(){
	var item = this.parentNode.parentNode;
	var parent = document.getElementById('completed');
	
	parent.insertBefore(item, parent.childNodes[0]);
	this.parentNode.removeChild(this);
}
