import { Link } from "react-router-dom";
import classes from "./AdminCategoryList.module.css"
function AdminCategoryList(props){

    const onSubmitHandler = (event) =>{
        console.log(event)
        event.preventDefault();
      };
    

    return(
        
        <div className={"container-fluid pt-3  " + classes.categoryList}>
            <div className={"d-flex justify-content-evenly"}>
            {props?.categories?.map((item, index) => {
                return(
                    <Link style={{textDecoration: 'none',color: '#314402'}} to={`/admin/${item.id}`} key={index}>
                    <div className={classes.item} >
                    <div >
                        <div className={'img-fluid ' + classes.image}>
                            <img src={item.imageUrl} alt={item.title} />
                        </div> 
                        <div className={classes.name}>
                            {item.categoryName}
                        </div>
                    </div>
                </div>
                </Link>
                )
            })}
            
            </div>
        </div>
    )

}
export default AdminCategoryList;