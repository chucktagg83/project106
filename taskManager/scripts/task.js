class Task{
    constructor(title,description,color,date,status,budget){
        this.title = title
        this.desc = description
        this.color = color
        this.date = date
        this.status = status
        this.budget = budget
    }
}

let myTask = new Task("Buy Groceries", "Milk and Eggs", "#ff0000", "2026-02-28", "New", 50);
myTask