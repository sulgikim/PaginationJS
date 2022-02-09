const thisList = document.querySelector('.contact-list'); //<ul> list of contact items 
const itemList = document.querySelectorAll('.contact-item'); //<li> contact items in the list 
const btnList = document.querySelector('.pagination'); //<ul> buttons for pagination

const itemsPerPage = 10; //number of item per page 
const totalItem = itemList.length; //total number of item in list
const numOfPages = Math.ceil(totalItem / itemsPerPage); // number of pages

generateDefaultPage();
generateBtns();
``
//default page when user first open this page
function generateDefaultPage(){
    let defaultPageItems = '';
    for(var i = 0; i < itemsPerPage; i++){
        defaultPageItems += itemList[i].outerHTML; //add item html code in string variable
    }
    thisList.innerHTML = defaultPageItems;
}

//generate buttons based on number of pages 
function generateBtns() {
    let btnHtml = '';
    for(var i = 0; i < numOfPages; i++){
        btnHtml += `<li><a id='${i}' onclick='clickedPage(id)'>${i+1}</a></li>`;
    }
    
    btnList.innerHTML = btnHtml;
}

//when button clicked by user, show the corresponding items based on page id
function clickedPage(id) {
    let first = id * 10; //first item index to show in clicked page
    let last; 

    //the last page is not always have 10 items.
    //if clicked page is last page, set the last item index from length of list
    if(id == (numOfPages-1)){ 
        last = itemList.length;
    } else { //if not, add number of items per page to first index
        last = first + itemsPerPage; 
    }
    
    //until first index reaches to the last index, add items' html code in string variable 
    let clickedPageItems = '';  
    while(first < last){ 
         clickedPageItems += itemList[first].outerHTML;
         first++;
    }
    
    thisList.innerHTML = clickedPageItems;
}

