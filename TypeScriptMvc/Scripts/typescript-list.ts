class TaskDetails {
    id: KnockoutObservable<number>;
    title: KnockoutObservable<string>;
    details: KnockoutObservable<string>;
    starts: KnockoutObservable<string>;
    ends: KnockoutObservable<string>;

    constructor(id: number, title: string, details: string, starts: string, ends: string) {
        this.id = ko.observable(id);
        this.title = ko.observable(title);
        this.details = ko.observable(details);
        this.starts = ko.observable(starts);
        this.ends = ko.observable(ends);
    }
}

class TaskViewModel {
    public tasks: KnockoutObservableArray<TaskDetails>;
    constructor() {
        this.tasks = ko.observableArray([]);
    }
}

$(document).ready(function () {
    var serverData: TaskDetails[];
    serverData = JSON.parse($("#serverJSON").val());
    var vm: TaskViewModel;
    vm = new TaskViewModel();
    var i: number;

    for (i = 0; i < serverData.length; i++) {
        //var serverTask: any;
        //serverTask = serverData[i];
        //vm.tasks.push(new TaskDetails(serverTask.Id, serverTask.Title, serverTask.Details, serverTask.Starts, serverTask.Ends));
        vm.tasks.push(serverData[i]);
    }
    ko.applyBindings(vm);
});