import React from 'react'

export default function Footer() {
   let footerStyle = {
       position: "fixed",
       width: "100vw",
       top: "90vh"
   }
    return (
    <div>
            <footer className = "bg-dark text-light py-2" style = {footerStyle}>
            <p className ="text-center">
                Copyright &copy; reserved at MyTodolist.com
            </p>
            </footer>    
     
        </div>
    )
}






