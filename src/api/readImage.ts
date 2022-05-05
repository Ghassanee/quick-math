import axios from 'axios';

export function getEquation(image: any): any {
  const headers = {
    'content-type': 'application/json',
    app_key: '',
  };
  const body = JSON.stringify({
    src: image,
    formats: ['text', 'data', 'html'],
    data_option: {
      include_aciimath: true,
      include_latex: true,
    },
  });
  return axios
    .post('https://api.mathpix.com/v3/text', body, { headers })
    .then(res => {
      console.log(res.data);
      //   res.data[0].value;
    });
}
