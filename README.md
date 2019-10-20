# Enhanced Metro Tracker


### `Interface`

#### Parameters:
- stationId -- The station code to pull data from
- trainId -- The specific train data to return
- numberOfResults -- Number of train predictions, ordered by time of arrival

#### Output:
Array of JSON objects containing all data relating to that train at that station

### `MetroHeroAPI`

Project utilizes MetroHeroApi to get train predictions on top of the WMATA api. 

- [MetroHero API docs](https://dcmetrohero.com/apis)
- [List of station codes](https://docs.google.com/spreadsheets/d/13Kz-v3Yjn6ork9vXyl8KLSgzf7KYuGNP9d7HPMd-Kzc/pub?hl=en&single=true&gid=0&output=html)


