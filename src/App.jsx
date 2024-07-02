import { useState } from 'react'
import './App.css'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExp from './Components/IncomeExp'
import TransactionList from './Components/TransactionList'
function App() {
  const initialState = {
    transactions: [
      { id: 1, text: 'Flower', amount: -20 },
       { id: 2, text: 'Salary', amount: 300 },
       { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
     ],
    }
    const[transactions,setTransactions]=useState(initialState.transactions);
    const deleteTransaction=(id)=>{
      const updatedTransaction=transactions.filter(transaction=>transaction.id!==id);
      setTransactions(updatedTransaction);
    }
  return (
    <>
      <Header />
      <Balance transactions={transactions}/>
      <IncomeExp transactions={transactions}/>
      <TransactionList transactions ={transactions} deleteTransaction={deleteTransaction}/>
      <AddTransaction />
    </>
  )
}
export default App
