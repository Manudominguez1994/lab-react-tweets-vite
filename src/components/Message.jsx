export default function Message(props){
    // console.log(props);
    const {message} = props
   return(
    <p className="message"> {message} </p>
   )
}