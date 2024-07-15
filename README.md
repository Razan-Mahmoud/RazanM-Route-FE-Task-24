This project is a frontend task as an entry requirementrequired for the Route Academy 2024 Job Fair.

The task description:
"Your goal is to create an application thatretrieves the customer and transaction
data from a providedAPI endpoint and displays it in a user-friendly format.

TheApp should have the following features:
• Atable that displays the list of customers along with theirtransaction data.
• The ability to filterthe table by customer name ortransaction amount.
• Agraph that displays the total transaction amount per day forthe selected
customer.
Requirements:
• Use a modern javascript Framework orlibrary such as React,Angular, or
Vue.js.
• Use any charting library to display the graph.
• Setup a local serverto host the JSON data.
• Use the below data as anAPI. Please fill free to add data in the transaction
dataset JSON for demonstration purposes.
• Create a new repo on your GitHub for your project , add your code to the
repo and enable GitHub pages for yourrepo to host the application.
{
"customers": [
{
"id": 1,
"name": "Ahmed Ali"
},
{
"id": 2,
"name": "Aya Elsayed"
},

{
"id": 3,
"name": "Mina Adel"
},
{
"id": 4,
"name": "Sarah Reda"
},
{
"id": 5,
"name": "Mohamed Sayed"
}
],
"transactions": [
{
"id": 1,
"customer_id": 1,
"date": "2022-01-01",
"amount": 1000
},
{
"id": 2,
"customer_id": 1,
"date": "2022-01-02",
"amount": 2000
},
{
"id": 3,
"customer_id": 2,
"date": "2022-01-01",
"amount": 550
},
{
"id": 4,
"customer_id": 3,
"date": "2022-01-01",
"amount": 500
},
{
"id": 5,

"customer_id": 2,
"date": "2022-01-02",
"amount": 1300
},
{
"id": 6,
"customer_id": 4,
"date": "2022-01-01",
"amount": 750
},
{
"id": 7,
"customer_id": 3,
"date": "2022-01-02",
"amount": 1250
},
{
"id": 8,
"customer_id": 5,
"date": "2022-01-01",
"amount": 2500
},
{
"id": 9,
"customer_id": 5,
"date": "2022-01-02",
"amount": 875
}
]
}"

I used the Vite build tool to initiate the React.JS app. I also used Chart.js as the graph building tool.
15-7-2024
