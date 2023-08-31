import { FcLike,FcLikePlaceholder, IconName } from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props){
    let course = props.course;
    let likedCards = props.likedCards;
    let setLikedCards = props.setLikedCards;
    function likeHandler() {
        if(likedCards.includes(course.id)){

            setLikedCards((prev)=>prev.filter(cid=> (cid !== course.id)));
            toast.warning("Like Removed");
        }else{
            if(likedCards.length === 0){
                setLikedCards([course.id]);
            }else{

                setLikedCards((prev)=>[...prev,course.id]);
            }
            toast.success("Successfully Liked");
        }
    }
    console.log(course);
    return(<div className="w-[300px] rounded-lg bg-slate-800 text-white ">
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt} className="rounded-t-lg"></img>
                <div className="absolute bottom-2 right-5 w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
                     <button> 
                        {
                            likedCards.includes(course.id) ? ( <FcLike className="h-[25px] w-[25px]" onClick={()=>likeHandler()}></FcLike>) :(<FcLikePlaceholder className="h-[25px] w-[25px]" onClick={()=>likeHandler()}></FcLikePlaceholder>) 
                        }
                      
                    </button>
                </div>
            </div>

            <div className="p-2">
                <div className="font-semibold text-lg leading-6">{course.title}</div>
                <div className="mt-2">
                    {course.description.length>100 ? (course.description.substring(0,100))+"..." : (course.description)}
                </div>
            </div>
    </div>);
}

export default Card;