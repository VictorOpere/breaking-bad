import React,{useState} from 'react'

function Search({getQuery}) {

    const [text, setText] = useState('')

    const onChanged = (q) =>{

        setText(q)
        getQuery(q)
    
    }


    return (
        <section className="search">

            <form>

                <input type="text" className="form-control" placeholder="Search Characters" autoFocus value={text} onChange={ (e) => { onChanged(e.target.value) } }/>
            </form>
            

        </section>
    )
}

export default Search
