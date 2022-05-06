import axios from 'axios';

export function readEquation(equation: string) {
  axios.get(`https://latex.codecogs.com/gif.latex?${equation}`).then(data => {
    console.log(data);
  });
}
