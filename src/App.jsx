import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

export default function Home() {
    let [customers, setCustomers] = useState([])
  async function getData(){
    let {data} = await axios.get('http://localhost:3000/customers')
    setCustomers(data);
  }

  let [trans, setTrans] = useState([])
  async function getTrans(){
    let {data} = await axios.get('http://localhost:3000/transactions')
     setTrans(data) 
  }

  useEffect(()=>{
    getData()
    getTrans()
   
  }, [])
  
  let [customerName, setCustomerName] = useState("")
  let [transAmount, settransAmount] = useState(0)

  return (
    <>
<div className="container mt-4">
    <div className="row">
    <h1 className='text-center text-info'>Customers and Transactions Data</h1>
  <form className='my-2 '>

   <div className="row d-flex flex-nowrap justify-content-center align-content-center">
   <div className='my-2 w-25'>
    <label htmlFor="customerName" className="form-label">Filter by customer name:</label>
    <input name='customerName' type="text" className='form-control border border-2' onChange={(e)=>setCustomerName(e.target.value)}/>
    </div>
     
     <div className='my-2 w-25'>
     <label htmlFor="transactionAmount" className="form-label">Filter by transaction amount:</label>
     <input name='transactionAmount' type="number" className='form-control border border-2' onChange={(e)=>settransAmount(e.target.value)}/>
     </div>   
   </div>

    </form>
    </div>
    </div>

    <div className="container my-3">
      <div className="row ">
      <table className='table table-striped border border-1 table-bordered text-center '>
        <thead>
          <tr>
            <th>Index</th>
            <th>Customer Name</th>
            <th>Transaction Amount1</th>
            <th>Transaction Date1</th>
            <th>Transaction Amount2</th>
            <th>Transaction Date2</th>
            </tr>
          
        </thead>
        <tbody>
          
{customers?.filter((customer)=>customer.name.toLowerCase().includes(customerName)).map((e)=>{
   return <tr key={e.id}>
  <td>{e.id}</td>
  <td>{e.name}</td>
  {trans?.filter((x)=>x.amount.toString().includes(transAmount)).map((x)=>{
if(e.id == x.customer_id){
  return <>
<td>{ x.amount }</td>
<td>{ x.date }</td>
</>
}
  })} 
</tr>
})}
   </tbody>
      </table>

      <div className='my-2'>
<Bar 
    data={{
      labels: customers?.map((e)=>e.name),
      datasets:[
        {
          label: "2022-01-01",
          data: trans.map((e)=>e.amount)
          
        }
      ]
    }}
    />
  </div>
      </div>
    </div>
  
    </>
  )
}
