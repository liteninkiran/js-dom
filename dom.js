
    /*-----------------------------------
    --  Basic Objects                  --
    -----------------------------------*/

/*
    // Examine the document object
    console.dir(document);

    // Domain
    console.log(document.domain);

    // Page URL
    console.log(document.URL);

    // Page title
    console.log(document.title);

    // Document type <!DOCTYPE html>
    console.log(document.doctype);

    // The pages's Head element
    console.log(document.head);

    // The pages's Body element
    console.log(document.body);

    // All elements in the DOM
    console.log(document.all);

    // Tenth element in the DOM
    console.log(document.all[9]);

    // All forms on the page
    console.log(document.forms);

    // All links on the page
    console.log(document.links);

    // All images on the page
    console.log(document.images);

    // Get Element By ID
    console.log(document.getElementById('header-title'));

    // Get Elements By Class Name
    console.log(document.getElementsByClassName('list-group-item'));

*/
    /*-----------------------------------
    --  Get Element By ID              --
    -----------------------------------*/
/*
    // Declare variables
    var header;
    var headerTitle;

    // Store elements
    header = document.getElementById('main-header');
    headerTitle = document.getElementById('header-title');

    // Output HTML
    console.log(headerTitle.outerHTML);
    console.log(headerTitle.innerHTML);

    // Output plain text
    console.log(headerTitle.textContent);   // Will not honour styles
    console.log(headerTitle.innerText);     // Will honour styles

    // Header border
    header.style.borderBottom = 'solid 3px black';
*/
    /*-----------------------------------
    --   Get Elements By Class Name    --
    -----------------------------------*/
/*
    // Declare variables
    var items;

    // Store elements
    items = document.getElementsByClassName('list-group-item');

    console.log(items);

    // Alter item individually
    items[1].textContent = 'Hello World';
    items[1].style.fontWeight = 'Bold';
    items[1].style.backgroundColor = 'Yellow';

    // Loop through all items
    for(var i = 0; i < items.length; i++)
    {
        items[i].style.backgroundColor = '#f4f4f4';
    }
*/
    /*-----------------------------------
    --   Get Elements By Tag Name      --
    -----------------------------------*/
/*
    // Declare variables
    var li;

    // Store elements
    li = document.getElementsByTagName('li');

    console.log(li);

    // Alter item individually
    li[1].textContent = 'Hello World';
    li[1].style.fontWeight = 'Bold';
    li[1].style.backgroundColor = 'Yellow';

    // Loop through all items
    for(var i = 0; i < li.length; i++)
    {
        li[i].style.backgroundColor = '#f4f4f4';
    }
*/
    /*-----------------------------------
    --   Query Selector                --
    -----------------------------------*/
/*
    // Retrieve element named "main-header"
    var header = document.querySelector('#main-header');

    header.style.borderBottom = 'solid 4px red';

    // Retrieve first "input" element
    var input = document.querySelector('input');

    input.value = "Hello World";

    // Retrieve first submit button
    var submit = document.querySelector('input[type="submit"]');

    // Change label to "send"
    submit.value = "SEND";

    // Retrieve first element of class "list-group-item"
    var item = document.querySelector('.list-group-item');
    item.style.color = 'red';

    // Retrieve last element of class "list-group-item"
    var lastItem = document.querySelector('.list-group-item:last-child');
    lastItem.style.color = 'blue';

    // Retrieve nth element of class "list-group-item"
    var nthItem = document.querySelector('.list-group-item:nth-child(2)');
    nthItem.style.color = 'coral';
*/
    /*-----------------------------------
    --   Query Selector All            --
    -----------------------------------*/
/*
    // Retrieve all elements of class "title"
    var titles = document.querySelectorAll('.title');

    console.log(titles);

    titles[0].textContent = 'Hello';

    // Get odd "li" elements
    var odd = document.querySelectorAll('li:nth-child(odd)');

    // Loop through array
    for(var i = 0; i < odd.length; i++)
    {
        // Change background colour
        odd[i].style.backgroundColor = '#f4f4f4';
    }

    // Get even "li" elements
    var even = document.querySelectorAll('li:nth-child(even)');

    // Loop through array
    for(var i = 0; i < even.length; i++)
    {
        // Change background colour
        even[i].style.backgroundColor = '#cccccc';
    }
*/













