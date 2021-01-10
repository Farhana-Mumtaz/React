import React from 'react';

function Book(props)
{
return(
    <div>
<h1 style={{color:"red"}}>My Book </h1>
<p>My name is Farhana.
    <br />
    I'm From Khairpur Pakistan.
    <br />
    Doing Software Engineering From Mehran University Jamshoru Hyderabad.
</p>
<h2 style={{color:"green"}} >Author{props.author}</h2>
</div>
)
}
export default Book;