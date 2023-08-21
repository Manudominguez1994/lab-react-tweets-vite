export default function ProfileImg(props){
    // console.log(props);
     const {image} = props
    return(
        <div>
            <img src={image} className="profile" alt="profile" />
        </div>
    )
}