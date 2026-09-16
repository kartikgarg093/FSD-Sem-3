const fs=require('fs');
fs.writeFile("Sample.txt","Welcome To Full stack Development",(err)=>{
    if (err)
    {
        console.log("Error Creating File: ",err);
        return;
    }
    console.log("File Created Successfully!!!");
});
fs.readFile("Sample.txt","utf8",(err,data)=>{
    if (err)
    {
        console.log("Error reading file: ")
        return;
    }
    console.log(data);
});
fs.appendFile("Sample.txt","\nSemester 3",(err)=>{
    if (err)
    {
        console.log("Error updating files: ");
    }
    else{
        console.log("File updated!!");
    }
});
fs.unlink("delete.txt",(err)=>{
    if (err)
    {
        console.log("File not found");
    }
    else{
        console.log("file Deleted");
    }
})