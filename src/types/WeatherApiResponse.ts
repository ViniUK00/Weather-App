export interface Weather {
    lat : number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: {
      dt: number,
      temp: number,
      feels_like: number,
      humidity: any,
      uvi: number,
      weather: [
        {
          main: string,
          description: string
        }
      ]
    }
  }