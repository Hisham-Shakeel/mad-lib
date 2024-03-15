// Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", madLib);

// Store order code in a function
function madLib() {
    // INPUT
    let familyMember = document.getElementById("member-in").value;
    let pluralNoun = document.getElementById("noun-in").value;
    let action = document.getElementById("action-in").value;

    // PROCESS
    let msg = `My ${familyMember} loves to eat ${pluralNoun} and then ${action}.`;

    // OUTPUT
    document.getElementById("output").innerHTML = msg;
}