import Score from './Score'

export default function Student({student}){
    //map due to array being inside the object
    const scores = student.scores.map((score, idx) => {
        return <Score score={score} key={idx}/>
      })

    return(
        <div>
            <h3>Name: {student.name} </h3>
            <p>Bio: {student.bio} </p>
            {scores}
        </div>
    )
}  