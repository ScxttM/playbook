const user = {
    name: 'Scxttie',
    user: '@scxttiee',
    followers: 100,
    following: 50,
    bio: 'I am a software developer',
    birthdate: '03/05/2001',
    joined: '05/2020',
    getAge: function(){
        currentYear = new Date().getFullYear();
        birthYear = this.birthdate.split('/')[2];
        return `${this.user} has ${currentYear - birthYear} years old`;
    }, 
    getGeneralInfo: function(){
        return `${this.name}, with username ${this.user}, has ${this.followers} followers and ${this.following} following`
    }
}

console.log(user.getAge());
console.log(user.getGeneralInfo());

const trending_topic = {
    topic: 'javascript',
    tweets: 100,
    description: 'This is a trending topic',
    getInfo: function(){
        return `${this.topic} has ${this.tweets} tweets, the description is '${this.description}'`;
    }
}

console.log(trending_topic.getInfo());

const hashtag = {
    hashtag: '#javascript',
    tweets: 100,
    getInfo: function(){
        return `${this.hashtag} has ${this.tweets} tweets`;
    }
}

console.log(hashtag.getInfo());