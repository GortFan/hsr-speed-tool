import CharCard from './CharCard'

export default function CharCardsMapper(props){
    return(
        <ul>
            {props.TurnOrder.map(e=><CharCard key={e.id} path={e.path} speed={e.speed} AV={e.AV}/>)}
        </ul>
    )
}