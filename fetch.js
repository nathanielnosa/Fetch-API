document.querySelector('#gett').addEventListener('click', getText);

document.querySelector('#getj').addEventListener('click', getJson);

document.querySelector('#geta').addEventListener('click', getAPI);

// getting text
function getText(){

fetch('mydata.txt')
  .then(function(res){
    return res.text();
  })
  .then(function(data){
    document.querySelector('#display').innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  });
}

//getting json file
function getJson(){
  fetch('myJson.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      let output = '';
      data.forEach(function(datas){
        output += `
        <li>${datas.name}</li>
        <li>${datas.company}</li>
        <li>${datas.phone}</li>
        <br>
        `;
      });
      document.querySelector('#display').innerHTML = output;
    })
    .catch(function(error){
      console.log(error);
    })
}

//getting API Data
function getAPI(){
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      let output = '';
      data.forEach(function(users){
        output += `
          <li>${users.login}</li>
          <li>${users.id}</li>
          <li>${users.node_id}</li>
        `;
      });
      document.querySelector('#display').innerHTML = output;
    })
    .catch(function(error){
      console.log('Error: Something is wrong');
    });
}