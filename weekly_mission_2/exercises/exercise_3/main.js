class Explorer {
    constructor(name, exercises_completed, rate, city, stack, missions) {
        this.name = name;
        this.exercises_completed = exercises_completed;
        this.rate = rate;
        this.city = city;
        this.stack = stack;
        this.missions = missions;
    }
    getName() {
        return this.name;
    }
    getStack() {
        return this.stack;
    }
    getCity() {
        return this.city;
    }
    getExercisesCompleted() {
        return this.exercises_completed;
    }
    getMissions() {
        return this.missions;
    }
}

explorer1 = new Explorer(
    "Explorer 1", 
    10, 
    99, 
    "CDMX", 
    ["js", "c#"], 
    { 
        onboarding: {
            isFinished: true,
            exercisesFinished: true
            },
        frontend: {
            isFinished: true,
            exercisesFinished: true
        }
    }
);

explorer2 = new Explorer(
    "Explorer 2",
    9,
    "Veracruz",
    50,
    ["js"],
    {
        onboarding: {
            isFinished: false,
            exercisesFinished: false
        },
        frontend: {
            isFinished: false,
            exercisesFinished: false
        }
    }
);

explorer3 = new Explorer(
    "Explorer 3",
    3,
    "Sonora",
    100,
    ["elixir"],
    {
        onboarding: {
            isFinished: true,
            exercisesFinished: true
        },
        frontend: {
            isFinished: false,
            exercisesFinished: false
        }
    }
);

explorers = [explorer1, explorer2, explorer3];

console.log('1. Get the name of the explorers');
explorers.forEach(explorer => console.log(explorer.name));

console.log('\n2. Get the stack of the explorers');
explorers.forEach(explorer => console.log(explorer.stack));

console.log('\n3. Create a new list with the stack list of the explorers');
const stackList = explorers.map(explorer => explorer.stack);
console.log(stackList);

console.log('\n4. List of the explorers that have "js" in their stack');
const jsExplorers = explorers.filter(explorer => explorer.stack.includes("js"));
console.log(jsExplorers);

console.log('\n5. First explorar from CDMX');
const cdmxExplorer = explorers.find(explorer => explorer.city == "CDMX");
console.log(cdmxExplorer);

console.log('\n6. Sum of all the exercises completed');
var sum = 0;
explorers.forEach(explorer => sum += explorer.exercises_completed);
console.log(sum);

console.log('\n7. Validate if at least one explorer has true in the property exercisesFinished in frontend');
console.log(explorers.some(explorer => explorer.missions.frontend.exercisesFinished == true));

console.log('\n8. Validate if all the explorer has true in the property isFinished in onboarding');
console.log(explorers.every(explorer => explorer.missions.onboarding.isFinished == true));