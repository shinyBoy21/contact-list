	//manage the avatar selection
    function showPreviewOne(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("selectAvatar-preview");
        preview.src = src;
        preview.style.display = "block";
      } 
    };
     function myImgRemoveFunctionOne() {
      document.getElementById("selectAvatar-preview").src = "https://i.ibb.co/ZVFsg37/default.png";
    };
  


//getting elements from the DOM
const firstName=document.getElementById('entryFirstName');
const lastName=document.getElementById('entryLastName');
const group=document.getElementById('entryGroup');
const bio=document.getElementById('entryBiograohy');
//const avatar=document.getElementById('previewAvatar');
const avatar= document.getElementById('selectAvatar-preview');
const addButton=document.getElementById('newPersonAddButton');

//fire an action when clicked
addButton.addEventListener('click', addContact);

function addContact(e) {
	e.preventDefault();

	//selecting the global parent
	const contactList=document.getElementById('contactListContainer');

	//creating new elements
	const newCard=document.createElement('div');
	const contactAvatar=document.createElement('img');
	const contactDetail=document.createElement('div');
	const contactName=document.createElement('div');
	const contactGroup=document.createElement('div');
	const contactBio=document.createElement('p');
	const deleteBtn=document.createElement('div');

	//creating new classes
	newCard.classList.add('contact-card');
	contactAvatar.classList.add('contact-card-avatar');
	contactDetail.classList.add('contact-card-detail');
	contactName.classList.add('contact-card-detail-name');
	contactGroup.classList.add('contact-card-detail-group');
	contactBio.classList.add('contact-card-bio');
	deleteBtn.classList.add('contact-card-delete');

	if(firstName.value!=='' &&  lastName.value!=='') {

		
// const avatar= document.getElementById('selectAvatar-preview');
// const addButton=document.getElementById('newPersonAddButton');


		contactName.textContent=firstName.value+" "+lastName.value;
		contactGroup.textContent=group.value;
		contactBio.textContent=bio.value;
		contactAvatar.setAttribute('src', avatar.src);
		//contactAvatar.innerHTML=avatar.value;
		deleteBtn.innerHTML='<i class="fa fa-trash"></i>';


		//appending elements to the parents
		contactDetail.appendChild(contactName);
		contactDetail.appendChild(contactGroup);
		contactDetail.appendChild(contactBio);

		newCard.appendChild(contactAvatar);
		newCard.appendChild(contactDetail);
		newCard.appendChild(deleteBtn);
		

		contactList.appendChild(newCard);

		//reseting the field
		firstName.value='';
		lastName.value='';
		group.value='';
		bio.value='';
		avatar.src="https://i.ibb.co/ZVFsg37/default.png";

	}

	//delete a card from the contactList
	deleteBtn.addEventListener( 'click', function () {
		const parent=this.parentNode;
		parent.remove();
	})

}