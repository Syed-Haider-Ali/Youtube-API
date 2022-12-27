import React,{useState} from 'react'


const SearchBar = ({onFormSubmit})=>{
    const [term, setTerm] = useState('')

     const onSubmit = (e)=>{
        e.preventDefault()
        console.log(`form submitted`)
        // To Do: make sure we call callback from parent component
        onFormSubmit(term)
    }

     return(
            <>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                    <input type="text" className="form-control" 
                        aria-label="Username" aria-describedby="basic-addon1"
                        value={term}
                        onChange={(e)=> setTerm(e.target.value)}
                    />
                </div>
            </form>
            </>
        )

}




export default SearchBar;