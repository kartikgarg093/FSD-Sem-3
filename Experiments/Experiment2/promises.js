const fs=require('fs').promises;

async function writeFile(){
    try{
        await fs.writeFile("Promise.txt","Hello Students!!");
        console.log("File created and data written successfully.");
    }
    catch (error){
        console.log("Error");
    }
}
writeFile();

async function readfile(){
    try{
        const data=await fs.readFile("Promise.txt",'utf8');
        console.log(data);
    }
    catch (error){
        console.log("Error");
    }
}
readfile();

async function rename(){
    try{
        await fs.rename("Promise.txt","Promise_new.txt");
        console.log("Successfully rename");
    }
    catch (error){
        console.log("Error");
    }
}
rename();
async function append(){
    try{
        await fs.appendFile("Promise_new.txt","\nWelcome To fsd training");
        console.log("Successfully append");
    }
    catch (error){
        console.log("Error what");
    }
}
append();



