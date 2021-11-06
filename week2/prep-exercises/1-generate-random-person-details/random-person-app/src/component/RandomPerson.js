import React, { useEffect, useState } from "react";
const url = "https://www.randomuser.me/api?results=1";

const RandomPerson = () => {
  const [person, setPerson] = useState(null);
  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json(response);
    return setPerson(data.results);
  };
  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div person={person}>
      {person &&
        person.map((i) => {
          return (
            <ul>
              <li>{i.name.first}</li>
              <li>{i.name.last}</li>
              <li>{i.email}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default RandomPerson;
