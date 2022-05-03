const profile = {
    name: 'Alan Montesinos',
    profilePic: 'https://avatars2.githubusercontent.com/u/29098281?s=460&v=4',
    rating: '4.91',
    getInfo: function(){
        return `${this.name} has a rating of ${this.rating}`;
    }
}

console.log(profile.getInfo());

const travel = {
    driver: 'Pedro',
    startingPoint: 'Valle Dorado',
    destination: 'Centro',
    price: '$100',
    payment: 'Credit Card',
    estimatedTime: '15 minutes',
    getInfo: function(){
        return `${this.startingPoint} to ${this.destination} is ${this.price} and will take ${this.estimatedTime} to get there`;
    },
    getDriver: function(){
        return `${this.driver} will pick you up at ${this.startingPoint}`;
    },
    getPayment: function(){
        return `${this.payment} will be used to pay for the trip`;
    }
}

console.log(travel.getInfo());
console.log(travel.getDriver());
console.log(travel.getPayment());