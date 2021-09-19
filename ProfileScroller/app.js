const data = [
    {
        name: 'Daniel Mathew',
        age: 20,
        gender: 'male',
        lookingfor: 'female',
        location: 'Sydney AU',
        image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
        name: 'Klaus Michealson',
        age: 27,
        gender: 'male',
        lookingfor: 'female',
        location: 'New Orleans SY',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name: 'Elena Peirce',
        age: 27,
        gender: 'female',
        lookingfor: 'male',
        location: 'Boston LA',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    },
    {
        name: 'Billy Butcher',
        age: 29,
        gender: 'male',
        lookingfor: 'female',
        location: 'New York US',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    }
];

const profiles = profileIterator(data);

nextProfile(); 

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){

    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }
    else{
        window.location.reload();
    }
}

function profileIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true}
        }
    };
}