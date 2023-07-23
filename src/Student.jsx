import Score from './Score'

export default function Student({student}){

    return(
        <div>
            <h3>Name: {student.name} </h3>
            <p>Bio: {student.bio} </p>
            <p><Score /></p>
        </div>
    )
}  