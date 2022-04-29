const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log("\n\n")

const issue = {
  title: "Issue 1",
  repositoryNameAssociated: "LaunchX",
  status: "open",
  numberOfComments: 10,
  labels: ["bug", "enhancement"],
  author: "scxttm",
  dateCreated: "2020-01-01",
  lastUpdated: "2020-03-05",
  
  getTitleAndAuthor: function(){
    return `${this.title} was created by ${this.author}`
  },

  getGeneralInfo: function(){
    return `This issue ${this.title} from ${this.repositoryNameAssociated} was created on ${this.dateCreated} and was last updated on ${this.lastUpdated}`
  }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
console.log("\n\n")

const pullRequest = {
  title: "Pull Request 1",
  author: "scxttm",
  branchName: "master",
  dateCreated: "2020-01-01",
  status: "open",
  repositoryNameAssociated: "LaunchX",

  getStatus: function(){
    return `The status of this pull request is ${this.status}`
  },

  getTitleAndAuthor: function(){
    return `${this.title} was created by ${this.author}`
  }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())