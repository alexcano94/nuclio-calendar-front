import React, { useState } from 'react';
import useReactActions from "../../services/useRestActions";
import { useHistory } from "react-router-dom";
import './calendar.css';
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';

import "react-datepicker/dist/react-datepicker.css";
registerLocale('es', es)

const Calendar = ({ logout, userId }) => {
  const history = useHistory();
  const { getRest, postRest } = useReactActions();
  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  React.useEffect( () => {
       getRest(`http://localhost:8000/events/user/${userId}`).then((events) => setEvents(events.events));
  }, []);

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  const handleCreateEvent = async () => {
    await postRest('http://localhost:8000/events', {
      userId,
      title,
      description,
      startDate,
      endDate
    });
  };

  return(
      <div className="calendar">
        <div className="content">
          <ul>
            {events.map(function(event, index){
              return <li key={ index }>{event.title}</li>;
            })}
          </ul>

          <div className="createEventForm">
            <h4>New Event</h4>
            <input type="hidden" value={userId}/>
            <input placeholder="Title" onChange={e => setTitle(e.target.value)}/>
            <input placeholder="Description" onChange={e => setDescription(e.target.value)}/>
            <DatePicker locale="es" selected={startDate} onChange={date => setStartDate(date)} />
            <DatePicker locale="es" selected={endDate} onChange={date => setEndDate(date)} />
            <button onClick={handleCreateEvent}>Create</button>

          </div>

        </div>
        <div className="actions">
          <button onClick={handleLogout}>Log-out</button>
        </div>
      </div>
  )
}

export default Calendar;
