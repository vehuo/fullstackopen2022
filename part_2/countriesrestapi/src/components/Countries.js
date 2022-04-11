const Countries = (props) => {
    console.log('countries component', props)
    return (
        <div>
            {props.countries[7].area}
        </div>
    )
}

export default Countries