
function submitForm() {
    const Http = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typeicode.com/todos/1';

    Http.open('GET', url);
    Http.send();
    Http.onreadystatechange = function () {
        if (Http.readyState == 4 && Http.status == 200) {
            console.log(Http.responseText);
        }
    }
}

function toggleTabs(num) {
    const query_tab = document.getElementsByClassName('queryParamsTab')[0];
    const headers_tab = document.getElementsByClassName('HeadersTab')[0];
    const json_tab = document.getElementsByClassName('JSONTab')[0];

    const hoverTabColor = "#3a3b3c";

    query_tab.style.backgroundColor = (num == 1) ? hoverTabColor : "transparent";
    headers_tab.style.backgroundColor = (num == 2) ? hoverTabColor : "transparent";
    json_tab.style.backgroundColor = (num == 3) ? hoverTabColor : "transparent";

    query_tab.style.fontWeight = (num == 1) ? "bold" : "normal";
    headers_tab.style.fontWeight = (num == 2) ? "bold" : "normal";
    json_tab.style.fontWeight = (num == 3) ? "bold" : "normal";





    const query_field = document.getElementsByClassName('queryField')[0];
    const headers_field = document.getElementsByClassName('headerField')[0];
    const json_field = document.getElementsByClassName('jsonField')[0];



    if (num == 1) {
        query_field.style.visibility = "visible";
        headers_field.style.visibility = "hidden";
        json_field.style.visibility = "hidden";
    } else if (num == 2) {
        query_field.style.visibility = "hidden";
        headers_field.style.visibility = "visible";
        json_field.style.visibility = "hidden";
    } else {
        query_field.style.visibility = "hidden";
        headers_field.style.visibility = "hidden";
        json_field.style.visibility = "visible";
    }

}


function addParamField() {
    const queryParamsContainer = document.getElementsByClassName('keyValueField')[0];

    queryParamsContainer.appendChild(createKeyValuePair())
}

function addHeaderField() {
    const HeadersContainer = document.getElementsByClassName('keyValueField')[1];

    HeadersContainer.appendChild(createKeyValuePair())
}
function createKeyValuePair() {
    const element = document.querySelector('[data-key-value-template]').content.cloneNode(true);
    element.querySelector('[data-remove-btn]').addEventListener('click', e => {
        e.target.closest('[data-key-value-pair]').remove();
    });
    return element;
}


/* API requests */

/* 
form.addEventListener('submit', e => {
    e.preventDefault();

    axios({
        url: "https://jsonplaceholder.typeicode.com/todos/1",
        method: "GET",
        params: {},
        headers: {}
    }).then((response) => {
        console.log(response);
    })
});
 *//* 
function toObjects(element) {
const pairs = element.querySelectorAll('[data-key-value-pair]');
const keyvalpairs = [...pairs].reduce((data, pair) => {
const key = pair.querySelector('[data-key]').value;
const value = pair.querySelector('[data-value]').value;

if (key === '') return data;
return { ...data, [key]: value };
}, {});

console.log(keyvalpairs);
return keyvalpairs;
} */