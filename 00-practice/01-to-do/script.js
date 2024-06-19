const task = function (task, priority, isDone) {
    return {
        task: task,
        priority: priority,
        isDone: isDone,
    }
};


const to_do = {
    task: [],

    addTask: function (item) {
        this.task.push(item);
    },

    removeTask: function (item) {
        this.task = this.task.filter((task) => task.task !== item)
    },
}

const task1 = task('run','m','0');
const task2 = task('dance','m','0');

to_do.addTask(task1);
to_do.addTask(task2);

console.log(to_do.task);
to_do.removeTask('run');
console.log(to_do.task);
