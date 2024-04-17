export function getReviews() {
  return fetch('https://portfolio-js.b.goit.study/api/reviews')
    .then(response => {
      if (!response.ok) {
        throw new Error('Not found');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })

    .catch(error => {
      console.error(error);
      throw error;
    });
}
