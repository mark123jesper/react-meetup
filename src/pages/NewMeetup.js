import React from 'react'
import { useHistory } from "react-router-dom";
import MeetupForm from '../components/Meetups/MeetupForm';

const NewMeetup = () => {

    const history = useHistory();

    const addMeetupHandler = (meetupData) => {
        fetch('https://react-getting-started-b6430-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',

            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                history.replace('/');
            });
    }


    return (
        <MeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetup