// ===== AN Infra AI Assistant =====

const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const closeChat = document.getElementById("close-chat");
// Open Chat
chatToggle.addEventListener("click", function () {
    chatContainer.style.display = "block";
    setTimeout(function () {
        chatContainer.style.opacity = "1";
        chatContainer.style.transform = "translateY(0)";
    }, 10);
});

// Close Chat
closeChat.addEventListener("click", function () {
    chatContainer.style.opacity = "0";
    chatContainer.style.transform = "translateY(20px)";

    setTimeout(function () {
        chatContainer.style.display = "none";
    }, 300);
});
// Quick Action Buttons
function quickReply(action) {

    switch(action){

        case "call":
            window.location.href = "tel:+917087938182";
            break;

        case "whatsapp":
            window.open("https://wa.me/917087938182","_blank");
            break;

        case "quote":
            window.location.href = "#contact";
            break;
        case "sitevisit":
            window.open( "https://wa.me/917087938182?text=Hello%20AN%20Infra,%20I%20want%20to%20book%20a%20FREE%20Site%20Visit.",
        "_blank"
    );
    break;

        case "services":
            window.location.href = "#services";
            break;

        default:
            alert("Welcome to AN Infra AI Assistant");
    }

}
