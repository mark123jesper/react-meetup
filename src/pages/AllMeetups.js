import React, {useState , useEffect} from 'react';
import MeetupList from '../components/Meetups/MeetupList';

const AllMeetups = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-b6430-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data => {

            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup)
            }


            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
        
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section className='container'>
            <ul>
                <h2>All Meetups</h2>
                <MeetupList meetups={loadedMeetups} />
            </ul>
        </section>
    )
}

export default AllMeetups
