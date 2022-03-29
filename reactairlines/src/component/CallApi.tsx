let current: any[] = []

    apiCall()
    
async function apiCall() {
    let response = await fetch(
      'https://api.tvmaze.com/schedule');
    let json = await response.json();
    json.map((content: any) => current.push(content));
  }

  export default current
  