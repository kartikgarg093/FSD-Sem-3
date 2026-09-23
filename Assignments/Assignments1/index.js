function start() {

    let newTab = window.open("", "_blank");

    newTab.document.write(`
    
    <!DOCTYPE html>
    <html>
    <head>
        <title>FSD Quiz-1</title>

        <style>

    #main {
    width: 560px;
    height: 250px;
    margin: 40px auto;
    padding: 25px 35px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
}

h1 {
    margin-top: 0;
    margin-bottom: 35px;
    
}

p {
    
    margin-bottom: 20px;
}

        </style>

    </head>

    <body>

        <div id="main">

            <h1>FSD Quiz-1</h1>

            <div id="ques"></div>

        </div>

    </body>
    </html>

    `);

    newTab.document.close();


    // Question 1
    let ques = newTab.document.getElementById("ques");

    ques.innerHTML = `
    
        <p>
            <b>Question 1: What is the capital city of France?</b>
        </p>

        <input type="radio" name="answer">
        <label>A) Berlin</label><br>

        <input type="radio" name="answer">
        <label>B) London</label><br>

        <input type="radio" name="answer">
        <label>C) Rome</label><br>

        <input type="radio" name="answer">
        <label>D) Paris</label><br><br>

        <button onclick="next1()">Next</button>
    
    `;


    function next1() {

        let a = newTab.document.getElementById("ques");

        let b = `
        
            <p>
                <b>Question 2: What is your favourite Sport?</b>
            </p>

            <input type="radio" name="answer">
            <label>A) Cricket</label><br>

            <input type="radio" name="answer">
            <label>B) Football</label><br>

            <input type="radio" name="answer">
            <label>C) Rugby</label><br>

            <input type="radio" name="answer">
            <label>D) Hockey</label><br><br>

            <button onclick="next2()">Next</button>
        
        `;

        a.innerHTML = b;
    }


    function next2() {

        let a = newTab.document.getElementById("ques");

        let b = `
        
            <p>
                <b>Question 3: What is your Place?</b>
            </p>

            <input type="radio" name="answer">
            <label>A) London</label><br>

            <input type="radio" name="answer">
            <label>B) Melbourne</label><br>

            <input type="radio" name="answer">
            <label>C) New York</label><br>

            <input type="radio" name="answer">
            <label>D) Tokyo</label><br><br>

            <button onclick="next3()">Next</button>
        
        `;

        a.innerHTML = b;
    }


    function next3() {

        let a = newTab.document.getElementById("ques");

        let b = `
        
            <p>
                <b>
                    Question 4: What is the output of 
                    int x = 5; cout << x++;
                </b>
            </p>

            <input type="radio" name="answer">
            <label>A) Compilation error</label><br>

            <input type="radio" name="answer">
            <label>B) 6</label><br>

            <input type="radio" name="answer">
            <label>C) 5</label><br>

            <input type="radio" name="answer">
            <label>D) 0</label><br><br>

            <button onclick="Submit()">Submit</button>
        
        `;

        a.innerHTML = b;
    }


    function Submit() {

        let a = newTab.document.getElementById("ques");

        a.innerHTML = `
            <h1>Your response has been submitted</h1>
        `;
    }
    newTab.next1 = next1;
    newTab.next2 = next2;
    newTab.next3 = next3;
    newTab.Submit = Submit;

}