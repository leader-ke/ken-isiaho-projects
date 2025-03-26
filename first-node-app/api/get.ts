(async () => {
    try {
      const url =  'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('HTTP Error: ' + response.status);
      }
    } catch (error) {
      console.error('An error occured:', error);
    }
  })();