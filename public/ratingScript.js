// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page

const rating = document.querySelector("rating")

rating.addEventListener("submit", async (e)=>{
e.preventDefault()
const ratingData = new ratingData("rating");
const data = Object.fromEntries(formData)

const response = await fetch("/ratings",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
const data = await response.json()
console.log(data)

})