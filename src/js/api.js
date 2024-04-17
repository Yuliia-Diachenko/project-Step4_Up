export async function postRequest(options) {
    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/requests',
        options
      );
      if (!response.ok) {
        throw new Error('Not found');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }