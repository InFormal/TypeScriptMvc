var TaskDetails = (function () {
    function TaskDetails(id, title, details, starts, ends) {
        this.id = ko.observable(id);
        this.title = ko.observable(title);
        this.details = ko.observable(details);
        this.starts = ko.observable(starts);
        this.ends = ko.observable(ends);
    }
    return TaskDetails;
}());
var TaskViewModel = (function () {
    function TaskViewModel() {
        this.tasks = ko.observableArray([]);
    }
    return TaskViewModel;
}());
$(document).ready(function () {
    var serverData;
    serverData = JSON.parse($("#serverJSON").val());
    var vm;
    vm = new TaskViewModel();
    var i;
    for (i = 0; i < serverData.length; i++) {
        //var serverTask: any;
        //serverTask = serverData[i];
        //vm.tasks.push(new TaskDetails(serverTask.Id, serverTask.Title, serverTask.Details, serverTask.Starts, serverTask.Ends));
        vm.tasks.push(serverData[i]);
    }
    ko.applyBindings(vm);
});
