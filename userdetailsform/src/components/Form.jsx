import {useState} from 'react';
export const Form=()=>{
    const [form1,setForm]=useState("")
    const [checked, setChecked] = useState(false);
    const handleChange=(e)=>{
        const {value,name}=e.target;
        setForm({...form1,[name]:value})
        console.log(form1)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form1)
    }
    function toggle(value){
        return !value;
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder="Username" name='username' onChange={handleChange} />
                </div>
                <div>
                    <label>Age</label>
                    <input type='number' placeholder="Enter Age" name='age' onChange={handleChange}/>
                </div>
                <div>
                    <label>Address</label>
                    <input type='text' placeholder="Enter Address" name='address' onChange={handleChange} />
                </div>
                <div>
                    <label>Department</label>
                    <select onChange={handleChange}>
                        <option onChange={handleChange} name='computer'>Computer</option>
                        <option onChange={handleChange} name='masai'>Masai</option>
                        <option onChange={handleChange} name='it'>Information Technology</option>
                    </select>
                </div>
                <div>
                    <label>marital state</label>
                    <input type='Checkbox' name="male" checked={checked} onChange={() => setChecked(toggle)}/>Male
                    <input type='Checkbox' name="female"  onChange={() => setChecked(toggle)}/>Female
                </div>
                <div>
                    <label>profile Photo</label>
                    <input type='file'/>
                </div>
                <div>
                    <input  type='submit' value="submit" />
                </div>
            </form>
        </div>
    )
}