enum Status{
    Active ="The item is currently active",
    Inactive ="The item is currently inactive",
    Pending ="The item is pending review"

}



function getStatusMessage(status:Status):string {
   return status
  
}

console.log(getStatusMessage(Status.Inactive))