// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ], //   This code defines a function named createHtml that generates HTML content for displaying the athlete's data. 
        }, 
      }, //It then uses this function to populate the HTML on the page for two athletes, identified by their IDs, NM372 and SV782.
    },
  };//Each athlete has a firstName, surname, id, and an array of races. Each race object contains a date and time array.
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {  // The createHtml function takes an athlete's ID as an argument and retrieves the corresponding athlete's data from the data object.
    //  reassign the variables      It then calculates and formats the total time for the athlete's latest race, and generates HTML content that
    const firstName = data.response.data[athlete].firstName;//displays the athlete's name, ID, total number of races, latest race event date, and latest race total time.
    const surname = data.response.data[athlete].surname;
    const id = data.response.data[athlete].id;
    const races = (data.response.data[athlete].races).length
    const date = new Date(data.response.data[athlete].races[races-1].date)
    const time = data.response.data[athlete].races[races-1].time;

    const fragment = document.createDocumentFragment();

    let title = document.createElement('h2');
    title.textContent = id
    fragment.appendChild(title);

    const list = document.createElement('dl');
    const day =  date.getDate()
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();
    console.log(month)

    let sum = 0
    let i = 0;
    while ( i < time.length ) {
      sum += time[i]
      i++
    }
    const minutes = sum % 60;
    const hours = (sum - minutes) / 60;
    
    list.innerHTML = /* html */ `
        <dt>Athlete: ${firstName +' '+ surname}</dt>
        <dt>Total Races: ${races}</dt>
        <dt>Event Date (Latest): ${day.toString().padStart(2, '0')+' '+ month +' '+ year}</dt>
        <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dt>
      `;
    fragment.appendChild(list);
    return fragment;  // Finally, the createHtml function returns a document fragment containing the HTML content.
  }
  // [NM372], [SV782] = data
  document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml('NM372'));//This fragment is then appended to the HTML page for each athlete using document.querySelector()
  document.querySelector('[data-athlete ="SV782"]').appendChild(createHtml('SV782')); // to select the appropriate element and .appendChild() to 





   

  

 



