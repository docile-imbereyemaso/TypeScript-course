var Status;
(function (Status) {
    Status["Active"] = "The item is currently active";
    Status["Inactive"] = "The item is currently inactive";
    Status["Pending"] = "The item is pending review";
})(Status || (Status = {}));
function getStatusMessage(status) {
    return status;
}
console.log(getStatusMessage(Status.Inactive));
export {};
//# sourceMappingURL=question4.js.map