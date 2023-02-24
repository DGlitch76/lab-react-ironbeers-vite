import { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'

// To start using the pre-made Ant Design components we must first import them:



function NewBeer({ addBeer }) {

    //Set STATES - initial form states
    const [name, setName] = useState('How is your beer called?');
    const [tagline, setTagline] = useState('place your Tagline here');
    const [description, setDescription] = useState('place your Tagline here');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState('');

    const createPost = async (event) => {

        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)

        })

    }

    // //Submit Handler for Form (onSubmit={handleSubmit})
    const handleSubmit = event => {
        event.preventDefault()

        console.log({ name, tagline, first_brewed, brewers_tips, attenuation_level, contributed_by })
        const newBeer = { name, tagline, first_brewed, brewers_tips, attenuation_level, contributed_by }
        createPost(newBeer)

        setName('')
        setTagline('')
        setDescription('')
        setFirst_brewed('')
        setBrewers_tips('')
        setAttenuation_level(0)
        setContributed_by('')

    }

    return (

        <div id="AddFBeerForm" className="App">

            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <label>Name:<input value={name} onChange={e => setName(e.target.value)} type="text" /></label>
                <label>Tagline:<input value={tagline} onChange={e => setTagline(e.target.value)} type="text" /></label>
                <label>Description:<input value={description} onChange={e => setDescription(e.target.value)} type="text" /></label>
                <label>First Brewed:<input value={first_brewed} onChange={e => setFirst_brewed(e.target.value)} type="text" /></label>
                <label>Brewers Tips:<input value={brewers_tips} onChange={e => setBrewers_tips(e.target.value)} type="text" /></label>
                <label>Servings:<input value={attenuation_level} onChange={e => setAttenuation_level(e.target.value)} type="number" /></label>
                <label>Contributed by:<input value={contributed_by} onChange={e => setContributed_by(e.target.value)} type="text" /></label>
                <button type="submit">Add New Beer</button>
            </form>

        </div>

    )
}

export default NewBeer