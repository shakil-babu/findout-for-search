

// elements
const query = document.getElementById('input').value ;
const form = document.getElementById('form');
const showdata = document.getElementById('showdata');

// event listeners
form.addEventListener('submit' , function(e){
    e.preventDefault();
    getData();
})

// for get data
const getData = () => {
    const Api_key = '847dcefbbbc98be32dbd6653f31b66ca';
    const url = `http://api.serpstack.com/search?access_key=${Api_key}&type=web&query=${query}` ;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

// display data
const displayData = (data) => {
    data.organic_results.forEach((item) => {
        showdata.innerHTML += `
        
        <div class='result-box'>
                <div class='box' > 
                <h3>${item.title}</h3> <br>
                <a target="_blank" href = "${item.url}">${item.url}</a>
                <p>${item.snippet}</p>
            </div>
        </div>
        
        `
    })
}