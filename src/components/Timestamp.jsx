export default function Timestamp(props){
     console.log(props);
     const {time} = props
    return(
            <span className="timestamp">{time}</span>
    )
}