let current: any[] = []

CallApi();

async function CallApi() {
    let response = await fetch(
      'https://api.tvmaze.com/schedule');
    let json = await response.json();

    json.map((content: any) => current.push(content));
  }

  export default current
  