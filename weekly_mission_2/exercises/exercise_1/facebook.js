const user = {
    name: 'Alan Montesinos',
    profilePic: 'https://avatars2.githubusercontent.com/u/29098281?s=460&v=4',
    friends: '1000',
    friendsInCommon: '100',
    getGeneralInfo: function(){
        return `${this.name} has ${this.friends} friends and ${this.friendsInCommon} friends in common`
    }
}

console.log(user.getGeneralInfo());

const post = {
    name: 'Alan Montesinos',
    date: '03/05/2022',
    post: 'I am a software developer',
    reactions: '1000',
    comments: '100',
    getDate: function(){
        return `${this.name} posted on ${this.date}`;
    },
    getPost: function(){
        return `${this.name} posted '${this.post}'`;
    }, 
    getGeneralInfo: function(){
        return `The post '${this.post}' has ${this.reactions} reactions and ${this.comments} comments`;
    }
}

console.log(post.getDate());
console.log(post.getPost());
console.log(post.getGeneralInfo());

const biography = {
    name: 'Alan Montesinos',
    description: 'I am a software developer',
    birthdate: '03/05/2001',
    city: 'Ensenada',
    ocupation: 'Software developer',
    getAge: function(){
        currentYear = new Date().getFullYear();
        birthYear = this.birthdate.split('/')[2];
        return `${this.name} has ${currentYear - birthYear} years old`;
    },
    getGeneralInfo: function(){
        return `${this.name} is a ${this.ocupation} from ${this.city}`;
    },
    getDescription: function(){
        return `${this.name} description says: '${this.description}'`;
    }
}

console.log(biography.getAge());
console.log(biography.getGeneralInfo());
console.log(biography.getDescription());