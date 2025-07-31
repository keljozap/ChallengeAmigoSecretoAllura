// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variables
const friends = [];

function agregarAmigo(){
    const friend = document.getElementById('amigo');
    if (friend.value && friend.value.length > 0) {
        friends.push(friend.value);
        friend.value = '';
        console.log(friends)
        addFriendToList(friends);
    } else {
        alert('Por favor, inserte un nombre.')
    }
}

function addFriendToList(friends){
    const friendList = document.getElementById('listaAmigos');
    friendList.innerHTML='';
    friends.forEach(friend => {
        const newFriendItem = document.createElement('li');
        newFriendItem.textContent = friend;
        friendList.appendChild(newFriendItem);
    });
}

function sortearAmigo(){
    if(friends.length > 0){
        const winnerList = document.getElementById('resultado');
        const aleatoryNumber = Math.floor((Math.random() * friends.length));
        console.log(aleatoryNumber);
        const winner = document.createElement('li');
        winner.textContent = friends[aleatoryNumber];
        winnerList.appendChild(winner);
    }
}
