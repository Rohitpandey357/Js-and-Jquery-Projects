loadEvents();

function loadEvents(){
	document.querySelector('form').addEventListener('submit',submit);
	document.getElementById('clear').addEventListener('click',clearList);
	document.querySelector('ul').addEventListener('click',deleteOrTick);
}

//SUBMIT DARA	
function submit(e){
	e.preventDefault();
	let input = document.querySelector('input');
	if(input.value!=''){
		addTask(input.value);
	}
	input.value='';
}

//ADD TASKS
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}
//CLEARS LIST
function clearList(e){
	let ul=document.querySelector('ul');
	ul.innerHTML = '';
}

//DELETE TICK
function deleteOrTick(e){
	if(e.target.className == 'delete')
		deleteTask(e);
	else
		tickTask(e);
}

//DELETE TASK
function deleteTask(e){
	let remove = e.target.parentNode;
	let parentNode = remove.parentNode;
	parentNode.removeChild(remove);
}

//TICK A TASK
function tickTask(e){
	const task = e.target.nextSibling;
	if(e.target.checked){
		task.style.textDecoration = "line-through";
		task.style.color = "#2f4f4f";
	}
}