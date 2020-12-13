
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
    /*-----------------------------------
    --   Traversing The DOM            --
    -----------------------------------*/
/*
    // Get the element called "items" (it is the UL)
    var itemList = document.querySelector('#items');

    // Find the parent (the "main" DIV)
    var parent = itemList.parentNode;

    // Log the parent object
    console.log(parent);

    // Change "main" DIV background colour
    parent.style.backgroundColor = '#f4f4f4';

    // Find the grand-parent (the "container" DIV)
    var grandParent = parent.parentNode;

    // Log the grand-parent object
    console.log(grandParent);

    // In most cases, parentElement is the same as parentNode.
    // The only difference comes when a node's parentNode is 
    // not an element. If so, parentElement is null. Example:

    document.body.parentNode;                               // the <html> element
    document.body.parentElement;                            // the <html> element

    document.documentElement.parentNode;                    // the document node
    document.documentElement.parentElement;                 // null

    (document.documentElement.parentNode === document);     // true
    (document.documentElement.parentElement === document);  // false

    // Child nodes returns a Node List and includes line breaks
    console.log(itemList.childNodes);

    // Children returns an HTNL Collection and excludes line breaks
    console.log(itemList.children);

    // Getting the nth child
    var child = itemList.children[2];

    console.log(child);

    child.style.backgroundColor = 'Yellow';

    // First child... returns first from childNodes (i.e. includes line breaks)
    console.log(itemList.firstChild);

    // First element child... returns first from children (i.e. excludes line breaks)
    var fChild = itemList.firstElementChild

    fChild.textContent = 'Hello!';

    console.log(fChild);

    // Last child... returns last from childNodes (i.e. includes line breaks)
    console.log(itemList.lastChild);

    // Last element child... returns last from children (i.e. excludes line breaks)
    var lChild = itemList.lastElementChild

    lChild.textContent = 'Goodbye!';

    // Next sibling... includes line breaks
    console.log(itemList.nextSibling);

    // Next element sibling... excludes line breaks
    console.log(itemList.nextElementSibling);

    // Previous sibling... includes line breaks
    console.log(itemList.previousSibling);

    // Previous element sibling... excludes line breaks
    console.log(itemList.previousElementSibling);

    // Create element
    var newDiv = document.createElement('div');

    newDiv.className = 'hello';
    newDiv.id = 'hello-1';
    newDiv.setAttribute('title', 'Hello Div');

    console.log(newDiv);

    // Create text node
    var newDivText = document.createTextNode('Hello World');

    newDiv.appendChild(newDivText);

    var container = document.querySelector('header .container');
    var h1 = document.querySelector('header h1');

    container.insertBefore(newDiv, h1);

    newDiv.style.fontSize = '30px';
*/
    /*-----------------------------------
    --   Events                        --
    -----------------------------------*/
/*
    // Find element called "button" and store in variable
    var button = document.getElementById('button');

    // Add an Event Listener using explicit function definition
    button.addEventListener('click',
        function()
        {
            alert('Changed');
        });

    // Add an Event Listener using named function
    button.addEventListener('click', buttonClick);

    function buttonClick(e)
    {

        document.getElementById('header-title').textContent = 'Changed';
        document.querySelector('#main').style.backgroundColor = '#f4f4f4'

        // Event object
        console.log(e);

        // The element that the event was fired from
        console.log(e.target);
        console.log(e.target.id);
        console.log(e.target.className);
        console.log(e.target.classList);

        var output = document.getElementById('output');
        output.innerHTML = '<h3>' + e.target.id + '</h3>';

        // Event type (i.e. click, mouse-up, etc)
        console.log(e.type);

        // Mouse position from window
        console.log(e.clientX);
        console.log(e.clientY);

        // Mouse position from element
        console.log(e.offsetX);
        console.log(e.offsetY);

        // Key press (returns True/False)
        console.log(e.altKey);
        console.log(e.ctrlKey);
        console.log(e.shiftKey);

    }

    // Get the "output" Div
    var output = document.getElementById('output');

    // Find element called "button" and store in variable
    var button = document.getElementById('button');

    // Variable for storing the event type name
    var eventName;

    // Assign an event type name
    eventName = 'click';
    eventName = 'dblclick';
    eventName = 'mousedown';
    eventName = 'mouseup';

    // Add an Event Listener using named function
    button.addEventListener(eventName, runEvent);

    // Find element called "button" and store in variable
    var box = document.getElementById('box');


    // Add event listeners
    box.addEventListener('mouseenter', runEvent);
    box.addEventListener('mouseleave', runEvent);
    box.addEventListener('mouseover', runEvent);
    box.addEventListener('mouseout', runEvent);

    box.addEventListener('mousemove', runEvent);

    // The mouseover/mouseout event triggers when the mouse pointer enters/leaves the div element, or its child elements.
    // The mouseenter/mouseleave event is only triggered when the mouse pointer enters/leaves just the div element.
    // The mousemove event triggers every time the mouse pointer is moved over the div element.

    var itemInput = document.querySelector('input[type="text"]');
    var select = document.querySelector('select');
    var form = document.querySelector('form');

    //itemInput.addEventListener('keydown', runEvent);
    //itemInput.addEventListener('keyup', runEvent);
    //itemInput.addEventListener('keypress', runEvent);

    //itemInput.addEventListener('focus', runEvent);        // Gain focus
    //itemInput.addEventListener('blur', runEvent);         // Lose focus

    //itemInput.addEventListener('cut', runEvent);
    //itemInput.addEventListener('paste', runEvent);

    //itemInput.addEventListener('input', runEvent); // Includes cut, paste, key-presses, change
    //itemInput.addEventListener('change', runEvent);

    // The change event is fired for <input>, <select>, and <textarea> elements when an alteration to the element's 
    // value is committed by the user. Unlike the input event, the change event is not necessarily fired for each 
    // alteration to an element's value.

    //select.addEventListener('change', runEvent);

    form.addEventListener('submit', runEvent);

    function runEvent(e)
    {
        e.preventDefault();

        console.log('Event Type: ' + e.type);

        //alert('Form Submitted');
        
        //console.log(e.target.value);

        //document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';

        //output.innerHTML  = '<h3>Mouse X: ' + e.offsetX + '</h3>';
        //output.innerHTML += '<h3>Mouse Y: ' + e.offsetY + '</h3>';

        //box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 0)";
    }
*/









