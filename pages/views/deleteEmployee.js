export const getStaticPaths=async()=>{
    
    
    const res=await fetch("http://localhost:3000/api/allusers");

    const data=await res.json();

    const paths=data.map(ninja=>{
        return{
            params:{id: ninja.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{

    const id=context.params.id;
    const res=await fetch("http://localhost:3000/api/allusers/" + id);

    const data=await res.json();

    return {
        props:{ninja:data}
    }

}

const SearchByEmployee = () => {
    return ( 
        <dev>
            <h1>{ninja.emp_name}</h1>
            <p>{ninja.emp_phone}</p>
            <p>{ninja.emp_address}</p>
        </dev>
     );
}
 
export default SearchByEmployee;
